---
title: 日期相关-Date
category: JavaScript
tags:
  - Date
  - 日期
  - JavaScript
copyright: true
keywords: 日期 Date 日期操作方法总结
description: 本文是对JavaScript日期语法的总结
images: ./日期相关-Date/javascript-date-methods.jpeg
date: 2019-09-13 14:27:45
---


## 前言

在项目中不可避免对日期进行操作，因此我对其进行总结，以便随时翻阅。

## 设置日期的语法

```js js
// "英文月名 日 年 时:分:秒"
const date = new Date("May 5 19 05:15:30");
console.log(date); // Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)

// 年 月 日 时 分 秒
const date1 = new Date(2019, 4, 5, 5, 15, 30);
console.log(date1); // Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)

// 月/日/年/时:分:秒
const date2 = new Date("5/5/2019 05:15:30");
console.log(date2); // Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)

// 年-月-日T时:分:秒
const date3 = new Date("2019-05-05T05:15:30");
console.log(date3); // Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)
```

## 简单获取日期

```js js
const date = new Date();

// 完整日期
console.log(date.toString()); // Fri Sep 13 2019 10:41:11 GMT+0800 (GMT+08:00)

// 年-月-日 时:分:秒
console.log(date.toLocaleString()); // 2019-9-13 10:41:11

// 星期几 月 日 年
console.log(date.toDateString()); // Fri Sep 13 2019

// 时:分:秒 时区
console.log(date.toTimeString()); // 10:41:11 GMT+0800 (GMT+08:00)

// 年-月-日
console.log(date.toLocaleDateString()); // 2019-9-13

// 时:分:秒
console.log(date.toLocaleTimeString()); // 10:41:11
```

## 获取时间的语法总结

### 获取日期毫秒数

```js js
getTime(); // 返回日期的毫秒数 例如：1568335062493 (13位)
const date = new Date("5/25/10");
console.log(date.getTime()); // 1274716800000
console.log(date.valueOf()); // 1274716800000
console.log(Date.parse(date)); // 1274716800000

console.log(Date.now()); // 获取当前的日期的毫秒数
console.log(+new Date()); // 获取当前的日期的毫秒数
console.log(Date.UTC(2010, 4, 25)); // 获取UTC时间下的毫秒数 1274745600000
```

### 获取年、月、日、星期

```js js
// 年
getFullYear(); // 取得四位数的年份 如果是三位数的年份，返回三位数
const date = new Date("5/25/100");
console.log(date.getFullYear()); // 100
const date1 = new Date("5/25/10");
console.log(date1.getFullYear()); // 2010

// 月
getMonth(); // 返回日期中的月份，0表示一月，11表示十二月
const date2 = new Date("5/25/100");
console.log(date2.getMonth()); // 4
const date3 = new Date("12/25/100");
console.log(date3.getMonth()); // 11
// 如果月份不是0-11整数，那么返回NaN
const date4 = new Date("12/31/2019");
console.log(date4.getMonth()); // NaN
// 如果日期超过当月日期数，但不大于31，则月份+1，如果超过31则返回NaN
const date5 = new Date("6/32/2019");
console.log(date5.getMonth()); // NaN

// 日
getDate(); // 返回日期月份中的天数
const date6 = new Date("6/30/19");
console.log(date6.getDate()); // 30
// 如果月份不是0-11的整数，那么返回NaN
const date7 = new Date("13/20/2019");
console.log(date7.getDate()); // NaN
// 如果日期超过当月日期数，但不大于31，则日期为第二月超出的日期，如果超过31则返回NaN
const date8 = new Date("2/31/19");
console.log(date8.getDate()); // 3
const date9 = new Date("12/32/2019");
console.log(date9.getDate()); // NaN

// 星期
getDay(); // 返回日期中星期的星期几(0代表星期日, 6代表星期六)
const date10 = new Date("2/15/19");
console.log(date10.getDay()); // 5
// 如果日期超过当月日期数，但不大于31，则日期为第二月超出的星期值，如果超过31则返回NaN
const date11 = new Date("11/32/2019");
console.log(date11.getDay()); // NaN
```

### 获取时、分、秒、毫秒

