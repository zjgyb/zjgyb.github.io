---
title: package.json字段含义
categories: 前端
tags:
  - package.json字段
  - 字段含义
copyright: true
description: 对package.json字段进行解释说明
images: /package-json字段含义/bg.jpeg
date: 2020-02-20 21:39:21
keywords:
---


## 前言

每次使用node构建项目的时候在根目录都会有一个`package.json`文件，里面包含了项目的依赖、名字、版本、协议等基本信息，方便我们构建环境以及了解项目的基本结构，因此有必要去了解它，下面会对其字段进行讲解。

## 基本的配置

下面都是一些简单的配置，能够一行描述清楚

- name: 项目的名称
- version: 项目的版本
- description: 项目的描述信息，在NPM中描述包的重要搜索内容
- keywords: 一个数组，从字面意思也可知道描述项目的关键词，也有利于搜索
- license: 该项目的协议，是否允许商用等权限，有`MIT`、`ISC`、`GPL`等
- author: 项目的作者
- contributors: 项目的贡献者
- main: 项目的入口文件
- private: 是否是私有库

```json json
{
  "name": "test",
  "version": "0.0.1",
  "private": true,
  "main": "app.js",
  "description": "test package by Tony",
  "keywords": ["Vue", "Node", "JavaScript"],
  "author": "Tony",
  "contributors": [{
    "name": "Tom",
    "email": "email@email.com",
    "url": "https://www.example.com/"
  }]
}
```

## scripts

指定了运行npm命令缩写，直接使用缩写能够避免每次都要输入很长的命令，有点像webpack的别名

```json json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

## dependencies、devDependencies

- dependencies: 项目运行所依赖的模块
- devDependencies: 项目开发所需要的模块，在生产中不需要

一般来说，在介绍安装包的时候都有命令提示这个是项目运行所依赖的模块还是项目开发所需要的模块，例如使用`yarn add node-sass`就是项目运行所依赖的模块，使用`yarn add jest -D`就是项目开发所需要的模块

```json json
{
  "dependencies": {
    "node-sass": "^4.12.0"
  },
  "devDependencies": {
    "jest": "^25.1.0"
  }
}
```

### 版本号

在使用这两个字段的时候你会发现每个按照包后面有版本号(例如`^4.12.0`)，这个非常重要，能够方便别人搭建环境时获取相关的包，防止因版本号不一致问题导致项目出错。

- `4.12.0`: 代表安装这个版本的安装包
- `^4.12.0`: 安装`4.x.x`的最新版本(不低于4.12.0)
- `~4.12.0`: 安装的版本是4.12.x的最新版本
- `latest`: 安装最新版本

## peerDependencies

用来供插件指定其所需要的主工具的版本。例如A模块是B模块的插件，然而用户安装了B模块1.0版本，但是A插件只能和2.0版本的B模块一起使用，这时需要提醒用户需要安装的是B的2.0版本
```json json
{
  "peerDependencies": {
    "vue": "^2.5.17"
  }
}
```

## bin

用来指定各个内部命令对应的可执行文件的位置，有点类似别名

```json json
{
  "bin": {
    "test": "./bin/test.js"
  },
  "script": {
    "start": "test build"
  }
}
```

## repository

记录项目代码所在的资源库

```json json
{
  "repository": {
    "type": "git",
    "url": "git@github.com:zjgyb/zjgyb.github.io.git"
  }
}
```

## files

项目根目录的文件夹名

```json json
{
  "files": ["lib", "src", "package", "types"]
}
```

## homepage

项目主页URL

```json json
{
  "homepage": "https://zjgyb.github.io/"
}
```

## bugs

提交bug的地方

```json json
{
  "bugs": "https://github.com/zjgyb/zjgyb.github.io/issues"
}
```

## style

指定样式文件所在的位置

```json json
{
  "style": "lib/theme-chalk/index.css"
}
```

## 总结

这里包含了大部分`package.json`的字段，还有一部分我认为没那么重要或者我还没发现，如果以后需要再进行补充

## 参考文章

- [阮一峰JavaScript标准参考教程](https://javascript.ruanyifeng.com/nodejs/packagejson.html#toc0)
