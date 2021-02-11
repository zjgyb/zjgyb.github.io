---
title: JavaScript表单
categories: JavaScript
tags:
  - form
  - submit
  - select
  - 选择框
  - 富文本
copyright: true
description: 本文是介绍JavaScript对表单的操作，参考自高程14章
images: /DOM2和DOM3/gc.png
date: 2020-01-16 18:34:40
keywords:
---


## 前言

本文根据高程中的十四章来写的，相当于个人的读书笔记。

## 表单的基础知识

> 在 HTML 中，表单是由 form 元素来表示的，而在 JavaScript 中，表单对应的则是 HTMLFormElement 类型，该类型继承了 HTMLElement，因此与其他 HTML 元素具有相同的默认属性，但是也有独有的属性和方法。

- acceptCharset: 服务器能处理的字符集；等价于 HTML 中的 accept-charset 特性
- action: 接收请求的 URL；等价于 HTML 中的 action 特性
- elements: 表单中所有控件的集合
- enctype: 请求的编码类型；等价于 HTML 中的 enctype 特性
- length: 表单中控件的数量
- method: 要发送的 HTTP 请求类型，通常是 get 或 post；等价于 HTML 的 method 特性
- name: 表单的名称；等价于 HTML 的 name 特性
- reset(): 将所有的表单域重置为默认值
- submit(): 提交表单
- target: 用于发送请求和接收响应数据的窗口名称；等价于 HTML 的 target 特性

### 提交表单

只要点击按钮就能提交表单

```html html
<form id="form" action="/api/form">
  <input type="text" id="input" />
  <button type="submit">Submit form</button>
</form>
```

如果想要提交表单之前校验数据，则：

```js js
const form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  // Todo ...
  form.submit();
});
```

### 重置表单

与提交表单类似

```html html
<form id="form" action="/api/form">
  <input type="text" id="input" />
  <button type="submit">Submit form</button>
  <button type="reset">Reset form</button>
</form>
```

```js js
form.reset();
```

### 表单字段

> 每个表单都有 elements 属性，该属性是表单中所有表单元素的集合，elements 集合是一个有序列表

```html html
<form id="form" action="/api/form">
  <input type="text" name="test1" />
  <button type="submit">Submit form</button>
  <button type="reset">Reset form</button>
</form>
```

```js js
const form = document.getElementById("form");
console.log(form.elements); // 得到input和两个button的集合
console.log(form.elements[0] === form.elements["test1"]); // true
```

#### 共有的表单字段属性

> 除了 fieldset 元素之外，所有的表单字段都拥有相同的一组属性。

表单字段共有的属性如下：

- disabled: 布尔值，表示当前字段是否被禁用
- form: 指向当前字段所属表单的指针
- name: 当前字段的名称
- readOnly: 布尔值，表示当前字段是否只读
- tabIndex: 表示当前字段的切换序号
- type: 当前字段的类型，如 checkbox、radio 等
- value: 当前字段将被提交到服务器的值

简述 readonly 和 disabled 的区别：

1. readonly 只对 input 和 textarea 有效，但是 disabled 对于所有的表单元素都是有效的，包括 radio、checkbox 等
2. readonly 可以获取焦点，只是不能修改，disabled 不能获取焦点
3. readonly 提交表单时会发送值，而 disabled 不会发送字段

#### 共有的表单字段方法

- focus(): 用于将浏览器的焦点设置到表单字段，即激活表单字段，使其可以响应键盘事件。
- blur(): 从元素中移走焦点，早期为了创建只读字段。现在使用场景不多。

HTML5 为表单字段新增一个 autofocus 属性。在支持这个属性的浏览器中，只要设置了这个属性，不用 JavaScript 就能自动把焦点移动到相应字段。但是在我实际开发中，这个只能在第一次有用。

#### 共有的表单字段事件

- blur: 当前字段失去焦点时触发
- change: 对于 input 和 textarea 元素，在他们失去焦点且 value 值改变时触发；对于 select 元素，在其选项时改变时触发
- focus: 当前字段获得焦点时触发

关于 blur 和 change 事件的关系并没有严格的规定。在某些浏览器中，blur 事件会先于 change 事件发生；而在其他浏览器中，则恰好相反。为此，我们不能假定两个事件总会以某种顺序依次发生。

## 文本框脚本

在 HTML 中，有两种方式表现文本框，一种使用 input 元素的单行文本框，另一种是使用 textarea 的多行文本框。注意在处理文本框的值时，最好不要使用 DOM 方法。

```html html
<!-- 显示25个字符但是不能超过50个字符 -->
<input type="text" size="25" maxlength="50" value="initial value" />
<!-- rows指定文本框的字符行数，cols指定文本框的字符列数 -->
<textarea name="textarea" cols="30" rows="10">initial value</textarea>
```

### 选择文本

以`element.select()`选中表单，一般用于文本框获取焦点时选中文本。

1. 选中文本时会触发 select 事件
2. 选中部分文本使用`setSelectionRange()`方法，使用该方法之前或之后应立即将焦点设置到该文本框。

