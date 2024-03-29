---
title: 时间复杂度与空间复杂度
date: 2022-12-11
categories: 算法
---

在算法解题中要知道一个算法的优劣可以从时间复杂度与空间复杂度去衡量，那么如何去看时间复杂度以及空间复杂度呢

## 时间复杂度

在数学中存在函数的概念，比如幂函数：$y = x^n$、指数函数：$y = n^x$、对数函数 $y = log{_n}{x}$

时间复杂度其实可以通过函数来表示，比如$f(n) = O(n)$

### 什么是$O$

在维基中的定义是：

> 大O符号是一种数学符号，它描述了当参数趋向于特定值或无穷大时函数的限制行为

比如一个函数可以表示为 $f(n) = n^2 + 3n + 7$，那么这个函数的时间复杂度为 $f(n) = O(n^2)$，因为在n很大的时候 $3n + 7$ 的值可以忽略，影响 $f(n)$ 最终值由 $n^2$ 决定，因此我的理解是 $O$ 代表某个函数量级的表示方法，比如之前的函数量级为 $O(n^2)$

常见的时间复杂度量级有$O(1)、O(log{n})、O(n)、O(nlog{n})、O(n^2)、O(n^3)、O(2^n)$

在这些时间复杂度量级中对 $log{n}$ 以及 n$log{n}$ 一般比较难理解，我以下面的例子来做解释

### $log{n}$

**二分查找**

例如：给定一个升序数组[1, 2, 4, 8, 10, 19]，找到目标值10在数组中的位置

一般通过最左边和最右边的值，然后判断中间的值是大于目标元素还是小于目标元素，然后不断缩小范围

为什么说这个算法的时间复杂度为$log{n}$呢？

在二分查找中每次都是查找数值的一半，假设最差情况下需要查找x次，一共有n个数值，那么这个函数为 $2^x = n$，那么查找的次数为 $x = log{_2}{n}$，也就是这个算法为 $f(n) = log{_2}{n}$

按理说这个时间复杂度应该是 $log{_2}{n}$ ，为什么是 $log{n}$ 呢，其实 $log{_2}{n} = log{_2}{10} * log{n}$，因此在N极大的时候 $log{_2}{10}$ 可以忽略不计，因此二分查找的时间复杂度为 $O(log{n})$

## $nlog{n}$

快排

基本思路可以参考[JS描述系列之排序算法](https://zjgyb.github.io/views/algorithm/paixu.html#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)

如何得出的解法看[知乎的这篇回答](https://www.zhihu.com/question/22393997)

下面是我根据文章内的公式自己理了一下：

公式：f(n) = f(i) + f(n - i - 1) + n，i代表左边lesser个数，i从0到n - 1都可能存在，因此 f(i) = $\frac{1}{n}$ $\sum_{j=0}^{n-1} f(j)$，根据该结论得出：

$f(n) = \frac{2}{n} \sum_{j=0}^{n-1} f(j) + n$ （1式）

根据1式乘以n得到2式

$n*f(n) = 2 \sum_{j=0}^{n-1} f(j) + n^2$ （2式）

根据2式得出3式

$(n-1)*f(n-1) = 2 \sum_{j=0}^{n-2} f(j) + (n-1)^2$ （3式）

2式减去3式得出4式

$n*f(n) = (n+1)f(n-1) + 2n + 2$ （4式）

可以忽略常数项2同时除以$n(n + 1)$得到5式

$\frac{f(n)}{n+1} = \frac{f(n-1)}{n} + \frac{2}{n+1}$ （5式）

从5式进行推导
$\frac{f(n-1)}{n} = \frac{f(n-2)}{n-1} + \frac{2}{n}$
...
$\frac{f(2)}{3} = \frac{f(1)}{2} + \frac{2}{3}$

然后把这些算式代入5式中得出6式

$\frac{f(n)}{n+1} = \frac{f(1)}{2} + 2\sum_{j=3}^{n+1} \frac{1}{j}$ （6式）

$\sum_{j=3}^{n+1} \frac{1}{j}$的值为$log{_e}{n+1} + γ - \frac{2}{3}$，其实$γ$约等于0.577，是一个常量，因此可以得出：

$f(n) = O(nlog{n})$ （7式）

## 空间复杂度

空间复杂度也是用$O$表示，空间复杂度相对比较简单

常见的空间复杂度量级有$O(1)、O(n)、O(n^2)$

## 几个疑问

### 递归的时间复杂度

给定的公式为 递归的次数 * 每次递归中的操作次数

以斐波那契的递归为例

```ts
function fib(n: number): number {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return fib(n - 1) + fib(n - 2)
}
```

可以看出来这个函数为 $f(n) = f(n - 1) + f(n - 2)$ （1式）

每次递归执行相加操作，为O(1)

其实查看递归的次数可以使用数学方法证明

根据1式可以得出2式，其实c为常量

$f(n) = 2f(n-2) + c$ （2式）

根据2式进行推导：
$f(n-2) = 2f(n-4) + c ... f(3) = 2f(1) + c$

把上述推导结论代入2式中得出3式

$f(n) = 2^\frac{2}{n-1}f(1) + kc$ （3式）

因此一共递归了$2^\frac{2}{n-1}$

那么该递归的时间复杂度为$O(2^n)$

### 递归的空间复杂度

给定的公式为 递归深度 * 每次递归的空间复杂度

以上面的斐波那契为例：深度为$n$，每次执行相加操作，那么每次递归的空间复杂度为$O(1)$，因此上面的斐波那契空间复杂度为$O(n)$

## 总结

初步了解了如何看时间复杂度和空间复杂度，以后刷题的时候可以多多总结，知道自己解法的优劣

## 参考文章

- [算法的时间与空间复杂度（一文看懂）](https://zhuanlan.zhihu.com/p/50479555)
- [leetcode-master](https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%89%8D%E5%BA%8F/%E5%85%B3%E4%BA%8E%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E9%83%BD%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%81.md)
- [维基百科](https://en.wikipedia.org/wiki/Big_O_notation#Infinite_asymptotics)
- [如何证明快速排序法的平均复杂度为 Θ(nlogn)](https://www.zhihu.com/question/22393997)