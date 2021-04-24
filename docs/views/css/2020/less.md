---
title: Less语法简介
categories: CSS
tags:
  - Less
copyright: true
description: 介绍Less语法
date: 2020-08-02 23:10:04
keywords:
images:
---


## 变量

### 值变量

使用`@`定义变量

```less
@color: #999;
@bgColor: skyblue;

.box {
  color: @color;
  background-color: @bgColor;
}
```

CSS：

```css
.box {
  color: #999;
  background-color: skyblue;
}
```

### 选择器变量

```less
@mySelector: .box;
@Box: box;

@{mySelector} {
  width: 50%;
  color: #999;
}

.@{Box} {
  color: #ccc;
}

#@{Box} {
  color: #000;
}
```

CSS：

```css
.box {
  width: 50%;
  color: #999;
}

.box {
  color: #ccc;
}

#box {
  color: #000;
}
```

### 属性变量

```less
@color: color;
@red: red;

.box {
  @{color}: @red;
}
```

### url变量

```less
@images: "../img";

.box {
  background-color: url("@{images}/test.png");
}
```

### 声明变量

```less
@background: { background-color: red; };

.box {
  @background();
}
```

### 变量运算

```less
@width: 300px;
@color: #222;

.box {
  width: @width - 20; // 280px
  height: @width - 20 * 5; // 200px
  color: @color * 2; // #444
  background-color: @color + #111; // #333
}
```

### 变量作用域

就近原则

```less
@var: @a;
@a: 100%;

.box {
  width: @var; // 9%
  @a: 9%;
}
```

### 变量定义变量

```less
@abc: 'I am abc';
@var: 'abc';

.box::before {
  content: @@var; // 'I am abc'
}
```

### `$prop`语法

```less
.widget {
  color: #efefef;
  background-color: $color; // background-color: #efefef;
}
```

## 嵌套

### &

代表上一层选择器，与`sass`相同

```less
.link {
  & + & {
    color: red;
  }

  & & {
    color: green;
  }

  && {
    color: blue;
  }

  &, &ish {
    color: cyan;
  }
}
```

CSS

```css
.link + .link {
  color: red;
}

.link .link {
  color: green;
}

.link.link {
  color: blue;
}

.link, .linkish {
  color: cyan;
}
```

### 媒体查询

```less
.box {
  @media (max-width: 768px) {
    width: 100px;
  }

  @media tv {
    width: 200px;
  }
}
```

## 混合方法

就是把一种定义的类混入另一个类之中。

### 无参数、默认参数、方法匹配

```less
.box {
  width: 100px;
}

.container {
  .box;
}

.border(@a: 10px, @b: 20px, @c: 30px, @color: #eee) {
  border: solid 1px @color;
  box-shadow: @argument;
}

.container {
  .border(0, 5px);
}

.border(top, @width: 5px, @color: red) {
  border-color: transparent transparent @color transparent;
}

.border(right, @width: 5px, @color: red) {
  border-color: transparent @color transparent transparent;
}

.container {
  .border(top, 50px);
}
```

### 命名空间

```less
#card() {
  background-color: #eee;

  .d(@w: 300px) {
    width: @w;
  }

  #a(@h: 300px) {
    height: @h;
  }
}

.box {
  #card > .d > #a(100px); // height: 100px
}

.main {
  #card .d(); // width: 300px;
}

.container {
  #card; // background-color: #eee;
  .d(20px); // width: 20px; 注意之前需要引入#card，否则不生效
}
```

### 条件筛选@when

```less
// 或
.font(@size:20px) when (@size>50px), (@size<35px) {
  font-size: @size;
}

// 且
.font1(@size:40px) when (@size>35px) and (@size<50px) {
  font-size: @size;
}

// 非
.font2(@size:40px) when not (@size>50px) {
  font-size: @size;
}

.box {
  .font(10px); // font-size: 10px;
  .font(40px); // 不渲染
  .font1(10px); // 不渲染
  .font1(40px); // font-size: 40px;
  .font2(10px); // font-size: 10px
  .font2(60px); // 不渲染
}
```

### 不定参数

```less
.boxShadow(...) {
  box-shadow: @arguments;
}

.box {
  .boxShadow(1px 2px 3px #eee);
}
```

### important

```less
.border {
  border-color: red;
  border-style: solid;
}

.box {
  .border !important; // .border内属性都会加上!important
}
```

### 循环方法

```less
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i <= @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
```

### 属性拼接

`+_`：代表空格
`+`：代表逗号

```less
.boxShadow {
  box-shadow+: inset 0 0 10px #555;
  transform+_: translateY(-50%);
}

.main {
  .boxShadow;
  box-shadow+: 0 0 20px black; // box-shadow: inset 0 0 10px #555, 0 0 20px black;
  transform+_: scale(0.5); // transform: translateY(-50%) scale(0.5);
}
```

### 函数使用

```less
.average(@x, @y) {
  @result: ((@x + @y) / 2);
}

.box {
  padding: .average(16px, 50px)[@result];
}

@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
}

.navbar {
  display: block;

  @media (min-width: @sizes[tablet]) {
    display: inline-block;
  }
}
```

## 继承

### extend

```less
.box {
  color: red;

  .hide {
    display: none;
  }
}

.container {
  &:extend(.box);
}

.main {
  &:extend(.box .hide);
}

.content {
  .box(); // 也可以是 .box，但官网推荐加一个括号
}
```

```css
.box, .container {
  color: red;
}

.box .hide, .main {
  display: none;
}

.content {
  color: red;
}

.content .hide {
  display: none;
}
```

### all

```less
.box {
  width: 20px;

  &:after {
    content: 'hello world';
  }
}

.main:extend(.box all) {}
```

## 导入

可以在任意位置导入

```less
@import "main"; // = import "main.less";

@import (reference) "bootstrap.less"; // 引入但不编译
@import (once) "test"; // 只会导入一次
@import (multiple) "test"; // 可以导入多次
```

## 函数

- iscolor
- isnumber
- isstring
- iskeyword
- isurl
- ispixed
- ispercentage
- isem
- isunit

```less
isnumber(blue); // false
isnumber(22px); // true
isnumber(20%); // true
iscolor(blue); // true
isurl(blue); // false
```

## 插件@plugin

```js
// 方法一
registerPlugin({
    install: function(less, pluginManager, functions) {
        functions.add('pi', function() {
            return Math.PI;
        });
    }
});

// 方法二
module.exports = {
    install: function(less, pluginManager, functions) {
        functions.add('pi', function() {
            return Math.PI;
        });
    }
};
```

```less
@plugin "my-plugin";
.show-me-pi {
  value: pi();
}
```

## 映射

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## 其他

```less
// 注释1
/* 注释2 */
.box {
  width: ~'calc(300px - 30px)';
  alert:~"`alert(1)`"; // 可以执行js代码，弹出1
}
```

## 参考文章

- [SimonMa《学习Less-看这篇就够了》](https://juejin.im/post/5a2bc28f6fb9a044fe464b19#heading-9)
- [Less中文网](https://less.bootcss.com/#%E6%A6%82%E8%A7%88)