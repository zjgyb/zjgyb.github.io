---
title: DOM总结
categories: JavaScript
tags:
  - DOM
  - JavaScript
  - Node
  - Document
  - DocumentFragment
  - Table
copyright: true
keywords: DOM总结
description: 本文是对JavaScript的DOM语法总结
images: /JS字符串方法总结/tony.png
date: 2019-11-24 20:57:37
---


## 前言

因最近在看高程第十章，因此总结一下第十章DOM。

## node 类型

使用的html事例：

```html html
<section id="box">
  <div class="content1"></div>
  <div class="content2"></div>
  <div class="content3"></div>
</section>
```

### nodeType, nodeName, nodeValue

- nodeType: 有十二种节点类型，常用的是`Node.ElEMENT_NODE(1)`、`Node.ATTRIBUTE_NODE(2)`、`Node.TEXT_NODE(3)`
- nodeName: 元素的标签名，大写
- nodeType: 值始终为`Null`

```js js
const box = document.querySelector("#box");
box.nodeType; // 1
box.nodeType === Node.ELEMENT_NODE; // true
box.nodeName; // SECTION
box.nodeValue; // null
```

### childNodes

保存着一个 NodeList 对象，NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点

注意这里有可能会获取到空白的文本节点，也就是`Node.TEXT_NODE`

```js js
const box = document.querySelector("#box");
box.childNodes[1] === box.childNodes.item(1); // true
```

firstChild, lastChild, parentNode, nextSibling, previousSibling

```js js
const box = document.querySelector("#box");
const childNodes = box.childNodes;
console.log(childNodes); // text, .content1, text, .content2, text, .content3, text -> length = 7
childNodes.firstChild; // undefined(因为获取的第一个节点是空白节点)
childNodes.lastChild; // undefined(同firstChild
childNodes.item(1).parentElement; // #box这个节点
childNodes[0].nextSibling; // .content1这个节点
childNodes[2].previousSibling; // .content1这个节点
```

### hasChildNodes()

是否拥有子节点

```js js
box.hasChildNodes(); // true
childNodes.item(1).hasChildNodes(); // false
```

### ownerDocument

表示整个文档的文档节点

```js js
childNodes.item(1).ownerDocument === box.ownerDocument; // true
box.ownerDocument.nodeType; // 9
```

### appendChild()、insertBefore()、replaceChild()、removeChild()、cloneNode()

- appendChild(node): 向末尾添加一个节点，如果传入的节点是原来的一部分，则调换位置
- insertBefore(newNode, refernceNode): 插入的节点和参照的节点
- replaceChild(newNode, oldChild): 替换节点
- removeChild(node): 移除节点
- cloneNode(bool): 克隆节点，bool 代表是否深拷贝，需要注意的是可能会造成 ID 重复

#### appendChild

```js js
// .content1到末尾 与空白节点调换位置
// 等同于const lastChild = box.insertBefore(childNodes.item(1), null)
const lastChild = box.appendChild(childNodes.item(1));
console.log(lastChild === childNodes[6]); // true
```

视觉上变成如下代码块所示

```html html
<section id="box">
  <div class="content2"></div>
  <div class="content3"></div>
  <div class="content1"></div>
</section>
```

#### insertBefore

```js js
const lastChild = box.insertBefore(childNodes.item(3), childNodes.item(1));
```

视觉上变成如下代码块所示

```html html
<section id="box">
  <div class="content2"></div>
  <div class="content1"></div>
  <div class="content3"></div>
</section>
```

#### replaceChild

```js js
const replaceNode = box.replaceChild(childNodes.item(3), childNodes.item(1));
```

视觉上变成如下代码块所示

```html html
<section id="box">
  <div class="content2"></div>
  <div class="content3"></div>
</section>
```

#### removeChild

```js js
const removeNode = box.removeChild(childNodes[3]);
```

视觉上变成如下代码块所示

```html html
<section id="box">
  <div class="content1"></div>
  <div class="content3"></div>
</section>
```

#### cloneNode

```js js
const node = box.cloneNode(); // #box复制了一份，内部没有复制
const node = box.cloneNode(true); // #box复制了一份，内部也复制了
```

### remove()

把对象从它所属的DOM树中删除。

```html html
<div id="box"></div>
```

```js js
const box = document.getElementById('box');
box.remove(); // 移除id为box的div
```

## document 类型

表示整个文档

```js js
document.nodeType; // 9
document.nodeName; // #document
document.nodeValue; // null
document.parentNode; // null
document.ownerDocument; // null
document.documentElement; // html节点
document.body; // body节点
```

### 文档信息

- title
- URL: 取得完整的 URL
- domain: 取得域名
- referrer: 来源页面的 URL，例如通过 google 搜索一个页面，然后点击进入搜索到的一个页面，那么`document.referrer`为`https://www.google.com/`

```js js
document.title; // test1
document.URL; // http://127.0.0.1:5501/index.html
document.domain; // 127.0.0.1
document.referrer; // http://127.0.0.1:5501/index.html
```

### 查找元素

- getElementById(id): 以 id 获取元素，不存在返回 null
- getElementsByTagName(tagname): 以标签名获取元素集合，该对象为`HTMLCollection`，与`NodeList`对象类似，相比而言，多了`namedItem()`方法
- getElementsByName(name): 以 name 属性获取元素集合，返回的是`NodeList`，IE 和 Edge 返回的是`HTMLCollection`

