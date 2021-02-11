---
title: VeeValidate简单应用
copyright: true
date: 2018-11-02 09:48:50
categories: Vue
tags:
 - VeeValidate
 - Vue
 - js
 - 前端
keywords:  VeeValidate简单应用 VeeValidate Vue js 前端 学习 学习笔记 应用
description:
---

{% note info %}
VeeValidate 使你表单操作更加的轻松快捷。
{% endnote %}

<!-- more -->

## 导读

在[vue 学习笔记（二）](https://zjgyb.github.io/vue学习笔记（二）.html)中已经介绍了 VeeValidate 相关知识，这篇文章将进一步介绍。

## 简单使用

```html html
<input v-validate="'required'" name="myinput" type="text" />
<span>{{ errors.first('myinput') }}<&#47;span></span>
```

```js js
Vue.use(VeeValidate);
```

## 部分语法含义

- alpha_dash(包含字符、数字、破折号或下划线)
- alpha_num(包含字符、数字)
- alpha_spaces(包含字符、空格)
- before(验证日期前后)
- between(数字最大最小之间，包含最大、最小值)
- data_between(规定的两个日期之间)
- data_format(输入日期的规则)
- decimal(规定最大小数位数)
- digits(规定数字的位数)
- ext(规定上传文件的类型)
- image(规定上传的文件是图片)
- ip(ipv4 地址是否正确)
- mines(一类文件类型)
- min&&max(最小最大长度)
- numeric(全部是数字)
- regex(正则)
- size(文件大小)
- url(浏览器地址

## 关于提交或者校验

```js js
export default {
  // ...
  methods: {
    onSubmit() {
      this.$validator.validate().then(result => {
        if (!result) {
          // do stuff if not valid.
        }
      });
    }
  }
  // ...
};
```

## 关于语言的修改

在入口文件中配置，例如中文

```js js
import VeeValidate, { Validator } from "vee-validate";
import zh from "vee-validate/dist/locale/zh_CN";
Validator.localize("zh_CN", zh);
Vue.use(VeeValidate);
```

## 关于提示信息

```js js
const dict = {
  custom: {
    // input里面的name
    email: {
      required: "邮箱不为空？",
      email: "兄弟你错了"
    }
  }
};

this.$validator.localize("zh_CN", dict);

// 或者(看Validator是否引入)
Validator.localize("zh_CN", dict);
```

## 关于自定义规则

```js js
this.$validator.extend('password', {
    getMessage: field => field + '最少6位，包括至少1字母、特殊字符、数字',
    validate: value => {
        return  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*? ]).*$/.test(value)
    }
});

// 或者
Validator.extend(...);
```

## 参考文章

- [官网](https://baianat.github.io/vee-validate/)
- [简书](https://www.jianshu.com/p/4dfaf42ce006)