```js js
// 时
getHours(); // 返回日期中的小时数(0到23)
const date = new Date(2019, 4, 5, 17, 55, 55);
console.log(date.getHours()); // 17
const date1 = new Date(2019, 4, 5, 25, 55, 55);
console.log(date1.getHours()); // 1

// 分
getMinutes();
const date2 = new Date(2019, 4, 5, 17, 55, 55);
console.log(date2.getMinutes()); // 55
const date3 = new Date(2019, 4, 5, 21, 65, 55);
console.log(date3.getMinutes()); // 5

// 秒
getSeconds(); // 返回日期中的秒数(0-59)
const date4 = new Date(2019, 4, 5, 17, 55, 55);
console.log(date4.getSeconds()); // 55
const date5 = new Date(2019, 4, 5, 21, 55, 60);
console.log(date5.getSeconds()); // 0

// 毫秒
getMilliseconds(); // 获取日期中的毫秒数(0-999)
const date6 = new Date(2019, 4, 5, 17, 55, 55, 200);
console.log(date6.getMilliseconds()); // 200
const date7 = new Date(2019, 4, 5, 21, 55, 55, 1000);
console.log(date7.getMilliseconds()); // 0
```

## 设置时间的语法总结

{% note %}
获取时间的语法前面都有`get`, 设置时间的语法与之对应的是前面都是`set`
{% endnote %}

```js js
// 例如设置这个日期 Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)
const date = new Date();
date.setFullYear(2019);
date.setMonth(4);
date.setDate(5);
date.setHours(5);
date.setMinutes(15);
date.setSeconds(30);
console.log(date); // Sun May 05 2019 05:15:30 GMT+0800 (GMT+08:00)
```

## 日期毫秒数转化

```js js
/**
 * description: 把日期毫秒数得到年月日 支持Number和String的毫秒数
 * param {type} time-时间毫秒数 monthWord 0(英文月份缩写) 1(英文月份全拼写) 2(中文)
 * return: obj-{ year, month, day, week, hour, minute, second }
 */
function getTime(time, monthArg = 0) {
  const abbrMonth = [
    "JAN.",
    "FEB.",
    "Mar.",
    "APR.",
    "MAY.",
    "JUN.",
    "JUL.",
    "AUG.",
    "SEP.",
    "OCT.",
    "NOV.",
    "DEC"
  ];

  const enMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December"
  ];

  const zhMonth = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ];

  const date = new Date(+time);
  const year = date.getFullYear();
  const monthNum = date.getMonth();
  let month = "";
  switch (monthArg) {
    case 1:
      month = enMonth[monthNum];
      break;
    case 2:
      month = zhMonth[monthNum];
      break;
    default:
      month = abbrMonth[monthNum];
      break;
  }
  const day = date.getDate();
  const week = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return { year, month, day, week, hour, minute, second };
}

const time = "1274716800000";
console.log(getTime(time)); // { year: 2010, month: 'MAY.', day: 25, week: 2, hour: 0, minute: 0, second: 0 }
```

## 关于 UTC

全称`Coordinated Universal Time`即国际协调时间，在时刻上尽量接近于**格林尼(GMT)标准时间**

{% note info %}
时区。全球 24 个时区，把以伦敦为中心的世界地图展开，UTC 和 GMT 的伦敦是 0 区，伦敦的右边直到新西兰的东部不远的斐济为东区，而左边到太平洋中间为西区。一般用 5 位时区差来表示与 UTC 相差的小时数，东区为正，西区为负。如北京时区是东八区，领先 UTC 八个小时，记为+0800；纽约的时区是西五区，比 UTC 落后五个小时，记为 -0500。**UTC + 时区差 ＝ 本地时间**
{% endnote %}

```js
const date = new Date();
console.log(date); // Fri Sep 13 2019 11:32:32 GMT+0800 (GMT+08:00)
console.log(date.getHours()); // 11
console.log(date.getUTCHours()); // 3
```

{% note primary %}
因为平常不涉及 UTC，因此就不展开了
{% endnote %}

## 总结

继续努力。:smile: :smile: :smile:

## 参考文章

- [维基百科-协调世界时](https://zh.wikipedia.org/wiki/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6)
- [维基百科-格林尼治时间](https://zh.wikipedia.org/wiki/%E6%A0%BC%E6%9E%97%E5%B0%BC%E6%B2%BB%E6%A8%99%E6%BA%96%E6%99%82%E9%96%93)
- [小路口的博客-时区的概念](https://jiaolonghuang.github.io/2015/03/12/shiqu/)
- [封面图片](https://www.tutsmake.com/guide-for-javascript-date-methods/)
