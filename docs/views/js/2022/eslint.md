---
title: Eslint入门
date: 2022-12-17
categories: JavaScript
publish: false
---

从配置项开始说起

## root

可选值为`true`

作用：停止向父元素目录查找规则

例如有如下目录结构：

```
template
    - package.json
    - .eslintrc.js
    - src
        - login
            - .eslintrc.js
            - login.vue
```

一般情况下，对于`login.vue`这个文件校验规则是`login`目录下的`.eslintrc.js`和`template`目录下`.eslintrc.js`之间的g共同作用的结果，如果两个配置文件的规则产生冲突，那么以最近的规则为准，即`login`目录下的`.eslintrc.js`文件

但是假如在`login`目录下的校验文件中设置`root: true`，那么校验规则不再向上寻找，即`login.vue`文件的校验规则**只**受到当前`.eslintrc.js`校验文件的影响

## globals

## env

## ignorePatterns

## parse

## parseOptions

## rules

## extends

## plugins

## 参考来源

- [Eslint官网](https://eslint.org/)
- [ESLint配置文件.eslintrc参数说明](https://segmentfault.com/a/1190000020835739)