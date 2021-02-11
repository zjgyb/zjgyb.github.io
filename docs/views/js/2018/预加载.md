---
layout: '[post]'
title: 预加载
categories: JavaScript
tags:
  - 预加载
  - js
keyword: 预加载 js
description: 预加载简单来说就是将所有所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源...
date: 2018-09-01 16:03:17
copyright: true
---


## 什么是预加载
{% note info %}
预加载简单来说就是将所有所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。避免了后续加载时空白等待，使界面更加友好。
{% endnote %}
## 实现方式——这里实现的是图片的预加载

```js
function preloadImg(imgs) {
  let progress = document.querySelector(".progress");
  let len = imgs.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    let img = new Image();
    img.onload = function() {
      count++;
      if (count === len - 1) {
        // 图片缓存结束后的事件
        progress.innerHTML = "100%";
        document.querySelector(".loading").style.display = "none";
      }
    };
    img.src = imgs[i];
  }
}
// imgs是一个数组，包含图片的路径
preloadImg(imgs);
```
## 基本案例
### 无序的图片缓存
1. 图片的切换——[传送门](http://htmlpreview.github.io/?https://github.com/zjgyb/js-study/blob/master/study/preload.html)
2. 表情的预加载——[传送门](http://htmlpreview.github.io/?https://github.com/zjgyb/js-study/blob/master/study/preload_git.html)

### 有序的图片缓存
1. 图片的切换——[传送门](http://htmlpreview.github.io/?https://github.com/zjgyb/js-study/blob/master/study/preload_order.html)

### 源代码
1. [源代码——图片的切换无序](https://github.com/zjgyb/js-study/blob/master/study/preload.html 'github')
2. [源代码——表情的预加载](https://github.com/zjgyb/js-study/blob/master/study/preload_git.html 'github')
3. [源代码——图片的切换有序](https://github.com/zjgyb/js-study/blob/master/study/preload_order.html 'github')

## 参考资源
+ [慕课网](https://www.imooc.com/learn/502 '慕课网')