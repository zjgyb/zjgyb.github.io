---
title: stopPropagation和preventDefault的区别
copyright: true
date: 2018-11-26 17:09:51
category: JavaScript
tags:
  - stopPropagation
  - preventDefault
  - js
keywords: stopPropagation preventDefault 区别
description:
images:
---


{% note primary %}
之前看过stopPropagation和preventDefault的区别，然而当我再次遇到的时候已经忘了两者的区别，因此我需要写一篇关于两者区别的文章，以便理解以及之后忘记时能够通过阅读这篇文章回忆起来。
{% endnote %}

<!-- more -->

## stopPropagation

> 阻止捕获和冒泡阶段中当前事件的进一步传播。

## preventDefault

> 阻止浏览器做出默认操作。

## 例子

{% codepen eQKLXo %}

从上面例子可以看出`event.stopPropagation()`阻止了子元素的冒泡，而`event.preventDefault`则是阻止了checkbox的点击确认事件

## 参考教程

- [stopPropagation-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)
- [Stackoverflow](https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault)