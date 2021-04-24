---
title: JS描述系列之列表和散列
categories: 算法
tags:
  - 列表
  - 散列
  - 碰撞
  - 开链
  - 线性探测
copyright: true
description: 本文是介绍JS模拟列表与散列，参考自数据结构与算法JavaScript描述
images: /JS描述系列之栈和队列/js.jpg
date: 2020-01-29 12:44:28
keywords:
---


## 前言

本文根据《数据结构与算法JavaScript描述》来写的，相当于个人的读书笔记。

## 列表

列表是一组有序的数据。每个列表中的数据称为元素。在JS中，列表中的元素可以是任意数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。

当不需要在一个很长的序列中查找元素，或者对其排序时，列表就显得尤为有用。反之，如果数据结构非常复杂，列表的作用就没那么大了。

因列表实现相对简单，因此这里只讲概念，就不深入了。不过在[栈与队列](./JS描述系列之栈和队列.html)一文中也可以看到这些特殊的列表实现原理。

## 散列

散列是一种常用的数据存储技术，散列后的数据可以快速地**插入**或**取得**。散列使用的数据结构叫做**散列表**。在散列表上插入、删除和取得数据都非常快，但是对于**查找操作**来说**效率低下**，比如查找一组数据中的最大值和最小值。这些操作得求助于其他数据结构，比如二叉树。

理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。然而，键的数量是无限的，数组的长度是有限的，一个更现实的目标是让散列函数尽量将键均匀映射到数组中。

**碰撞**——即使一个高效的散列函数，仍然存在将两个键值映射成同一个值的可能，这种现象称为碰撞。

### HashTable 类

```js js
class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  simpleHash() {}
  showDistro() {}
  put() {}
}
```

#### 第一版字符串散列

在很多的应用中，键是字符串类型。事实证明，选择针对字符串类型的散列函数是很难的，选择时必须加倍小心。一开始，我们选择将字符串中的每个字符的 ASCII 码值相加然后除以数组长度的余数作为散列值，这样就可以得到**第一版**的 HashTable

```js js
class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  // 对字符串取余得到散列key
  simpleHash(data) {
    let total = 0;
    for (let i = 0, len = data.length; i < len; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  // 将数据存入
  put(data) {
    const pos = this.simpleHash(data);
    this.table[pos] = data;
  }

  // 显示散列表中的数据
  showDistro() {
    for (let i = 0, len = this.table.length; i < len; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}
```

但是使用这个方法会引发碰撞，例如测试数据`const someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];`，其中 Clayton 和 Raymond 的散列值，也就是求得的散列值是 35，这两个散列值引发了碰撞

#### 第二版字符串散列

为了避免碰撞，首先要确保散列表中用来存储数据的数组大小是**质数**，数组的长度在 100 以上，为了让散列表分布更加均匀，比 100 大同时不会让测试数据发生碰撞的第一个质数是**137**，这也就是一开始设置 137 长度的原因。第二版应用的是霍纳算法，新的函数仍然先计算字符串中各字符的 ASCII 码值，但是每次求和时乘以一个质数，大多数算法书中建议使用一个较小的质数，例如 31，31 是可以的，书中说 37 是**有误**的，因为 David 和 Jonathan 会发生碰撞。

```js js
class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  betterHash(data) {
    const H = 31;
    let total = 0;
    for (let i = 0, len = data.length; i < len; i++) {
      total += total * H + data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  // 将数据存入
  put(data) {
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }

  // 显示散列表中的数据
  showDistro() {
    for (let i = 0, len = this.table.length; i < len; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}
```

#### 对散列表进行取值

```js js
class HashTable {
  // 将数据存入
  put(key, data) {
    const pos = this.betterHash(key);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }
}
```

### 碰撞处理

#### 开链法

开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构，比如另一个数组，这样就能存储多个键了，也就是创建二维数组

```js js
class HashTable {
  // 将数据存入
  put(key, data) {
    const pos = this.betterHash(key);
    this.table[pos].push(key, data);
  }

  get(key) {
    const pos = this.betterHash(key);
    if (this.table[pos].length === 0) {
      return undefined;
    }
    const index = this.table[pos].indexOf(key);
    if (index === -1) return undefined;
    return this.table[pos][index + 1];
  }
}
```

#### 线性探测法

线性探测法属于一种更一般的散列技术: 开放寻址散列。当发生碰撞时，线性探测法检查散列中的下一个位置是否为空，如果为空，就将数据存入该位置，如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。

如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法

```js js
class HashTable {
  constructor() {
    this.table = new Array(137);
    this.value = [];
  }
  // ...
  put(key, data) {
    let pos = this.betterHash(key);
    while (this.table[pos] !== undefined) {
      pos++;
    }
    this.table[pos] = key;
    this.value[pos] = data;
  }

  get(key) {
    let index = this.table.indexOf(key);
    if (index > -1) {
      return this.value[index];
    }
  }
}
```
