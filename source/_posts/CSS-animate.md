---
title: CSS-animate
tags:
  - CSS
  - animation
copyright: true
description: 介绍CSS动画需要用到的属性以及制作好看的动画
images: /CSS-animate/css-animate.png
date: 2019-07-16 13:44:53
category: CSS
keywords:
---

## 说明一下

因为自己经常会忘相关的属性，因此在介绍动画之前首先介绍这些CSS属性及属性值

## box-shadow

`box-shadow: h-shadow v-shadow blur spread color inset;`

| 值 | 说明 |
| :--- | :--- |
| h-shadow | 水平阴影的位置 :heavy_check_mark: |
| v-shadow | 垂直阴影的位置 :heavy_check_mark: |
| blur | 模糊距离 |
| spread | 阴影的大小 |
| color | 阴影的颜色 |
| inset | 阴影改为内侧 |

## animation

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

| 值 | 说明 |
| :--- | :--- |
| name | 动画名。配合@keyframes使用 |
| duration | 动画完成时间 |
| time-function | 规定动画完成方式 |
| delay | 动画开始前的延迟时间 |
| iteration-count | 动画的播放次数 |
| direction | 动画运动的方向 |
| fill-mode | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。:question: (不理解，之后用到回来补充) |
| play-state | 指定动画是否运行 |
| initial | 设置为默认值 |
| inherit | 从父元素继承属性 |

## 制作一个蛇形loading

我将其分成4步

第一步

![第一步](/CSS-animate/first-step.png)

第二步

![第二步](/CSS-animate/second-step.png)

第三步

![第三步](/CSS-animate/third-step.png)


第四步

![第四步](/CSS-animate/forth-step.png)


## 最终效果

{% codepen LKKvXZ result %}

## 总结

本文作为学习CSS动画的开头，希望能够加强自己动画方面的能力。:smile:

## 参考视频

- [YouTube](https://www.youtube.com/watch?v=MajaScL0lCs)