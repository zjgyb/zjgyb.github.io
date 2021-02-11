---
title: 单例模式
tags:
  - JavaScript
  - 单例模式
  - 设计模式
  - Vue
copyright: true
date: 2019-05-25 09:40:53
categories: 设计模式
keywords:
description: 解释单例模式是什么以及单例模式使用的具体场景
images: /单例模式/js-singletons.png
---

## 解释

### 什么是单例模式？

单例就是保证一个类只有**一个**实例，实现的方法是判断实例是否存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

在《JavaScript 设计模式与开发实践》中单例模式的定义是：

> 保证一个类仅有一个实例，并提供一个访问它的全局访问点

### 模块作用

1. 模块间通信
2. 系统中某个类的对象只能存在一个
3. 保护自己的属性和方法

## 实现一个单例模式

下面例子中`instance`就是实例变量，`getInstance`方法是判断是否创建实例变量

```js js
class Singleton {
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }

  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

Singleton.instance = null;
const a = Singleton.getInstance("sven1");
const b = Singleton.getInstance("sven2");
console.log(a === b); // true
```

### 使用闭包的方式实现

```js js
class Singleton {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

Singleton.getInstance = (() => {
  let instance = null;
  return name => {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();
```

## 透明的单例模式

在上面的例子中，我们通过`Singleton.getInstance()`方法来获取单例类，这个类并不直观(不透明性)，因此我们使用透明，以下是创建一个 div 节点

```js js
const CreateDiv = (() => {
  let instance = null;
  const CreateDiv = function(html) {
    if (instance) return instance;
    this.html = html;
    this.init();
    return (instance = this);
  };

  CreateDiv.prototype.init = function() {
    let div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };

  return CreateDiv;
})();

const a = new CreateDiv("sven1");
const b = new CreateDiv("sven2");
console.log(a === b);
```

### 用代理实现单例模式

在上面的例子中会感觉代码有些奇怪，同时代码生涩难懂，下面使用代理类来改善代码

```js js
class CreateDiv {
  constructor(html) {
    this.html = html;
    this.init();
  }

  init() {
    let div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
}

const ProxySingletonCreateDiv = (() => {
  let instance = null;
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

const a = new ProxySingletonCreateDiv("sven1");
const b = new ProxySingletonCreateDiv("sven2");

console.log(a === b); // true
```

## JavaScript 中的“单例模式”

> 单例模式的核心是确保只有一个实例，并提供全局访问。全局变量不是单例模式，但在 JavaScript 开发中，我们经常会把全局变量当成单例来使用

以下其实是全局变量，但它满足了创建单例模式的条件

```js js
let home = {
  style: "Chinese styles",
  door() {
    // ...
  },
  window() {
    //...
  }
};
```

## 惰性单例

{% note primary %}
使用了惰性单例模式：在需要的时候创建单例，再次调用就使用第一次实例化后的实例对象
{% endnote %}

例如：点击登录按钮跳出弹窗就可以使用惰性单例模式

```html html
<button id="loginBtn">登录</button>
```

```js js
const createLoginLayer = () => {
  let div = document.createElement("div");
  div.innerHTML = "Modal";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
};

const getSingle = fn => {
  let result;
  return function(...arg) {
    return result || (result = fn(arg));
  };
};

const createSingleLoginLayer = getSingle(createLoginLayer);
document.getElementById("loginBtn").addEventListener("click", () => {
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = "block";
});
```

## 在 Vue 中的使用

### 效果

<img src="/单例模式/show.png" width="100%" alt="单例模式图片" />

点击按钮能够新增条目，点击条目能够删除这一行

### 目录结构

```
|- src
|   |- components
|       |- dialog-container
|           |- dialog-container.vue
|           |- index.js
|   |- App.vue
|   |- main.js
```

### 具体实现

```html vue
<!-- dialog-container.vue -->
<template>
  <div>
    <ul>
      <li v-for="list in lists" :key="list.id" @click="del(list.id)">
        {{ list.content }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      del(id) {
        const index = this.lists.findIndex(ele => ele.id === id);
        if (-1 !== index) {
          this.lists.splice(index, 1);
        }
      }
    }
  };
</script>
```

具体单例使用

```js js
import Vue from "vue";

import Container from "./dialog-container.vue";

Container.installSlot = (() => {
  let [component, lists] = [null, null];

  return (id, list) => {
    if (typeof list === "object" && typeof id === "string") {
      if (!component) {
        const container = Vue.extend(Container);
        lists = [list];
        component = new container({
          data() {
            return {
              lists
            };
          }
        });

        document.getElementById(id).appendChild(component.$mount().$el);
      } else {
        lists.push(list);
      }
    }
  };
})();

export default {
  install: Vue => {
    Vue.prototype.$dialog = Container.installSlot;
  }
};
```

配置及使用

```js js
import Dialog from "./components/dialog-container";
Vue.use(Dialog);
```

```html html
<template>
  <div id="app">
    <div id="content">
      <button @click="hi('content')">Hellos</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "App",
    methods: {
      hi(domId) {
        const id = Math.random()
          .toString()
          .substr(2, 6);

        // 使用
        this.$dialog(domId, {
          id,
          content: `The id is ${id}`
        });
      }
    }
  };
</script>
```

## 总结

单例模式其他具体场景不是很清楚，希望以后能够看到其他用法，对于设计模式我也才刚开始看，继续努力。

## 参考文章

- 《JavaScript设计模式与开发实践》
- [http://www.codeceo.com/article/javascript-single-instance.html](http://www.codeceo.com/article/javascript-single-instance.html)
- [Solo Jiang's blog](https://solojiang.github.io/2018/04/30/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E5%9C%A8Dialog%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8/)
- [知乎-从 ES6 重新认识 JavaScript 设计模式(一): 单例模式](https://zhuanlan.zhihu.com/p/34754447)
- [YouTube](https://www.youtube.com/watch?v=X7GJ485r20A&list=PL9nxfq1tlKKnsi68A6Gbsv-ip8kRNFK7-&index=2)
