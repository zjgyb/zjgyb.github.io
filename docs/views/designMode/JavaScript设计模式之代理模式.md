---
title: JavaScript设计模式之代理模式
categories: 设计模式
tags:
  - 代理模式
copyright: true
description: 本文是介绍的是JavaScript代理模式
images: /JavaScript设计模式之代理模式/bg.jpeg
date: 2020-03-22 16:01:38
keywords:
---


## 前言

本文聊的是代理模式，参考自曾探的《JavaScript 设计模式与开发实践》，相当于个人读书笔记。

## 作用

为一个对象提供一个代用品或占位符，以便控制对它的访问。代理模式解决的问题是在直接访问对象可能带来的问题通过增加中间层来使实现对某一对象的访问。

现实中的例子例如经纪人这个角色

## 使用场景

根据职责划分为以下使用场景：

1. 保护代理(Protect or Access)-对某些请求进行筛选，用于对象应该有不同访问权限的情况
2. 虚拟代理-把一些开销很大的对象延迟到需要它的时候去创建
3. 缓存(Cache)代理-为一些开销大的运算结果提供暂时的存储
4. 防火墙(Firewall)代理-控制网络资源的访问，保护主机
5. 远程代理-为一个对象在不同地址空间提供局部代表
6. 智能引用代理(Smart Reference)-取代了简单的指针，它在访问对象时执行一些附加操作
7. 写时复制代理(Copy-on-Write)-通过用于复制一个庞大对象的情况
8. 同步化(Synchronization)代理

## 虚拟代理实现图片预加载

通过代理对象先加载小的占位loading图，然后需要加载图片加载完之后替换loading图

```js js
const myImage = (() => {
  const imageNode = document.createElement("img");
  document.body.appendChild(imageNode);

  return {
    setSrc(src) {
      imageNode.src = src;
    }
  };
})();

const proxyImage = (() => {
  const img = new Image();
  img.onload = function() {
    myImage.setSrc(this.src);
  };

  return {
    setSrc(src) {
      myImage.setSrc("./loading.gif"); // 使用小的loading先占位，避免白屏
      img.src = src;
    }
  };
})();

proxyImage.setSrc(
  "https://zjgyb.github.io/JavaScript设计模式之策略模式/bg.jpeg"
);
```

防抖与节流利用的也是虚拟代理

## 缓存代理实现乘积缓存

当第一次运算的时候调用对象，然后把第一次运算的结果保存下来

```js js
function mult(...args) {
  console.log('计算开始');
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
}

const proxyMult = (() => {
  const cache = {};
  return function(...args) {
    let key = args.join(',');
    if (cache[key] !== undefined) {
      return cache[key];
    }
    return cache[key] = mult(...args);
  }
})();
```

## 总结

优点：职责清晰、高拓展性、智能化

缺点：需要额外的工作，实现可能比较复杂、增加程序的代码量

代理模式与适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口

代理模式与装饰器模式的区别：装饰器模式为了增强功能，而代理模式为了加以控制

## 参考文章

- [菜鸟教程](https://www.runoob.com/design-pattern/proxy-pattern.html)
