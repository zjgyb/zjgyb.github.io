---
title: JavaScript设计模式之观察者模式
categories: 设计模式
tags:
  - 观察者模式
  - 发布订阅模式
copyright: true
description: 本文介绍JavaScript实现观察者模式
images: /JavaScript设计模式之观察者模式/bg.jpeg
date: 2020-03-12 17:42:50
keywords:
---


## 前言

本文聊的是观察者模式，参考自《JavaScript 设计模式与开发实践》，相当于个人读书笔记。

## 观察者模式

观察者模式又名发布订阅模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。在 JavaScript 开发中，我们一般用事件模型来替代传统的发布订阅模式

发布-订阅模式可以广泛应用于**异步编程**中，这是一种替代传递回调函数的方案；还可以取代对象之间硬编码的通知机制，一个对象不用再**显式**地调用另外一个对象的某个接口

## DOM 事件

例如简单的监听事件，一开始需要注册监听事件，然后当用户点击的时候就会自动执行监听事件内的代码

```js js
document.addEventListener("click", () => {
  console.log(1);
});
```

## 自定义事件

### 简单的发布订阅

例如售楼处发布售楼消息给客户，实现的过程分三步：

1. 首先指定**发布者**，例如下面代码变量的`salesOffices`，意味着售楼处
2. 然后给发布者添加一个缓存列表，用于存放回调函数以便通知**订阅者**，例如下面代码中的`salesOffices.listen`方法
3. 最后发布消息，发布者遍历这个缓存列表，依次触发里面存放订阅者的回调函数

```js js
const salesOffices = {
  clientList: [], // 缓存列表，存放订阅者的回调函数
  listen(fn) {
    // 增加订阅者
    this.clientList.push(fn);
  },
  trigger() {
    // 发布消息
    for (let i = 0; i < this.clientList.length; i++) {
      this.clientList[i].apply(this, arguments);
    }
  }
};

salesOffices.listen((price, squareMeter) => {
  console.log("价格= " + price);
  console.log("squareMeter " + squareMeter);
});

salesOffices.listen((price, squareMeter) => {
  console.log("价格= " + price);
  console.log("squareMeter " + squareMeter);
});

salesOffices.trigger(20000, 88);
```

### 完善发布订阅

在上面的问题中我们实现了简单的发布订阅，但是还是存在问题，就是订阅者会受到发布者发布的所有消息，而这些消息有的可能不是订阅者所需要的。因此解决办法是增加一个 key，让订阅者只订阅自己感兴趣的内容

```js js
const salesOffices = {
  clientList: {}, // 缓存列表，存放订阅者的回调函数
  listen(key, fn) {
    // 增加订阅者
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger(key, ...arg) {
    if (!this.clientList[key] || this.clientList[key].length === 0) {
      return false;
    }

    for (let i = 0, fn; (fn = this.clientList[key][i++]); ) {
      fn.apply(this, arg);
    }
  }
};

salesOffices.listen("squareMeter88", price => {
  console.log("价格= " + price);
});

salesOffices.listen("squareMeter110", price => {
  console.log("价格= " + price);
});

salesOffices.trigger("squareMeter88", 20000);
salesOffices.trigger("squareMeter110", 30000);
```

在订阅后我们可能需要取消订阅事件，因此增加取消订阅的事件

```js js
salesOffices.remove = (key, fn) {
  let fns = this.clientList[key];
    if (!fns) {
      return false;
    }

    if (!fn) { // 取消对应key的所有订阅消息
      fns && (fns.length = 0);
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        let _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
          return;
        }
      }
    }
}

salesOffices.listen('squareMeter88', fn1 = (price) => {
  console.log("价格= " + price);
});

salesOffices.listen("squareMeter100", fn2 = price => {
  console.log("价格= " + price);
});

salesOffices.trigger('squareMeter88', 20000);
salesOffices.remove("squareMeter100", fn2); // 取消订阅的事件
salesOffices.trigger("squareMeter100", 30000);
```

## 网站登录

在使用AJAX进行获取数据之后我们需要渲染多个模块，一般情况下，我们会根据请求之后显式地调用定义好的函数，例如下面的例子：

```js js
// 普通模式，显式调用函数
login.succ((data) => {
  header.setAvatar(data.avatar);
  nav.setAvatar(data.avatar);
  message.refresh();
  cart.refresh();
});
```

### 使用观察者模式

```js js
// 使用观察者模式
$.ajax('https://www.example.com?login', (data)) {
  login.trigger('loginSucc', data); // 发布消息
}

// 根据各个模块去订阅消息
const header = (() => {
  login.listen('loginSucc', (data) => {
    header.setAvatar(data.avatar);
  });
  return {
    setAvatar(data) {
      console.log(data);
    }
  }
})();

const nav = (() => {
  login.listen('loginSucc', (data) => {
    nav.setAvatar(data.avatar);
  });
  return {
    setAvatar(data) {
      console.log(data);
    }
  }
})();
```

## 总结

发布订阅模式的优点：

1. 时间上的解耦
2. 对象之间的解耦

缺点：

1. 创建订阅者本身需要消耗一定的时间和内存
2. 当订阅一个消息后这个消息最后可能不会发生，但是订阅者会始终存在内存中
3. 过度使用会造成对象之间引用的不清晰，难以跟踪维护和理解
