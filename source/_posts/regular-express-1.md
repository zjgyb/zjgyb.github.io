---
title: regular-expression.md
copyright: true
date: 2019-03-24 15:17:02
categories: JavaScript
tags:
  - regular-expression
  - Js
keywords: regular-expression 正则 正则表达式
---

{% note success %}
介绍正则表达式的语法
列举一些用过的正则表达式
{% endnote %}
<!-- more -->

## 正则表达式语法

### search
用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

### replace
用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

### test
如果字符串中含有匹配的文本，则返回 true，否则返回 false。

### exec
返回一个数组，如果没有时返回null。有lastIndex等方法，可以检查下一个字符出现的位置。

### split
分割正则匹配的字符

### 元字符
> `.`代表查找单个字符，除了换行和行结束符
> `\b`匹配单词边界 border boundary
> `\B`匹配非单词边界
> `\d`查找数字 digital
> `\D`查找非数字
> `\s` 查找空白符spacing
> `\S`
> `\w`查找单词字符 word 数字+字母+下划线+汉字
> `\W`

### 量词
> `n?`匹配0个或1个字符串
> `n*`匹配0个或者多个n的字符串
> `n+`匹配1个或者多个n的字符串
> `n{X}`匹配包含X个n的序列的字符串
> `n{X,}`匹配包含X个或更多个n的序列的字符串
> `n{X,Y}`匹配至少出现X至多出现Y个你的字符串
> `n$`匹配任何n结尾的字符
> `^n`匹配任何n开头的字符

## 使用过的正则表达式

### email
```javascript js
/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
```

### 正整数和零
```javascript js
/^[1-9]\d*$|^0{1}$/i
```

### 小数
```javascript js
/^[1-9]\d*\.\d+$/i
```
