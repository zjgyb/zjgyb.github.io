---
title: git的使用
categories: 开发者手册
tags: git
copyright: true
---

## 从master分支创建dev分支并切换到dev分支

``` js
git checkout -b dev
```
相当于下面两条语句
``` js
git branch dev
git checkout dev
```

## 查看本地分支 *表示当前分支
``` js
git branch
```

## 查看远程全部分支 白色本地存在，红色本地不存在 
``` js
git branch -a
```

## 分支合并(将dev合并到master)
``` js
git checkout master
git merge dev
```

## 合并完成后删除分支 
``` js
git branch -d dev
```

## 本地同步远程的分支
``` js
git fetch origin -p
```

## 把本地的仓库推到空的github仓库上
``` js
git remote add origin git@github.com:githubname/repositoriesname.git
// 第一次提交时需要加上`-u`
git push -u origin master
```

## 提交代码的步骤

``` js
git status // 查看文件改动
git add .  // 把变化的所有文件放入缓冲区
git commit -m "some messages" // -m后面输入的是本次提交的说明
```

## 回退
+ 撤销`git status`命令使用`git reset HEAD filename`
+ 回退上一版本 `git reset --hard HEAD`
+ 回退指定版本 `git reset --hard 版本号`

## 查看以往版本号(本地)
``` js
git reflog
```

## 查看各版本号及信息(个人和他人)
``` js
git log
```
+ `git log`命令显示从最近到最远的提交日志
+ 如果看着太繁琐，可以使用`git log \-\-pretty=online`

## 撤销修改

+ 在`git commit -m`前使用`git checkout -- filename`来撤销修改

## 对于已经push的版本回退
``` js
git reset --hard 版本号
git push -f origin dev
```

## 查看文件修改内容
``` js
git diff filename
```