```js js
input.focus();
input.setSelectionRange(0, 5);
```

### 过滤输入

#### 屏蔽字符

只允许用户输入数值，因有些浏览器部分非字符键也能触发 keypress，因此需要屏蔽非字符键，在 firfox 中所有由非字符键触发的 keypress 事件对应的字符编码为 0，而在 Safari3 以前的版本中，对应的字符编码为 8，因此不屏蔽字符编码小于 10 的键即可，同时还要屏蔽 ctrl 组合键。

```js js
input.addEventListener("keypress", e => {
  const charCode = e.charCode;
  if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !e.ctrlKey) {
    e.preventDefault();
  }
});
```

#### 操作剪切板

以下是 6 个剪切板事假：

- beforecopy: 在发生复制操作前触发
- copy: 发生复制操作时触发
- beforecut: 在发生剪切操作前触发
- cut: 在发生剪切操作时触发
- beforepaste: 在发生粘贴操作前触发
- paste: 发生粘贴操作时触发

要访问剪切板中的数据，可以使用 clipboardData 对象，该对象有三个方法：getData()、setData()和 clearData()

- getData(): 接受一个参数，即要取得的数据的格式
- setData(): 接收两个参数，第一个参数是数据类型，第二个参数是放在剪切板中的内容
- clearData(): (删除剪切板内容)?(貌似不起作用)

例如只允许粘贴剪切板内容为数值的粘贴

```js js
input.addEventListener("paste", e => {
  const text = e.clipboardData.getData("text");
  if (!/^\d*$/.test(text)) {
    e.preventDefault();
  }
});
```

### 自动切换焦点

暂时用到不多，因此不过多介绍。

### HTML5 约束验证 API

> 只有在某些情况下表单字段才能进行自动验证

1. 必填字段，往 html 中加入 required 属性

```html html
<input type="text" required />
```

2. 其他输入类型，`type="email"`和`type="url"`最常用

3. 输入模式，新增 pattern 属性，但是不能阻止用户输入无效的文本，因此暂时用处不大

4. 检测有效性，`checkValidity()`检测表单中某个字段是否有效，有效返回 true，无效返回 false，这个方法会检测 required、pattern 等属性匹配的表单，也可以在 form 元素中使用该方法来检测所有表单

5. 禁用验证，通过设置 novalidate 属性，可以告诉表单不进行验证，也可以针对具体某一个表单不进行验证

```html html
<form novalidate></form>
<input type="text" novalidate />
```

## 选择框脚本

> 选择框是通过 select 和 option 元素创建的。为了方便与这个控件交互，除所有表单字段共有的方法和属性外，还提供了以下的属性和方法

- add(newOption, relOption): 插入新 option 元素
- multiple: 布尔值，表示是否允许多项选择，等价于 HTML 中的 multiple
- options: 控件中所有 option 元素的 HTMLCollection
- remove(index): 移除给定位置的选项
- selectedIndex: 基于 0 的选中项索引，如果没有这个选中项，则值为-1，对于多选只保留第一个选中的索引
- size: 选择框可见的行数，等价于 HTML 中的 size 特性

在 DOM 中，每个 option 元素都有一个 HTMLOptionElement 对象表示。为方便访问数据，为该对象添加了下列属性：

- index: 当前选项在 options 集合中的索引
- label: 当前选项的标签；等价于 HTML 中的 label 特性
- selected: 布尔值，表示当前选项是否被选中
- text: 选项的文本
- value: 选项的值

以下作为例子：

```html html
<select name="location" id="selLocation">
  <option value="Sunnyvale, CA">Sunnyvale</option>
  <option value="Los Angeles, CA">Los Angeles</option>
  <option value="Mountain View, CA">Mountain View</option>
  <option value="">China</option>
  <option>Australia</option>
</select>
```

```js js
const selLocation = document.getElementById("selLocation");
console.log(selLocation.options[0].value, "-", selLocation.options[0].text); // Sunnyvale, CA - Sunnyvale
console.log(selLocation.options[3].value, "-", selLocation.options[3].text); //  - China
console.log(selLocation.options[4].value, "-", selLocation.options[4].text); // Australia - Australia
```

### 选择选项

通过 selectedIndex 属性来判断选中的 index(从 0 开始)

```js js
selLocation.addEventListener("change", function() {
  console.log(this.selectedIndex);
});
// 有下面两种方式改变选中项，区别在单选和多选上表现的不同，具体看高程433页
selLocation.selectedIndex = 2;
selLocation.options[1].selected = true;
```

### 添加选项

以下方法统一添加到最后一项

1. DOM 方法

```js js
const newOption = document.createElement("option");
newOption.appendChild(document.createTextNode("Option text"));
newOption.setAttribute("value", "Option value");
selLocation.appendChild(newOption);
```

2. 使用 Option 构造函数(IE 中可能失效)

```js js
const newOption = new Option("Option text", "Option value");
selLocation.appendChild(newOption);
```

3. 使用 add 方法

