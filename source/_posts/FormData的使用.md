---
title: FormData的使用
categories: 前端
tags:  
- js
- API
copyright: true
---

## 背景
对于这个标签，之前一直没注意它的好处，直到在查阅express如何接受FormData传过来的数据的时候发现了它的方便之处。

## 优点
** 能够自动找到form标签下所有带name的表单 **
举例说明
``` html
<!-- html 部分 -->
<form>
    <input type="text" name="text" />
    <textarea rows="10" cols="30" name="textarea">
        文本框
    </textarea>
</form>
```
``` js
// js部分
const form = document.querySelector('form');
const btn = document.querySelector('button');
btn.onclick = function () {
    // 没有写检验
    let data = new FormData(form);
    fetch('./supply', {
            body: data,
            cache: 'no-cache',
            credentials: 'same-origin',
            method: 'POST'
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}
```
{% note info %}
只需要获取form的节点，它就能自动获取含有name的表单
{% endnote %}
{% note warning %}
值得注意的是——在表单禁用的时候是不能获取到里面的值
例如
`<input type="text" name="text" disabled/>`
{% endnote %}
## express获取FormData传过来的值
其实下载一个模块就可以了，`connect-multiparty`
``` js
// 使用方法
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
router.post('/', multipartMiddleware, (req, res, next) => {
    console.log(req.body); // 查看req.body就可以看传过来的值了
    res.send(req.body);
});
```