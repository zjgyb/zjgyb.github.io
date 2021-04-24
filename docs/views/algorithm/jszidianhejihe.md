---
title: JS描述系列之字典和集合
categories: 算法
tags:
  - 字典
  - 集合
  - Set
copyright: true
description: 本文是介绍JS模拟字典与集合，参考自数据结构与算法JavaScript描述
images: /JS描述系列之栈和队列/js.jpg
date: 2020-01-28 15:57:26
keywords:
---


## 前言

本文根据《数据结构与算法 JavaScript 描述》来写的，相当于个人的读书笔记。

## 字典

字典是一种以**键-值对**形式存储数据的数据结构。

### JS 模拟实现字典

实现基本的**增加**、**查找**、**删除**、**展示功能**

```js js
class Dictionary {
  constructor() {
    this.dataStore = [];
  }

  add(key, value) {
    this.dataStore[key] = value;
  }

  find(key) {
    return this.dataStore[key];
  }

  remove(key) {
    delete this.dataStore[key];
  }

  showAll() {
    Object.keys(this.dataStore).forEach(key => {
      console.log(key + "->" + this.dataStore[key]);
    });
  }
}
```

#### 添加辅助功能

获取字典中的元素个数count、清除字典内的所有元素clear

```js js
class Dictionary {
  // ...
  // 注意这里不能使用length，否则返回0
  count() {
    return Object.keys(this.dataStore).length;
  }

  // 同样这里设置length为0无效
  clear() {
    Object.keys(this.dataStore).forEach(key => {
      delete this.dataStore[key];
    });
  }
}
```

#### 为字典添加排序功能

```js js
class Dictionary {
  // ...
  // 只需要在原先的基础上添加sort方法进行排序
  showAll() {
    Object.keys(this.dataStore)
      .sort()
      .forEach(key => {
        console.log(key + "->" + this.dataStore[key]);
      });
  }
}
```

## 集合

集合是一种包含不同元素的数据结构。集合中的元素称为成员。集合的两个最重要的特性是：首先，集合中的成员是无序的；其次，集合中不允许相同的成员存在。

### 集合的定义

- 不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合
- 如果两个集合的成员完全相同，则称两个集合相等
- 如果一个集合中所有的成员都属于另外一个集合，则前一个集合称为后一个集合的子集

### 集合的操作

- 并集：将两个集合中的成员合并，得到一个新集合
- 交集：两个集合中共同存在的成员组成一个新的集合
- 补集：属于一个集合而不属于另一个集合的成员组成的集合

### JS 模拟实现 Set 类

```js js
class Set {
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }

  remove(data) {
    const index = this.dataStore.indexOf(data);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      return true;
    }
    return false;
  }
  // 显示集合中的成员
  show() {
    return this.dataStore;
  }

  size() {
    return this.dataStore.length;
  }
}
```

### Set 类的操作

- union()——并集
- intersect()——交集
- subset()——判定子集
- difference()——补集

#### 并集

```js js
class Set {
  // ...
  contains(data) {
    return this.dataStore.indexOf(data) > -1;
  }

  union(set) {
    const nSet = new Set();
    this.dataStore.forEach(ele => nSet.add(ele));
    set.show().forEach(ele => {
      if (!this.contains(ele)) {
        nSet.add(ele);
      }
    });
    return nSet;
  }
}
```

#### 交集

```js js
class Set {
  // ...
  intersect(set) {
    const nSet = new Set();
    this.dataStore.forEach(ele => {
      if (set.contains(ele)) {
        nSet.add(ele);
      }
    });
    return nSet;
  }
}
```

#### 判定子集

```js js
class Set {
  // ...
  // 判断该集合是否是set的子集
  subset(set) {
    if (this.size() > set.size()) return false;
    for (let i = 0; i < this.size(); i++) {
      if (!set.contains(this.dataStore[i])) {
        return false;
      }
    }
    return true;
  }
}
```

#### 补集

```js js
class Set {
  // ...
  // 该方法返回一个新集合，该集合包含的是那些属于第一个集合不属于第二个集合(set)的成员，如果需要两个集合不同的元素，那么需要遍历第二个集合同时比较第一个集合
  difference(set) {
    const nSet = new Set();
    this.dataStore.forEach(ele => {
      if (!set.contains(ele)) {
        nSet.add(ele);
      }
    });
    return nSet;
  }
}
```

### ES6 中提供的新数据结构 Set

#### 语法介绍

- add: 添加某个值，返回 Set 结构本身
- delete: 删除某个值，返回一个布尔值表示是否删除成功
- size: 返回 Set 中的成员总数
- has: 返回一个布尔值，表示该值是否为 Set 成员
- clear: 清除所有成员，没有返回值
- keys: 使用 for...of 遍历，遍历的是 key
- values: 使用 for...of 遍历，遍历的是 value
- entries: 使用 for...of 遍历，遍历的是[key, value]
- forEach: 与数组一致，直接在变量值遍历, `set.forEach((value, key) => {})`

```js js
const s = new Set();
s.add("1");
s.add("2");
s.add(NaN);
s.add(NaN);
console.log(s.size); // 3
console.log(s.has(NaN)); // true
for (const key of s.keys()) {
  console.log(key);
}

s.forEach((value, key) => {
  console.log(value, key);
});

s.delete(NaN);
```

#### 几点说明

1. 在自定义的 Set 中不能判断 NaN，但是 ES6 提供的 Set 中能判断 NaN，并且认为 NaN 为同一个值
2. 无论自定义 Set 还是 ES6 提供的 Set 都不能判断对象，都会认为对象都是不相等的，这也符合 JS 语法认为两个对象不相等
