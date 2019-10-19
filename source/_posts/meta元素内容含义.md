---
title: meta元素内容含义
category: HTML
tags:
  - meta
  - html
  - 前端
copyright: true
keywords: meta标签 meta标签作用
description: 本文介绍meta标签元素内容以含义
images: /meta元素内容含义/meta.jpg
date: 2019-10-03 21:11:18
---


## 前言

打开VSCode，输入`html:5`，按下`tab`，一个基本的`html`结构出来了，却从未注意过里面某些元素的含义。今天就来总结总结这些重要却不起眼的元素标签`meta`。

## head内各种meta含义

首先meta元素有什么作用呢？看英文版[w3schools](https://www.w3schools.com/tags/tag_meta.asp)

{% note info %}
The **&lt;meta&gt;** tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.
**&lt;meta&gt;**元素标签是提供有关HTML文档的元数据，元数据不会显示在页面上，但是能够被机器识别。
{% endnote %}

总而言之, `meta`标签是用来让机器识别的，同时它对SEO起着重要的作用。

### charset

指定了`html`文档的编码格式，常用的是`utf-8`(Unicode的字符编码)，还有`ISO-8859-1`(拉丁字母的字符编码)。当然还有其他的，但是一般不常用也就不介绍了

```html html
<meta charset="utf-8">
```

### name & content

指定元数据的名称(这部分对SEO非常有用)

#### `author`——定义了页面的作者

```html html
<meta name="author" content="Tony">
```

#### `keywords`——为搜索引擎提供关键字

```html html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

#### `description`——对网页整体的描述

```html html
<meta name="description" content="My tutorials on HTML, CSS and JavaScript">
```

#### `viewport`——对页面视图相关进行定义
- `width=device-width`——将页面宽度设置为跟随屏幕宽度变化而变化
- `initial-scale=1.0`——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)
- `maximum-scale=1.0`——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于`minimum-scale`
- `minimum-scale=1.0`——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于`maximum-scale`
- `user-scalable=no`——是否允许用户手动缩放(yes或者no)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">
```

#### `generator`——包含生成页面软件的标识符

> which contains the identifier of the software that generated the page.

```html html
<meta name="generator" content="Hexo 3.8.0">
```

#### `theme-color`——定义主题颜色

```html html
<meta name="theme-color" content="#222">
```

### http-equiv & content

> Provides an HTTP header for the information/value of the content attribute

#### `refresh`——每30s刷新一次文档

```html html
<meta http-equiv="refresh" content="30">
```

#### `X-UA-Compatible`——告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本

```html html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

{% note warning %}
关于是否有必要使用这一条在[stack overflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)尚且有争议。个人认为如果不想兼容低版本的IE，可以直接忽略这一条。
{% endnote %}

#### `Cache-Control`——请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明

- `no-transform`——不得对资源进行转换或转变。
- `no-siteapp`——禁止百度进行转码

```html html
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="Cache-Control" content="no-siteapp">
```

为什么我会介绍这两个呢？因为[我的博客](https://zjgyb.github.io/)在生成后存在，查了一下原因，正如之前所述，这个是针对百度转码的。具体可以看github的[issue](https://github.com/iissnan/hexo-theme-next/issues/1646)

其他更多内容可以查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

### property & content

可以让网页成为一个**富媒体对象**，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。

```html html
<meta property="og:type" content="website">
<meta property="og:url" content="https://zjgyb.github.io/index.html">
<meta property="og:site_name" content="tony's blog">
```

具体可以参照[The Open Graph protocal](https://ogp.me/)

## 总结

我只总结了一些常用的`meta`标签，其他的不太常用的也就暂时不总结了，如果将来用到再进行补充。总算是有了一些了解。:smile: :joy:

## 参考教程

- [w3school](https://www.w3schools.com/tags/tag_meta.asp)
- [MDN-meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [web教程网](http://www.jsphp.net/html/show-19-15-1.html)
- [segmentfault-Lxxyx开发笔记](https://segmentfault.com/a/1190000004279791)
- [MDN-Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
- [首屏图片](https://www.grammarly.com/blog/meta-meaning/)
