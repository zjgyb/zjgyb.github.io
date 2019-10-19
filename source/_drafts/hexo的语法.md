---
title: hexo的语法
tags:
---

## hexo的note语法

### note
```
{% note %} Content (md partial supported of none) {% endnote %}
{% note default %} Content (md partial supported of default) {% endnote %}
{% note primary %} Content (md partial supported of primary) {% endnote %}
{% note success %} Content (md partial supported of success) {% endnote %}
{% note info %} Content (md partial supported of info) {% endnote %}
{% note warning %} Content (md partial supported of warning) {% endnote %}
{% note danger %} Content (md partial supported of danger) {% endnote %}
```

### 引用

```
{% centerquote %}blah blah blah{% endcenterquote %}
// 或者
{% cq %} blah blah blah {% endcq %}
```

### 图片相关

新建的时候文件名和title一致，如果改了title名，那么存放静态文件的名字也要随之改变，否则将加载不出

```md
![浏览器查看存储信息](web存储&cookie/web.png)
```

### 图片突破宽度限制

```
{% fi /image-url, alt, title %}
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

提交
```
hexo g
hexo d
```
## seo优化
[参考](https://hjptriplebee.github.io/hexo%E7%9A%84SEO%E6%96%B9%E6%B3%95.html/ '参考博客')

## 添加表情

[参考教程](https://novnan.github.io/Hexo/emojis-for-hexo-next/)
[表情地址](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

## 一些插件用法

[插件](https://hexo.io/docs/tag-plugins.html)

## 添加搜素
[搜索功能](https://juejin.im/post/5ad8b40c6fb9a07abd0d314c)

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
    position: absolute;
    right: 0;
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

在`E:\git\zjgyb.github.io\themes\next\source\css\_common\components\post\post-expand.styl`增加了移动端适配

在`E:\git\zjgyb.github.io\themes\next\source\css\_schemes\Pisces\_layout.styl`新镇了`+mobile-smallest()`这一语句

在`E:\git\zjgyb.github.io\themes\next\source\css\_custom\custom.styl`新增了`@media`

在`hexo/themes/next/source/css/ _custom/custom.styl`和`/themes/next/layout/ _macro/post.swig`新增了图片摘要，[参考地址](http://www.wellliu.com/2016/12/30/%E3%80%90%E8%BD%AC%E3%80%91Blog%E6%91%98%E8%A6%81%E9%85%8D%E5%9B%BE/#more)

## 插入JSFiddle

[参考文章](http://www.missfli.com/2018/05/29/github-hexo-next-04.html)

{% note warning %}
放弃JSFiddle的原因是手机响应并不好，而且JSFiddle没有codepen方便
{% endnote %}

## 插入codepen
[参考来源](https://github.com/bibixx/hexo-tag-codepen)

## 参考教程
[hexo官方教程](https://hexo.io/zh-cn/docs/ 'hexo官方教程')

## 问题
添加搜索后压缩会出问题(未解决)