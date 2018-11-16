---
title: socket.io初尝试
copyright: true
photos:
  - images/socket-io.jpg
date: 2018-11-16 21:06:33
category: JavaScript
tags:
  - socket.io
  - js
  - express
  - server
  - browser
keywords: socket.io初尝试 express server browser 初尝试 socket.io
description:
---


{% note primary %}
socket-io 能够实现实时、双向、基于事件通讯。它能够在平台、浏览器、设备中运行，并且关注于它的可靠性与速度。
{% endnote %}

<!-- more -->

## 前言

说起 socket.io，我一下想起的是 QQ，虽然我没有去了解过 QQ 是怎么通讯的，然而看到这个框架，我就对它产生了兴趣，想去实现多人在线通讯。之前看到过有人用这个看法智能机器人，也就是你问问题后通过你的相关字来回答你的问题。我是通过[官网](https://socket.io/)和[youtube](https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9&index=1)上的视频来学习这一框架。

## 实现效果

![soket-io](images/soket-io.gif)

## 语法讲解

因为服务器和浏览器所对应有两套代码，因此，所用的代码会存在差异，后端采用的`express`。

### 以下是 express 中的代码

`io.on('connection', fun)`是当设备访问时建立连接，通常的用法是：

```js js
io.on("connection", socket => {
  // ...
});
```

`socket.on('name', fun)`是当浏览器需要传值的时候建立的连接，并且返回相应事件，通常的用法是：

```js js
// 这个函数包含在上一函数之中，其中name自己取
socket.on("name", data => {
  // ...
});
```

`io.emit('name', fun)`是在`socket.on()`之中需要从服务器返回信息给浏览器，浏览器根据传回的数据进行相应的修改，通常的用法是：

```js js
io.emit("chat message", data);
```

`io.broadcast.emit('name', fun)`跟`io.emit()`类似，不同的是它会向其他用户发送消息，这在当某一个人上线时提醒其他人的时候发挥作用

### 以下是浏览器方面的代码

最简单的用法:

```js js
// 先引入包，然后实例化，这样其实就简单的应用起来了
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js" />;
let socket = io();
```

`socket.emit()`发送数据，对应的是服务器端接收的函数是`socket.on()`，而服务器端发送的数据`io.emit()`，则浏览器接收的数据使用`socket.on()`

```js js
// 发送
socket.emit("name", message.value);

// 接收
socket.on("name", data => {
  // ...
});
```

## 实现的主要代码

### express

```js js
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", socket => {
  // 当一个设备连接时会打印出console.log
  console.log("a user connected");
  // 定义的datas其实是定义连接设备的用户名，当注册完成后能够存下来
  let datas;
  socket.on("chat message", data => {
    io.emit("chat message", {
      data: data,
      datas
    });
  });

  socket.on("typing", data => {
    datas = data;
    socket.broadcast.emit("typing", data);
  });
});
```

### browser

```html html
<ul id="messages"></ul>
<form>
  <input id="m" type="text" /> <button type="button" id="btn">Send</button>
</form>
<div class="name">
  <input
    type="text"
    id="username"
    class="username"
    placeholder="请输入你的用户名"
  />
</div>
```

```js js
let socket = io();

// 点击butoon按钮把用户的信息发往服务器
btn.addEventListener("click", () => {
  socket.emit("chat message", message.value);
  message.value = "";
});

// 一开始需要输入的用户名
username.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    name = username.value;
    socket.emit("typing", username.value);
    let con = document.querySelector(".name");
    con.style.display = "none";
  }
});

// 按下Enter键把用户的信息发往服务器
m.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    socket.emit("chat message", message.value);
    message.value = "";
  }
});

// 用户发言的内容展示出来
socket.on("chat message", data => {
  let messages = document.getElementById("messages");
  messages.innerHTML += `<li>${data.datas}说：${data.data}</li>`;
});

// 提示其他用户一个用户已上线
socket.on("typing", data => {
  alert(data + "上线了");
});
```

## 全部代码

[github](https://github.com/zjgyb/js-study/tree/master/socket-io)

## 参考来源

- [官网](https://socket.io/)
- [youtube](https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9&index=1)

## 结语

每天学习一点，进步一点:smile:
