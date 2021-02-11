---
title: 函数式编程
categories: JavaScript
copyright: true
date: 2018-10-20 15:02:34
tags:
    - js
keywords: js 函数式编程
description:
---


{% note %}
函数式编程有着简洁明了、不易出错、复用率高等特点成为了开发者编程时经常选用的方式。而函数式编程离不开一些方法，我将介绍的就是这些方法，以便我更方便的编写代码。
{% endnote %}
<!-- more -->

## filter——过滤对象返回新数组

``` js
let person = [
    { name: 'xiaoming', age: 18 },
    { name: 'xiaohong', age: 20 },
    { name: 'xiaogang', age: 19 },
    { name: 'xiaoli', age: 18 },
];

let sameAge = person.filter(obj => 18 === obj.age);
console.log(sameAge); // [{ name: 'xiaoming', age: 18}, { name: 'xiaogang', age: 18}]
```

## map——返回属性值

``` js
let person = [
    { name: 'xiaoming', age: 18 },
    { name: 'xiaohong', age: 20 },
    { name: 'xiaogang', age: 19 },
    { name: 'xiaoli', age: 18 },
];

let getAge = person.map(obj => obj.age);
console.log(getAge); // [18, 20, 19, 18]
```

## reduce——对所有对象值重处理或总结

``` js
let arr = [
    { num: 1 },
    { num: 5 },
    { num: 48 },
    { num: 25 },
];

let numAll = arr.reduce((all, value) => all + value.num, 0);
console.log(numAll); // 79
```

## 结合使用

``` js
let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' },
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(x => parent === x.parent)
        .forEach(x => node[x.id] = makeTree(categories, x.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null),
        null,
        4
    )
)
/*

"{
    "animals": {
        "mammals": {
            "cats": {
                "persian": {},
                "siamese": {}
            },
            "dogs": {
                "chihuahua": {},
                "labrador": {}
            }
        }
    }
}"

 */
```