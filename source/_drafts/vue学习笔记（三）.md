---
title: vue学习笔记（三）
tags:
---

## 计算属性 VS 方法

计算属性的值是缓存的，因此计算属性在直接需要渲染时比方法更加合适，计算属性不会影响其他渲染函数。例如下面一例中，把注释部分替换掉就会发现每次点击按钮会同时打印出`a`和`b`

```html html
<div id="root">
  <!--
    <p>age ——{{ addToA() }}</p>
    <p>age —— {{ addToB() }}</p>
  -->
  <p>age ——{{ addToA }}</p>
  <p>age —— {{ addToB }}</p>
  <button @click="addA">add age A</button>
  <button @click="addB">add age B</button>
</div>
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

{% jsfiddle nicegong/3z07s4xa result,html,js light 290 %}