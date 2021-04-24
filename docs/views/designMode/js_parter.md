---
title: JavaScript设计模式之中介者模式
categories: 设计模式
tags:
  - 中介者模式
copyright: true
description: 本文是介绍的是JavaScript中介者模式
images: /JavaScript设计模式之中介者模式/bg.jpg
date: 2020-03-20 23:10:06
keywords:
---


## 前言

本文聊的是中介者模式，参考自曾探的《JavaScript 设计模式与开发实践》，相当于个人读书笔记。

## 定义

> 中介者模式的定义：用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。

中介者模式使网状的多对多关系变成相对简单的一对多关系。

## 例子-购买商品

这个例子的内容是：编写一个手机购买的页面，在购买流程中选择手机的颜色以及输入购买的数量，有两个区域显示选择的颜色和输入的数量，同时还有一个按钮用来提示信息。

以下是html代码：

```html html
<div>
  选择颜色：
  <select id="colorSelect">
    <option value="">请选择</option>
    <option value="red">红色</option>
    <option value="blue">蓝色</option>
  </select>
  购买的数量：
  <input type="text" id="numberInput" />
  选择的颜色：
  <span id="colorInfo"></span>
  输入的数量：
  <span id="numberInfo"></span>
  <button id="nextBtn" disabled>请选择手机颜色和购买数量</button>
</div>
```

以下是js代码：

```js js
const colorSelect = document.getElementById("colorSelect");
const numberInput = document.getElementById("numberInput");
const colorInfo = document.getElementById("colorInfo");
const numberInfo = document.getElementById("numberInfo");
const nextBtn = document.getElementById("nextBtn");
const goods = {
  red: 3,
  blue: 6
};

colorSelect.addEventListener("change", function() {
  const color = this.value;
  const number = numberInput.value;
  const stock = goods[color];
  colorInfo.innerText = color;

  if (!color) {
    // select未选择时
    nextBtn.disabled = true;
    nextBtn.innerText = "请选择手机颜色";
    return;
  }

  if (!(Number.isInteger(number - 0) && number > 0)) {
    nextBtn.disabled = true;
    nextBtn.innerText = "请输入正确的购买数量";
    return;
  }

  if (number > stock) {
    nextBtn.disabled = true;
    nextBtn.innerText = "库存不足";
    return;
  }

  nextBtn.disabled = false;
  nextBtn.innerText = "放入购物车";
});

numberInput.addEventListener("input", function() {
  const color = colorSelect.value;
  const number = this.value;
  const stock = goods[color];
  numberInfo.innerText = number;
  if (!color) {
    nextBtn.disabled = true;
    nextBtn.innerText = "请选择手机颜色";
    return;
  }

  if (!(Number.isInteger(number - 0) && number > 0)) {
    nextBtn.disabled = true;
    nextBtn.innerText = "请输入正确的购买数量";
    return;
  }

  if (number > stock) {
    nextBtn.disabled = true;
    nextBtn.innerText = "库存不足";
    return;
  }

  nextBtn.disabled = false;
  nextBtn.innerText = "放入购物车";
});
```

实现的基本思路是：在选择颜色或者输入购买数量时，获取其他区域的值来判断按钮该显示什么信息。判断思路如下：

1. 手机颜色是否已选，如未选则按钮显示**请选择手机颜色**
2. 手机数量输入框是否输入正整数，如输入错误按钮显示**请输入正确的购买数量**
3. 接下来判断手机库存是否充足，若不充足按钮显示**库存不足**
4. 如果前面条件都不满足，那么按钮显示**放入购物车**

### 新需求

现在有了新需求，客户不仅需要选择颜色和输入数量，同时还需要选择内存。

以下是html代码：

```html html
<div>
  选择颜色：
  <select id="colorSelect">
    <option value="">请选择</option>
    <option value="red">红色</option>
    <option value="blue">蓝色</option>
  </select>
  选择内存：
  <select id="memorySelect">
    <option value="">请选择</option>
    <option value="64G">64G</option>
    <option value="128G">128G</option>
  </select>
  购买的数量：
  <input type="text" id="numberInput" />
  选择的颜色：
  <span id="colorInfo"></span>
  选择的内存：
  <span id="memoryInfo"></span>
  输入的数量：
  <span id="numberInfo"></span>
  <button id="nextBtn" disabled>请选择手机颜色和购买数量</button>
</div>
```

