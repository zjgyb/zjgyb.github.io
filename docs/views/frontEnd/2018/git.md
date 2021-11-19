---
title: git的使用
categories: 前端
tags: git
copyright: true
---

## 用户名以及邮箱设置

```git
git config --global user.name your_github_name
git config --global user.email your_github_email
// 查看
git config user.name
```

## 从 master 分支创建 dev 分支并切换到 dev 分支

```git
git checkout -b dev
```

相当于下面两条语句

```git
git branch dev
git checkout dev
```

## 查看分支

1. `git branch`: 查看本地分支 \*表示当前分支
2. `git branch -a`: 查看远程全部分支 白色本地存在，红色本地不存在
3. `git branch -r`: 查看远程分支

## 分支合并(将 dev 合并到 master)

```git
git checkout master
git merge dev
```

## 删除分支

```git
git branch -D dev
```

## 本地同步远程的分支

```git
git fetch origin -p
```

## 把本地的仓库推到空的 github 仓库上

```git
git remote add origin git@github.com:githubname/repositoriesname.git
// 第一次提交时需要加上`-u`
git push -u origin master
```

## 提交代码的步骤

```git
git status // 查看文件改动
git add .  // 把变化的所有文件放入缓冲区
git commit -m "some messages" // -m后面输入的是本次提交的说明
git push origin master
```

## 回退

- 撤销`git status`命令使用`git reset HEAD filename`或者`git rm --cached filename`
- 回退到某个版本（不会删除之前的提交）`git revert git_log_name`或者`git checkout git_log_name`
- 回退上一版本 `git reset --hard HEAD`
- 回退指定版本 `git reset --hard 版本号`

{% note warning %}
使用`git reset`时要特别注意，因为它会销毁之前的提交数据，如果只是想回退到某个状态，请使用`git revert git_log_name`
{% endnote %}

## 查看以往版本号(本地)

```git
git reflog
```

## 查看各版本号及信息(个人和他人)

```git
git log
```

- `git log`命令显示从最近到最远的提交日志
- 如果看着太繁琐，可以使用`git log --pretty=oneline`或者更简洁的`git log --oneline`

## 撤销修改

- 在`git commit -m`前使用`git checkout -- filename`来撤销修改

## 对于已经 push 的版本回退

```git
git reset --hard 版本号
git push -f origin dev
```

## 查看文件修改内容

```git
git diff filename
```

## 解决冲突

删除冲突代码，然后使用`git commit`，按下`Shift + ;`键，然后输入`wq`，最后按下`Enter`键

## git推到github失败解决措施

### 解决措施1

1. 打开windows目录下`C://Windows/System32/drivers/etc`
2. 修改hosts文件

```
#github
#192.30.253.112 github.com
#151.101.185.194 github.global.ssl.fastly.net
```

## 远程仓库相关

1. `git remote -v`：查看远程仓库
2. `git remote rm origin`: 删除远程仓库
3. `git remote add origin`: 新增远程仓库

## fork同步分支

1. `git remote add upstream https://xxx`
2. `git fetch upstream`
3. `git merge upstream/master`
4. `git push`

## 克隆需要的类型定义包

**注意**：需要git版本2.27.0及以上，该方法来自[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

1. `git clone --sparse --filter=blob:none --depth=1 <forkedUrl>`
    - `--sparse` 告知 git 使用 sparse-checkout 方式，所以首次克隆的只有根部的文件。
    - `--filter=blob:none` 将排除文件，只在需要时获取它们。
    - `--depth=1` 可以通过阶段提交历史来进一步提高克隆速度，不过它可能会导致一些问题，见：[here](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/).
2. `git sparse-checkout add types/<type> types/<dependency-type> ...`