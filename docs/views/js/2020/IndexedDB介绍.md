---
title: IndexedDB介绍
categories: JavaScript
tags:
  - IndexedDB
copyright: true
description: 介绍IndexedDB的用法，学习IndexedDB
date: 2020-07-25 18:14:38
keywords:
images:
---


## 前言

最近在翻译service worker的时候里面用到了IndexedDB作为存储，之前只是听说过，但没有真正了解过，因此现在写一篇文章记录一下其用法，本篇文章大部分参考的是高程内容。

## IndexedDB 是什么？

> IndexedDB 就是一个数据库，与 MySQL 或 Web SQL Database 类似。最大的特色是使用对象保存数据而不是使用表来保存数据。一个 IndexedDB 数据库，就是一组位于相同命名空间下的对象的集合。

## 如何打开 IndexedDB

使用`indexDB.open('name', version)`就能打开数据库，若该数据库不存在，则会先创建然后打开，该方法会返回一个 IDBRequest 对象，在这个对象上可以添加 onerror 和 onsuccess 事件处理程序。

```js
let request;
let database;

request = indexedDB.open("admin", 2.0); // 第二个参数设置版本号，需使用整数
request.onerror = (event) => {
  // 保存一个错误码
  alert(
    `something bad happened while trying to open：${event.target.errorCode}`
  );
};
request.onsuccess = (event) => {
  database = event.target.result;
};
```

错误码对照表

IDB 代表：IDBDatabaseException

- IDB.UNKNOWN_ERR(1)：意外错误，无法归类
- IDB.NON_TRANSIENT_ERR(2)：操作不合法
- IDB.NOT_FOUND_ERR(3)：未发现要操作的数据库
- IDB.CONSTRAINT_ERR(4)：违反了数据库约束
- IDB.DATA_ERR(5)：提供给事务的数据不能满足要求
- IDB.NOT_ALLOWED_ERR(6)：操作不合法
- IDB.TRANSACTION_INACTIVE_ERR(7)：试图重用已完成的事务
- IDB.ABORT_ERR(8)：请求中断，未成功
- IDB.READ_ONLY_ERR(9)：试图在只读模式下写入或修改数据
- IDB.TIMEOUT_ERR(10)：在有效时间内为完成操作
- IDB.QUOTA_ERR(11)：磁盘空间不足

## 对象存储空间

当新创建一个数据库时，使用`onupgradeneeded`事件，然后在里面创建一个对象存储空间（使用createObjectStore()事件），然后添加数据。

- add()：插入新增，若数据库内存在，则会报错
- put()：更新原有的值

```js
request.onupgradeneeded = (event) => {
  let db = event.target.result;

  let user = {
    username: "008",
    firstName: "张",
    lastName: "三",
    password: "hello",
  };

  // 需要指定一个键值，比如我要储存类似于user这样的数据结构，那我就指定username作为我的唯一key值
  let objectStore = db.createObjectStore("users", { keyPath: "username" });

  // 储存值
  let users = [
    {
      name: "008",
      firstName: "张",
      lastName: "三",
      password: "hello",
    },
    {
      name: "009",
      firstName: "李",
      lastName: "四",
      password: "world",
    },
  ];

  users.forEach((user) => {
    store.add(user);
  });
};
```

## 事务介绍

> 只要想读取或修改数据，都是通过事务来组织所有操作。

### 创建事务

一般创建的事务都是以只读的方式创建，可以传入第二个参数指定访问模式。

- IDBTransaction.READ_ONLY(readonly)：只读（默认）
- IDBTransaction.READ_WRITE(readwrite)：读写
- IDBTransaction.VERSION_CHANGE(versionchange)：改变

```js
let transaction = db.transaction('user'); // 或者也可以是一个数组，如['users', 'anotherStore']
```

### 使用事务

一般执行该函数放到打开数据库的`request.onsuccess`内部

```js
let request = db.transaction("user").objectStore("user").get("008");
request.onerror = (event) => {
  console.log("没有找到该对象");
};
request.onsuccess = (event) => {
  let result = event.target.result;

  alert(result && result.firstName);
};
```

### 事务处理程序

因一个事务可以完成任何多个请求，所有本身也有事件处理程序。

- onerror：整个事务都被取消了
- oncomplete：整个事务都成功完成了，**注意**：该事件对象访问不到get()请求返回的任何数据，必须在相应请求的onsuccess事件处理程序中处理

## 游标查询

使用事务可以直接通过已知的键检索单个对象。而在需要检索多个对象的情况下，则需要在事务内部创建游标。通过调用`openCursor()`方式创建游标。

```js
let store = db.transaction('user', 'readwrite').objectStore('user');
let request = store.openCursor();

request.onsuccess = (event) => {
  // 处理成功

  // 获取IDBCursor实例
  let cursor = event.target.result;
}

request.onerror = (event) => {
  // 处理失败
}
```

### IDBCursor实例用法

包含的属性：

- direction：数值，默认值为IDBCursor.NEXT（0）——表示下一项，IDBCursor.NEXT_NO_DUPLICATE（1）——表示下一个不重复的项，IDBCursor.PREV（2）——表示前一项
- key：对象的键
- value：实际的**对象**
- primaryKey：游标使用的键。可能是对象键，可能是索引键。

简单用法：

```js
let cursor = event.target.result;
if (cursor) {
  console.log(`键值：${cursor.key}，value值：${JSON.stringify(cursor.value)}`);
}
```

更新或者删除值：

