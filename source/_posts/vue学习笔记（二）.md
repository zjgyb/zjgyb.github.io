---
title: vue学习笔记（二）
copyright: true
date: 2018-10-31 20:30:32
category: Vue
tags:
 - Vue
 - js
 - 前端
keywords: Vue js 前端 学习 学习笔记
---

{% note %}
继续学习之vue笔记（二）
{% endnote %}

<!-- more -->

## 动画

### 规则

在vue中可以自定义动画，也可以引入第三方库。如果自定义动画，那么动画的规则由[官网](https://cn.vuejs.org/v2/guide/transitions.html)的一张图片能够清楚的解释动画进入与离开的规则。

![动画规则](images/transition.png)

### 简单使用

实现效果：点击确定按钮判断一个是否input表单是否为空，若为空则跳出提示信息，如不为空，则新增列表

主要代码

```html html
<input
    type="text"
    placeholder="输入你的技能"
    class="input"
    v-model="skill"
    @focus="input"
/>
<transition name="fade">
  <p class="text" v-if="message">
      需要输入字符
  <&#47;p>
<&#47;transition>
```

```css css
.text {
  background-color: orange;
  shadow: 1px 1px 2px #eee;
  display: inline-block;
  position: absolute;
}

.fade-enter-active {
  animation: message .5s;
}

.fade-leave-active {
  animation: message .5s reverse;
}

@keyframes message {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(150%);
  }

  100% {
    transform: scale(100%);
  }
}
```

```js js
new Vue({
  methods: {
    input() {
      this.message = false;
    }
  }
})
```

{% jsfiddle 8wkg7reb/3 result,html,css,js light %}

### 使用插件——[animate.css](https://daneden.github.io/animate.css/)

删除进入与离开的css动画，直接在html上加。

``` html html
<input
    type="text"
    placeholder="输入你的技能"
    class="input"
    v-model="skill"
    @focus="input"
/>
<transition
    name="fade"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
>
<p class="text" v-if="message">
    需要输入字符
<&#47;p>
<&#47;transition>
```

{% jsfiddle eywraw8t/441809 result,html,css,js light %}

## VeeValidate

这对于表单的验证十分有效。更多功能参照[官网](https://baianat.github.io/vee-validate/)

### 简单使用

{% jsfiddle rn1t5e8L/2 result,html,css,js light %}


## 参考教程

- [Youtube](https://www.youtube.com/watch?v=78tNYZUS-ps)