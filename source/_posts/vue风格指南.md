---
title: vue风格指南
date: 2018-11-08 20:18:56
category: Vue
tags:
 - Vue
 - js
 - 前端
keywords: Vue js 前端 学习 学习笔记
description:
---


{% note primary %}
好的代码风格能够使开发以及维护更加的轻松
{% endnote %}
<!-- more -->

## 说明

本文是依据[官网](https://cn.vuejs.org/v2/style-guide/index.html)里的教程来写的，目的是为了加深记忆，并且以后开发的时候对于不理解的进行阐述。以下注释掉的为不可取风格。

## 等级A——必要的

### 组件名需要多个单词，例如

``` js js
export default {
    // name: 'todo'
    name: 'todo-item'
}
```

### data需要返回对象(除了`new vue({})`中)

``` js js
/*
 data: {
     foo: 'bar'
 }
 */

data() {
    return {
        foo: 'bar'
    }
}
```

### props尽可能详细

``` js js
/*
    props: ['status']
 */

props: {
    status: {
        type: String,
        required: true,
        validator(value) {
            return [
                'syncing',
                'synced',
                'version-conflict',
                'error',
            ].indexOf(value) !== -1
        }
    }
}
```

### v-for需要配合key

``` html html
<li
  v-for="todo in todos"
  :key="todo.id"
>
    {{ todo.text }}
</li>
```

### 避免v-if和v-for用在一起

### 为组件样式设置作用域

``` css css
<style scoped>

</style>

<style module>

</style>
```

### 私有属性名

## 等级B——强烈推荐

### 把每个文件拆分成组件

### 文件的命名，要么是大写开头，要么是横线连接

```
MyComponent.vue
my-component.vue
```

### 组件基础名（展示类、无逻辑或无状态的组件），以特定前缀开头

```
BaseButton.vue
BaseTable.vue
BaseIcon.vue
```

### 单例组件名——没有props，只用于一个页面

### 和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```
TodoList.vue
TodoListItem.vue
```

### 自闭合组件

``` html html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<!-- <MyComponent></MyComponent> -->
<MyComponent />

<!-- 在 DOM 模板中 -->
<!-- <my-component/> -->
<my-component></my-component>
```

### JS/JSX中的组件名大小写(暂时不用)

### 完整单词的组件名

### prop名大小写，html用-连接符，js里用驼峰式

```js js
/*
 props: {
     'greeting-text': String
 }
 */

props: {
    greetingText: String
}
```

``` html html
<!-- <WelcomeMessage greetingText="hi" /> -->
<WelcomeMessage greeting-text="hi" />
```

### 多个特性的元素——多行书写

``` html
<img
    src="#"
    alt="image"
>
```

### 模板中表达式

尽可能简单，若复杂则在js里面书写

### 简单的计算属性

把复杂属性分割成尽可能多的更简单的属性

### 指令缩写

`:`替代`v-bind`和`@`替代`v-on`

## 等级C——推荐

### 单文件的顶级元素的shunxu

``` html html
<template> </template>
<script> </script>
<style> </style>
```

## 等级D——谨慎使用

### 元素选择器尽量避免使用

```html html
<template>
    <!-- <button>确定</button> -->
    <button class="btn">确定</button>
</template>
<style scoped>
/*
 button {
     fontSize: 20px;
 }
 */
.btn {
    fontSize: 20px;
}
</style>
```

## 参考来源

[Vue风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

## 结语

:smile: