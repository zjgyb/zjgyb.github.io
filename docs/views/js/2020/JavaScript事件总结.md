---
title: JavaScript事件总结
categories: JavaScript
tags:
  - 事件冒泡
  - 事件捕获
  - 事件处理程序
  - 事件委托
  - 事件模拟
copyright: true
description: 本文是介绍JavaScript事件方法，参考自高程13章
images: /DOM2和DOM3/gc.png
date: 2019-12-31 20:47:49
keywords:
---


## 前言

本文根据高程中的十三章来写的，相当于个人的读书笔记。

## 事件流

> 事件流描述的是从页面中接收事件的顺序。

### 事件冒泡

> IE 的事件流叫做事件冒泡，即事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。

### 事件捕获

> 事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。尽管“DOM2 级事件”规范要求事件应该从 document 对象开始传播，但浏览器都是从 window 对象开始捕获事件。

### DOM 事件流

> “DOM2 级事件”规定的事件流包括三个阶段：事件捕获阶段、处于事件目标阶段和事件冒泡阶段。

## 事件处理程序

> 事件就是用户或浏览器自身执行的某种动作。诸如 click、load 和 mouseover，都是事件的名字。而响应某个事件的函数就叫做**事件处理程序**，事件处理程序的名字都是以“on”开头。

### HTML 事件处理程序

直接写到 HTML 里的事件(不推荐使用)：

```html html
<button class="btn" onclick="alert('hello world!')">hello world</button>
```

### DOM0 级事件处理程序

> 通过 JS 指定事件处理程序的传统方式，就是将一个函数赋值给一个事件处理程序属性。使用 DOM0 级方法指定的事件处理程序被认为是元素的方法。

```html html
<button class="btn">hello world</button>
<script>
  const btn = document.querySelector(".btn");
  btn.onclick = () => {
    alert("hello world!");
  };
</script>
```

### DOM2 级事件处理程序

> “DOM2 级事件”定义了两个方法，用于处理和删除事件处理程序的操作：addEventListener()和 removeEventListener()。所有 DOM 节点都有这两个方法，接收三个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。如果这个布尔值参数为 true，那么在捕获阶段调用事件处理程序，否则在冒泡阶段调用，默认是 false。

```html html
<button class="btn">hello world</button>
<script>
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    alert("hello world!");
  });
</script>
```

> 与 DOM0 级方法一样，这里添加的事件处理程序也是在其依附的元素的作用域中运行。使用 DOM2 级方法添加事件处理程序的主要好处是可以添加多个事件处理程序。

### IE 事件处理程序

attachEvent()和 detachEvent()，因其不是规范标准，故不介绍。

## 事件对象

> 在触发 DOM 上的某个事件时，会产生一个事件对象 event，这个对象包含着所有与事件相关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。

### DOM 中的事件对象

> 兼容 DOM 的浏览器会将一个 event 对象传入到事件处理程序中。无论指定事件处理程序使用什么方法，都会传入 event 对象。

所有事件都会有下列的成员，以下成员只读

- bubbles(Boolean): 表示事件是否冒泡
- cancelable(Boolean): 表示是否可以取消事件的默认行为
- currentTarget(Element): 表示事件处理程序当前处理事件的那个元素
- defaultPrevented(Boolean): 为 true 表示已经调用了 preventDefault()（DOM3 级事件中新增）
- detail(Integer): 与事件相关的细节，对 click 或者 dbclick，为当前点击数量 1、2，对于 mousedown 或者 mouseup 事件，是 1 加上当前点击数，对于其他事件总是 0
- eventPhase(Integer)：调用事件处理程序的阶段，1 表示捕获阶段，2 表示“处于目标”，3 表示冒泡阶段
- preventDefault(): 取消事件的默认行为
- stopImmediatePropagation(): 取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用（DOM3 级）
- stopPropagation(): 取消事件的进一步捕获或冒泡
- target(Element): 事件的目标
- trusted(Boolean): 为 true 表示事件是浏览器生成的，为 false 表示事件是由开发人员创建的
- type(String): 被触发的事件的类型，例如 click 事件显示`click`
- view(AbstractView): 与事件关联的抽象视图，浏览器中就是 window 对象

阻止事件的默认行为，`preventDefault()`，例如点击链接导航到 href 指向的 URL，阻止它使用该方法。

### IE 中的事件对象

