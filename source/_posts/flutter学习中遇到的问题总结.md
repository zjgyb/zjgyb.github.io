---
title: flutter学习中遇到的问题总结
copyright: true
date: 2018-10-15 17:30:43
tags:
 - flutter
keywords: flutter 问题 解决措施
description:
---


> 在flutter学习中遇到的问题以及解决办法

<!-- more-->

## 问题一 Android license status unknown

**解决措施**

``` flutter
flutter upgrade
```

## 问题二 Windows生成SHA-1问题

在[官网](https://developers.google.com/android/guides/client-auth?hl=zh-cn)上Windows生成SHA-1通过`keytool -exportcert -list -v \
-alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore`命令的方式生成SHA-1，但是我在电脑上使用这一命令会出现`keytool 错误：java.lang.Exception：只允许一个命令：同时指定了 -exportcent 和 -list`的错误提示

**解决措施**

使用`keytool -list -v -alias androiddebugkey -keystore .android/debug.keystore`命令

在[stackoverflow](https://stackoverflow.com/questions/49699765/keytool-error-java-lang-exception-only-one-command-is-allowed-both-exportcer)同样的解决措施

## 问题三 Firebase的连接问题

点击创建账号总是出现`[FirebaseAuth: ] getGoogleApiForMethod() returned Gms: com.google.firebase.auth.api.internal.zzal@b1d4e3e`问题

**未解决**