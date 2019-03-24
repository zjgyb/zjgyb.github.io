---
title: python学习笔记（一）
copyright: true
date: 2018-12-15 10:03:02
category: python
tags:
  - python
keywords: python 学习笔记
description:
images:
---


python与js比少了声明，少了大括号，少了分号，多了必要层级。
<!-- more -->

## 变量

只需要直接赋值就可以，前面不需要任何声明，可以用`print(variable)`查看变量。例如：

```python python
a = 1
b = 'string'
print(a, b) # 1 string
```

## If-Else

```python python
mark = 65
if mark < 60:
    print('你挂了！')
elif mark < 90:
    print('你通过了！')
else:
    print('你很优秀！')
```

## 函数

### 最简单的形式：

```python python
def function1():
    print('a')
function1() # a
```

### 参数形式

```python python
def function2(num):
    return num ** 2
function2(5) # 25
```

## List

等同于其他语言的数组,比如js

```python python
a = [1, 'a', True]
```

### append——把一项数据添加到数组最后面

类似于js的push

``` python python
a = [1]
a.append('a')
print(a) # [1, 'a']
```

### pop——删除数组最后一项

```python python
a = [1, 'a']
a.pop()
print(a) # [1]
```

## for循环

```python python
b = [20, 10, 5]
total = 0
for e in b:
    total += e
print(total)
```

## while循环

```python python
##############
# total = 0
# for i in range(1, 5):
#     total += i
# print(total)
##############
total2 = 0
j = 1
while j < 5:
    total2 += j
    j += 1
print(total2)
```

## dictionary

等同于其它例如js的json

```python python
d = { "George": 24, "Tom": 32 }
d["George"] = 25
for key, value in d.items():
    print("key:", key)
    print("value:", value)
```

## class和object

```python python
class Robot:
    def __init__(self, name, color, weight):
        self.name = name
        self.color = color
        self.weight = weight
    def introduce_self(self):
        print("My name is " + self.name)

r1 = Robot("Tom", "red", 70)
r1.introduce_self()
```

## Boolean

```python python
type(True)
type(False)
```

## list comprehension

```python python
a = [x ** 2 for x in range(6, 0, -1)]
```

## set

```python python
a = set()
a.add(1)
for x in a:
    print(x)
```

## 参考视频

[Youtube](https://www.youtube.com/watch?v=Z1Yd7upQsXY&index=1&list=PLBZBJbE_rGRWeh5mIBhD-hhDwSEDxogDg)