- cancelBubble(Boolean), 读/写，默认值是 false，设置 true 能够取消事件冒泡（等同于 stopPropagation()）
- returnValue(Boolean), 读/写，默认值是 true，可以取消事件的默认行为（等同于 preventDefault()），注意 Firefox 不支持
- srcElement: 只读，与(target 属性获取的值相同)
- type: 只读，被触发的事件类型

现在在大多高版本的 IE 支持 DOM 的传统语法，因此这些方法只做了解。

## 事件类型

### UI 事件

当用户与页面上的元素交互时触发

#### load 事件

当页面完全加载后（包括所有图像、JavaScript 文件、CSS 文件等外部资源），就会触发 window 上面的 load 事件。

```js js
window.addEventListener("load", e => {
  // next
});
```

#### unload

当页面完全卸载后在 window 上面触发，当所有框架都卸载后在框架集上面触发。

#### resize 事件

当窗口或框架的大小变化时在 window 或框架上面触发，该事件可以考虑防抖或者节流

```js js
window.addEventListener("resize", e => {
  // next
});
```

#### scroll 事件

当用户滚动带滚动条的元素中的内容时，在该元素上面触发。

```js js
window.addEventListener("scroll", e => {
  // nex
});
```

### 焦点事件

- blur: 在元素失去焦点时触发。该事件不会冒泡
- focus: 在元素获得焦点时触发。该事件不会冒泡
- focusin: 在元素获得焦点时触发。与 focus 等价，但它冒泡
- focusout: 在元素失去焦点时触发。

当焦点从一个元素转到另一个元素，依次触发下列事件，focusout(失去焦点元素触发)->focusin(获得焦点元素触发)->blur(失去焦点元素触发)->DOMFocusOut(失去焦点元素触发)->focus(获得焦点元素触发)->DOMFocusIn(获得元素触发)

### 鼠标与滚轮事件

#### 鼠标事件

> 只有在同一个元素上相继触发 mousedown 和 mouseup 事件，才会触发 click 事件；只要其中有一个被取消，就不会触发 click 事件。

- click
- dblclick
- mousedown: 在用户按下了任意鼠标按钮时触发
- mouseenter: 在鼠标光标从元素外部首次移动到元素范围内触发
- mouseleave
- mousemove
- mouseout
- mouseover: 与 mouseenter 功能类似，区别是 mouseover 在子元素之间切换或者父元素过渡到子元素都能监听到，而 mouseenter 在监听元素内任意过渡无影响
- mouseup

#### 坐标

- clientX, clientY: 鼠标指针在视口的水平和垂直坐标
- pageX, pageY: 鼠标指针在非视口的水平和垂直坐标，在没有滚动的情况下 pageX(Y)等于 clientX(Y)
- screenX, screenY: 鼠标指针相对于整个屏幕的坐标信息

#### 鼠标滚轮事件

- mousewheel：firefox 不支持，当用户向前滚动时，wheelDelta 是 120 的倍数；当用户向后滚动时，wheelDelta 是-120 的倍数
- DOMMouseScroll: firefox 滚动事件，当用户向前滚动时，detail 是-3 的倍数；当用户向后滚动时，wheelDelta 是 3 的倍数

```js js
document.addEventListener("mousewheel", e => {
  const { wheelDelta } = e;
  console.log(wheelDelta);
});
```

#### 注意点

1. 触摸设备不支持 dbclick 事件
2. 两个手指放到屏幕上且页面随手指移动而滚动时会触发 mousewheel 和 scroll 事件

### 键盘和文本事件

> keydown 和 keypress 都是在文本框发生变化之前被触发，而 keyup 事件则是文本框已经发生变化之后被触发的

- keydown: 当用户按下任意键时触发
- keypress: 当用户按下键盘上的字符键时触发
- keyup: 当用户释放键盘上的键时触发

#### 键码

event.keyCode，下面列举几个常见的键码：

- Backspace: 8
- Tab: 9
- Enter: 13
- Shift: 16
- Ctrl: 17
- Alt: 18
- Left Arrow: 37
- Up Arrow: 38
- Right Arrow: 39
- Down Arrow: 40
- 数字小键盘 0: 96
- F1: 112

#### 字符编码

charCode: 这个属性只有在发生 keypress 事件时才包含值，而且这个值是按下键所代表的 ASCII 编码

#### DOM3 级变化

- key
- char
- keyIndentifier

```js js
document.addEventListener("keypress", e => {
  const { key, char } = e;
  console.log("key is", key); // key is 5
});
```

#### textInput 事件

> 根据规范，当用户在可编辑区域中输入字符时，就会触发事件。

