---
title: websocket交互
copyright: true
date: 2019-05-19 16:23:13
category: Node
tags:
  - websocket
  - nodejs
  - express
  - ws
keywords: websocket
description: 关于websocket的简单教程
images:
---

介绍 websocket 的使用
后台(nodejs) ws 包与 websocket 的对接

<!-- more -->

## 背景

之前其实已经写过相关的内容，[socket.io](https://zjgyb.github.io/socket-io%E5%88%9D%E5%B0%9D%E8%AF%95.html)能够很好的实现服务器与客户端之间的双向连接，今天只是对原生的 websocket 进行简单的介绍，当你不需要实现太复杂的功能时可以考虑使用这种方式，当然这也是对最近学 nodejs 的记录。

本文参考《了不起的 node.js》，但是书中`websocket.io`的包在我的 node 版本`v10.13.0`中会报错，而且包很长时间没有跟新，因此我选择了`ws`作为我的代码实例。

## 效果

<video width="100%" height="240" controls>
  <source src="websocket交互/show.mp4" type="video/mp4"/>
</video>

其实是两个页面的转换，每个界面控制一个手势，但是能看到其他界面的手势

## 初始化项目

后端使用了两个包，[express](https://www.npmjs.com/package/express)和[ws](https://www.npmjs.com/package/ws)，如果想要看具体用法请看他们的相关介绍

```shell shell
yarn init -y
yarn add express
yarn add ws
```

## 服务端代码

```js js
const express = require("express");
const app = express();

const WebSocket = require("ws");
// 注意接听的端口和当前服务器启动的端口不能一致，否则会报错
const ws = new WebSocket.Server({ port: 3000 });

// 保存各个界面的手势位置
const positions = {};
let total = 0;

ws.on("connection", socket => {
  socket.id = ++total;

  socket.on("message", msg => {
    let pos = JSON.parse(msg);
    positions[socket.id] = pos;
    broadcast(JSON.stringify({ type: "position", pos, id: socket.id }));
  });

  socket.on("close", () => {
    delete positions[socket.id];
    broadcast(JSON.stringify({ type: "disconnect", id: socket.id }));
  });

  function broadcast(msg) {
    const id = JSON.parse(msg).id;
    ws.clients.forEach((client, index) => {
      // 广播功能，但是不广播当前连接的客户端
      if (client.readyState === WebSocket.OPEN && index !== id) {
        client.send(msg);
      }
    });
  }

  // 一开始连接的时候把其他界面的手势位置发送到当前客户端
  socket.send(JSON.stringify(positions));
});

app.use(express.static("public"));
app.listen(4000, () => {
  console.log("start");
});
```

## 客户端主要代码

```js js
window.onload = () => {
  const ws = new WebSocket("ws://localhost:3000");

  ws.onopen = ev => {
    document.addEventListener("mousemove", fun);
  };

  // 为了一开始能够加载其他界面的手势图片
  let initialized;

  ws.onmessage = (ev) => {
    const obj = JSON.parse(ev.data);

    if (!initialized) {
      initialized = true;
      // 首次加载其他界面的图片
      for (let id in obj) {
        move(id, obj[id]);
      }
    } else {
      if ("disconnect" === obj.type) {
        remove(obj.id);
      } else {
        move(obj.id, obj.pos);
      }
    }
  };

  function fun(ev) {
    ws.send(JSON.stringify({ x: ev.clientX, y: ev.clientY }));
  }

  function move(id, pos) {
    let cursor = document.getElementById("cursor-" + id);

    if (!cursor) {
      cursor = document.createElement("img");
      cursor.id = "cursor-" + id;
      cursor.src = "/cursor.png";
      cursor.style.position = "absolute";
      document.body.appendChild(cursor);
    }

    cursor.style.left = pos.x + "px";
    cursor.style.top = pos.y + "px";
  }

  function remove(id) {
    const cursor = document.getElementById("cursor-" + id);
    cursor.parentNode.removeChild(cursor);
  }
};
```

## 总结

在有需要的时候就可以轻松的使用它了。:smiley: :smiley: :smiley:

完