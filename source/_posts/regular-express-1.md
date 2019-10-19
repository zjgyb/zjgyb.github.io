---
title: regular-expression.md
copyright: true
date: 2019-03-24 15:17:02
categories: JavaScript
tags:
  - regular-expression
  - Js
  - 正则表达式
keywords: regular-expression 正则 正则表达式
---

{% note success %}
介绍正则表达式的语法
列举一些用过的正则表达式
{% endnote %}

<!-- more -->

## 正则表达式语法

### 元字符

+ `.` 代表查找单个字符，除了换行和行结束符
+ `\b` 匹配单词边界 border boundary
+ `\B` 匹配非单词边界
+ `\d` 查找数字 digital
+ `\D` 查找非数字
+ `\s` 查找空白符 spacing
+ `\S` 查找非空白符
+ `\w` 查找单词字符 word 数字+字母+下划线+汉字
+ `\W` 查找非单词字符

### 量词

+ `n?`匹配 0 个或 1 个字符串
+ `n*`匹配 0 个或者多个 n 的字符串
+ `n+`匹配 1 个或者多个 n 的字符串
+ `n{X}`匹配包含 X 个 n 的序列的字符串
+ `n{X,}`匹配包含 X 个或更多个 n 的序列的字符串
+ `n{X,Y}`匹配至少出现 X 至多出现 Y 个你的字符串
+ `n$`匹配任何 n 结尾的字符
+ `^n`匹配任何 n 开头的字符

## 正则的一些方法

### search

用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

```js js
const reg = /e/;
const reg1 = /m/;
const str = "Hello world! Hi eeee. Tony bbbbb. 1234 +_ * / PPP";
console.log(str.search(reg)); // 1
console.log(str.search(reg1)); // -1
```

### replace

用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

```js js
const reg = /e/;
const reg1 = /e/g;
const str = "HEello eeee";
console.log(str.replace(reg, "a")); // HEallo eeee
console.log(str.replace(reg1, "a")); // HEallo aaaa

const reg2 = /(e+)(l+)/g;
const str1 = "HEello eeee hellllll eee abc";
/**
 * description:
 * param {type}
 *   - match-匹配的字符串
 *   - p1, p2, ... 第n个括号匹配的字符串
 *   - offset 子字符串在原字符串中的偏移量
 *   - str 原字符串
 * return:
 */
function replacer(match, p1, p2, offset, str) {
  console.log(match); // ell ellllll
  console.log(p1); // e e
  console.log(p2); // ll llllll
  console.log(offset); // 2 13
  console.log(str); // HEello eeee hellllll eee abc,  HEello eeee hellllll eee abc
  return match.toLocaleUpperCase();
}

console.log(str1.replace(reg2, replacer)); // HEELLo eeee hELLLLLL eee abc
// 匹配的第一个字符间的交换
const reg3 = /(e+)(l+)/g;
console.log(str1.replace(reg3, "$2 $1")); // HEll eo eeee hllllll e eee abc
```

### split

这里介绍与正则相关分割匹配的字符串

```js js
const reg = /\s*,\s*/gi;
const str = 'Footbal, food, for, fool, hi';
const arr = str.split(reg);
console.log(arr); // [ 'Footbal', 'food', 'for', 'fool', 'hi' ] 
const arr1 = str.split(reg, 2);
console.log(arr1); // [ 'Footbal', 'food' ] 
```

### match

找到一个或者多个正则表达是的匹配

```js js
const reg = /foo/gi;
const str = 'Footbal, food, for, fool, hi';
const arr = str.match(reg);
console.log(arr); // [ 'Foo', 'foo', 'foo' ] 
```

### test

如果字符串中含有匹配的文本，则返回 true，否则返回 false。

```js js
const reg = /e/i;
const reg1 = /A/;
const str = 'HEllo! World';
console.log(reg.test(str)); // true
console.log(reg1.test(str)); // false
```

### exec

返回一个数组，如果没有时返回 null。有 lastIndex 等方法，可以检查下一个字符出现的位置。

```js js
const reg = /foo/gi;
const str = 'Footbal, food, for, fool, hi';
const arr = reg.exec(str);
console.log(arr);
// 匹配的第一个字符串
console.log(arr[0]); // Foo
// 匹配字符串的索引值 从0开始
console.log(arr.index); // 0
// 原始字符串
console.log(arr.input); // Footbal, food, for, fool
// 下一次匹配开始的位置
console.log(reg.lastIndex); // 3

// 实现遍历
const str1 = 'Footbal, food, for, fool, hi';
const arr = [];
while((myArr = reg.exec(str1)) !== null) {
  arr.push(myArr[0]);
}
console.log(arr); // [ 'Foo', 'foo', 'foo' ]
```

## 使用过的正则表达式

### email

```js js
// /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
```

### 正整数和零

```javascript js
const REG = /^[1-9]\d*$|^0{1}$/i;
```

### 小数

```javascript js
const REG = /^[1-9]\d*\.\d+$/i;
```
