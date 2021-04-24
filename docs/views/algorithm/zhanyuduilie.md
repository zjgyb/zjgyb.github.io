---
title: JS描述系列之栈和队列
categories: 算法
tags:
  - 栈
  - 队列
copyright: true
description: 本文是介绍JS模拟栈与队列，参考自数据结构与算法JavaScript描述
images: /stackList/js.jpg
date: 2020-01-26 19:41:00
keywords:
---


## 前言

本文根据《数据结构与算法JavaScript描述》来写的，相当于个人的读书笔记。

## 栈

### 对栈的描述

栈是一种特殊的**列表**，栈内的元素只能通过列表的一端访问，这一端称为**栈顶**，栈被称为一种后入先出(LIFO, last-in-first-out)的数据结构，任何不在栈顶的元素都无法访问。

对栈主要有两种操作，入栈使用 push，出栈使用 pop 方法；使用 peek()方法则只返回栈顶元素而不删除，clear()清除栈内所有的元素，length 属性记录栈内的元素个数，empty 判断栈内是否含有元素

### JS 栈的模拟实现

```js js
class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    this.dataStore.push(element);
    return true;
  }

  pop() {
    if (this.dataStore.length > 0) {
      return this.dataStore.pop();
    }
  }

  peek() {
    const len = this.dataStore.length;
    if (len === 0) return;
    return this.dataStore[len - 1];
  }

  length() {
    return this.dataStore.length;
  }

  clear() {
    this.dataStore.length = 0;
    return true;
  }
}
```

### 案例

#### 数制间的转换

只针对的是 2~9 的情况

```js js
function mulBase(num, base) {
  const s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);

  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

console.log(mulBase(32, 2)); // 10000
```

#### 判断回文

```js js
function isPalindrome(word) {
  const s = new Stack();
  for (let i = 0, len = word.length; i < len; i++) {
    s.push(word[i]);
  }
  let rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }

  return word === rword;
}
const str = "aaa bb aaa";
isPalindrome(str);
```

当然判断回文还可以用更简答的方法

```js js
str
  .split("")
  .reverse()
  .join("") === str;
```

#### 递归演示

递归函数

```js js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

模拟递归

```js js
function fact(n) {
  const s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}
```

## 队列

### 对队列的描述

队列是一种**列表**，不同的是队列只能在**队尾插入元素**，在**队首删除元素**。队列是一种先进先出(FIFO, fist-in-first-out)的数据结构。

队列的主要两种操作是：向队列中插入新元素和删除队列中的元素。插入操作也叫做入队，删除操作也叫做出队。front()操作是读取队首的元素，back()是读取队尾的元素，enqueue()代表插入元素，dequeue()代表删除元素，toString()是显示所有的元素，empty()判断队列是否为空，length()是获取队列长度

### JS 队列的模拟实现

```js js
class Queue {
  constructor() {
    this.dataStore = [];
  }
  // 向队尾添加一个元素
  enqueue(element) {
    this.dataStore.push(element);
    return true;
  }
  // 删除队首的元素
  dequeue() {
    if (this.dataStore.length > 0) {
      return this.dataStore.shift();
    }
  }
  // 读取队首的元素
  front() {
    return this.dataStore[0];
  }
  // 读取队尾的元素
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  // 显示队列的所有元素
  toString() {
    return this.dataStore.join("\n");
  }
  // 判断一个队列是否为空
  empty() {
    return this.dataStore.length === 0;
  }
  // 判断数组长度
  length() {
    return this.dataStore.length;
  }
}
```

### 用队列对数据排序

对于 0~99 的数字，**基数排序**将数据集扫描两次，第一次按各位上的数字进行排序，第二次按照十位数上的数字进行排序。比如有一组数：91、46、85、15、92、35、31、22

第一次扫描结果：91、31, 92、22, 85、15、35, 46
第二次扫描结果：15, 22, 31、35, 46, 85, 91、92

个位数小的排在前面，之后排列的是十位数，这样就能从小到大排序，这也就是基数排序的原理。

```js js
function distribute(nums, queues, digit = 1) {
  if (digit === 1) {
    nums.forEach(num => {
      queues[num % 10].enqueue(num);
    });
  } else {
    nums.forEach(num => {
      queues[Math.floor(num / 10)].enqueue(num);
    });
  }
}

function collection(nums, queues) {
  let index = 0;
  for (let i = 0; i < 10; i++) {
    while (!queues[i].empty()) {
      nums[index++] = queues[i].dequeue();
    }
  }
}

const nums = [91, 46, 85, 15, 92, 35, 31, 22];
const queues = [];
// 创建10个队列，分别用于存储在各位或十位相同的数字
for (let i = 0; i < 10; i++) {
  queues[i] = new Queue();
}

distribute(nums, queues);
collection(nums, queues);
console.log(nums); // 91, 31, 92, 22, 85, 15, 35, 46
distribute(nums, queues, 10);
collection(nums, queues);
console.log(nums); // 15, 22, 31, 35, 46, 85, 91, 92
```

### 优先队列

一般情况下，从队列中删除的元素，一定是率先入队的元素，但是也有一些队列在删除时不必准守先进先出的约定，这种队列叫做优先队列，删除元素时需要考虑优先级的限制。

例如病人按照严重程度有一个优先级(code 越小优先级越高)：

```js js
class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

class Queue {
  // ...
  // 删除优先级较高的元素
  dequeue() {
    const len = this.dataStore.length;
    if (len > 0) {
      let index = 0;
      for (let i = 1; i < len; i++) {
        if (this.dataStore[i].code < this.dataStore[index].code) {
          index = i;
        }
      }
      return this.dataStore.splice(index, 1)[0];
    }
  }

  // 显示队列的所有元素
  toString() {
    return this.dataStore.reduce((prev, next) => {
      return `${prev} ${next.name} code: ${next.code} \n`;
    }, "");
  }
  // ...
}
```

测试：

```js js
let p = new Patient("Smith", 5);
const ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Igram", 1);
ed.enqueue(p);
console.log(ed.toString());
let seen = ed.dequeue();
console.log(seen.name);
```
