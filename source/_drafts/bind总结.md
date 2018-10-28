---
title: bind总结
tags:
---

{% note %}
bind()方法会创建一个新函数。当这个新函数被调用时，bind()的第一个参数将作为它运行时的this，之后的一系列参数将会在传递的实参前传入作为它的参数。
{% endnote %}

<!-- more -->

举个例子:chestnut:

``` js
let dog = {
    sound: 'wangwangwang',
    talk() {
        console.log(this.sound);
    }
}

dog.talk(); // wangwangwang
let sound = dog.talk;
sound(); // undefined
```

为什么呢:confused:

``` js
let sound = function() {
    console.log(this.sound); // 这里的this找不到sound这一属性
}
```

如何解决——使用bind方法

``` js
let sound = dog.talk.bind(dog);
sound(); // wangwangwang
```

`bind`能够改变一个函数的执行上下文