---
title: vue­学习笔记
copyright: true
date: 2018-10-28 19:44:01
category: Vue
tags:
 - Vue
 - js
 - 前端
keywords: Vue js 前端 学习 学习笔记
description:
---


{% note %}
Vue——渐进式 JavaScript 框架
{% endnote %}

<!-- more -->

## Hello World

``` html html
<div id="app">
  {{ message }}
<&#47;div>
```

```js js
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  }
})；
```

## 监听自定义事件`$emit`

``` html html
<div id="root">
  <cupon @applied="onCuponValue" v-model="message"><&#47;cupon>
  <p v-if="isShow">{{ message }}<&#47;p>
<&#47;div>
```

```js js
Vue.component('cupon', {
  template: '&lt;input type="text" @blur="onCuponValue"&gt;',
  methods: {
    onCuponValue() {
      this.$emit('applied', this.$el.value);
    }
  }
})

let app = new Vue({
  el: '#root',

  data: {
    isShow: false,
    message: ''
  },

  methods: {
    onCuponValue(val) {
      if (!val.length) {
        this.isShow = true;
        this.message = '值不能为空！';
      } else {
        this.isShow = false;
      }
    }
  }
})

```

{% jsfiddle eywraw8t/436697 result,js,html light %}

## slot——能够指定默认代码

``` html html
<div id="root">
  <con slot="header">
    <h2 slot="title">Hello World!<&#47;h2>
  <&#47;con>
<&#47;div>
```

```js js
Vue.component('con', {
  template: `
    &lt;div&gt;
      &lt;slot name="title"&gt;<&#47;slot&gt;
      &lt;slot&gt;
        Hello Vue!
      <&#47;slot>
    <&#47;div>
  `
});

new Vue({
  el: '#root'
});
```

{% jsfiddle eywraw8t/436698 result,js,html light %}

## template——虚拟标签 && inline-template

``` html html
<div id="root">
  <con slot="header">
    <template slot="title">Hello World!<&#47;template>
  <&#47;con>
<&#47;div>
```

``` js js
Vue.component('con', {
  template: `
    &lt;div&gt;
      &lt;slot name="title"&gt;&lt;&#47;slot&gt;
      &lt;slot&gt;
        Hello Vue!
      &lt;&#47;slot&gt;
    &lt;&#47;div&gt;
  `
});

new Vue({
  el: '#root'
});
```

{% jsfiddle eywraw8t/436705 result,js,html light %}

## 参考教程

- [Vue 官网](https://cn.vuejs.org/)
- [Youtube](https://www.youtube.com/playlist?list=PL3VM-unCzF8iRyPotjFsgy7EfuCITvr_3)