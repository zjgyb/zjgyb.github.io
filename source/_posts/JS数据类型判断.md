---
title: JS数据类型判断
category: JavaScript
tags:
  - typeof
  - instanceof
  - JavaScript
copyright: true
keywords: typeof instanceof 数据类型
description: 本文介绍一下 typeof & instanceof 两个操作符对数据类型的判断。
images: /JS数据类型判断/typeof.jpeg
date: 2019-09-08 16:18:49
---


## 前言

本文是对`typeof`和`instanceof`两个操作符的总结。

## 数据类型

在讲这两个操作符之前，需要把相关的概念先行说明。

{% note info %}
ES6前有5种简单数据类型，分别是`Undefined`, `Null`, `Boolean`, `Number`, `String`; 还有一种复杂数据类型`Object`
而ES6又增加了一种`Symbol`
{% endnote %}

## typeof检测

### 举例说明

```js js
const [a1, b1, c1, d1, e1, f1, g1] = [undefined, null, false, NaN, "abc", {}, Symbol()];
console.log(typeof a1); // undefined
console.log(typeof b1); // object
console.log(typeof c1); // boolean
console.log(typeof d1); // number
console.log(typeof e1); // string
console.log(typeof f1); // object
console.log(typeof g1); // symbol
const h1 = function () {};
console.log(typeof h1); // function
const [i1, j1, l1, m1, n1] = [new Date(), /\s/, Math.sign, Math.PI, []];

console.log(typeof i1); // object
console.log(typeof j1); // object
console.log(typeof l1); // function
console.log(typeof m1); // number
console.log(typeof n1); // object
```

由此可以看出可以使用typeof检测判断出来的是`undefined`, `boolean`, `number`, `symbol`, `function`, `string`, 但需要注意的是`boolean`, `number`, `string`的值都不能通过`new`出来的，否则检测出的都是`object`，而`function`不受影响，例如：

```js js
const a2 = new Boolean(false);
const b2 = new Number(25);
const c2 = new String('abc');
console.log(typeof a2); // object
console.log(typeof b2); // object
console.log(typeof c2); // object

const d2 = new Function('a', 'b', 'return a + b');
console.log(typeof d2); // function
```

## instanceof

因为`typeof`不能检测出引用的数据类型，例如数组、正则等等使用`typeof`检测出的都是`object`

{% note warning %}
基本类型的数据使用`instanceof`始终判断`false`，因为基本类型不是对象
{% endnote %}

### 举例

```js js
const [a3, b3, c3, d3] = [[], {}, new Date(), /\s/];
console.log(a3 instanceof Array); // true
console.log(b3 instanceof Object); // true
console.log(c3 instanceof Date); // true
console.log(d3 instanceof RegExp); // true

const e3 = new Boolean(false);
const f3 = new Number(25);
const g3 = new String('abc');
console.log(e3 instanceof Boolean); // true
console.log(f3 instanceof Number); // true
console.log(g3 instanceof String); // true
```

### 两个意外

值得注意的是有两个意外

```js
const h3 = null;
console.log(h3 instanceof Object); // false

const i3 = function() {};
console.log(i3 instanceof Function); // true
console.log(i3 instanceof Object); // true
```

为什么会这样呢？

从它的语法中我们可以看出`result = variable instanceof constructor`它是通过该操作符寻找它的引用类型，而所有引用类型的值都是`Object`的实例，这也就解释了所有的对象使用`instanceof`的时候结果都为`true`

```js js
const [a4, b4, c4] = [[], {}, new Date(), /\s/];
console.log(a4 instanceof Object); // true
console.log(b4 instanceof Object); // true
console.log(c4 instanceof Object); // true
```

`null`是空对象指针，因此`typeof null === 'object'`，然而`null`又不是`object`的引用类型的实例，因此使用`instanceof`会显示`false`

## 参考教程

- [MDN-typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [封面图片](https://blog.logrocket.com/javascript-typeof-2511d53a1a62/)
