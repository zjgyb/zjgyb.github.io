---
title: vuepress-theme-reco问题及解决措施
date: 2021-02-14
categories:
 - 其他
---

## sass-loader报错

```
TypeError: this.getOptions is not a function
```

解决措施：降级node-sass和sass-loader

## 最新包1.6.5问题

问题：安装到最新包但是报themeConfig`undefined`问题
答：目前1.6.1版本没有问题

## 打包问题

包`1.6.1`：
打包出现`(node:2649) UnhandledPromiseRejectionWarning: ReferenceError: document is not defined`

## 路由问题

中文的title使用`document.querySelect`会报错

## 插件问题

### @vuepress/plugin-medium-zoom

需要调整值

```js
module.exports = [
  [
    "@vuepress/medium-zoom",
    {
      selector: ".page img", // 默认值修改
    },
  ]
]
```

### @vuepress/plugin-pwa

没有自动生成`service-worker`，猜测可能由于打包没有完全成功造成的原因或者是主题包问题
