---
title: 不蒜子busuanzi失效
copyright: true
date: 2018-10-13 20:37:50
tags:
  - 不蒜子
  - hexo
  - 统计人数
keywords: 不蒜子 统计人数失效 hexo next主题 busuanzi
photos:
  - images/busuanzi.png
---

> 不蒜子统计人数失效

<!-- more -->

最近发现博客最下面的统计人数居然失效了，不知道出了什么问题，谷歌了一下才发现原来是不蒜子域名更改了，因此需要换一下引用资源。

在`themes/next/layout/_third-party/analytics/busuanzi-counter.swig`中
把以下代码

```js js
<script src="https://dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js" />
```

改成

```js js
<script src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" />
```
