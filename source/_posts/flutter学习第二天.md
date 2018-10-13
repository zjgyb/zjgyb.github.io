---
title: flutter学习第二天
copyright: true
description: <img src="images/flutter_twoday.png" width="100%"/>
date: 2018-10-04 11:10:12
categories: flutter
tags:
- flutter
- dart
- material
keywords: flutter学习 dart material 第二天
---


## 导读

在[flutter 学习第一天](https://zjgyb.github.io/flutter%E5%AD%A6%E4%B9%A0%E7%AC%AC%E4%B8%80%E5%A4%A9.html)已经介绍了 flutter 的相关知识，开发环境，今天完成的效果是基于第一天的。

## 实现效果

<img src="images/flutter_twoday_show.gif" width="350">

## 预备知识

1. padding 介绍，看图
   ![padding](./images/padding.png)
   针对 padding 有三种常用方式，例如`EdgeInsets.symmetric(vertical: 8.0),`就是水平方向左右 padding 各为 8.0
   如果还没有理解，那么请点击**[传送门](https://github.com/zjgyb/flutter_study/blob/master/flutter_twoday/README.md#padding%E7%9A%84%E5%9B%BE%E7%89%87%E4%BB%8B%E7%BB%8D)**

2. AppBar 介绍，看图
 ![AppBar](./images/flutter_twoday_appbar.png)

## 构建布局

### 第一步

获取\*[原始代码](https://github.com/flutter/udacity-course/tree/master/course/03_category_route/task_03_category_route)

{% note info %} \*这个同样是优达学城中的项目，它给出了原始代码。
{% endnote %}

### 第二步：绘制布局

![思路图](./images/flutter_twoday_layout.png)

### 第三步：编写代码

Container里的代码

```dart
// TODO: Create a list of the eight Categories, using the names and colors
// 定义categories数组
var categories = new List();
for(var i = 0; i < _categoryNames.length; i++) {
    categories.add(Category(name: _categoryNames[i], color: _baseColors[i], iconLocation: icon));
}

// 使用ListView构建布局
// TODO: Create a list view of the Categories
final listView = Container(
    color: background, // 上面已经定义了颜色 final background = Colors.green[100];
    padding: EdgeInsets.symmetric(vertical: 8.0),
    child: new ListView.builder(
        itemCount: categories.length,
        itemBuilder: (context, i) {
            return categories[i];
        },
    ),
);
```

appBar里的代码

```dart
final appBar = AppBar(
    title: Text(
    'Unit Converter',
    style: new TextStyle(
            fontSize: 30.0,
            color: Colors.black,
        ),
    ),
    centerTitle: true,
    backgroundColor: background, // background前面已说明
    elevation: 5.0,
);
```

## 全部代码
[传送门](https://github.com/zjgyb/flutter_study/tree/master/flutter_twoday)

## 参考资源
- [flutter官网](https://flutter.io)
- [优达学城项目代码](https://github.com/flutter/udacity-course/tree/master/course/03_category_route/task_03_category_route)
- [优达学城课程](https://classroom.udacity.com/courses/ud905/lessons/92a39eec-0c04-4d98-b47f-c884b9cd5a3b/concepts/a253cee9-7f83-4fbf-b00f-1b82621a0853)

## 结束语

刚开始学习flutter，如果有错误之处还希望读者斧正。在[flutter学习第三天](https://zjgyb.github.io/flutter%E5%AD%A6%E4%B9%A0%E7%AC%AC%E4%B8%89%E5%A4%A9.html)中，我将根据官网的例子继续学习。感谢阅读！