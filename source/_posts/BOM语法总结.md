---
title: BOM语法总结
category: JavaScript
tags:
  - BOM
  - JavaScript
  - method
copyright: true
keywords: BOM字符串总结
description: 本文是对JavaScript的BOM语法总结
images: ./BOM语法总结/BOM.jpg
date: 2019-11-16 16:37:53
---


## 前言

因为最近在看高程，看的过程中对相关的语法进行总结，加深理解以及方便回顾。

## BOM 概述

BOM 提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关。提供的对象有`window`、`location`、`navigator`、`screen`、`history`这五种。其中`window`对象比较特殊，在浏览器中担任着双重角色，一方面他是通过 JavaScript 访问浏览器窗口的一个接口，另一方面又是 ECMAScript 规定的 Global 对象，所以`window.location`等于`location`，为方便区别，本文所要讲的`window`含义是第一种意思——访问浏览器的一个接口。

## window

### open()

- open(url[, name, features, replace]): 加载的 url、新窗口的名称(但是没有发现这个定义的参数)、新页面的特性

```js
window.open("https://www.baidu.com/"); // 打开了一个新界面
// 有四个特殊窗口名称: _self、_parent、_top这三个都是在原窗口打开新窗口, _blank打开一个新窗口
window.open("https://www.baidu.com/", "hello"); // 与第一个效果相同
window.open(
  "https://www.baidu.com/",
  "baidu",
  "height=400, width=400, top=10, left=10, resizable=yes"
); // 出现一个小窗口
const wroxWin = window.open("https://www.baidu.com/");
wroxWin.close(); // 关闭打开的窗口
```

关于第三个参数的一些特性列表：

- width、height(number): 都不能小于 100，设置小于 100 时就打开默认值 100 的宽和高
- left、top(number): 新窗口的左上坐标，坐标相对的是屏幕宽度，若为负值，则取默认值 0
- fullscreen(yes or no): 浏览器窗口最大化，经过测试 78.0.3904.97 版本的 chrome 无效，因为设置了之后都能打开相同大小的窗口
- location(yes or no): 是否显示地址栏，经过测试我最新的 chrome 都会显示地址栏
- menubar(yes or no): 是否显示菜单栏，最新 chrome 无效
- resizable(yes or no): 是否可拖动浏览器边框改变其大小，最新 chrome 无效
- scrollbars(yes or no): 内容显示超出窗口大小是否可以滚动，无效
- status(yes or no): 是否显示状态栏，阵亡
- toolbar(yes or no): 是否显示工具栏，阵亡

应用：例如在[慕课网](https://www.imooc.com/)使用第三方登录，例如 qq 登录时就会弹出新窗口进行登录验证

### setTimeout()、setInterval()

- setTimeout(): 超时调用
- setInterval(): 间歇调用

> 一般认为使用超时调用来模拟间歇调用是一种最佳模式，因为超时调用只执行一次调用就会自行停止。

### alert()、confirm()、prompt()

- alert(str): 警告
- confirm(str): 确认，返回一个 bool 值
- prompt(str, inputStr): 点击取消返回`null`

```js
alert("warning");
if (confirm("Are you sure?")) {
  alert("I'm so glad your're sure!");
} else {
  alert("I'm sorry to hear you're not sure.");
}

const result = prompt("What's your name? ", "");
if (result) {
  alert("Welcome, " + result);
}
```

### print()、find()

- print(): “打印”对话框
- find(): 查找对话框，不过使用它一直返回的是`false`

## location 对象

它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能，同时还具有将 URL 解析为独立的片段。

以下属性不仅能获取值，还能给 url 赋值，除 hash 外，其他都会使用新 URL 加载页面

- host、hostname: 都返回服务器名称，如果有显示端口，host 能返回，hostname 会忽略端口
- port: 有显示返回，没有显示返回空字符串
- pathname: 返回文件地址，例如`https://cn.vuejs.org/v2/guide/installation.html`, 返回`/v2/guide/installation.html`
- search: 返回 URL 的查询字符串，以`?`开头

```js
// 例如有下列网址
// https://element.eleme.cn/#/zh-CN/component/layout
location.href; // https://element.eleme.cn/#/zh-CN/component/layout
location.hash; // #/zh-CN/component/layout
location.host; // element.eleme.cn
location.hostname; // element.eleme.cn
location.port; // ''
location.pathname; // ''
location.protocol; // https
location.search; // ''
```

### assign()

```js
// 以下三个效果相同，都是在当前界面打开指定的网址
location.assign("https://www.google.com");
window.location = "https://www.google.com";
location.href = "https://www.google.com";
```

### replace()

之前方法能够记录历史，点击回退按钮能够回退到之前页面，但是 replace()能够把当前历史修改而不能回退之前版本

```js
location.replace("https://www.google.com");
```

### reload()

reload([bool]): 作用是重新加载页面，如果加`true`代表从服务器重新下载资源

## navigator

平常使用到该对象内的属性很少，因此就不过多介绍，平常有可能会用到的就是`userAgent`，表示浏览器的用户代理字符串

`navigator.userAgent`几种设备的结果:

1. 我的 windows 的 chrome——`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36`
2. 我的 IE——`Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko`
3. 我的 edge——`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134`
4. 我的 opera——`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.94`
5. 我的 firefox——`Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0`
6. chrome 模拟的 Galaxy S III——`Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
7. chrome 模拟的 iphone X——`Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1`
8. chrome 模拟的 iPad——`Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1`

```js
// 这里可以粗略的判断是否为小屏幕
const isMobile = /Android|iPhone|Mobile|iPad/i.test(navigator.userAgent);
```

## screen

> JavaScript 中有几个对象在编程中用处不大，而 screen 对象就是其中之一。

因此这里也就不过多介绍了

## history

### go()、back()、forward()

- go(num): 可正可负，正代表前进负代表后退
- back(): 后退一页，相当于`go(-1)`
- forward(): 前进一页，相当于`go(1)`

## 参考

- JavaScript 高级程序设计
- [首屏图片](https://nguyenvanhieu.vn/bom-mo-hinh-doi-tuong-trinh-duyet/)
