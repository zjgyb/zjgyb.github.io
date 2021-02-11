---
title: Pug语法小结
copyright: true
date: 2018-08-15 16:12:01
categories: HTML
tags:
  - pug
description: 本文是对Pug语法总结
---

## pug 简介

pug 其实就是一种模板引擎。最终它将渲染成 html 的格式，只不过它比 html 简洁，所以有时候会用 pug 来学 html 代码。近期希望自己总结一下语法，可以时常回顾，而不需要翻看各类介绍。

## pug 用法预览

```pug pug
<!-- pug -->
doctype html
html
   head
      title = "Hello Pug"
   body
      p.greetings#people Hello Views!
```

```html html
<!-- html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Pug</title>
  </head>

  <body>
    <p class="greetings" id="people">Hello Views</p>
  </body>
</html>
```

## 基本用法

### id,class

```pug pug
div#content
div.content
// 只有div可以缩写成以下形式
#content
.content
```

### 标签里含有其他属性（一行或多行都可以）

```pug pug
input(
  type='checkbox'
  name='agreement'
  id='content'
  class='content'
  checked
)
```

### 变量（有多个 class）

```pug pug
- var classes = ["header-box", "wraper"]
div(class=classes) somecode
// 或者直接写入
div(class="header-box wraper")
```

### 文件的引用

```pug pug
script(src="/assets/jquery.min.js")
```

### 注释

```pug pug
// 编译成<!-- -->（可以多行注释）
<!-- some words -->
//- 在pug中注释，但是不编译（可以多行注释）
```

## 代码的重用

### Mixin

使用 mixin 定义一个语法块

```pug pug
mixin list
   ul
     li foo
     li bar
     li baz
```

使用+命令，调用这个 mixin 命令

```pug pug
+list
```

还可以指定参数

```pug pug
mixin pet(name)
  li.pet= name
ul
  +pet('猫')
  +pet('狗')
  +pet('猪')
```

## 高级语法

### pug 的 if,else 语法

```pug pug
#user
  if 1 + 1 === 2
    p.con hello
  else
    p.con wrong
```

### 非

```pug pug
unless 1+1 !== 2
  p.con hello
```

### each——for 的别称

```pug pug
ul
  each val, index in ['〇', '一', '二']
    li= index + ': ' + val
```

### while 语法

```pug pug
- var n = 0;
ul
  while n < 4
    li= n++
```

### 不同文件的引用

```pug pug
//- layout.pug
doctype html
html
   head
      title= title
      meta(name="viewport" content="width=device-width, initial-scale=1")
      block head
   body

   include header.pug

   block body

   include footer.pug

```

```pug pug
//- layout-home.pug
extends ./layout.pug

block head
    link(rel="stylesheet" href="/home/main.css")
block body
  div hello-world
```
