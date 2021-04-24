---
title: DOM扩展
categories: JavaScript
tags:
  - DOM
  - HTML5
  - scrollIntoView
  - innerText
copyright: true
keywords: >-
  DOM拓展 querySelector getElementsByClassName classList 焦点管理 HTMLDocument 自定义属性
  scrollIntoView() innerText
description: 本文是对JavaScript的DOM语法拓展，参考自高程11章
images: /JS字符串方法总结/tony.png
date: 2019-11-30 15:11:19
---


## 前言

本文根据高程中的十一章来写的，相当于个人的读书笔记。

## 选择符 API

### querySelector

> querySelector()方法接收一个 CSS 选择符，返回与该模式匹配的**第一个**元素，如果没有找到匹配的元素，返回 null

例如有以下的 html 结构

```html html
<section id="box">
  <div class="content1" name="123"></div>
  <div class="content2"></div>
  <div class="content3"></div>
</section>
```

```js js
const box = document.querySelector("#box"); // 获取到div#box元素
const firstCon = box.querySelector(".content1"); // 获取到div.content1元素
```

### querySelectorAll

> 该方法接收的参数与 querySelector()方法一样，都是一个 CSS 选择符，但返回的是所有匹配的元素而不仅仅是一个元素。该方法返回的是一个 NodeList 实例

html 结构与 querySelector()相同

```js js
// 返回所有类名为content开头的元素
const div = document.querySelectorAll("[class*=content]");
```

### matchesSelector()

> 接收一个 CSS 选择符参数，调用元素与该选择符匹配，返回 true，否则，返回 false

目前该方法还没有得到支持

## 元素遍历

以下添加的属性能够获取元素而不必担心空白文本节点，从而可以更方便地查找 DOM 元素

- childElementCount: 返回子元素(不包括文本节点和注释)的个数
- firstElementChild: 指向第一个子元素
- lastElementChild: 指向最后一个子元素
- previousElementSibling: 指向前一个同辈元素
- nextElementSibling: 指向后一个同辈元素

## HTML5

### getElementsByClassName()

该方法接收一个参数，即一个包含一或多个类名的字符串，返回带有指定类的所有元素的 NodeList。

### classList 属性

- add(value): 将给定的字符串添加到列表中，如果值已经存在，就不添加了
- contains(value): 表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false
- remove(value): 从列表中删除给定的字符串
- toggle(value): 如果列表中存在给定的值，删除它，如果列表中没有给定的值，添加它

### 焦点管理

- document.activeElement: 引用 DOM 中当前获取了焦点的元素
- document.hasFocus(): 确定文档是否获得了焦点

### HTMLDocument

#### readyState

- document.readyState: `loading`——正在加载文档，`complete`——已经加载完文档

#### compatMode

页面的模式是标准的还是混杂的，标准模式下，`document.compatMode`的值等于`CSS1Compat`，混杂模式下值等于`BackCompat`

#### head 属性

> 引用文档的 head 元素

### 字符集属性

- document.charset: 一般值是`UTF-8`，表示文档中实际使用的字符集
- document.defaultCharset: 根据默认浏览器和操作系统的设置，判断字符集，但在我最新的 chrome 中没有这个属性

### 自定义数据属性

> HTML5 规定可以为元素添加非标准的属性，但要添加前缀`data-`，目的是为元素提供与渲染无关的信息，或者提供语义信息。添加自定义属性之后可以通过元素的 dataset 属性来访问自定义属性的值。dataset 属性的值是 DOMStringMap 的一个实例。

```html html
<!-- html例子 -->
<section id="section" data-name="tony"></section>
```

```js js
const box = document.querySelector("#section");
console.log(box.dataset.name); // tony
box.dataset.id = 123;
console.log(box.dataset.id); // 123
```

设置之后，html 变成了以下结构

```html html
<section id="section" data-name="tony" data-id="123"></section>
```

### 插入标记

#### innerHTML 属性

> 返回与调用元素的所有子节点。在写模式下，innerHTML 创建新的 DOM 树，然后用这个 DOM 树完全替换调用元素原先的所有子节点。

#### outerHTML 属性

> 在读模式下，outerHTML 返回调用它的元素及所有子节点的 HTML 标签。在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素。

总而言之，与`innerHTML`不同的是它是包含自身节点的，替换的时候也能把自身替换掉。

#### insertAdjacentHTML()

insertAdjacentHTML('beforebegin'|'afterbegin'|'beforeend'|'afterend', ele): 第一个参数必须是写的四个值，分别指的是作为前一个同辈元素插入、作为第一个子元素插入、作为最后一个子元素插入、作为后一个同辈元素插入，第二个元素是要插入的 HTML 字符串。

```js js
const con = document.querySelector(".content1");
const ele = '<div class="test">123</div>';
con.insertAdjacentHTML("beforebegin", ele); // 插入到.content1前面
con.insertAdjacentHTML("afterbegin", ele); // 插入到.content1作为第一个子元素
con.insertAdjacentHTML("beforeend", ele); // 插入到.content1作为最后一个子元素
con.insertAdjacentHTML("afterend", ele); // 插入到.content1后面
```

```html html
<section id="section">
  <!-- beforebegin -->
  <div class="test">123</div>
  <div class="content1">
    <!-- aterbegin -->
    <div class="test">123</div>
    1
    <!-- beforeend -->
    <div class="test">123</div>
  </div>
  <!-- afterend -->
  <div class="test">123</div>
  <div class="content2">2</div>
  <div class="content3">3</div>
</section>
```

## scrollIntoView()

具体可以参考[gists](https://gist.github.com/zjgyb/f2af146a8cbafdb00b586b72d003c33e)

## 专有扩展

### 文档模式

> 页面的文档模式决定了可以使用什么功能。

例如声明文档模式：

```html html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
```

### children 属性

html 结构如下：

```html html
<section id="section">
  <div class="content1">1</div>
  <div class="content2">2</div>
  234
  <div class="content3">3</div>
</section>
```

这个属性是 HTMLCollection 的实例

```js js
const sec = document.querySelector("#section");
console.log(sec.childNodes); // 包含空白结点
console.log(sec.children); // 只包含元素
```

### contains()方法

确定某个节点是不是另一个节点的后代

```html html
<!-- html结构 -->
<section id="section">
  <div class="content1">1</div>
  <div class="content2">
    <div class="con2"></div>
  </div>
  <div class="content3">3</div>
</section>
```

```js js
const sec = document.querySelector("#section");
const con2 = document.querySelector(".con2");
console.log(sec.contains(con2)); // true
```

#### compareDocumentPosition()

- 1: 无关
- 2: 居前
- 4: 居后
- 8: 包含
- 16: 被包含

```js js
const sec = document.querySelector("#section");
const con1 = document.querySelector(".con2");
console.log(sec.compareDocumentPosition(con1)); // 20 = 居后4 + 被包含16
```

### 插入文本

#### innerText

插入文本

#### outerText

**非标准**，在读模式下和`innerText`一样，在写模式下会替换原来的节点

### 滚动

- scrollIntoViewIfNeeded(alignCenter): **非标准**
- scrollByLines(lineCount): **非标准**，将元素的内容滚动到指定的行高
- scrollByPages(pageCount): **非标准**，将元素滚动到指定的页面高度

因此，如果需要用到滚动的话，还是使用`scrollIntoView()`