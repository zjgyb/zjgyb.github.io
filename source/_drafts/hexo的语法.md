---
title: hexo的语法
tags:
---

## hexo的note语法
```
{% note %} Content (md partial supported of none) {% endnote %}
{% note default %} Content (md partial supported of default) {% endnote %}
{% note primary %} Content (md partial supported of primary) {% endnote %}
{% note success %} Content (md partial supported of success) {% endnote %}
{% note info %} Content (md partial supported of info) {% endnote %}
{% note warning %} Content (md partial supported of warning) {% endnote %}
{% note danger %} Content (md partial supported of danger) {% endnote %}
```

## 草稿相关
新建
``` hexo
hexo new draft title
```
发布
``` hexo
hexo publish [post] title
```
启动
`hexo s --draft`

## seo优化
[参考](https://hjptriplebee.github.io/hexo%E7%9A%84SEO%E6%96%B9%E6%B3%95.html/ '参考博客')
## 参考教程
[hexo官方教程](https://hexo.io/zh-cn/docs/ 'hexo官方教程')