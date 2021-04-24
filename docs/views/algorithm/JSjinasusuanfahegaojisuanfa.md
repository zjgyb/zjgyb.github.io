---
title: JS描述系列之检索算法和高级算法
categories: 算法
tags:
  - 顺序查找
  - 二分查找
  - 动态规划
  - 贪心算法
copyright: true
description: 本文是介绍用JS查找元素和利用算法解决问题，参考自数据结构与算法JavaScript描述
images: /JS描述系列之栈和队列/js.jpg
date: 2020-02-02 15:19:20
keywords:
---


## 前言

本文根据《数据结构与算法JavaScript描述》来写的，相当于个人的读书笔记。主要由两块内容构成，一块是检索(查找)，包含顺序查找和二分查找，另一块是高级算法，包含动态规划和贪心算法。

## 顺序查找

对于查找数据来说，最简单的方法就是从列表中的第一个元素开始对列表元素逐个进行判断，直到找到想要的结果，或者直到列表结尾也没有找到。这种方法称为顺序查找，也称线性查找

```js js
// 这里只是模拟，如果实际过程中可以使用indexOf更快的查询
function seqSearch(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      return true;
    }
  }
  return false;
}
```

### 查找最大值和最小值

以下只是模拟过程，可以使用 Math.max 和 Math.min 替代

```js js
// 查找最小值
function findMin(arr) {
  let min = arr[0];
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

### 使用自组织数据

对于未排序的数据集来说，当被查找的数据位于数据集的起始位置时，查找是最快、最成功的。通过将成功找到的元素置于数据集的起始位置，可以保证在以后的操作中该元素能快速的找到。

数据自组织的意思就是: 数据的位置并非由程序员在程序执行之前就组织好，而是在程序运行过程中由程序自动组织的。

```js js
function seqSearch(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      if (i > 0) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
      return true;
    }
  }
  return false;
}
```

另外一种给函数添加自组织数据的方法是：将找到的元素移动到数据集的起始位置，但是如果这个元素已经很接近起始位置，则不会对它的位置进行交换。参照**80-20 原则**，仅当数据处于数据集 20%元素之外时，该数据才需要重新移动到数据集的起始位置。

```js js
function seqSearch(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      if (i > len * 0.2) {
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
      }
      return true;
    }
  }
  return false;
}
```

## 二分查找

算法只对有序的数据集有效。算法描述如下：

1. 将数组的第一个位置设置为下边界
2. 将数组的最后一个位置设置为上边界
3. 若下边界等于或小于上边界，则
   a. 将中点设置为上边界与下边界之和除以 2
   b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在的下标加 1
   c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在的下标减 1
   d. 如果中点元素即为要查找的元素，可以直接返回

```js js
function binSearch(arr, data) {
  let upperBound = arr.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    if (arr[mid] > data) {
      upperBound = mid - 1;
    } else if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
```

### 计算重复次数

```js js
function count(arr, data) {
  let count = 0;
  const position = binSearch(arr, data);
  if (position > -1) {
    count++;
    let n = position - 1;
    while (true) {
      if (arr[n] === data) {
        count++;
        n--;
      } else {
        break;
      }
    }
    n = position + 1;
    while (true) {
      if (arr[n] === data) {
        count++;
        n++;
      } else {
        break;
      }
    }
  }
  return count;
}
```

## 动态规划

动态规划有时被认为是一种与递归相反的技术。递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整个问题。动态规划解决方案从底部开始解决问题，将所有的小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题。

### 计算斐波那契数列

#### 递归法

```js js
function recurFib(n) {
  if (n < 2) {
    return n;
  }
  return recurFib(n - 1) + recurFib(n - 2);
}
```

#### 动态规划法

```js js
// 使用数组的原因是保存中间变量
function dynFib(n) {
  const val = [];
  if (n === 1 || n === 2) {
    return 1;
  }
  val[1] = 1;
  val[2] = 2;
  for (let i = 3; i <= n; i++) {
    val[i] = val[i - 1] + val[i - 2];
  }
  return val[n - 1];
}
```

#### 迭代法

```js js
function iterFib(n) {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; i++) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}
```

### 寻找最长公共子串

这个算法使用一个二维数组储存两个字符串相同位置的字符比较结果，初始化时，该数组的每一个元素被设置为 0。每次在这两个数组的相同位置发现了匹配，则数组对应行和列的元素加 1，否则保持为 0，按照这种方式，一个变量会持续记录下找到多少个匹配项。当算法执行完毕后，这个变量会结合一个索引变量来获得最长公共子串。

```js js
function lcs(word1, word2) {
  let max = 0;
  let index = 0;
  const lcsarr = [];
  const w1Len = word1.length;
  const w2Len = word2.length;
  for (let i = 0; i <= w1Len; i++) {
    lcsarr[i] = [];
    for (let j = 0; j <= w2Len; j++) {
      lcsarr[i][j] = 0;
    }
  }

  for (let i = 1; i <= w1Len; i++) {
    for (let j = 1; j <= w2Len; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
      }

      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }
    }
  }
  let str = "";
  if (max === 0) {
    return str;
  }
  for (let i = index - max; i < index; i++) {
    str += word1[i];
  }
  return str;
}
```

### 背包问题

问题描述：试想你是一个保险箱大盗，打开一个装满奇珍异宝的保险箱，但是你必须将这些宝贝放入你的一个小背包中。保险箱的物品规格和价值不同。你希望自己的背包装进去的宝贝总价值最大。例如保险箱里有 5 件物品，尺寸分别是 3、4、10、11、13，且背包的容积为 16，那么恰当的解决方案是选取第 3 和第 5 件物品，它们的总尺寸是 16，总价值为 23。

#### 递归法

```js js
/**
 * description:
 * param {type} capacity-容积 size-物品尺寸 value-物品价值 n-物品数量
 * return:
 */
