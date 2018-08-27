---
title: mysql的学习
tags:
---

## mysql退出
* `exit;`
* `quit;`
* `\q;`

## 语句规范
+ 关键字与函数名称全部大写
+ 数据库名称、表名称、字段名称全部小写
+ SQL语句必须以分号结尾

## 创建、修改、删除数据库
`{}`里面选择其中之一，`[]`可选可不选
+ `CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTER SET [=] charset_name`
+ `ALTER {DATABASE | SCHEMA} [db_name] [DEFAULT] CHARACTER SET [=] charset_name`
+ `DROP {DATABASE | SCHEMA} [IF EXISTS] db_name`

### 查看数据库
+ `SHOW {DATABASES | SCHEMAS}`
+ `SELECT DATABASE();`
### 打开数据库
+ `USE db_name`

## 创建数据表
+ `CREATE TABLE [IF NOT EXISTS] table_name( cloumn_name data_type, ...)`
举例
``` mysql
mysql>CREATE TABLE tb1(
    ->username VARCHAR(20),
    ->age TINYINT UNSIGNED,
    ->salary FLOAT(8,2) UNSIGNED
    ->);
```
### 查看数据表
+ `SHOW TABLES [FROM db_name]`
### 查看数据表结构
`SHOW COLUMNS FROM tbl_name`
### 插入记录
`INSERT [INTO] tbl_name [(clo_name, ...)] VALUES(val,...)`
举例
* 全部插入`INSERT tb1 VALUES('NAME',22,88888.8)`
* 单个插入`INSERT (tb1 username) VALUES('NAME')`
### 记录查找
`SELECT expr,... FROM tb_name`
### 空值与非空
``` mysql
mysql>CREATE TABLE tb2(
    ->username VARCHAR(20) NOT NULL,
    ->age TINYINT UNSIGNED
    ->);
```
### 自动编号与主键
``` mysql
mysql>CREATE TABLE tb3(
    ->id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ->username VARCHAR(20) NOT NULL
    ->);
```
### 唯一约束
`UNIQUE KEY`