```js
let cursor = event.target.result;
let value;
let updateRequest;

if (cursor) {
  if (cursor.key === '008') {
    // 更新数据
    value = cursor.value;
    value.password = 'magic!';

    updateRequest = cursor.update(value);
    updateRequest.onsuccess = () => {
      // 处理成功
      cursor.continue(); // 移到下一项，可选参数key，移到指定参数
      // cursor.advance(5); 向前移动5项
    }
    updateRequest.onerror = () => {
      // 处理失败
    }
  } else if (cursor.key === '009') {
    // 删除数据
    updateRequest = cursor.delete();
    updateRequest.onsuccess = () => {
      // 处理成功
    }
    updateRequest.onerror = () => {
      // 处理失败
    }
  }
}
```

## 键范围

> 使用游标查找数据的方式有限。键范围为使用游标增添了一些灵活性。键范围有IDBKeyRange的实例表示。

通过`store.openCursor(range)`方式把键范围放入，有四种定义键范围的方式。

1. only()：传入想要取得的对象的键

```js
let onlyRange = IDBKeyRange.only("008");
```

2. lowerBound()：指定结果集的下界，如果传入的第二个参数为true，则会从下一个对象开始

```js
let lowerRange = IDBKeyRange.lowerBound("008");
```

3. upperBound()：指定结果集的上界，如果传入第二个参数为true，则只会找到指定参数的前一个对象

```js
let upperRange = IDBKeyRange.upperBound("009");
```

4. bound()：同时指定上、下界，包含四个参数，分别是：表示下界的键、表示上界的键、是否跳过下界的布尔值、是否跳过上界的布尔值

```js
let boundRange = IDBKeyRange.bound("008", "009", true, true);
```

### 键范围使用方法

```js
let store = db.transaction("user", "readwrite").objectStore("user");
let range = IDBKeyRange.only("008");
let request = store.openCursor(range); // 就会把范围控制在键值为008
request.onsuccess = (event) => {
  let cursor = event.target.result;
  if (cursor) {
    console.log(cursor.key);
    cursor.continue();
  } else {
    console.log("done");
  }
};
```

### 设定游标方向

也就是`openCursor`的第二个参数，默认情况下从存储空间的第一项开始，即默认值IDBCursor.Next。还有：

1. IDBCursor.NEXT_NO_DUPLICATE('nextunique')：从第一个对象到最后一个对象，中间会跳过重复的项
2. IDBCursor.PREV('prev')：从最后一个对象到第一个对象
3. IDBCursor.PREV_NO_DUPLICATE('prevunique')：从最后一个对象到第一个对象，中间会跳过重复的项

## 索引

> 对于某些数据，可能需要为一个对象储存空间指定多个键，这是就需要为其他键值创建索引。

### 创建索引

创建索引的方法是调用`createIndex()`，传入的第一个参数是**索引的名字**，传入第二个参数是**索引的属性的名字**，第三个参数是一个包含unique属性的选项对象，这个选项对象通常必须指定，表示键所在所有记录中是否**唯一**。该方法返回值是IDBIndex实例

```js
let store = db.transaction('user').objectStore('user');
let index = store.createIndex('username', 'username', { unique: false });
```

### 取得索引

使用`index()`取得索引值

```js
let store = db.transaction('user').objectStore('user');
let index = store.index('username'); // 取得username的索引键
let request = index.openKeyCursor(); // 在索引上创建一个特殊的只返回每条记录组件的游标，使用openKeyCursor()方法
request.onsuccess = (event) => {
  // event.result.key 中保存的是索引键

  // event.result.value 中保存主键
}
```

从索引中取得对象：get()方法

```js
let store = db.transaction('user').objectStore('user');
let index = store.index('username');
let request = index.get('008');

request.onsuccess = () => {}
request.onerror = () => {}
```

从索引中取得主键：getKey()方法

```js
let store = db.transaction('user').objectStore('user');
let index = store.index('username');
let request = index.getKey('008');

request.onsuccess = (event) => {
  // event.result.key中保存索引键

  // event.result.value中保存主键
}
```

### 获取索引信息

获取索引的方法是使用`indexNames`属性

```js
let store = db.transaction('user').objectStore('user');
let indexNames = store.indexNames;
let index;
let i = 0;
let len = indexNames.length;

while (i < len) {
  index = store.index(indexNames[i++]);

  // 索引的名字、传入createIndex()中的属性路径、索引值是否唯一的布尔值
  console.log(index.name, index.keyPath, index.unique);
}
```

### 删除索引

```js
let store = db.transaction('user').objectStore('user');
store.deleteIndex('username');
```

## 并发问题

如果浏览器的两个不同的标签页打开了同一个页面，那么另一个页面试图更新另一个页面就有可能发生问题。每次成功打开数据库，都应该指定onversionchange事件处理程序。

```js
let request, db;
request = indexedDB.open("admin", 2.0); // 第二个参数设置版本号，需使用整数

// 在更新数据库之前提示关闭标签页然后只保留一个
request.onblocked = () => {
  alert('请关闭其他所有标签页然后再次尝试');
}

request.onsuccess = (event) => {
  db = event.target.result;

  db.onversionchange = () => {
    db.close();
  }
};
```

## 限值

IndexedDB只能由同源页面操作，因此不能跨域共享信息，同时每个来源的数据库占用的磁盘空间也有限制，具体可以存储多大，可以看[知乎的这篇文章](https://zhuanlan.zhihu.com/p/104536473)。

## 参考文章

- [阮一峰浏览器数据库 IndexedDB 入门教程](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
