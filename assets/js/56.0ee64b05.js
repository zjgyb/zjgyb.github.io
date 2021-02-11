(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{610:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("因为最近在看高程，看的过程中对相关的语法进行总结，加深理解以及方便回顾。")]),t._v(" "),a("h2",{attrs:{id:"bom-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-概述"}},[t._v("#")]),t._v(" BOM 概述")]),t._v(" "),a("p",[t._v("BOM 提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关。提供的对象有"),a("code",[t._v("window")]),t._v("、"),a("code",[t._v("location")]),t._v("、"),a("code",[t._v("navigator")]),t._v("、"),a("code",[t._v("screen")]),t._v("、"),a("code",[t._v("history")]),t._v("这五种。其中"),a("code",[t._v("window")]),t._v("对象比较特殊，在浏览器中担任着双重角色，一方面他是通过 JavaScript 访问浏览器窗口的一个接口，另一方面又是 ECMAScript 规定的 Global 对象，所以"),a("code",[t._v("window.location")]),t._v("等于"),a("code",[t._v("location")]),t._v("，为方便区别，本文所要讲的"),a("code",[t._v("window")]),t._v("含义是第一种意思——访问浏览器的一个接口。")]),t._v(" "),a("h2",{attrs:{id:"window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" window")]),t._v(" "),a("h3",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[t._v("#")]),t._v(" open()")]),t._v(" "),a("ul",[a("li",[t._v("open(url[, name, features, replace]): 加载的 url、新窗口的名称(但是没有发现这个定义的参数)、新页面的特性")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开了一个新界面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有四个特殊窗口名称: _self、_parent、_top这三个都是在原窗口打开新窗口, _blank打开一个新窗口")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与第一个效果相同")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baidu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height=400, width=400, top=10, left=10, resizable=yes"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出现一个小窗口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wroxWin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwroxWin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭打开的窗口")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("关于第三个参数的一些特性列表：")]),t._v(" "),a("ul",[a("li",[t._v("width、height(number): 都不能小于 100，设置小于 100 时就打开默认值 100 的宽和高")]),t._v(" "),a("li",[t._v("left、top(number): 新窗口的左上坐标，坐标相对的是屏幕宽度，若为负值，则取默认值 0")]),t._v(" "),a("li",[t._v("fullscreen(yes or no): 浏览器窗口最大化，经过测试 78.0.3904.97 版本的 chrome 无效，因为设置了之后都能打开相同大小的窗口")]),t._v(" "),a("li",[t._v("location(yes or no): 是否显示地址栏，经过测试我最新的 chrome 都会显示地址栏")]),t._v(" "),a("li",[t._v("menubar(yes or no): 是否显示菜单栏，最新 chrome 无效")]),t._v(" "),a("li",[t._v("resizable(yes or no): 是否可拖动浏览器边框改变其大小，最新 chrome 无效")]),t._v(" "),a("li",[t._v("scrollbars(yes or no): 内容显示超出窗口大小是否可以滚动，无效")]),t._v(" "),a("li",[t._v("status(yes or no): 是否显示状态栏，阵亡")]),t._v(" "),a("li",[t._v("toolbar(yes or no): 是否显示工具栏，阵亡")])]),t._v(" "),a("p",[t._v("应用：例如在"),a("a",{attrs:{href:"https://www.imooc.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("慕课网"),a("OutboundLink")],1),t._v("使用第三方登录，例如 qq 登录时就会弹出新窗口进行登录验证")]),t._v(" "),a("h3",{attrs:{id:"settimeout-、setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-、setinterval"}},[t._v("#")]),t._v(" setTimeout()、setInterval()")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout(): 超时调用")]),t._v(" "),a("li",[t._v("setInterval(): 间歇调用")])]),t._v(" "),a("blockquote",[a("p",[t._v("一般认为使用超时调用来模拟间歇调用是一种最佳模式，因为超时调用只执行一次调用就会自行停止。")])]),t._v(" "),a("h3",{attrs:{id:"alert-、confirm-、prompt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert-、confirm-、prompt"}},[t._v("#")]),t._v(" alert()、confirm()、prompt()")]),t._v(" "),a("ul",[a("li",[t._v("alert(str): 警告")]),t._v(" "),a("li",[t._v("confirm(str): 确认，返回一个 bool 值")]),t._v(" "),a("li",[t._v("prompt(str, inputStr): 点击取消返回"),a("code",[t._v("null")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Are you sure?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"I'm so glad your're sure!\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"I'm sorry to hear you're not sure.\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name? "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome, "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"print-、find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print-、find"}},[t._v("#")]),t._v(" print()、find()")]),t._v(" "),a("ul",[a("li",[t._v("print(): “打印”对话框")]),t._v(" "),a("li",[t._v("find(): 查找对话框，不过使用它一直返回的是"),a("code",[t._v("false")])])]),t._v(" "),a("h2",{attrs:{id:"location-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-对象"}},[t._v("#")]),t._v(" location 对象")]),t._v(" "),a("p",[t._v("它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能，同时还具有将 URL 解析为独立的片段。")]),t._v(" "),a("p",[t._v("以下属性不仅能获取值，还能给 url 赋值，除 hash 外，其他都会使用新 URL 加载页面")]),t._v(" "),a("ul",[a("li",[t._v("host、hostname: 都返回服务器名称，如果有显示端口，host 能返回，hostname 会忽略端口")]),t._v(" "),a("li",[t._v("port: 有显示返回，没有显示返回空字符串")]),t._v(" "),a("li",[t._v("pathname: 返回文件地址，例如"),a("code",[t._v("https://cn.vuejs.org/v2/guide/installation.html")]),t._v(", 返回"),a("code",[t._v("/v2/guide/installation.html")])]),t._v(" "),a("li",[t._v("search: 返回 URL 的查询字符串，以"),a("code",[t._v("?")]),t._v("开头")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如有下列网址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://element.eleme.cn/#/zh-CN/component/layout")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://element.eleme.cn/#/zh-CN/component/layout")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #/zh-CN/component/layout")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element.eleme.cn")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element.eleme.cn")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"assign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assign"}},[t._v("#")]),t._v(" assign()")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下三个效果相同，都是在当前界面打开指定的网址")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace"}},[t._v("#")]),t._v(" replace()")]),t._v(" "),a("p",[t._v("之前方法能够记录历史，点击回退按钮能够回退到之前页面，但是 replace()能够把当前历史修改而不能回退之前版本")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reload"}},[t._v("#")]),t._v(" reload()")]),t._v(" "),a("p",[t._v("reload([bool]): 作用是重新加载页面，如果加"),a("code",[t._v("true")]),t._v("代表从服务器重新下载资源")]),t._v(" "),a("h2",{attrs:{id:"navigator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),a("p",[t._v("平常使用到该对象内的属性很少，因此就不过多介绍，平常有可能会用到的就是"),a("code",[t._v("userAgent")]),t._v("，表示浏览器的用户代理字符串")]),t._v(" "),a("p",[a("code",[t._v("navigator.userAgent")]),t._v("几种设备的结果:")]),t._v(" "),a("ol",[a("li",[t._v("我的 windows 的 chrome——"),a("code",[t._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36")])]),t._v(" "),a("li",[t._v("我的 IE——"),a("code",[t._v("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko")])]),t._v(" "),a("li",[t._v("我的 edge——"),a("code",[t._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134")])]),t._v(" "),a("li",[t._v("我的 opera——"),a("code",[t._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.94")])]),t._v(" "),a("li",[t._v("我的 firefox——"),a("code",[t._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0")])]),t._v(" "),a("li",[t._v("chrome 模拟的 Galaxy S III——"),a("code",[t._v("Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30")])]),t._v(" "),a("li",[t._v("chrome 模拟的 iphone X——"),a("code",[t._v("Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")])]),t._v(" "),a("li",[t._v("chrome 模拟的 iPad——"),a("code",[t._v("Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以粗略的判断是否为小屏幕")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isMobile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("Android|iPhone|Mobile|iPad")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screen"}},[t._v("#")]),t._v(" screen")]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript 中有几个对象在编程中用处不大，而 screen 对象就是其中之一。")])]),t._v(" "),a("p",[t._v("因此这里也就不过多介绍了")]),t._v(" "),a("h2",{attrs:{id:"history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" history")]),t._v(" "),a("h3",{attrs:{id:"go-、back-、forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-、back-、forward"}},[t._v("#")]),t._v(" go()、back()、forward()")]),t._v(" "),a("ul",[a("li",[t._v("go(num): 可正可负，正代表前进负代表后退")]),t._v(" "),a("li",[t._v("back(): 后退一页，相当于"),a("code",[t._v("go(-1)")])]),t._v(" "),a("li",[t._v("forward(): 前进一页，相当于"),a("code",[t._v("go(1)")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[t._v("JavaScript 高级程序设计")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nguyenvanhieu.vn/bom-mo-hinh-doi-tuong-trinh-duyet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("首屏图片"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);