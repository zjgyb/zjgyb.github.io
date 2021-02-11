---
title: es6学习
copyright: true
date: 2018-09-16 21:55:10
categories: 前端
tags:
  - es6
  - js
keywords: es6 js 前端
description: es6是JavaScript语言的下一代标准，它与es5在语法上相差很大。
---

已经使用了一段时间 es6 了，感觉应该对其中的知识点进行总结，能够时常回顾，加深记忆。

### let&const

`let`的主要作用是能够存在作用域，这一点是有别于`var`的，举个例子

```js
var a = [];
for (var i = 0; i < 3; i++) {
  a[i] = function() {
    return i;
  };
}

a[0](); // 3
a[1](); // 3
a[2](); // 3
```

而 let 却没有这样的问题

```js
let a = [];
for (let i = 0; i < 3; i++) {
  a[i] = function() {
    return i;
  };
}

a[0](); // 0
a[1](); // 1
a[2](); // 2
```

`const`一般情况下是不可变的，但这不是绝对的，例如数组，对象（我指的对象都是狭义上的对象）等

```js
const arr = [1, 2, 3];
arr[0] = 3;
arr[0]; // 3
```

### 箭头函数

在 es6 中我最偏爱的就是箭头函数了，它的简洁是我偏爱的最大原因，举个例子

```js
// es5
var a = function() {
  return 1;
};

// es6
const a = () => 1;
```

### 解构赋值

1.

```js
const str = "hello";
const { length: len } = str;
len; // 5
```

2.

```js
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , arr] = source;
arr; // [3,4,5,6,7,8,9,10]
```

### 简洁函数声明

```js
// es5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

// es6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

### 函数参数结构

```js
const person = {
  name: "nicegong",
  sex: "man",
  age: 100
};

function logPerson({ name, sex, age }) {
  return `my name is ${name}, I am ${age} years old...`;
}

logPerson(person); // my name is nicegong, I am 100 years old...
```

### 构造函数

```js
// es5
var Person = function(name) {
  this.name = name;
};
var one = new Person("nicegong");

// es6
class Person {
  construct(name) {
    this.name = name;
  }
}
const one = new Person("nicegong");
```

### export&import

`export`是从文件中导出变量与函数，`import`是从文件中引用变量与函数

```js
// add.js
const add = (a, b) => {
  return a + b;
};

export { add };
```

```js
import { add } from "add.js";
add(2, 5); // 7
```
