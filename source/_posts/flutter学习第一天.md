---
title: flutter学习第一天
copyright: true
description: <img src="images/flutter_logo.png" width="100%"/>
date: 2018-10-02 10:02:22
categories: flutter
tags:
- flutter
- dart
- material
keywords: flutter学习 dart material
---


## 介绍

flutter 是由 google 开发的一款跨平台的新框架，一套代码能够同时编译成安卓和 IOS。它使用的是 dart 语言，如果有 JS 或者 JAVA 编程语言，那么 dart 上手会变得相对简单。

## 开发环境

- 系统: Win10
- IDE：Andriod Studio
- SDK: v0.8.2-beta

## 实现效果

<img src="images/flutter_oneday.gif" width="350">

## 构建布局

第一步

获取\*[原始代码](https://github.com/flutter/udacity-course/tree/master/course/02_category_widget/task_02_category_widget)

{% note info %} \*这个是优达学城中的项目，它给出了原始代码，我根据它的要求实现
{% endnote %}

第二步：绘制布局
![思路图](images/flutter_mind.png)

第三步：编写代码

根据思路创建最基本的布局

```dart
// category.dart
import 'package:flutter/material.dart';

class Category extends StatelessWidget {
  // TODO: You'll need the name, color, and iconLocation from main.dart
  const Category();

  @override

  Widget build(BuildContext context) {
    // TODO: Build the custom widget here, referring to the Specs.
    return Container(
      child: new InkWell(
        child: new Row(
          children: <Widget>[
            new Padding(
              child:  new Icon(
              ),
            ),
            new Text(
            ),
          ],
        )
      )
    );
  }
}
```

加上样式

```dart
// 第一处
return Container(
    // from here
    height: 100.0, // Widget height
    // padding: const EdgeInsets.all(8.0),
    decoration: new BoxDecoration(
        borderRadius: new BorderRadius.all(
        const Radius.circular(50.0),
        ),
    ),
    // to here
    child: new InkWell(

// 第二处
new Padding(
    padding: new EdgeInsets.all(16.0), // padding around
    child: new Icon(
        Icon.cakes,
        size: 60.0, // Icon size
        ),
    ),

    new Text(
        "Cake",
        style: new TextStyle(
        fontSize: 24.0 // Text size
        ),
    ),
```

添加点击事件
```dart
child: new InkWell(
    splashColor: Colors.green,
    highlightColor: Colors.green,
    borderRadius: new BorderRadius.all(
        const Radius.circular(50.0),
    ),
    onTap: () {
        print("I was tapped!");
    },
```

传参及接收

``` dart
// main.dart
body: Center(
    // TODO: Determine what properties you'll need to pass into the widget
    // 这里是把定义好的参数传到category.dart中
    child: Category(_categoryName, _categoryColor, _categoryIcon),
    ),

// category.dart
// 接受参数
final String name;
final color;
final iconLocation;
const Category(this.name, this.color, this.iconLocation);
```

替换定值
```dart
// replace color
child: new InkWell(
    /* splashColor: green,
     * highlightColor: green,
     */
    splashColor: this.color,
    highlightColor: this.color,
    borderRadius: new BorderRadius.all(

// replace icon
child: new Icon(
    // Icons.cake
    this.iconLocation,
    size: 60.0, // Icon size
    ),

// replace text
new Text(
    // "Cake"
    this.name,
    style: new TextStyle(
    fontSize: 24.0 // Text size
    ),
```

## 全部代码
[传送门](https://github.com/zjgyb/flutter_study)

## 参考资源
- [flutter官网](https://flutter.io)
- [优达学城项目代码](https://github.com/flutter/udacity-course/tree/master/course/02_category_widget/task_02_category_widget)
- [优达学城课程](https://classroom.udacity.com/courses/ud905/lessons/92a39eec-0c04-4d98-b47f-c884b9cd5a3b/concepts/434cfc1b-b9d4-4ff9-a723-38b4e5cfaae4)

## 结束语
flutter我也是才刚开始学习，如果有错误之处还希望读者斧正。感谢阅读！