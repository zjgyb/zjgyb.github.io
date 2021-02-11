---
title: 函数柯里化&偏函数
categories: JavaScript
tags:
  - 柯里化
  - 偏函数
  - JavaScript
copyright: true
keywords: 柯里化 偏函数 JavaScript
description: 本文介绍柯里化和偏函数知识以及代码实现
images: /函数柯里化&偏函数/curried_functions_javascript.png
date: 2019-09-04 09:08:13
---


## 前言

最近几天在看高程，对于其中的概念有些疑惑，因此找了相关的教程，希望自己能够了解它，并且有可能运用它。本文主要参考的是[冴羽的博客](https://github.com/mqyqingfeng/Blog)，结合自身能理解的方式来熟悉这两个概念。

## 柯里化

什么是柯里化呢？来自于[冴羽的博客-JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)

> 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

## 举个例子

本例子来自于[Fun Fun Function-YouTube](https://www.youtube.com/watch?v=iZLP4qOwY8I)

### 先举一个普通函数

```js js
let dragon = (name, size, element) => {
  return `${name} is a ${size} dragon that breathes ${element}!`;
};

console.log(dragon("Karo", "large", "ice"));
// Karo is a large dragon that breathes ice!
```

### 模拟柯里化方式

```js js
let dragon = name => size => element =>
  `${name} is a ${size} dragon that breathes ${element}!`;
console.log(dragon('Karo')('large')('ice'));
// Karo is a large dragon that breathes ice!
```

## 高程中柯里化的实现方式

```js js
function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}

let dragon = (name, size, element) => {
  return `${name} is a ${size} dragon that breathes ${element}!`;
};
dragon = curry(dragon);
let fluffykinsDragon = dragon('fluffykins'); // curyy函数只能保存一个参数就返回了
// fluffykins is a undefined dragon that breathes undefined! 
// 如果执行下面语句就会报错，
// let tinyDragon = fluffykinsDragon("tiny"); 报错
```

## 柯里化函数如何实现呢？

借助上面的例子，我们开始从第一版写起

### 柯里化第一版

```js js
// 第一版
function curry(fn) {
  var args = [];
  return function() {
    args = args.concat([].slice.call(arguments));
    return function() {
      args = args.concat([].slice.call(arguments));
      return function() {
        args = args.concat([].slice.call(arguments));
        return fn.apply(null, args);
      }
    }
  };
}
```

测试一下

```js js
// 测试
let dragon = (name, size, element) => {
  return `${name} is a ${size} dragon that breathes ${element}!`;
};
dragon = curry(dragon);
let fluffykinsDragon = dragon("fluffykins");
let tinyDragon = fluffykinsDragon("tiny");
console.log(tinyDragon("ice"));
// fluffykins is a tiny dragon that breathes ice!
```

如果参数过多，那么就会无限嵌套，因此第二版用递归优化一下

### 柯里化第二版

```js js
// 第二版
function curry(fn, args, length) {
  length = length || fn.length;
  args = args || [];
  return function() {
    args = args.concat([].slice.call(arguments));
    if (arguments.length < length) {
      return curry(fn, args, length - arguments.length);
    }
    return fn.apply(this, args);
  }
}
```

我们发现`curry(fn, args, length - 1)`有三个参数，我们利用高程中的例子当成中间函数可以再优化一下，于是有了第三版

### 柯里化第三版

```js js
// 第三版
function sub_curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}

function curry(fn, length) {
  length = length || fn.length;
  return function() {
    if (arguments.length < length) {
      var args = [fn].concat([].slice.call(arguments));
      return curry(sub_curry.apply(this, args), length - arguments.length);
    }
    return fn.apply(this, arguments);
  };
}
```

### 使用ES6改写一下，优化一下

```js js
function sub_curry(fn, ...args) {
  return (...args1) => fn(...args, ...args1);
}

function curry(fn, length) {
  length = length || fn.length;
  return (...args) => {
    if (args.length < length) {
      return curry(sub_curry(fn, ...args), length - args.length);
    }
    return fn(...args);
  };
}
```
### 穿插一下1

之前我把`args`参数进行柯里化了，现在除去`length`参数的另一种写法

```js js
function curry(fn, args) {
  var length = fn.length;

  args = args || [];
  return function() {
    var _args = args.concat([].slice.call(arguments));
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}
```

### 穿插一下2——我看到一种更简洁的写法

```js js
function curry(fn) {
  return judge = (...args) => {
    return args.length === fn.length ? fn(...args) : (...arg) => judge(...args, ...arg);
  };
}
```

### 柯里化第四版

参数含有占位符

```js js
// 第四版
function curry(fn, args) {
  var length = fn.length;
  args = args || [];
  return function() {
    var newArgs = [].slice.call(arguments);
    for (var i = 0, len = args.length; i < len; i++) {
      if (args[i] === _) {
        args.splice(i, 1, newArgs.shift());
      }
      if (newArgs.length === 0) break;
    }
    var _args = args.concat(newArgs);
    var _filterArr = _args.filter(ele => ele !== _);
    if (_filterArr.length < length) {
      return curry.call(this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}
```

测试一下

```js js
var fn = curry(function(a, b, c, d, e) {
  console.log([a, b, c, d, e]);
});
var _ = {};
// 输出的结果都是[1, 2, 3, 4, 5]
fn(1, 2, 3, 4, 5);
fn(_, 2, 3, 4, 5)(1);
fn(1, _, 3, 4, 5)(2);
fn(1, _, 3)(_, 4)(2)(5);
fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5);
```

## 偏函数

什么是偏函数呢？还是来自于[冴羽的博客](https://github.com/mqyqingfeng/Blog/issues/43)

> 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

{% note info %}
柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。
{% endnote %}

## 偏函数第一版

```js js
// 也就是高程中的例子
function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  }
}
```

## 偏函数第二版

```js js
var _ = {};
function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var len = args.length;
    var _args = [].slice.call(arguments);
    for(var i = 0; i < len; i++) {
      args[i] = args[i] === _ ? _args.shift() : args[i];
      if (_args.length === 0) break;
    }
    args.concat(_args);
    return fn.apply(this, args);
  }
}
```

测试一下

```js js
var subtract = function(a, b, c) {
  return b - a + c;
};
var subFrom20 = partial(subtract, 5, _, _);
console.log(subFrom20(15, 5, 5)); // 15
```

## 总结一下

通过教程和自己的理解初步了解了柯里化和偏函数，至于具体的使用场景，可能是用到了才知道吧。:joy:

## 参考教程

- [冴羽的博客-JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
- [冴羽的博客-JavaScript专题之偏函数](https://github.com/mqyqingfeng/Blog/issues/43)
- [Fun Fun Function](https://www.youtube.com/watch?v=iZLP4qOwY8I)
- [封面图片](https://blog.jscrambler.com/curried-functions-in-javascript/)