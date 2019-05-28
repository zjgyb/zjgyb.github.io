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

## 等级 A——必要的

### 组件名需要多个单词，例如

```js js
export default {
  // name: 'todo'
  name: "todo-item"
};
```

### data 需要返回对象(除了`new vue({})`中)

```js js
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

### props 尽可能详细

```js js
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

### v-for 需要配合 key

```html html
<li v-for="todo in todos" :key="todo.id">
  {{ todo.text }}
<&#47;li>
```

### 避免 v-if 和 v-for 用在一起

### 为组件样式设置作用域

```css css
<style scoped>

&lt;/style>

<style module>

&lt;/style>
```

### 私有属性名

## 等级 B——强烈推荐

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

### 单例组件名——没有 props，只用于一个页面

### 和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```
TodoList.vue
TodoListItem.vue
```

### 自闭合组件

```html html
&lt;!-- 在单文件组件、字符串模板和 JSX 中 --&gt;
&lt;!-- <MyComponent> <&#47;MyComponent> --&gt;
&lt;MyComponent&gt;
  &lt;!-- 在 DOM 模板中 --&gt;
  &lt;!-- <my-component /> --&gt;
  &lt;my-component&gt;&lt;&#47;my-component&gt;
<&#47;MyComponent>
```

### JS/JSX 中的组件名大小写(暂时不用)

### 完整单词的组件名

### prop 名大小写，html 用-连接符，js 里用驼峰式

```js js
/*
 props: {
  'greeting-text': String
 }
 */

props: {
  greetingText: String;
}
```

```html html
&lt;!-- &lt;WelcomeMessage greetingText="hi" /&gt; --&gt;
&lt;WelcomeMessage greeting-text="hi" /&gt;
```

### 多个特性的元素——多行书写

```html
<img src="#" alt="image" />
```

### 模板中表达式

尽可能简单，若复杂则在 js 里面书写

### 简单的计算属性

把复杂属性分割成尽可能多的更简单的属性

### 指令缩写

`:`替代`v-bind`和`@`替代`v-on`

## 等级 C——推荐

### 单文件的顶级元素的 shunxu

```html html
<template> <&#47;template>
<script><&#47;script>
<style>&lt;/style>
```

## 等级 D——谨慎使用

### 元素选择器尽量避免使用

```html html
<template>
  &lt;-- <button>确定<&#47;button> --&gt;
  <button class="btn">
    确定
	<&#47;button>
<&#47;template>

<style scoped>
  /*
    button {
      font-size: 20px;
    }
  */
  .btn {
    font-size: 20px;
  }
&lt;/style&gt;
```

## 参考来源

[Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

## 结语

:smile:
