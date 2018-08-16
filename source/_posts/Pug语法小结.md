---
title: Pug语法小结
copyright: true
date: 2018-08-15 16:12:01
categories: 前端
tags:
- pug
---

## pug简介
pug其实就是一种模板引擎。最终它将渲染成html的格式，只不过它比html简洁，所以有时候会用pug来学html代码。近期希望自己总结一下语法，可以时常回顾，而不需要翻看各类介绍。
## pug用法预览
``` pug
<!-- pug -->
doctype html
html
   head
      title = "Hello Pug"
   body
      p.greetings#people Hello Views!
```
``` html
<!-- html -->
<!DOCTYPE html>
<html>
    
   <head>
      <title>Hello Pug</title>
   </head>
    
   <body>
      <p class = "greetings" id = "people">Hello Views!</p>
   </body>
</html>
```
## 基本用法
### id,class
``` pug
div#content
div.content
// 只有div可以缩写以下形式
#content
.content
```
### 标签里含有其他属性（一行或多行都可以）
``` pug
input(
  type='checkbox'
  name='agreement'
  id='content'
  class='content'
  checked
)
```
### 文件的引用
``` pug
script(src="/assets/jquery.min.js")
```
### 注释
``` pug
// 编译成<!-- -->（可以多行注释）
<!-- some words -->
//- 在pug中注释，但是不编译（可以多行注释）
```
## 代码的重用
### Mixin
使用mixin定义一个语法块
``` pug
mixin list
   ul
     li foo
     li bar
     li baz
```
使用+命令，调用这个mixin命令
``` pug
+list
```
还可以指定参数
``` pug
mixin pet(name)
  li.pet= name
ul
  +pet('猫')
  +pet('狗')
  +pet('猪')
```
## 高级语法
### pug的if,else语法
``` pug
#user
  if 1 + 1 === 2
    p.con hello
  else
    p.con wrong
```
### 非
``` pug
unless 1+1 !== 2
  p.con hello
```
### each——for的别称
``` pug
ul
  each val, index in ['〇', '一', '二']
    li= index + ': ' + val
```
### while语法
``` pug
- var n = 0;
ul
  while n < 4
    li= n++
```