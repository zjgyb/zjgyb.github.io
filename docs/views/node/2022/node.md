---
title: node知识点
categories: Node
date: 2022-07-20
---

## npm

```bash
# 查看当前的下包镜像源
npm config get registry

# 设置镜像源
npm config set registry=https://registry.npm.taobao.org/
```

## mysql

PK: Primary Key主键，唯一表示
NN: Not Null值不允许为空
UQ: Unique 值唯一
AI: Auto Increment值自动增长

```sql
select * from users
select name, password from users
insert into users (name, password) values ('xxx', 'xxxx1')
update users set password='xxxx2' where id=2
update users set password='xxxx3', name='xxx2' where id=2
delete from users where id=2
```

and、or

```sql
select * from users where status=0 and id<3
select * from users where status=0 or id<3
```

order

```sql
-- 升序
select * from users order by status asc

-- 降序
select * from users order by status desc

-- 多重排序
select * from users order by status desc, password asc
```

count

```sql
select count(*) from users where status=0
```

as

```sql
select count(*) as total from users where status=0
```


## node中使用mysql

```js
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'mydb',
});

db.query('select 1', (err, result) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(1);
    console.log(result);
});
```

## node中使用session

```ts
// express-session
```

## JWT

JSON Web Token

包含Header、Payload、Signature

`jsonwebtoken`、`express-jwt`

## Node非阻塞

Node是单线程

## Node事件循环

## Node异常处理

## 模块系统

- 核心模块：直接引用
- 第三方模块：使用npm安装
- 自定义模块：自己写模块并引用

1. EsModule中，没有`__filename`和`__dirname`
2. CommonJs中，this指向当前模块，在EsModule中，this指向undefined
3. 在EsModule中引入模块需要传递完整的拓展名，而在CommonJs中require函数可以省略
4. EsModule默认在严格模式下

## Buffer对象

处理大数据、音频、视频等

## Stream流

## 事件模式


