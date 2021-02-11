---
title: JS描述系列之排序算法
categories: 算法
tags:
  - 冒泡排序
  - 选择排序
  - 插入排序
  - 希尔排序
  - 归并排序
  - 快速排序
copyright: true
description: 本文是介绍用JS写排序算法，参考自数据结构与算法JavaScript描述
images: /JS描述系列之栈和队列/js.jpg
date: 2020-01-31 12:06:22
keywords:
---


## 前言

本文根据《数据结构与算法JavaScript描述》来写的，相当于个人的读书笔记。

## 冒泡排序

使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂浮到另一端。它是最慢的排序算法之一，但也是最容易的排序算法。

```js js
function bubbleSort(arr) {
  const len = arr.length;
  let temp;
  for (let outer = len; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (arr[inner] > arr[inner + 1]) {
        temp = arr[inner];
        arr[inner] = arr[inner + 1];
        arr[inner + 1] = temp;
      }
    }
  }
}
```

动画来自[菜鸟教程](https://www.runoob.com/w3cnote/bubble-sort.html)

![冒泡排序](./bubble/bubbleSort.gif)

## 选择排序

选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。

```js js
function selectionSort(arr) {
  let min, temp;
  let len = arr.length;
  for (let outer = 0; outer < len - 1; ++outer) {
    min = outer;
    for (let inner = outer + 1; inner < len; ++inner) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }
    temp = arr[outer];
    arr[outer] = arr[min];
    arr[min] = temp;
  }
}
```

动画来自[菜鸟教程](https://www.runoob.com/w3cnote/selection-sort.html)

![选择排序](./bubble/selectionSort.gif)

## 插入排序

插入排序有两个循环。外循环将数组元素挨个移动，而内循环对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。可以想象扑克牌的排序

具体算法描述：

1. 从第一个元素开始，该元素可以认为已经被排序
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素大于新元素，将该元素移到下一位置
4. 重复步骤 3，直到找到已排序的元素小于或等于新元素的位置
5. 将新元素插入到该位置后
6. 重复步骤 2~5

```js js
function insertionSort(arr) {
  let temp, inner;
  let len = arr.length;
  for (let outer = 1; outer < len; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
  }
}
```

动画来自[菜鸟教程](https://www.runoob.com/w3cnote/insertion-sort.html)

![插入排序](./bubble/insertionSort.gif)

## 希尔排序

这个算法在插入排序的基础上做了很大的改善。希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，而非相邻的元素。使用这种方案可以使离正确位置很远的元素更快的回到合适的位置。希尔排序的原理是通过定义一个间隔序列来表示在排序过程中进行比较的元素之前有多远的间隔。我们可以动态定义间隔序列。

### 给定间隔序列的希尔排序

```js js
function shellsort(arr) {
  const gaps = [5, 3, 1];
  for(let g = 0; g < gaps.length; g++) {
    for (let i = gaps[g]; i < arr.length; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
        arr[j] = arr[j - gaps[g]];
      }
      arr[j] = temp;
    }
  }
}
```

### 动态计算间隔序列的希尔排序

```js js
function shellsort(arr) {
  const N = arr.length;
  let h = 1;
  while (h < N / 3) {
    h = 3 * h + 1; // 通过这个公式计算间隔序列
  }

  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        let temp = arr[j];
        arr[j] = arr[j - h];
        arr[j - h] = temp;
      }
    }
    h = (h - 1) / 3;
  }
}
```

## 归并排序

原理：把一系列排好序的子序列合并成一个大的完整有序序列

### 自顶向下的归并排序

通常来讲，归并排序会使用递归的算法来实现。但在JS中因递归深度原因造成这种方式可行性不高。**但是**，在[菜鸟教程](https://www.runoob.com/w3cnote/merge-sort.html)有人提出了疑问，并且给出了JS自顶向下的方法，以下是教程中给出的代码:

```js js
// 未修改原数组
function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(left, right) {
  const result = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}
```

### 自底向上的归并排序

这个算法首先将数据集分解为一组只有一个元素的数组。然后通过创建一组左右数组将他们慢慢合并起来，每次合并都保存一部分排序好的数据，直到最后剩下的这个数组所有数组都已经完美排序。

```js js
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let step = 1;
  let left;
  let right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    // 防止数组单数的时候
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  const rightArr = arr.slice(startRight, stopRight);
  const leftArr = arr.slice(startLeft, stopLeft);
  rightArr.push(Infinity);
  leftArr.push(Infinity);
  let m = 0;
  let n = 0;
  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m++];
    } else {
      arr[k] = rightArr[n++];
    }
  }
}
```


动画来自[菜鸟教程](https://www.runoob.com/w3cnote/merge-sort.html)

![归并排序](./bubble/mergeSort.gif)

## 快速排序

快速排序时处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据变成有序。

这个算法首先要在列表中选择一个元素作为基准值。数据排序围绕这个基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。

排序步骤如下：

1. 选择一个基准元素，将列表分隔成两个子序列
2. 对列表重新排序，所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放到基准值的后面
3. 分别对较小元素的子序列和较大元素的子序列重复步骤1和2

```js js
function qSort(arr) {
  const len = arr.length;
  if (len === 0) return [];
  let lesser = [];
  let greater = [];
  let pivot = arr[0];
  for (let i = 1; i < len; i++) {
    if(arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater));
}
```

## 参考教程

- [维基百科-插入排序](https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F)
- [菜鸟教程](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)
