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

## 添加表情

[参考教程](https://novnan.github.io/Hexo/emojis-for-hexo-next/)
[表情地址](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

## 一些插件用法

[插件](https://hexo.io/docs/tag-plugins.html)

## 修改记录

在`zjgyb.github.io\themes\next\source\css\_common\components\highlight\highlight.styl`中添加了如下代码

``` styl
figcaption {
    clearfix();
    font-size: 1em;
    color: $highlight-foreground;
    line-height: 1em;
    margin-bottom: 1em;
    // from here
    float: right;
    color: #ccc;
    padding: 5px 10px 0;
    // to here
    a {
      float: right;
      color: $highlight-foreground;

      &:hover { border-bottom-color: $highlight-foreground; }
    }
}
```


在`zjgyb.github.io\themes\next\source\css\_common\components\sidebar\sidebar-author.styl`中修改了头像css样式

## 插入JSFiddle

[参考文章](http://www.missfli.com/2018/05/29/github-hexo-next-04.html)

## 参考教程
[hexo官方教程](https://hexo.io/zh-cn/docs/ 'hexo官方教程')