以下是js代码：

```js js
const colorSelect = document.getElementById("colorSelect");
const memorySelect = document.getElementById("memorySelect");
const numberInput = document.getElementById("numberInput");
const colorInfo = document.getElementById("colorInfo");
const numberInfo = document.getElementById("numberInfo");
const nextBtn = document.getElementById("nextBtn");
const goods = {
  "red|128G": 3,
  "red|64G": 0,
  "blue|128G": 1,
  "blue|64G": 6
};

colorSelect.addEventListener("change", function() {
  const color = this.value;
  const memory = memorySelect.value;
  const number = numberInput.value;
  const stock = goods[color + "|" + memory];
  colorInfo.innerText = color;

  if (!color) {
    // select未选择时
    nextBtn.disabled = true;
    nextBtn.innerText = "请选择手机颜色";
    return;
  }

  if (!memory) {
    nextBtn.disabled = true;
    nextBtn.innerText = "请选择手机内存大小";
    return;
  }

  if (!(Number.isInteger(number - 0) && number > 0)) {
    nextBtn.disabled = true;
    nextBtn.innerText = "请输入正确的购买数量";
    return;
  }

  if (number > stock) {
    nextBtn.disabled = true;
    nextBtn.innerText = "库存不足";
    return;
  }

  nextBtn.disabled = false;
  nextBtn.innerText = "放入购物车";
});

// 增加memorySelect事件
memorySelect.addEventListener("change", function() {});
// 修改numberInput事件
numberInput.addEventListener("input", function() {});
```

实现的基本思路是：在原先的基础上新增一个是否选择内存的判断条件，同时还需要增加选择内存这个选择事件框改变时的状态代码。

从这中间我们发现新增了大量的代码，同时如果再新增条件时，那么在每个事件中新增代码，这大大增加了代码量，因此需要更好的方式书写代码。

### 引入中介者

通过增加一个中介者来使所有的节点对象相互通信，从原先的多对多，变成现在的一对多

```js js
const goods = {
  "red|128G": 3,
  "red|64G": 0,
  "blue|128G": 1,
  "blue|64G": 6
};

const mediator = (() => {
  const colorSelect = document.getElementById("colorSelect");
  const memorySelect = document.getElementById("memorySelect");
  const numberInput = document.getElementById("numberInput");
  const colorInfo = document.getElementById("colorInfo");
  const numberInfo = document.getElementById("numberInfo");
  const nextBtn = document.getElementById("nextBtn");
  return {
    changed(obj) {
      const color = colorSelect.value;
      const memory = memorySelect.value;
      const number = numberInput.value;
      const stock = goods[color + "|" + memory];
      if (obj === colorSelect) {
        colorInfo.innerText = color;
      } else if (obj === memorySelect) {
        memoryInfo.innerText = memory;
      } else if (obj === numberInput) {
        numberInfo.innerText = number;
      }
      if (!color) {
        // select未选择时
        nextBtn.disabled = true;
        nextBtn.innerText = "请选择手机颜色";
        return;
      }

      if (!memory) {
        nextBtn.disabled = true;
        nextBtn.innerText = "请选择手机内存大小";
        return;
      }

      if (!(Number.isInteger(number - 0) && number > 0)) {
        nextBtn.disabled = true;
        nextBtn.innerText = "请输入正确的购买数量";
        return;
      }

      if (number > stock) {
        nextBtn.disabled = true;
        nextBtn.innerText = "库存不足";
        return;
      }

      nextBtn.disabled = false;
      nextBtn.innerText = "放入购物车";
    }
  };
})();

colorSelect.addEventListener("change", function() {
  mediator.changed(this);
});

memorySelect.addEventListener("change", function() {
  mediator.changed(this);
});

numberInput.addEventListener("input", function() {
  mediator.changed(this);
});
```

实现的基本思路是利用闭包，同时各个事件把自身当成参数传入到中介者中，然后所有改变的事情都在中介者中定义，这样就避免了因新增需求而改变每个事件内的代码。


## 总结

优点：中介者模式使各个对象之间得以解耦，以中介者和对象之间的一对多关系取代了对象之间的网状多对多关系，各个对象只需要关注自身功能的实现，对象之间的交互关系交给了中介者对象来实现和维护。

缺点：系统中增加一个中介者对象，因为对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者过于庞大，难以维护。

因此应该根据实际需要判断是否引入中介者。