```js js
const div = box.getElementsByTagName("div");
// <div class="content1" name="name"></div>
div.namedItem("name"); // 这样能获取.content1元素
```

### 创建元素

createElement(name): 创建新元素

```js js
const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);
```

### 特殊集合

这些集合返回的都是`HTMLCollection`

- document.anchors: **已废弃**，返回所有带 name 特性的`a`标签
- document.applets: **已废弃**
- document.forms: 等同于`document.getElementsByTagName('form')`返回的结果
- document.images: 等同于`document.getElementsByTagName('img')`返回的结果
- document.links: 包含文档中所有带 href 特性的`a`标签

### 文档写入

- document.write(): 原样写入
- document.writeln(): 原样写入，同时末尾加换行符
- document.open(): 重新打开一个空白文档
- document.close(): 关闭文档，但是在最新 chrome 测试发现不起作用

## Element 类型

用于表现 HTML 元素

例如：

```html html
<section id="box">
  <div class="content1" name="123"></div>
  <div class="content2"></div>
  <div class="content3"></div>
</section>
```

```js js
const box = document.getElementById("box");
box.nodeType === 1; // true
box.nodeName; // SECTION
box.tagName === box.nodeName; // true
box.nodeValue; // null
```

### HTML 元素特性

html 结构如下

```html html
<p id="p" class="class-p" title="content" data_attr="hello!">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
```

```js js
const p = document.getElementById("p");
console.log(p.id); // p
console.log(p.className); // class-p
console.log(p.title); // content
console.log(p.data_attr); // undefined
```

### 取得、设置、移除特性

- getAttribute(name): 取得特性，没有时返回 null，一般情况下取到相应属性直接在对象上取，在使用该方法时一般取自定义特性值
- setAttribute(name, value): 设置特性，没有时创建该属性并设置相应的值，一般情况下直接通过对象属性设置，例如`p.id = 'p1'`，自定义特性使用该方法
- removeAttribute(name): 移除元素的特性

```js js
console.log(p.getAttribute("id")); // p
console.log(p.getAttribute("class")); // class-p
console.log(p.getAttribute("data_attr")); // hello!

p.setAttribute("id", "p1"); // p的id从p变成p1
p.removeAttribute("id"); // p的id属性移除
```

### attributes 属性

attributes 属性中包含一个 NamedNodeMap，与 NodeList 类似，也是一个“动态”集合。

```js js
box.attributes.getNamedItem("id").nodeValue === "box"; // true
box.attributes["id"].nodeValue = "box2"; // 把id值为box改为box2
const oldAttr = box.attributes.removeNamedItem("id"); // 删除id节点，与removeAttribute()方法不同的是会返回被删除特性的Attr节点——即oldAttr有值
```

### 查找元素

getElementsByTagName(name): 用法与 document 相同，区别是一个是从 document 查找，另一个是从所选特定元素查找

## Text 类型

因其在开发中没怎么用过，所以只做了解，等后续用到补充。

- document.createTextNode(text)
- normalize(): 在父元素上调用，把所有的文本节点合并成一个
- splitText(num): 将一个文本节点分成两个文本节点

## Comment 类型

取注释内容，因此很少用到，只做了解。

## DocumentFragment 类型

> 在所有的节点类型中，只有`DocumentFragment`在文档中没有对应的标记。DOM 规定文档片段是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。

以下案例是该节点类型的应用：

```html html
<ul id="myList"></ul>
<script>
  const fragment = document.createDocumentFragment();
  const ul = document.getElementById("myList");
  let li = null;
  for (let i = 0; i < 3; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i + 1)));
    fragment.appendChild(li);
  }

  ul.appendChild(fragment);
</script>
```

## Attr类型

> 元素的特性在DOM中以Attr类型来表示。在所有的浏览器中，都可以访问Attr类型的构造函数和原型。

## 操作表格

> `table`元素是HTML中最复杂的结构之一。想要创建表格，一般都必须涉及表格行、单元格、表头等方面的标签。由于涉及的标签多，因而使用的核心DOM方法创建和修改表格往往都免不了要编写大量的代码。

### 为table元素添加的属性和方法

- caption: 保存着对caption元素的指针
- tBodies: 是一个tbody元素的HTMLCollection
- tFoot: 保存着对tfoot元素的指针
- tHead: 保存着对thead元素的指针
- rows: 是一个表格中所有行的HTMLCollection
- createTHead(): 创建`<thead>`元素，将其放到表格中，返回引用
- createTFoot(): 创建`<tfoot>`元素，将其放到表格中，返回引用
- createCaption(): 创建`<caption>`元素，将其放到表格中，返回引用
- deleteTHead(): 删除`<thead>`元素
- deleteTFoot(): 删除`<tfoot>`元素
- deleteCaption(): 删除`<caption>`元素
- deleteRow(pos): 删除指定位置的行
- insertRow(pos): 向rows集合中的指定位置插入一行

### 为tbody元素添加的属性和方法

- rows: 保存着tbody元素中行的HTMLCollection
- deleteRow(pos): 删除指定位置的行
- insertRow(pos): 向rows集合中的指定位置插入一行，返回对新插入行的引用

### 为tr元素添加的属性和方法

- rows: 保存着tr元素单元格中的HTMLCollection
- deleteRow(pos): 删除指定位置的单元格
- insertRow(pos): 向cells集合中的指定位置插入一个单元格，返回对新插入单元格的引用

## 参考资料

- JavaScript高级程序设计