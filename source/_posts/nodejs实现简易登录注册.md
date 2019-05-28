---
title: nodejs实现简易登录注册
copyright: true
date: 2019-05-22 22:33:49
category: Node
tags:
  - nodejs
  - express
  - body-parser
  - express-session
  - login
  - signp
keywords: node express body-parser express-session
description: nodejs实现登录注册
images:
---


**介绍Nodejs登录与注册并实现与MongoDB数据储存与查询**

<!-- more -->

## 背景

之前一直都有学过Node，但是没怎么上心，然而现在有业务需求同时也希望自己多掌握点技能，因此下定决心学习Node。本文内容还是参考《了不起的Node.js》里面的案例，但只是参考了一部分。

项目例子采用MVC模式

项目结构
```md
|- view
|   |- login.pug
|   |- signup.pug
|   |- layout.pug
|- model
|   |- server.js
|- controller
|   |-index.js
|- index.js
```

所需要的包，其中`express-session`验证用户信息的。
```js json
{
  ...
  "dependencies": {
    "express": "^4.16.4",
    "body-parser": "^1.19.0",
    "express-session": "^1.16.1"
  }
  ...
}
```

## 注册

### 公共模板

```pug pug
doctype 5
html
  head
    title MongoDB example
  body
    h1 My first MongoDB app
    hr
    block body
```

### 注册界面

```pug pug
//- signup.pug
extends layout
block body
  form(action="/signup", method="POST")
    fieldset
      legend Sign up
      p
        label First
        input(name="first", type="text")
      p
        label Last
        input(name="last", type="text")
      p
        label Email
        input(name="email", type="text")
      p
        label Password
        input(name="password", type="text")
      p
        button Submit
      p
        a(href="/") Go back
```

### 后端代码

```js js
// index.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', urlencodedParser, controller.postSignUp);

app.listen(3000, () => {
  console.log('start');
});
```

```js js
// controller/index.js
const model = require('../model/server');
exports.postSignUp = (req, res) => {
  const { first, last, email, password} = req.body;
  // 交由model来存储数据
  model.insert({
    first,
    last,
    email,
    password
  }, (num) => {
    if (num === -1) {
      res.redirect('/error'); // 这里其实是跳转错误界面，这些细节就不介绍了
      return;
    }
    if (1 === num) {
      res.redirect(`/login/${email}`);
      return;
    }
  })
};
```

```js js
// model/server.js
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "student";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const col = client.db(dbName).collection("classes");
  // 插入数据
  exports.insert = (data, next) => {
    col.insertOne(data,
      err => {
        if (err) {
          next(-1);
          return;
        }
        next(1);
      }
    );
  };
});
```

## 登录

### 登录界面

```pug pug
extends layout
block body
  form(action="/login", method="POST")
    fieldset
      legend Log in
      if (signupEmail)
        p Congratulations on signing up! Please login below
      p
        label Email
        input(name="email", type="text", value=signupEmail)
      p
        label Password
        input(name="password", type="text")
      p
        button Submit
      p
        a(href="/") Go back
```

### 后端代码

```js js
// index.js
...
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/login/:signupEmail', (req, res) => {
  res.render("login", { signupEmail: req.params.signupEmail });
});

app.post("/login", urlencodedParser, controller.postLogin);
...
```

```js js
// controller/index.js
...
exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  model.find({ email, password }, (num, result) => {
    if (-1 === num) {
      res.redirect('/error');
    }

    if (0 === num) {
      res.send('&lt;p&gt;Email or password is not correct. Go back and try again.&lt;/p&gt;');
      return;
    }

    if (1 === num) {
      // 存储用户信息
      req.session.loggedIn = result._id.toString();
      res.redirect('/');
    }
  });
}
...
```

```js js
// model/server.js
MongoClient.connect(url, function(err, client) {
  ...
  exports.find = (data, next) => {
    col.findOne(
      data,
      (err, result) => {
        if (err) {
          next(-1);
          return;
        }
        if (!result) {
          next(0);
          return;
        }
        next(1, result);
      }
    );
  }
  ...
}
```

## 补充

其实项目中还有logout功能，显示用户功能没有讲，但是这些相对简单，因此就不展开了。

在登录的时候有一句`req.session.loggedIn = result._id.toString();`，如果想通过id查询数据，则

```js js
const ObjectId = require("mongodb").ObjectId;
const ID= req.session.loggedIn;
model.find({_id: ObjectId(ID)}, (num, result) => {
  //...
});
```

## 跟新于19-05-23

使用`mongoose`替代`mongodb`保存数据, 具体文档参照[mongoose官网](https://mongoosejs.com/)

主要改动在`model/server.js`

```js
// model/server.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/student", { useNewUrlParser: true });

const personSchema = new Schema(
  {
    first: String,
    last: String,
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      unique: true
    }
  },
  { autoIndex: false }
);

const Person = mongoose.model('classes', personSchema);

exports.insert = (data, next) => {
  const person = new Person(data);
  person.save(err => {
    if (err) {
      next(-1);
      return;
    }
    next(1);
  });
}

exports.find = (data, next) => {
  Person.findOne(data, (err, result) => {
    if (err) {
      next(-1);
      return;
    }
    if (!result) {
      next(0);
      return;
    }
    next(1, result);
  });
}
```

### 补充

原来的Mongodb获取ObjectId转变成Mongoose方式

{% note warning %}
~~const ObjectId = require("mongodb").ObjectId;~~
{% endnote %}

{% note success %}
const ObjectId = require("mongoose").Types.ObjectId;
{% endnote %}

## 总结

总的来说迈出了第一步:smiley: :smiley: :smiley: