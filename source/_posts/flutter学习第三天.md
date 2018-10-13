---
title: flutter学习第三天
copyright: true
date: 2018-10-08 16:10:56
categories: flutter
tags:
- flutter
- dart
- material
- login
keywords: flutter学习 dart material 第三天hexo
---


## 导读

今天是学习的第三天，如果你还没有阅读过前两天，可以点击[flutter 学习第一天](https://zjgyb.github.io/flutter%E5%AD%A6%E4%B9%A0%E7%AC%AC%E4%B8%80%E5%A4%A9.html)和[flutter 学习第二天](https://zjgyb.github.io/flutter%E5%AD%A6%E4%B9%A0%E7%AC%AC%E4%BA%8C%E5%A4%A9.html)。本文实现的效果和之前没有太多关联，本文的例子来自于官网推荐的[例子](https://codelabs.flutter-io.cn/codelabs/mdc-101-flutter/index.html#0)，你可以点击查看，本文的目的是为了更好的理解所要实现的效果。

## 实现效果

<img src="https://github.com/zjgyb/flutter_study/blob/master/flutter_threeday/assets/flutter_threeday_show.png?raw=true" width="350">

## 预备知识

1. SizeBox 介绍，看图
   ![SizeBox](https://github.com/zjgyb/flutter_study/blob/master/flutter_threeday/assets/sizebox.png?raw=true)
   {% note primary %}
   相当于一个盒子，可以定义宽(width)，高(height)，里面还可以包含子元素(child)，还有其他。本文中 SizeBox 用于隔开其他元素。
   {% endnote %}

2. TextField 介绍，看图
   ![TextField](https://github.com/zjgyb/flutter_study/blob/master/flutter_threeday/assets/textfiled.png?raw=true)
   {% note primary %}
   相当于一个 input 框，用于表单的构建。
   {% endnote %}

## 构建布局

### 第一步

获取[原始代码](https://github.com/material-components/material-components-flutter-codelabs/archive/101-starter.zip)

### 第二步：绘制布局

UI 的 widget 树示意图：

![login_show](https://github.com/zjgyb/flutter_study/blob/master/flutter_threeday/assets/login_show.png?raw=true)

具体构造图位置显示：

![login_show](https://github.com/zjgyb/flutter_study/blob/master/flutter_threeday/assets/flutter_threeday_layout.png?raw=true)

### 第三步：编写 Login 内代码

主要代码

定义两个控件，控制两个 TextField 的行为

```dart
class _LoginPageState extends State<LoginPage> {
  // TODO: Add text editing controllers (101)
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();
```

两个 TextFiled 以及按钮组 ButtonBar 的编写

```dart
// TODO: Add TextField widgets (101)
TextField(
    decoration: InputDecoration(
    filled: true,
    labelText: 'Username',
    ),
    controller: _usernameController,
    autofocus: true,
),

SizedBox(
    height: 12.0,
),

TextField(
    decoration: InputDecoration(
    filled: true,
    labelText: 'Password',
    ),
    obscureText: true,
    controller: _passwordController,
),
// TODO: Add button bar (101)
ButtonBar(
    children: <Widget>[
    FlatButton(
        child: Text('CANCEL'),
        onPressed: () {
            _usernameController.clear();
        _passwordController.clear();
        },
    ),
    RaisedButton(
        child: Text('NEXT'),
        onPressed: () {
        Navigator.pop(context);
        },
    ),
    ],
),
```

## 全部代码

[传送门](https://github.com/zjgyb/flutter_study/tree/master/flutter_threeday)

## 参考教程

- [flutter官网](https://flutter.io)
- [flutter推荐例子](https://codelabs.flutter-io.cn/codelabs/mdc-101-flutter/index.html#0)

## 结束语

刚开始学习flutter，如果有错误之处还希望读者斧正。感谢阅读！