function knapsack(capacity, size, value, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }

  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1);
  } else {
    return Math.max(
      value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
      knapsack(capacity, size, value, n - 1)
    );
  }
}
```

#### 动态规划

```js js
function dKnapsack(capacity, size, value, n) {
  const K = [];
  for (let i = 0; i <= n; i++) {
    K[i] = [];
    for (let j = 0; j <= capacity; j++) {
      K[i][j] = 0;
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (size[i - 1] <= j) {
        // j代表背包的容量 j - size[i - 1]剩余的容量
        // 第一个值代表现在的价值+剩余容量的值j - size[i - 1]的价值
        // 第二个值代表之前的容量的价值
        K[i][j] = Math.max(
          value[i - 1] + K[i - 1][j - size[i - 1]],
          K[i - 1][j]
        );
      } else {
        // 这个容量还是不足以添加新容量
        K[i][j] = K[i - 1][j];
      }
    }
  }
  return K[n][capacity];
}
```

## 贪心算法

贪心算法总是会选择当下的最优解，而不去考虑这一次选择会不会对未来的选择造成影响。使用贪心算法表明，实现者希望做出的这一系列局部最优选择能够带来最终的整体最优选择。

### 找零问题

问题描述：从商店购买了一些商品，找零63美分，店员要怎样给你找这些零钱？如果店员根据贪心算法找零，他会给你两个25美分，一个10美分和三个1美分。在没有使用50美分的情况下这是最少的硬币数量

```js js
function makeChange(origAmt, coins) {
  if (origAmt % .25 < origAmt) {
    coins[3] = Number.parseInt(origAmt / .25);
    origAmt %= .25;
  }

  if (origAmt % .1 < origAmt) {
    coins[2] = Number.parseInt(origAmt / .1);
    origAmt %= .1;
  }

  if (origAmt % .05 < origAmt) {
    coins[3] = Number.parseInt(origAmt / .05);
    origAmt %= .05;
  }

  coins[0] = Number.parseInt(origAmt / .01);
}

const origAmt = .63;
const coins = [];
makeChange(origAmt, coins);
```

### 背包问题的贪心算法

算法描述如下：
1. 背包的容量为W，物品的价格为v，重量为w
2. 根据v/w的比率对物品排序
3. 按比率的降序方式来考虑物品
4. 尽可能多地放入每个物品

```js js
/**
 * @description: 计算物品的权重，然后使用插入排序对权重进行排序，然后遍历计算最大价值
 * @param {type}
 * @return:
 */
function ksack(values, weights, capacity) {
  const arr = values.map((ele, index) => ele / weights[index]);
  const len = values.length;
  let arr1 = [arr[0]];
  // 插入排序
  for(let i = 1; i < len; i++) {
    let temp = arr[i];
    let temp1 = values[i];
    let temp2 = weights[i];
    let n = i;
    while (n > 0 && arr1[n - 1] < temp) {
      arr1[n] = arr1[n - 1];
      values[n] = values[n - 1];
      weights[n] = weights[n - 1];
      n--;
    }
    arr1[n] = temp;
    values[n] = temp1;
    weights[n] = temp2;
  }
  let w = 0;
  let i = 0;
  let val = 0;
  while (w < capacity && i < len) {
    if (w + weights[i] <= capacity) {
      w += weights[i];
      val += values[i];
    }
    i++;
  }
  return val;
}

const value = [4, 5, 10, 11, 13]
const size = [3, 4, 7, 8, 9]
const capacity = 16;
console.log(ksack(value, size, capacity));
```

## 总结

至此，《数据结构与算法JavaScript描述》这本书除了数组与图和图的算法这两章没有写博客之外，其他关于介绍数据结构的都写了博客，都是以**JS描述系列之**开头，数组在之前写过它在JS中包含的方法，因此不过多介绍，图和图的算法个人认为之后有需求再详细看。因此本篇应该算是这本书笔记的终结。

关于这本书，总体还是不错的，能够带你认识数据结构相关的概念，并结合具体场景给出方案，但其中也存在一些问题，我看的是中文版，不知道和原版差距如何，但就中文版而言，其中有许多语法的错误，还有许多代码的错误，在我总结的笔记中也可以看出，我并没有照搬照抄，而是通过自己思考写出的代码，原文中有错的地方我也进行了纠正，因此可以方便回顾。

最后说一句：**越努力越幸运**