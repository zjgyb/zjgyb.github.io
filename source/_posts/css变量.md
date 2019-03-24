---
title: css变量
copyright: true
date: 2018-11-24 21:06:19
category: CSS
tags:
  - css变量
keywords: CSS变量 变量 -- var 前端
description:
images:
---


{% note primary %}
学过 SASS(LESS)等 CSS 预编译工具我们知道它们可以使用变量，但是 CSS 中也可以使用变量，它有很强的实用性。
{% endnote %}

<!-- more -->

## 语法

声明变量时需要加在变量名前面加上`--`，在使用变量时使用`var(--name)`。

## 用法

局部

```css css
element {
  --main-color: #000;
}

element {
  color: var(--main-color);
}
```

全局

```css css
:root {
  --main-bg-color: #fff;
}

.content {
  background-color: var(--main-bg-color);
}
```

## 结合 js 使用

当我们需要有各种主题时我们需要修改 CSS 变量来达到效果，而修改 CSS 变量需要结合 JS 来使用。

```js js
let root = document.querySelector(":root");
element.addEventListener("click", event => {
  root.style.setProperty("--theme-color", event.target.style.background);
});
```

## 参考教程

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
- [阮一峰](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
- [张鑫旭](https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/)
