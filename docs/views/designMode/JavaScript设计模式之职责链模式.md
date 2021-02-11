---
title: JavaScript设计模式之职责链模式
categories: 设计模式
tags:
  - 职责链模式
  - 设计模式
copyright: true
description: 本文是介绍的是JavaScript职责链模式
images: /JavaScript设计模式之职责链模式/bg.jpg
date: 2020-03-26 22:28:54
keywords:
---


## 前言

本文聊的是职责链模式，参考自曾探的《JavaScript 设计模式与开发实践》，相当于个人读书笔记。

## 定义

> 使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

真实场景：JS事件捕获与冒泡

## 例子

假设有一个负责售卖手机的电商网站，经过 500 元定金和 200 元定金预定后，现在到了正式购买的阶段。对于已经支付过 500 元定金的用户返回 100 元优惠券，支付过 200 元定金的用户返回 50 元，没有支付过定金的用户没有优惠券，并且还收到库存的限制，支付过定金的不受此限制。

以下字段表示：

- orderType: 表示订单类型，值为 1 是 500 元定金用户，值为 2 是 200 元定金用户，值为 3 是普通用户
- pay: 表示用户是否已经支付定金，值为 true 或者 false
- stock: 表示当前用于普通购买的手机库存数量，已经支付过 500 元或者 200 元定金的用户不受此限制

### 正常流程

```js js
const order = (orderType, pay, stock) => {
  if (orderType === 1) {
    if (pay === true) {
      console.log("500元定金预约，得到100元优惠券");
    } else {
      if (stock > 0) {
        console.log("普通购买，无优惠券");
      } else {
        console.log("手机库存不足");
      }
    }
  } else if (orderType === 2) {
    if (pay === true) {
      console.log("200元定金预约，得到50元优惠券");
    } else {
      if (stock > 0) {
        console.log("普通购买，无优惠券");
      } else {
        console.log("手机库存不足");
      }
    }
  } else if (orderType === 3) {
    if (stock > 0) {
      console.log("普通购买，无优惠券");
    } else {
      console.log("手机库存不足");
    }
  }
};

order(1, true, 500); // 500元定金预约，得到100元优惠券
```

### 用职责链模式重构代码

```js js
const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log("500元定金预约，得到100元优惠券");
  } else {
    order200(orderType, pay, stock);
  }
};

const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log("200元定金预约，得到50元优惠券");
  } else {
    orderNormal(orderType, pay, stock);
  }
};

const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

order500(1, true, 500); // 500元定金预约，得到100元优惠券
```

### 优化

虽然上面代码能够实现其功能，但是函数之间非常耦合，函数之间不能灵活拆分和重组，因此需要优化一下。增加`Chain`类来优化

```js js
const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log("500元定金预约，得到100元优惠券");
  } else {
    return "nextSuccessor";
  }
};

const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log("200元定金预约，得到50元优惠券");
  } else {
    return "nextSuccessor";
  }
};

const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }

  setNextSuccessor(successor) {
    return (this.successor = successor);
  }

  passRequest(...args) {
    let ret = this.fn(...args);
    if (ret === "nextSuccessor") {
      return this.successor && this.successor.passRequest(...args);
    }

    return ret;
  }
}

const chainOrder500 = new Chain(order500);
const chainOrder200 = new Chain(order200);
const chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// 测试
chainOrder500.passRequest(3, true, 500);
```

## 异步的职责链

```js js
class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null;
  }

  setNextSuccessor(successor) {
    return (this.successor = successor);
  }

  passRequest(...args) {
    let ret = this.fn(...args);
    if (ret === "nextSuccessor") {
      return this.successor && this.successor.passRequest(...args);
    }

    return ret;
  }

  next(...args) {
    return this.successor && this.successor.passRequest(...args);
  }
}

const fn1 = new Chain(() => {
  console.log(1);
  return "nextSuccessor";
});

const fn2 = new Chain(function() {
  console.log(2);
  setTimeout(() => {
    this.next();
  }, 1000);
});

const fn3 = new Chain(() => {
  console.log(3);
});

fn1.setNextSuccessor(fn2).setNextSuccessor(fn3);

fn1.passRequest();
```

## 总结

优点：

1. 解耦了发送者和 N 个接受者之间的复杂关系，由于不知道链中的哪个节点可以处理你发出的请求，所以只需要把请求传递给第一个节点即可。
2. 链中的节点对象可以灵活地拆分重组
3. 手动指定起始节点

缺点：

1. 不能保证某个请求一定会被链中的节点处理，需要在链尾增加一个保底的接受者节点
2. 程序中多了一些节点对象
