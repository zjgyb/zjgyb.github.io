---
title: JS描述系列之链表
categories: 算法
tags:
  - 链表
  - 双向链表
  - 循环链表
copyright: true
description: 本文是介绍JS模拟链表，参考自数据结构与算法JavaScript描述
images: /JS描述系列之栈和队列/js.jpg
date: 2020-01-27 18:16:18
keywords:
---


## 前言

本文根据《数据结构与算法JavaScript描述》来写的，相当于个人的读书笔记。

## 对链表的概述

链表是由一组节点组成的集合。每个节点都使用一个对象引用指向它的后继(next)。指向另一个节点的引用叫做链。链表元素靠相互之间的关系进行引用，链表的尾元素指向一个 null 节点

## 设计一个基于对象的链表

### Node 类

element 保存节点上的数据，next 用来保存指向下一个节点的链表。

```js js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
```

### LinkedList 类

该类保存一个头节点

```js js
class LList {
  constructor() {
    this.head = new Node("head");
  }
}
```

### 查找、插入节点

插入操作是插入到给定节点元素后，也就是新节点是给定元素的后继

```js js
class LList {
  // ...
  find(item) {
    let curNode = this.head;
    while (curNode.element !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }
}
```

### 展示链表中的元素

```js js
class LList {
  // ...
  display() {
    let curNode = this.head;
    while (!(curNode.next === null)) {
      console.log(curNode.next.element);
      curNode = curNode.next;
    }
  }
}
```

### 删除节点

```js js
class LList {
  // ...
  findPrevious(item) {
    let curNode = this.head;
    // curNode.next === null 这条判断语句是为了当链表中只有head时判断
    while (!(curNode.next === null) && curNode.next.element !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    // 这里的目的见finPrevious方法注释
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}
```

## 双向链表

注意**插入**和**删除**节点的变化，我认为书中有误

```js js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let curNode = this.head;
    while (curNode.element !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const curNode = this.find(item);

    if (!(curNode.next === null)) {
      newNode.next = curNode.next;
      curNode.next.previous = newNode;
    }

    curNode.next = newNode;
    newNode.previous = curNode;
  }

  display() {
    let curNode = this.head;
    while (!(curNode.next === null)) {
      console.log(curNode.next.element);
      curNode = curNode.next;
    }
  }

  remove(item) {
    let curNode = this.find(item);
    if (curNode.next === null) {
      curNode.previous.next = null;
    } else {
      curNode.next.previous = curNode.previous;
      curNode.previous.next = curNode.next;
    }
    curNode = null;
  }

  // 找到最后一个节点
  findLast() {
    let curNode = this.head;
    while (!(curNode.next === null)) {
      curNode = curNode.next;
    }
    return curNode;
  }

  disReverse() {
    let curNode = this.findLast();
    while(!(curNode.previous === null)) {
      console.log(curNode.element);
      curNode = curNode.previous;
    }
  }
}
```

## 循环链表

循环链表和单向链表相似，唯一区别的是链表的尾节点不再指向Null，而是指向头节点
