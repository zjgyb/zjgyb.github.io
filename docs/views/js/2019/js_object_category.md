---
title: JS对象分类
categories: JavaScript
tags:
  - Object
  - 分类
  - JavaScript
copyright: true
keywords: Object JavaScript对象分类 JS对象分类
description: 本文介绍JS的对象分类以及常用的内置对象属性和方法。
images: /JS对象分类/js.jpg
date: 2019-09-23 16:51:22
---


## 前言

原本认为JS对象分类十分简单，但是看到有许多分法并且每一种分法似乎都有道理，因此我列举出一些分法以及它们的包含范围，算是拾人牙慧吧，同时发表一些自己的看法，最后总结一下一些常用的全局函数和属性。

## 分类方法

我看到有四种分类方法：

{% note info %}
最主要的是前两种，后两种只是涉及到了而已，但是我还是拿出来讨论一下。
{% endnote %}

1. **内部对象**、**宿主对象**和**自定义对象**三种
  + 内部对象——包含`Array`、`Boolean`、`Date`、`Function`、`Global`、`Math`、`Error`...
  + 宿主对象——运行JS脚本环境提供的对象，包含`Window`、`Document`、`FormDate`、`XMLHttpRequest`...
  + 自定义对象——开发人员自己定义的对象

2. [W3school](https://www.w3school.com.cn/js/pro_js_object_types.asp)中的分类，分为**本地对象(native object)**、**内置对象(build-in object)**、**宿主对象(host object)**三种
  + 本地对象——独立于宿主环境的ECMAScript实现提供的对象，例如`Array`、`Boolean`、`Date`、`Function`...
  + 内置对象——总共两类`Global`和`Math`，`Global`对象包含顶级函数(全局函数)，例如`parseInt`、`parseFloat`...和顶级属性(全局属性)，例如`Infinity`、`undefined`...
  + 宿主对象——所有非本地对象都是，即由ECMAScript实现的宿主环境提供的对象，所有BOM和DOM对象都是宿主对象

3. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)只定义了一种**内置对象**[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)，因此不是内置对象我把它归类为其他对象
  + 内置对象——`Array`、`Boolean`、`Date`、`Function`、`Global`、`Math`、`Error`...，等同于第一种的内部对象
  + 其他对象——除内置对象之外的对象

4. 高程中分为两类**Global对象**和**Math对象**，它们都属于单体内置对象
  + Global对象——Global对象方法、Global对象属性、window对象
  + Math——保存数学公式和信息提供的公共位置，分为Math对象属性、Math对象方法

### 小结

+ 第一种分类中的“内部对象”，等同于第三种分类的“内置对象”
+ 第一种分类的“宿主对象”等同于第二种的“宿主对象”

## 规范上的解释

引用[规范](http://es5.github.io/#x4.3.6)上的解释

> **native object**
> object in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment.
> **NOTE**  Standard native objects are defined in this specification. Some native objects are built-in; others may be constructed during the course of execution of an ECMAScript program.

> **build-in object**
> object supplied by an ECMAScript implementation, independent of the host environment, that is present at the start of the execution of an ECMAScript program.
> **NOTE** Standard built-in objects are defined in this specification, and an ECMAScript implementation may specify and define others. Every built-in object is a native object. A built-in constructor is a built-in object that is also a constructor.

> **host object**
> object supplied by the host environment to complete the execution environment of ECMAScript.
> **NOTE** Any object that is not native is a host object.

这里很好的印证了W3school里面的分类符合规范说的。

## 我的见解

从之前的分类其实看出第一种的**内部对象**其实就是第二种的**本地对象**，而第二种的**内置对象**其实是属于**本地对象**的，因此我认为可以把JS对象分成第一种分类方法的三种，其中的**内部对象**又可以分为需要通过`new`创建的**本地对象**和不需要手动实例化的**内置对象**

也就是

+ 内部对象(本地对象+内置对象)
+ 宿主对象(执行环境提供)
+ 自定义对象(开发人员自定义)

## 常用的全局函数和属性

### global对象相关

1. Number相关

```js js
isNaN('abc'); // true
parseInt('12a'); // 12
parseFloat('123.23z'); // 123.23
```

{% note warning %}
在ES6中这些方法可定义到了Number对象上，我认为前面加上Number更符合语境。因此以后写前面还是加上Number
{% endnote %}

2. URL相关(常用于与后端对接的时候get方法传参)

```js js
const url = "https://zjgyb.github.io/CSS-animate1.html #input-radio";
// 不会对本身属于URL的特殊字符进行编码，例如冒号、正斜杠、问号、井号
const encodeURL = encodeURI(url);
console.log(encodeURL); // https://zjgyb.github.io/CSS-animate1.html%20#input-radio
console.log(decodeURI(encodeURL)); // https://zjgyb.github.io/CSS-animate1.html #input-radio

// 对它发现的任何非标准字符进行编码
const encodeCom = encodeURIComponent(url);
console.log(encodeCom); // https%3A%2F%2Fzjgyb.github.io%2FCSS-animate1.html%23input-radio
console.log(decodeURIComponent(encodeCom)); //  "https://zjgyb.github.io/CSS-animate1.html #input-radio"
```

3. 内置的属性`Date`、`Array`、`Function`...这些就不展开了

### Math相关

#### Math属性

```js js
console.log(Math.E); // 2.718...
console.log(Math.PI); // 3.141...
```

#### Math方法

**Min** & **Max**

```js js
Math.min(1, 3, 4, 0); // 0
Math.max(1, 3, 4, 0); // 4
```

**Ceil**、**Floor**、**Round** & **Trunc**
```js js
console.log(Math.ceil(1.5)); // 2
console.log(Math.floor(1.5)); // 1

// 四舍五入
console.log(Math.round(1.5)); // 2
// 去除一个数的小数部分，负数是表现为ceil，正数表现为Floor
console.log(Math.floor(-2.4)); // -3
console.log(Math.trunc(-2.4)); // -2
```

**Random**

```js js
function selectFrom(lower, upper) {
  const choices = upper - lower + 1;
  return Math.floor(Math.random() * choices + lower);
}

const num = selectFrom(1, 10);
console.log(num); // 1-10之间
```

**Abs**

```js js
console.log(Math.abs(-2.4)); // 2.4
```

## 总结

看来JS对象分类并不简单。:joy:

## 参考文章

+ [W3school(中文)](https://www.w3school.com.cn/js/pro_js_object_types.asp)
+ [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
+ [ES5规范](http://es5.github.io/#x4.3.6)
+ [首屏图片](https://www.creativebloq.com/features/12-common-javascript-questions-answered)