```js js
const text = document.getElementById("text");
text.addEventListener("textInput", e => {
  const { data } = e;
  // 用户输入的字符，单个字符输出
  console.log(data);
});
```

### 复合事件

> 是 DOM3 级事件中新添加的一类事件，用于处理 IME 的输入序列。

### 变动事件

> DOM2 级的变动事件能在 DOM 中的某一部分发生变化时给出提示。

### HTML5 事件

#### contentmenu 事件

比如点击右键禁止出现菜单

```js js
const box = document.getElementById("box");
box.addEventListener("contentmenu", e => {
  e.preventDefault();
});
```

#### beforeunload

> 是为了让开发人员有可能在页面卸载前(关闭或者刷新)阻止这一操作。

```js js
window.addEventListener("beforeunload", function(e) {
  const msg = "I'm really going to miss you if you go.";
  e.returnValue = msg;
  return msg;
});
```

#### DOMContentLoaded

> 支持在页面下载的早期添加事件处理程序，这就意味着用户能够尽早地与页面进行交互。

#### readystatechange

> 这个事件的目的是提供与文档或者元素的加载状态有关的信息。

#### pageshow、pagehide

#### hashchange

> 以便在 URL 的参数列表(即 URL 中#号后面的所有的字符串)发生变化时通知开发人员。

使用这个 API 是一种路由的切换方式之一

### 设备事件

#### orientationchange

0 表示肖像模式(通俗讲的 home 键在下面的时候)，90 表示向左旋转的横向模式(主屏幕按钮在右侧)，-90 表示向右旋转的横向模式(主屏幕按钮在左侧)，180 表示向下

```js js
window.addEventListener("orientationchange", function() {
  alert(window.orientation);
});
```

### 触摸与手势事件

- touchstart: 当手指触摸屏幕时触发
- touchmove: 当手指在屏幕上滑动时连续地触发
- touchend: 当手指从屏幕上移开时触发

每个触摸事件的 event 对象都提供了鼠标事件中的常见的属性：bubbles、cancelable、view、detail、altKey、shiftKey、ctrlKey、metaKey，还有**touches**、**targetTouchs**、**changeTouches**

每个 touch 对象包含下列属性

- clientX: 触摸目标在视口中的 x 坐标
- clientY: 触摸目标在视口中的 y 坐标
- identifier: 标识触摸的唯一 ID
- pageX: 触摸目标在页面中的 x 坐标
- pageY: 触摸目标在页面中的 y 坐标
- screenX
- screenY
- target: 触摸的 DOM 节点目标

```js js
window.addEventListener("touchstart", e => {
  const { touches, target } = e;
  console.log(touches[0].clientX);
});
```

#### 手势事件

只有 Safari 支持，因此不推荐使用

- gesturestart: 当一个手指已经按到屏幕上面另一个手指又触摸屏幕时触发
- gesturechange: 当触摸屏幕的任何一个手指的位置发生变化时触发
- gestureend: 当一个手指从屏幕上移开时触发

## 内存和性能

### 事件委托(事件代理)

> 事件委托利用了事件冒泡，只指定一个处理程序就可以管理某一类型的所有事件。最合适采用事件委托的事件包括 click、mousedown、mouseup、keydown、keyup、keypress

```html html
<ul id="lists">
  <li>test1</li>
  <li>test2</li>
</ul>
```

```js js
// 可以不用为每个li添加点击事件，利用事件冒泡只需要绑定父元素上就可以使子元素也能绑定点击事件
const lists = document.querySelector("#lists");
lists.addEventListener("click", e => {
  const name = e.target.nodeName.toLowerCase();
  if (name === "li") {
    console.log(e.target.innerText);
  }
});
```

### 移除事件处理程序

```js js
const btn = document.getElementById("myBtn");
btn.onclick = function() {
  btn.onclick = null; // 移除事件处理程序
  // Todo ...
};
```

## 模拟事件

- createEvent: 创建event对象
- dispatchEvent: 触发事件

```html html
<button id="btn1">hello</button> <button id="btn2">world</button>
```

```js js
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
btn1.onclick = () => {
  console.log(123);
};

// 点击btn2相当于点击btn1
btn2.onclick = () => {
  const event = document.createEvent("MouseEvents");
  event.initMouseEvent("click");
  // 上面这两句可以使用 const event = new Event('click')替代
  btn1.dispatchEvent(event);
};
```

## 结语

2019年快要结束了，2020年即将来临，在此我希望未来能够越来越美好，愿家人安好，愿大家快乐！！！