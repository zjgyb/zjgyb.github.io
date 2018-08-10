---
layout: post
title: git的使用
categories: git
tags: git
copyright: true
---

## 从master分支创建dev分支并切换到dev分支
<!-- more -->
+ git checkout master
+ git checkout -b dev 相当于以下两条命令
+ ===
+ git brach dev
+ git checkout dev


## 查看本地分支 *表示当前分支 `git branch`

## 查看远程全部分支 白色本地存在，红色本地不存在 `git branch -a`

## 修改代码、提交代码

+ git add .
+ git commit -m "some messages"

{: .custom-block.warning }
-m后面输入的是本次提交的说明

## 分支合并(将dev合并到master)

{: .custom-block.tip }
+ git checkout master
+ git merge dev

## 合并完成后删除分支 `git branch -d dev`

## 回退
+ 撤销`git status`命令`git reset HEAD filename`
+ 回退上一版本 `git reset --hard HEAD`
+ 回退指定版本 `git reset --hard 版本号`

## 查看以往版本号(本地) `git reflog`

## 查看各版本号及信息(个人和他人)`git log`

+ git log命令显示从最近到最远的提交日志
+ 如果看着太繁琐，可以使用git log \-\-pretty=online

## 撤销修改 在`git commit -m`前`git checkout -- filename`

## 对于已经push的版本回退

+ git reset --hard 版本号
+ git push -f origin dev

## 本地同步远程的分支`git fetch origin -p`

## 查看文件是否被修改`git status`
## 查看文件修改内容`git diff filename`
## 把本地的仓库推到空的github仓库上

+ git remote add origin git@github.com:githubname/repositoriesname.git
+ // 第一次提交时需要加上`-u`
+ git push -u origin master