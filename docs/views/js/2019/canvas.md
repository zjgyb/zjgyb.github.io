---
layout: "[post]"
title: canvas基础
date: 2018-08-27 10:28:49
categories: 前端
tags:
  - js
  - API
  - html5
  - canvas
copyright: true
keywords: canvas html5 js 前端 canvas基础
description: canvas这个元素负责在页面中设定一个区域，然后通过JS动态的在这个区域中绘制图形。
---

## 概述——什么是 Canvas

> canvas 这个元素负责在页面中设定一个区域，然后通过 JS 动态的在这个区域中绘制图形。

## 语法

### 基本介绍

一般前两个都是要画元素的开始坐标，后两个一般是要画元素本身的配置

### strokeRect()

绘制一个无填充矩形

```js
ctx.strokeRect(20, 20, 150, 100);
// 等同于
ctx.rect(20, 20, 150, 100);
ctx.stroke();
```

### fillRect()

绘制一个填充矩形

```js
ctx.fillRect(20, 20, 150, 100);
// 等同于
ctx.rect(20, 20, 150, 100);
ctx.fill();
```

### beginPath()

起始一条路径或者重置当前路径

```js
ctx.beginPath();
```

### translate();

改变画布的(0, 0)点也就是原点

```js
ctx.translate(20, 30);
```

### moveTo()和 lineTo()

前一个是把路径移动到指定点，后一个是添加一个新点，两者往往一起使用

```js
ctx.moveTo(10, 10);
ctx.lineTo(50, 50);
```

### arc()

画圆的基本语法

```js
// 最后一个参数为可选参数，默认false为逆时针
ctx.arc(100, 75, 50, 0, 2 * Math.PI, false);
```

### rotate()

旋转的基本语法

```js
ctx.rotate((20 * Math.PI) / 180);
```

### clearRect()

清除画布的基本语法

```js
ctx.clearRect(20, 20, 100, 50);
```

## canvas 的使用

### 在 html 页面插入 canvas

```html html
<canvas id="content" width="200" height="200"></canvas>
```

### 插入一张图片

```js
const content = document.querySelector("#content");
let ctx = content.getContext("2d");
let image = new Image();
image.onload = function() {
  ctx.drawImage(image, 0, 0, content.width, content.height);
  // 加入文字渲染
  ctx.font = "36pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "#fff";
  ctx.fillText("This is a pug", content.width / 2, 50);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.strokeText("This is a pug", content.width / 2, 50);
};

image.src =
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mops-duke-mopszucht-vom-maegdebrunnen.jpg";
```

效果图
<canvas id="con1" width="250" height="250"></canvas>

### 绘制一个时钟

<canvas id="clock" width="200" height="200"></canvas>

<script>
setTimeout(() => {
    (function() {
        const content = globalThis?.document?.querySelector('#con1');
        if (!content) {
            return;
        }
        let ctx = content.getContext('2d');
        let image = new Image();
        image.onload = function() {
            ctx.drawImage(image, 0, 0, content.width, content.height);

            // 加入文字渲染
            ctx.font = '36pt Impact';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#fff';
            ctx.fillText('This is a pug', content.width / 2, 50);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
            ctx.strokeText('This is a pug', content.width / 2, 50);
        }

        image.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Mops-duke-mopszucht-vom-maegdebrunnen.jpg';

    })();

    (function() {

        let clock = globalThis?.document?.querySelector('#clock');
        if (!clock) {
            return;
        }
        let ctx = clock.getContext('2d');
        let r = ctx.canvas.width / 2;

        function drawclock() {
            ctx.beginPath();
            ctx.translate(r, r);
            ctx.lineWidth = 10;
            ctx.arc(0, 0, r - 5, 0, 2 * Math.PI);
            ctx.stroke();

            let font = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
            let rad = 2 * Math.PI / 12;
            let fontR = r - 30;
            ctx.font = "18px Arial"
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            font.forEach((num, i) => {
                let x = fontR * Math.cos(i * rad);
                let y = fontR * Math.sin(i * rad);
                ctx.fillText(num, x, y);
            });

            // 画外围小圆
            let radForSixty = 2 * Math.PI / 60;
            let smallRad = r - 15;
            for (let i = 0; i < 60; i++) {
                ctx.beginPath();
                let x = smallRad * Math.cos(i * radForSixty);
                let y = smallRad * Math.sin(i * radForSixty);
                if(i % 5 === 0) {
                    ctx.fillStyle = '#000';
                    ctx.arc(x, y, 2, 0, 2 * Math.PI);
                } else {
                    ctx.fillStyle = '#eee';
                    ctx.arc(x, y, 2, 0, 2 * Math.PI);
                }

                ctx.fill();
            }

        };

        // 画时针
        function drawHour(hour, min) {
            ctx.save();
            let hourRad = hour * Math.PI / 6;
            let minRad = min * Math.PI / 360;
            ctx.rotate(hourRad + minRad);
            let len = r / 2 - 20;
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(0, 10);
            ctx.lineTo(0, -len);
            ctx.stroke();
            ctx.restore();
        }

        function drawMinute(min) {
            ctx.save();
            ctx.beginPath();
            ctx.rotate(min * 2 * Math.PI / 60);
            ctx.lineWidth = 5;
            let len = r - 45;
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(0, 10);
            ctx.lineTo(0, -len);
            ctx.stroke();
            ctx.restore();
        }

        function drawSecond(second) {
            ctx.save();
            ctx.beginPath();
            ctx.rotate(second * 2 * Math.PI / 60);
            ctx.fillStyle = 'red';
            let len = r - 20;
            ctx.lineCap = "round";
            ctx.moveTo(-2, 10);
            ctx.lineTo(-1, -len);
            ctx.lineTo(1, -len);
            ctx.lineTo(2, 10);
            ctx.fill();

            // 画中心小圆
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.arc(0, 0, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }

        setInterval(() => {
            ctx.save();
            ctx.clearRect(0, 0, 2* r, 2 * r);
            drawclock();
            let date = new Date();
            let hour = date.getHours();
            if(hour - 12 > 0) {
                hour -= 12;
            }
            let minute = date.getMinutes();
            let seconds = date.getSeconds();
            drawHour(hour, minute);
            drawMinute(minute);
            drawSecond(seconds);
            ctx.restore();
        }, 1000);

    })();
}, 2000);
</script>

[时钟源代码](https://github.com/zjgyb/js-study/blob/master/study/canvas_time.html "时钟源代码")

## 参考教程

- [优达学城](https://classroom.udacity.com/courses/ud292 "优达学城")
- [慕课网](https://www.imooc.com/learn/612 "慕课网")
- [W3school](http://www.w3school.com.cn/tags/html_ref_canvas.asp "W3school")
