---
title:  jekyll介绍
categories: 开发者手册
tags: jekyll
copyright: true
---

### 如何开启本地服务
* `bundle exec jekyll serve`
* 但是一般用以下命令，优点是及时刷新 `bundle exec jekyll serve --livereload`

### 主要文件夹的介绍
* `_config.yml` 常量的存放地址，可以随意调用
* `_drafts` 存放草稿的位置，一般用于未发表前，查看效果的命令`bundle exec jekyll serve --drafts`

### 主要命令的介绍
* { { page.title } } 主要是用于编写当前网站的相关信息
* { { site.title } } 描述本网站的title，在`_config.yml`中配置

### 需要注意的地方
+ 不能新建一个超过日期的文件

### 文件能够使用中文名
[参考](http://blog.tanpeng.net/2017/03/07/jekyll-luanma/ 'jekyll文件使用中文名配置')

### 给文章添加分类
{ % for post in site.categories.categories_name % }
{ % endfor % }

### 加入摘要功能
在`_config.yml`文件中加入下列命令
excerpt_separator: '&lt;!-- more --&gt;'

在文章中加入`&lt;!-- more --&gt;`，那么之前的内容就是摘要部分，或者在开头加入`excerpt: content`，其中`content`就是摘要内容

### 添加css 语法

\{: .cssName\}

### 参考来源
[jekyll官网](https://jekyllrb.com/ 'jekyll官网')