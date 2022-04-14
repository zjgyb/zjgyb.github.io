---
title: vue-router
categories: Vue
---

## 路由模式

有两种模式：`hash`和`history`；
对应方法：`createWebHashHistory`和`createWebHistory`；
对应事件：`hashchange`、`popstate`和`history.pushState`

```ts
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('views/home/index.vue'),
    },
    {
        path: '/login',
        component: () => import('views/login/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('views/404/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
});

export default router;
```

## 编程式导航

跳转路由无外乎两种，一种通过`<router-link>`方式跳转，一种是通过`js`进行跳转，同时跳转的方式也有两种，一种是通过`path`的方式，指定具体的path，另一种是通过name的方式，这个在定义路由的时候设置

如下案例就是基本的跳转：

```vue
<template>
    <router-link to="/login">跳转</router-link>
    <router-link :to="{ path: '/login' }">跳转</router-link>
    <router-link :to="{ name: 'login' }">跳转</router-link>
    <button @click="onLogin">跳转</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogin = () => {
    router.push('/login');
    router.push({ path: '/login' });
    router.push({ name: 'login' });
}
</script>
```

## 历史记录

## 路由传参

## 嵌套路由

## 命名视图

## 重定向

## 导航守卫

## 路由元信息