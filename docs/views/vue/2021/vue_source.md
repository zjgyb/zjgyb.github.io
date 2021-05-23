---
title: Vue源码分析阅读笔记
date: 2021-02-15'
categories: Vue
---

## 来源

- [Vue.js技术揭秘](https://ustbhuangyi.github.io/vue-analysis)

## 前置知识

1. `Flow`-Vue2.x类型检查工具
2. 类型检查的两种方式：类型推断和类型注释

Runtime Only 和Runtime + Compiler

1. Runtime Only需要借助webpack把.vue文件编译成JavaScript
2. Runtime + Compiler，没有做预编译时需要渲染时编译

## Virtual DOM

问题：频繁操作DOM会有一定的性能问题

用一个原生的JS对象去描述一个DOM节点比创建一个DOM代价小，Vue中用VNode描述Virtual DOM

映射到真实DOM还要经历`VNode`的create、diff、patch等过程


## 数据驱动

目的：弄清楚模板和数据如何渲染成最终的 DOM。

:::tip
所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作DOM，而是通过修改数据。
:::

new Vue发生的事情

1. 调用`this._init`方法，其中干了几件事：合并配置`mergeOptions`、初始化生命周期`initLifecycle`、初始化事件`initEvents`、初始化渲染`initRender`、初始化data、props、computed、watcher。

调用$mount方法

```js
vm.$mount(vm.$options.el)
```

2. $mount方法实现功能

- 对`el`做了限制，不能挂载在body、html根节点（由于会对原有元素进行替换，缺少了body或者html标签造成结构体不完整，不符合规范）
- 如果没有定义`render`方法，则会把`el`或者`template`字符串转成`render`
- 调用原先原型上的`$mount`方法挂载，调用`mountComponent`

mountComponent

- 先实例化一个渲染`Watcher`：初始化时执行回调函数、当vm实例中数据变化时执行回调函数。回调函数为：

```js
updateComponent = () => {
  vm._update(vm._render(), hydrating)
}
```

3. _render()

执行createElement方法并返回vnode

4. createElement

对_createElement的封装

5. _createElement

函数参数:

- context: VNode的上下文
- tag: 标签
- data: VNode数据
- children: 当前VNode的子节点
- normalizationType: 子节点规范的类型（编译生成还是用户手写）

children的规范化：`normalizeChildren(children)`(render函数编译生成)和`simpleNormalizeChildren(children)`

simpleNormalizeChildren: 由于`functional component`返回的是一个数组

normalizeChildren: render函数用户手写同时children只有一个节点，则创建createTextVNode；当编译`slot`、`v-for`时调用`normalizeArrayChildren`

VNode创建

- 判断tag是否为内置节点，如果是，则创建一个普通的VNode
- 如果是已注册的组件名，则通过`createComponent`创建一个组件类型的VNode

6. update

- 首次渲染调用或数据更新调用

1. 核心是调用`vm.__patch__`方法，浏览器端把VNode转成DOM使用了`patch`方法
```js
// params: 旧的VNode节点（可以不存在或者一个DOM对象）、_render后返回的VNode节点、hydrating-是否是服务端渲染、给transition-group使用
function patch (oldVnode, vnode, hydrating, removeOnly) {
}
```
2. `patch`方法调用了`createPathFunction`，`createPathFunction`最终返回一个patch方法

```js
// backend中的两个属性值nodeOps和modules
// nodeOps表示对平台DOM的一些操作方法
// modules表示平台的一些模块
export function createPatchFunction (backend) {
}
```

3. `createElm`的作用是通过虚拟节点创建真实的DOM并插入到它的父节点中，该函数中最重要的三步是`createChildren`、`invokeCreateHooks`、`insert`

```js
function createElm (
  vnode,
  insertedVnodeQueue,
  parentElm,
  refElm,
  nested,
  ownerArray,
  index
) {
  // ...
   vnode.elm = vnode.ns
      ? nodeOps.createElementNS(vnode.ns, tag)
      : nodeOps.createElement(tag, vnode)

  // ...
  // 创建子元素
  createChildren(vnode, children, insertedVnodeQueue)

  // ...
  // 执行所有的create的钩子并把`vnode`push到insertedVnodeQueue
  invokeCreateHooks(vnode, insertedVnodeQueue)

  // ...
  //
  insert(parentElm, vnode.elm, refElm)
}
```

### 总结

![new Vue过程](./vue_source/new.svg)

## 组件化

```js
import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
  el: '#app',
  // 这里的 h 是 createElement 方法
  render: h => h(App)
})
```

在之前的`createElement`调用`_createElement`方法，如果是一个组件，则会通过`createComponent`方法创建一个VNode

```js
vnode = createComponent(tag, data, context, children)
```

`createComponent`中包含三个关键步骤：

1. 构造子类构造函数
2. 安装组件钩子函数

```js
installComponentHooks(data)
```
3. 实例化VNode

```
_createElement() -> vnode = createComponent(tag, data, context, children) -> 1. Ctor = baseCtor.extend(Ctor) -> Vue.extend -> Sub（Vue子类） 2. installComponentHooks(data) -> mergeHook 3. new VNode
```

### patch

