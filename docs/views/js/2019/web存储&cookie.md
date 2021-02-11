---
title: web存储&cookie
categories: JavaScript
tags:
  - sessionStorage
  - localStorage
  - cookie
copyright: true
keywords: sessionStorage localStorage cookie 前端存储
description: 本文介绍sessionStorage、localStorage以及cookie的相关知识
images: /web存储&cookie/storage.jpg
date: 2019-09-30 16:50:40
---


## 前言

区分三个概念`sessionStorage`、`localStorage`、`cookie`。

## web存储

为什么会出现存储？它的两个目的：

> 提供一种在cookie之外存储会话数据的途径
> 提供一种存储大量可以跨会话存在的数据的机制

## sessionStorage

### 概念

> sessionStorage对象存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。

通熟来讲，就是sessionStorage在关闭浏览器界面(不包括像chrome浏览器崩溃重新恢复)数据就会消失(即使重新打开同一个相同窗口)

### 用法

主要有四个方法：`getItem`, `setItem`, `removeItem`, `clear`，分别测试一下

```js js
sessionStorage.setItem('key1', 'key1');
sessionStorage.setItem('key2', 'key2');
sessionStorage.setItem('key3', 'key3');

console.log(sessionStorage.getItem('key2')); // key2
console.log(sessionStorage.getItem('key5')); // null

sessionStorage.removeItem('key3');

console.log(sessionStorage.getItem('key3')); // null

sessionStorage.clear();
```

一些不太常用的方法

```js js
sessionStorage.setItem('key1', 'key1');
sessionStorage.setItem('key2', 'key2');
sessionStorage.setItem('key3', 'key3');

sessionStorage.valueOf(); // 返回一个Storage对象
console.log(sessionStorage.key1); // key1
console.log(sessionStorage.length); // 3
```

### tips

你可以打开浏览器，按`F12`，打开控制台，到`Application`部分查看`sessionStorage`，如图：

![浏览器查看存储信息](web存储&cookie/web.png)

## localStorage

> 作用域：页面必须来自同一个域名，使用同一个协议，同一个端口上。

`localStorage`会把数据存储在硬盘中，因此即使关闭浏览器，重新打开界面，数据还是存在。

### 用法

等同于`sessionStorage`

### 限制

可以通过[这里](http://dev-test.nemikor.com/web-storage/support-test/)这个网址测试浏览器是否支持以及存储的最大空间，经过测试，我最新的Chrome(77.0.3865.90)，sessionStorage和localStorage最大存储空间是`5101kb`

## HTTP Cookie(cookie)

### 介绍

> 最初是在客户端用于存储会话信息的。该标准要求服务器对任意HTTP请求发送Set-Cookie HTTP头作为响应的一部分，其中包含信息。

我在前端开发中没有用到过cookie，但是在node中使用session作为登录验证的字段存储于cookie中。

cookie有几个特点，可以设置失效时间，可以设置指定的域，可以设定指定的路径。

### 用法

因为在前端开发中很少用到`cookie`了，因此只介绍相关的概念

### 注意点

{% note warning %}
cookie很不安全，因此一定不要在cookie中存储重要和敏感的信息。
{% endnote %}

### 限制

大多数浏览器都有大约4096B的长度限制。

## 总结

三者其实都要避免存放敏感信息，都要关注是否会受到xss攻击

## 首屏图片来源

[YouTube](https://www.youtube.com/watch?v=GihQAC1I39Q)