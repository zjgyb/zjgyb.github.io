---
title: vue学习笔记（三）
copyright: true
images: /images/vue.jpeg
date: 2018-11-13 20:26:42
category: Vue
tags:
 - Vue
 - 计算属性
 - filter
 - mixin
 - js
 - 前端
keywords: Vue 计算属性 filter mixin js 前端 学习 学习笔记（三）
description:
---


{% note info %}
对于Vue的第三篇总结，主要介绍计算属性、filter、mixin
{% endnote %}
<!-- more -->

## 计算属性 VS 方法

计算属性的值是缓存的，因此计算属性在直接需要渲染时比方法更加合适，计算属性不会影响其他渲染函数。例如下面一例中，把注释部分替换掉就会发现每次点击按钮会同时打印出`a`和`b`

```html html
<div id="root">
  &lt;!--
    &lt;p&gt;age ——{{ addToA() }}&lt;/p&gt;
    &lt;p&gt;age —— {{ addToB() }}&lt;/p&gt;
  --&gt;
  <p>age ——{{ addToA }}<&#47;p>
  <p>age —— {{ addToB }}<&#47;p>
  <button @click="addA">add age A<&#47;button>
  <button @click="addB">add age B<&#47;button>
<&#47;div>
```

```js js
new Vue({
  el: "#root",

  data: {
    age: 10,
    a: 1,
    b: 2
  },

  methods: {
    /*
    addToA() {
      console.log("a");
      return this.age + this.a;
    },

    addToB() {
      console.log("b");
      return this.age + this.b;
    },
    */
    addA() {
      this.a += 1;
    },

    addB() {
      this.b += 1;
    }
  },

  computed: {
    addToA() {
      console.log("a");
      return this.age + this.a;
    },

    addToB() {
      console.log("b");
      return this.age + this.b;
    }
  }
});
```

{% codepen LXZYNN %}

## filter——过滤器

能够方便的对一些值进行修改过滤，下面一例就是使标题大写，内容截取 100 字符

```html html
<div v-for="text in texts" :key="text.id" class="text">
  <h3>{{ text.title | upperCase }}<&#47;h3>
  <article>{{ text.body | catwords }}<&#47;article>
<&#47;div>
```

```js js
new Vue({
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },

    catwords(value) {
      return value.slice(0, 100) + "...";
    }
  }
});
```

{% note info %}
其实还可以使用`Vue.filter({ /* some code */ })`来表示，这里就介绍一种
{% endnote %}

{% codepen QJdEjp %}

## mixin

混合模式——公用方法及变量，例如：

```js js
// src/minix/blogMixins.js
export default {
    computed: {
        searchBlogs() {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}
```

``` js js
// src/component/MixinBlog.js
import blogMixins from '../mixins/blogMixins';
new Vue({
  mixins: [ blogMixins ]
})
```
