---
title: JavaScript设计模式之策略模式
categories: 设计模式
tags:
  - 策略模式
copyright: true
description: 本文是介绍的是JavaScript策略模式
images: /JavaScript设计模式之策略模式/bg.jpeg
date: 2020-03-11 10:25:21
keywords:
---


## 前言

本文聊的是策略模式，参考自《JavaScript 设计模式与开发实践》，相当于个人读书笔记。

## 定义

> 策略模式的定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换

一个基于策略模式的程序至少由两部分组成。一部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二部分是环境类 Context，Context 接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明 Context 中要维持对某个策略对象的引用

## 计算奖金

```js js
// 这个是策略类
const strategies = {
  S(salary) {
    return salary * 4;
  },
  A(salary) {
    return salary * 3;
  },
  B(salary) {
    return salary * 2;
  }
};

// 这个是环境类 接收客户的请求
const calculateBonus = (level, salary) => {
  return strategies[level](salary);
};

console.log(calculateBonus("S", 20000)); // 80000
console.log(calculateBonus("A", 10000)); // 30000
```

## 实现缓动动画

```html html
<!-- 这是html代码 -->
<div
  id="box"
  style="position: absolute; width: 100px; height: 100px; background-color: blueviolet;"
>
  test box
</div>
```

```js js
// 策略模式定义动画效果，这是策略类
const tween = {
  linear(t, b, c, d) {
    return (c * t) / d + b;
  },
  easeIn(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn(t, b, c, d) {
    return c * (t /= d) * t ** 4 + b;
  },
  strongEaseOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t ** 4 + 1) + b;
  },
  sineaseIn(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
};

class Animate {
  constructor(dom) {
    this.dom = dom;
    this.startTime = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propertyName = null; // dom节点需要被改变的css属性名，例如left, right
    this.easing = null; // 动画效果
    this.duration = null; // 动画持续时间
  }

  start(propertyName, endPos, duration, easing) {
    this.startTime = Date.now();
    this.startPos = this.dom.getBoundingClientRect()[propertyName];
    this.propertyName = propertyName;
    this.endPos = endPos;
    this.duration = duration;
    this.easing = tween[easing]; // 这是环境类
    const timeId = setInterval(() => {
      if (this.step() === false) {
        clearInterval(timeId);
      }
    }, 19);
  }

  step() {
    let t = Date.now();
    if (t >= this.startTime + this.duration) {
      this.updated(this.endPos);
      return false;
    }

    let pos = this.easing(
      t - this.startTime,
      this.startPos,
      this.endPos - this.startPos,
      this.duration
    );
    this.updated(pos);
  }

  updated(pos) {
    this.dom.style[this.propertyName] = pos + "px";
  }
}

// 测试动画
const box = document.getElementById("box");
const animate = new Animate(box);
animate.start("left", 500, 1000, "strongEaseOut");
// animate.start("top", 500, 1000, "strongEaseOut");
```

## 实现表单校验

```html html
<!-- html代码 -->
<form action="/test.com/register" id="registerForm" method="post">
  请输入用户名：<input type="text" name="username" /> 请输入密码：<input
    type="text"
    name="password"
  />
  请输入手机号码: <input type="text" name="phoneNumber" />
  <button type="submit">提交</button>
</form>
```

### 第一版

没有使用策略模式：

```js js
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", e => {
  if (registerForm.username.value === "") {
    alert("用户名不能为空");
    return e.preventDefault();
  }

  if (registerForm.password.value.length < 6) {
    alert("密码长度不能少于6位");
    return e.preventDefault();
  }

  if (!/^1[3|5|8][0-9]{9}$/.test(registerForm.phoneNumber.value)) {
    alert("手机号码格式不正确");
    return e.preventDefault();
  }
});
```

### 第二版

使用策略模式增加可拓展性

```js js
// 策略类
const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === "") {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg;
    }
  }
};

// 环境类
class Validator {
  constructor() {
    this.cache = [];
  }

  add(dom, rule, errorMsg) {
    const ary = rule.split(":");
    this.cache.push(() => {
      const strategy = ary.shift(); // 取出规则名
      ary.unshift(dom.value); // 第一个参数为value值
      ary.push(errorMsg); // 第二个参数为errorMsg值
      return strategies[strategy].apply(dom, ary);
    });
  }

  start() {
    for (let i = 0; i < this.cache.length; i++) {
      let msg = this.cache[i]();
      if (msg) {
        return msg;
      }
    }
  }
}

const validateFunc = form => {
  const validate = new Validator();
  validate.add(form.username, "isNonEmpty", "用户名不能为空");
  validate.add(form.password, "minLength:6", "密码长度不能少于6位");
  validate.add(form.phoneNumber, "isMobile", "手机号码格式不正确");
  const errorMsg = validate.start();

  return errorMsg;
};

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", e => {
  const errorMsg = validateFunc(registerForm);
  if (errorMsg) {
    alert(errorMsg);
    return e.preventDefault();
  }
});
```

### 单个表单多个校验

`validate.add`方法中第二个参数变成数组实现单个表单的多个校验

```js js
class Validator {
  constructor() {
    this.cache = [];
  }

  add(dom, rule) {
    for (let i = 0; i < rule.length; i++) {
      const errorMsg = rule[i].errorMsg;
      const ary = rule[i].strategy.split(":");
      this.cache.push(() => {
        const strategy = ary.shift(); // 取出规则名
        ary.unshift(dom.value); // 第一个参数为value值
        ary.push(errorMsg); // 第二个参数为errorMsg值
        return strategies[strategy].apply(dom, ary);
      });
    }
  }

  start() {
    for (let i = 0; i < this.cache.length; i++) {
      let msg = this.cache[i]();
      if (msg) {
        return msg;
      }
    }
  }
}

// 策略类
const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === "") {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg;
    }
  }
};

const validateFunc = form => {
  const validate = new Validator();
  validate.add(form.username, [
    { strategy: "isNonEmpty", errorMsg: "用户名不能为空" },
    { strategy: "minLength:6", errorMsg: "用户名长度不能少于6位" }
  ]);
  validate.add(form.password, [
    { strategy: "minLength:6", errorMsg: "密码长度不能少于6位" }
  ]);
  validate.add(form.phoneNumber, [
    { strategy: "isMobile", errorMsg: "手机号码格式不正确" }
  ]);
  const errorMsg = validate.start();

  return errorMsg;
};

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", e => {
  e.preventDefault();
  const errorMsg = validateFunc(registerForm);
  if (errorMsg) {
    alert(errorMsg);
    return e.preventDefault();
  }
});
```

## 总结

优点：

- 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句
- 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的 strategy，使得它们易于切换，易于理解，易于扩展
- 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作
- 在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，是继承中轻便的替代方案

缺点：

- 使程序增加许多策略类或者策略对象
- strategy 要向客户暴露它所有实现，同时了解各个 strategy 不同之处