```js js
const newOption = new Option("Option text", "Option value");
selLocation.add(newOption);
```

### 移除选项

以下方法统一删除第一项

1. DOM 方法的 removeChild()

```js js
selLocation.removeChild(selLocation.options[0]);
```

2. remove()方法

```js js
selLocation.remove(0);
```

3. 设置为 null 方法

```js js
selLocation.options[0] = null;
```

### 移动和重排选项

1. 向前移动一个选项

```js js
const moveOption = selLocation.options[1];
selLocation.insertBefore(moveOption, selLocation.options[moveOption.index - 1]);
```

2. 向后移动一位

```js js
const moveOption = selLocation.options[0];
selLocation.insertBefore(moveOption, selLocation.options[moveOption.index + 2]);
```

## 表单序列化

> 可以利用表单字段的 type 属性，连同 name 和 value 属性一起对表单的序列化

## 富文本编辑

> 这一技术的本质是可以页面中嵌入一个包含空 HTML 页面的 iframe。通过设置 designMode 属性，这个空白的 HTML 页面可以被编辑。designMode 属性有两个可能的值：`off`和`on`

### 两种方式创建富文本

1. 使用 iframe 创建

```html html
<iframe
  name="richedit"
  style="height: 400px; width: 400px;"
  src="test.html"
></iframe>
<script>
  window.onload = () => {
    frames["richedit"].document.designMode = "on";
  };
</script>
```

2. 使用 contenteditable 属性

有三个可能的值：true、false、inherit(表示从父元素继承)，之后介绍的富文本操作主要是用该方法创建地富文本

```js js
<div class="editable" id="richedit" contenteditable></div>
```

### 操作富文本

使用 document.execCommand()，该方法传递三个参数：要执行的命令名称、表示浏览器是否应该为当前命令提供用户界面的一个布尔值、执行命令必须的一个值(不需要值时传递 null)。为保证兼容性，第二个参数始终设置为 false

以下是支持的命令名称，括号后面不需要参数用 null 表示：

- backcolor: 设置文档的背景颜色
- bold(null): 将选择的文本转化为粗体
- copy(null): 将选择的文本复制到剪贴板
- createlink: 将选择的文本转化成一个链接，指向指定的 URL
- cut(null): 将选择的文本剪切到剪贴板
- delete(null): 删除选择的文本
- fontname: 将选择的文本修改为指定字体
- fontsize(1~7): 将选择的文本修改为指定字体大小
- forecolor: 将选择的文本修改为指定的颜色
- formatblock: 使用指定的 HTML 标签来格式化选择的文本块
- indent(null): 缩进文本
- inserthorizontalrule(null): 在插入字符处插入一个 hr 元素
- insertimage: 在插入字符处插入一个图像
- insertorderedlist(null): 在插入字符处插入一个 ol 元素
- insertunorderedlist(null): 在插入字符处插入一个 ul 元素
- insertparagraph(null): 在插入字符处插入一个 p 元素
- italic(null): 将选择的文本转化成斜体
- justifycenter(null): 将插入光标所在的文本块居中对齐
- justifyleft(null): 将插入光标所在的文本块左对齐
- outdet(null): 凸排文本(减少缩进)
- paste(null): 将剪贴板中的文本粘贴到选择的文本
- removeformat(null): 移除插入光标所在的块级格式，这是撤销 formatblock 命令的撤销
- selectall(null): 选择文档中的所有文本
- underline(null): 为选择的文本添加下划线
- unlink(null): 移除文本的链接。这是对 createlink 命令的撤销

```html html
<div class="editable" id="richedit" contenteditable></div>
<button id="btn">改变背景色</button>
<p>hello world</p>
<script>
  const box = document.getElementById("richedit");
  const btn = document.getElementById("btn");
  window.onload = () => {
    document.execCommand("backcolor", false, "red"); // 似乎无效
  };
  btn.onclick = () => {
    document.execCommand("backcolor", false, "red"); // 有效
  };
</script>
```

命令相关

- queryCommandEnabled(): 检测是否可以针对当前选择的文本，或者当前插入字符所在位置执行某个命令。经过我的测试如果一开始没有选中编辑框，或者选中了其他区域，那么该值返回 false，如果选择了可编辑区域的文字或者可编辑区域是 focus 状态，那么该值返回 true
- queryCommandState(): 确定是否已将指定命令应用到选择的文本。如果应用了返回 true，否则为 false
- queryCommandValue(): 用于取得执行命令时传入的值，也就是说是第三个参数

```js js
btn.onclick = () => {
  console.log(document.queryCommandEnabled("bold"));
  document.execCommand("fontsize", false, 7);
  console.log(document.queryCommandValue("fontsize")); // 7
};
console.log(document.queryCommandState("bold"));
```

### 富文本选区

使用 document.getSelection()得到的属性和方法，进而操作富文本，这方面暂时不展开。

### 表单与富文本

使用innerHTML获取富文本内的内容，然后赋值表单字段中，随表单的提交而提交。

## 结语

继续努力！！！:smile: