---
title: JS字符串方法总结
copyright: true
description: 本文是对JavaScript字符串方法总结
images: /JS字符串方法总结/tony.png
date: 2019-11-10 15:30:31
categories: JavaScript
tags:
  - String
  - JavaScript
  - method
keywords: JS字符串
---


## indexOf(), lastIndexOf()

- indexOf(str[, pos]): 查找的字符的位置，返回指定值的**第一次**索引，如果找不到返回`-1`
- lastIndexOf(str[, pos]): 查找字符的位置，返回指定值的**最后一次**索引，如果找不到返回`-1`

```js js
str.indexOf("l"); // 2
str.indexOf("2"); // -1
str.indexOf("l", 3); // 3
str.lastIndexOf("l"); // 3
```

## substring(), substr(), slice()

- substring(indexStart[, indexEnd]): 提取索引的开始到起始的结束。
- substr(indexStart[, len]): MND 以不推荐使用, start 从 0 开始，len 代表提取的字符长度
- slice(indexStart[, indexEnd]): indexStart 为负值时, 相当于 strLen + indexStart, indexEnd 也一样

```js js
const str = "Lorem ipsum dolor sit amet consectetur";
str.substring(1, 5); // orem
str.substring(-2, 8); // Lorem ip

str.slice(1, 5); // orem
str.slice(-2, 8); // ''
str.slice(-2); // ur
```

## toString(), valueOf()

- toString(): 返回调用对象的字符串
- valueOf(): 返回 String 对象的原始值，等同于 toString()

```js js
const str = "Lorem";
str.toString(); // Lorem
str.valueOf(); // Lorem
str.toString() === str.valueOf(); // true
```

## toLowerCase(), toUpperCase(), toLocaleLowerCase(), toLocaleUpperCase()

locale 代表语言字符串，例如'en-US'

- toLowerCase(): 转换成字符的小写形式
- toUpperCase(): 转换成字符的大写形式
- toLocalLowerCase([locale, locale]): 转换成特定语言的小写形式，不常用
- toLocalUpperCase([locale, locale]): 转换成特定语言的大写形式，不常用

```js js
const str = "Lorem";
str.toLowerCase(); // lorem
str.toUpperCase(); // LOREM
```

## search(), split(), match(), replace()

- search(reg): 返回字符串出现的索引，如果找不到返回-1，与 indexOf 相比使用正则查询更加强大
- split(str|reg[, limit]): 分割字符串变成数组形式，第二个参数代表选取分割后数组的长度
- replace(str|reg, str|fun): 以特定形式替换字符串中某些字符，返回一个新字符串
- match(reg): 返回一个字符串正则表达式的结果，未匹配返回null

```js js
const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
str.search(/ipsum/); // 6

str.split(" "); //  [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.' ]
str.split(" ", 2); // [ 'Lorem', 'ipsum' ]
str.split(/\s/); //  [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.' ]
```

### search

- \$`: 匹配的字符串替换成该字符串所在的位置的整个字符串左边的内容
- \$': 匹配的字符串替换成该字符串所在的位置的整个字符串右边的内容
- \$n: 代表匹配的正则第 n 个括号的字符串

```js js
const str = "hello world word hello word";
str.replace("word", "world"); // hello world world hello word
str.replace(/word/g, "world"); // hello world world hello world
str.replace(/(word)/g, "$`"); // hello world hello world  hello hello world word hello
str.replace(/(word)|(hello)/g, "$2"); // "hello world  hello "
str.replace(/(hello)|(word)/g, (match, p1, p2, offset, string) => {
  if (p1) return "hi";
  if (p2) return "world";
  return "";
}); // hi world world hi world 
```

### match

```js js
const str = "hello world word hello word";
str.match(/hello|word/g); // [ 'hello', 'word', 'hello', 'word' ]
const str1 = "1994-10-01";
str1.match(/\d+/g); // [ '1994', '10', '01' ] 
```

## includes(), startsWith(), endsWith()

- includes(str[, pos]): 判断一个字符串是否包含另一个字符串(区分大小写)
- startsWith(str[, pos]): 判断一个字符串是否从起始开始
- endsWith(str[, length]): 判断一个字符串是否从末尾结束, len 表示截取的 str 长度

```js js
const str = "Lorem ipsum dolor sit amet consectetur";
str.includes("dolor"); // true
str.startsWith("Lorem"); // true
str.endsWith("tur"); // true
str.endsWith("sit", 21); // true
```

## charAt(), charCodeAt(), codePointAt()

- chatAt(index): 返回一个指定的字符
- charCodeAt(index): 返回0到65535之间的整数
- codePointAt(index): 返回一个非负整数

charCodeAt只能转换单个代码点的值，codePointAt转换整个代码点的值

```js js
const str = "hello";
const str1 = "\uD800\uDC00";

str.charAt(0); // h

str.charCodeAt(0); // 104
str.charCodeAt(99); // NaN
str1.charCodeAt(0); // 55296

str.codePointAt(0); // 104
str.codePointAt(99); // undefined
str1.codePointAt(0); // 65536
```

## trim(), trimStart()[trimLeft()], trimEnd()[trimRight()]

- trim(): 去掉字符串**两端**的空白符
- trimStart(): 去掉字符串**开头**的空白符
- trimEnd(): 去掉字符串**结尾**的空白符

```js js
const str = "  Lorem  ";
str.trim(); // Lorem
str.trimStart(); // 'Lorem  '
str.trimEnd(); // '  Lorem'
```

## repeat()

- repeat(num): 重复字符串多少次，不能为负数

```js js
const str = "hello";
str.repeat(2); // hellohello
```

## 原生String对象中包含方法

### fromCharCode(), fromCodePoint()

- fromCharCode([num1, num2, ...]): 返回UTF-16代码单元系列创建的字符串
- fromCodePoint(num1[, num2])

区别是fromCharCode不能识别大于**0xFFFF**的字符

```js js
String.fromCharCode(104, 101, 108, 108, 111); // hello
String.fromCharCode(0x2F804); // 

String.fromCodePoint(104, 101, 108, 108, 111); // hello
String.fromCodePoint(0x2f804); // 你
```

### raw

- raw(): 给定模板字符串的原始字符串

```js js
String.raw`hello`; // hello
String.raw({ raw: ['foo', 'bar', 'zoo'] }, 1 + 2); // foo3barzoo
```

## 参考链接

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)