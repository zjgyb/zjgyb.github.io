---
title: JSON和AJAX
categories: JavaScript
tags:
  - JSON
  - XMLHTTPRequest
  - AJAX
  - 跨域
  - 图像Ping
  - JSONP
  - Comet
  - SSE
  - Web Sockets
copyright: true
description: 本文是介绍JSON和AJAX相关的内容，参考自高程20、21章
images: /DOM2和DOM3/gc.png
date: 2020-01-20 10:10:04
keywords:
---


## 前言

本文根据高程中的二十、二十一章来写的，相当于个人的读书笔记。

## JSON 语法

JSON 不支持**变量**、**函数**、**对象实例**，它就是一种表示结构化数据的格式，JSON 语法可以表示以下三种类型的值：

- 简单值：使用与 JavaScript 相同的语法，可以在 JSON 中表示字符串、数值、布尔值和 null，但是不支持 undefined
- 对象：表示一组无序的键值对
- 数组：表示一组有序的值的列表

### 简单值

可以直接用简单值构成一个 JSON，例如直接写"hello world"，JSON 字符串必须使用双引号(单引号会导致语法错误)

### 对象

与 JS 的对象字面量相比，JSON 对象有两个差异之处，一是没有声明变量，二是没有末尾的分号；JOSN 还有与众不同的是最后一个属性后不能加多余逗号

```json json
{
  "name": "tony",
  "age": 123
}
```

### 数组

```json json
["hello world", 2, null]
```

## JSON 解析与序列化

JSON 对象的两个方法：stringify()和 parse()，分别用于把 JS 对象序列化成 JSON 字符串和把 JSON 字符串解析为原生 JS 值，默认情况下，JSON.stringify()输出的 JSON 字符串**不包含任何空格字符或缩进**，在序列化对象时，所有函数、原型成员和值为 undefined 都会被有意忽略，最终结果都是有效的 JSON 数据类型的实例属性

### 序列化选项

JSON.stringify()除了要序列化 JS 对象之外，还可以接收两个参数，第一个参数是个过滤器，可以是数组，也可以是函数；第二个参数是一个选项，表示是否在 JSON 字符串中保留缩进，最大缩进空格数为 10，所有大于 10 的值都会自动转换为 10

```js js
const test = {
  a: "a",
  b: "b",
  c: null
};

console.log(JSON.stringify(test, ["a", "c"])); // 只会返回a 和 c属性
```

### toJSON()方法

```js js
const test = {
  a: "a",
  b: "b",
  c: null,
  toJSON() {
    return this.a;
  }
};
JSON.stringify(test); // 'a'
```

假如把一个对象传入 JSON.stringify()，序列化该对象的顺序如下：

1. 如果存在 toJOSN()方法而且能通过它取得有效的值，则调用该方法
2. 如果提供了第二个参数，应用这个函数过滤器，传入函数过滤器的值是第一步返回的值
3. 对第二步返回的每个值进行相应的序列化，执行相应的序列化
4. 如果提供了第三个参数，执行相应的格式化

### 解析选项

JOSN.parse()也可以接受另一个参数，该参数是一个函数，将在每个键值对调用

```js js
JSON.parse(text, (key, value) => {
  return value;
});
```

## XMLHTTPRequest(Ajax 技术的核心)

直接使用 new 实例化该对象：`const xhr = new XMLHTTPRequest()`

### xhr 的用法

在使用 XHR 对象时，调用的第一个方法是 open()，它接收三个参数: 要发送的请求类型(get, post)，这一方法只是启动一个请求已备发送

```js js
xhr.open("get", "api/test", false);

// 发送特定的请求
xhr.send(null);
```

send()方法接收一个参数，即要作为请求主体发送的数据。如果不需要通过请求主体发送数据，则必须是 null。在收到相应后的数据会自动填充到 XHR 对象的属性，

- responseText: 作为响应主体被返回的文本
- responseXML: 如果响应的内容类型是 text/xml 或 application/xml，这个属性中将保存包含着响应数据的 XML DOM 文档
- status: 响应的 HTTP 状态
- statusText: HTTP 状态的说明

```js js
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  console.log(xhr.responseText);
} else {
  console.log("Request was unsuccessful", xhr.status);
}
```

在多数情况下我们需要发送的是异步请求，才能让 JS 继续执行而不必等待响应。此时，可以检测 XHR 对象的 readyState 属性，该属性表示请求/响应过程的当前活动阶段。这个可取的值如下：

1. 0: 未初始化。尚未调用 open()方法
2. 1: 启动。已经调用 open()方法，但尚未调用 send()方法
3. 2: 发送。已经调用 send()方法，但尚未收到响应
4. 3: 接收。已经接收到部分响应数据
5. 4: 完成。已经接收到全部响应数据，而且已经在客户端使用了

只要 readyState 属性的值由一个值变成另一个值，都会触发一次 readystatechange 事件。必须在 open 调用之前指定 onreadystatechange 事件来保证跨浏览器兼容性

```js js
const xhr = new XMLHTTPRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    } else {
      console.log("Request was unsuccessful:", xhr.status);
    }
  }
};
xhr.open("get", "api/test", true);
xhr.send(null);
```

> 在接收到响应之前还可以调用 abort()方法来取消异步请求，调用这个方法后，XHR 对象会停止触发事件，而且也不再允许任何与响应有关的对象属性，在终止请求之后，还应该对 XHR 进行解引用操作。由于内存原因，**不建议重用 XHR 对象**

### HTTP 头部信息

在发送 XHR 请求的同时，还会发送下列头部信息：

- Accept: 浏览器能够处理的内容类型
- Accept-Charset: 浏览器能够显示的字符集
- Accept-Encoding: 浏览器能够处理的压缩编码
- Accept-Language: 浏览器当前设置的语言
- Connection: 浏览器与服务器之间连接的类型
- Cookie: 当前页面设置的任何 Cookie
- Host: 发出请求页面所在的域
- Referer: 发出请求的页面 URI。注意 HTTP 规范对这个字段拼错了，实际是 referrer
- User-Agent: 浏览器的用户代理字符串

使用 setRequestHeader()方法可以设置自定义的请求头部信息，但必须在调用**open()**方法之后**send()**方法之前。

```js js
xhr.setRequestHeader("MyHeader", "MyValue");
```

调用 XHR 对象的 getResponseHeader()方法并传入头部字段名称，可以取得相应的响应头部信息。而调用 getAllReponseHeaders()方法可以取得一个包含所有头部信息的长字符串。

### GET 请求

下面这个函数可以辅助向现有 URL 的末尾添加查询字符串参数：

```js js
function addURLParam(url, name, value) {
  url += url.indexOf("?") === -1 ? "?" : "&";
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}
```

### POST 请求

可以使用 XHR 来模仿表单提交，首先将 Content-Type 头部信息设置为 application/x-www-form-urlencoded，其次以适当的格式创建一个字符串

```js js
// ...
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(JSON.stringify(data));
```

## XMLHTTPRequest 2 级

### FormData

FormData 为表单序列化以及创建与表单格式相同的数据提供了便利，使用 FormData 的方便之处在于不用给 XHR 对象上设置头部，它能自动识别。

```js js
const data = new FormData();
data.append("name", "tony");
```

### 超时设定

```js js
// open
xhr.timeout = 10000;
xhr.ontimeout = () => {
  console.log("Request did not return in ten seconds.");
};
// send
```

### overrideMimeType()方法

重写 XHR 响应的 MIME 类型

## 进度事件

Progress Events 规范定义了与客户端服务器通信有关的事件。有六个进度事件：

- loadstart: 在接受到响应数据的第一个字节时触发
- progress: 在接收响应期间持续不断地触发
- error: 在请求发生错误时触发
- abort: 在因为调用 abort()方法而终止连接时触发
- load: 在接收到完整的响应数据时触发
- loadend: 在通信完成或者触发 error、abort 或 load 事件后触发

### load 事件

用于替代 readystatechange 事件

```js js
xhr.onload = () => {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.reponseText);
  } else {
    console.log("error");
  }
};
```

### progress 事件

这个事件会在浏览器接收新数据期间周期性触发，event 中包含三个属性：

- lengthComputable: 表示进度信息是否可用的布尔值
- position: 表示已经接收到的字节数
- totalSize: 表示根据 Content-Length 响应头部确定的预期字节数

```js js
xhr.onprogress = (e) => {
  if (e.lengthComputable) {
    box.innerHTML = 'Received' + e.position + ' of ' + e.totalSize + ' bytes'.
  }
}
```

## 跨域资源共享

CORS，定义了在必须访问跨域资源时，浏览器与服务器应该如何沟通。在发送请求时，需要给它额外的 Origin 头部，其中包含请求页面的源信息(协议、域名、端口)，以便服务器根据这个头部信息来决定是否给予响应

### IE 对 CORS 的实现

**已废弃**，使用 XDomainRequest 实例，简称 XDR

### 其他浏览器对 CORS 的实现

在 XHR 对象的 open 方法中传入绝对 URL 即可，但是有以下这些限制：

- 不能使用 setRequestHeader()设置自定义头部
- 不能发送和接收 cookie
- 调用 getAllResponseHeader()方法总会返回空字符串

### Preflighted Requests

> CORS 通过一种叫做 Preflighted Requests 的透明服务器验证机制支持开发人员使用自定义的头部、GET 和 POST 之外的方法，以及不同类型的主体内容。

这是一个 CORS 预检请求是用于检查服务器是否支持 CORS 即跨域资源共享。它一般是用了以下几个 HTTP 请求首部的 OPTIONS 请求：Access-Control-Request-Method 和 Access-Control-Request-Headers，以及一个 Origin 首部。当有必要的时候，浏览器会自动发出一个预检请求；所以在正常情况下，前端开发者不需要自己去发这样的请求。

### 带凭据的请求

默认情况下，跨域请求不能提供凭据(cookie, HTTP 认证及客户端 SSL 证明等)。通过将 withCredentials 属性设置为 true，可以指定某个请求应该发送凭据。如果浏览器接收带凭据的请求，会用`Access-Control-Allow-Credentials: true`HTTP 头部来响应

## 其他跨域技术

### 图像 Ping

这里通过创建一个 Image 实例，然后将 onload 和 onerror 事件处理程序指定为同一个函数。图像 Ping 常用于跟踪用户点击页面或动态广告曝光次数。图像 Ping 的两个缺点：一个只能发送 GET 请求，二是无法访问服务器的响应文本。因此，图像 Ping 只能用于浏览器与服务器间的单向通信。

```js js
const img = new Image();
img.onload = img.onerror = () => {
  console.log("done");
};

img.src = "http://www.example.com/api/test?name=tony";
```

### JSONP

> JSONP 是通过动态 script 元素来使用的，使用时可以为 src 属性指定一个跨域 URL。这里的 script 域 img 类似，都有能力不受限制地从其他域加载资源。因为 JSONP 是有效的 JS 代码，所以请求完成后，即在 JSONP 响应加载到页面中以后，就会立即执行

```js js
function handleResponse(res) {
  console.log(res.ip, res.city, res.region_name);
}

const script = document.script("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
```

JSONP 优点在于能够直接访问响应文本，支持浏览器与服务器之间的双向通信，但是还有缺点，一是从其他域加载代码，必须保证安全可靠，如果存在恶意代码就会造成破坏，二是确定请求是否失败这一点很不容易。

### Comet

两种实现 Comet 的方式：长轮询和流，长轮询是页面发起一个服务器的请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据之后，随即又发起一个到服务器的新请求，这一过程在页面打开过程中不断进行，可以使用 XHR 和 setTimeout()实现；流就是浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据。

### 服务器发送事件

SSE 服务器围绕只读 Comet 交互推出的 API 或者模式，用于创建到服务器的单向连接，服务器可以通过这个连接发送任意数量的数据。服务器响应的 MIME 类型必须是 text/event-stream。

EventSource 的实例有一个 readyState 属性，值为 0 正连接到服务器，值 1 表示打开了连接，值 2 代表关闭了连接，还有三个事件：open(建立连接时触发)、message(从服务器接收到新事件时触发)、error(无法建立连接时触发)，响应的格式是纯文本

```js js
const source = new EventSource("myevents.php");
source.onmessage = event => {
  const data = event.data;
  // ...
};

source.close(); // 强制立即断开连接并且不再重新连接
```

### Web Sockets

> Web Sockets 的目标是在一个单独的持久连接上提供全双工、双向通信。在 JS 中创建了 Web Socket 之后，会有一个 HTTP 请求发送到浏览器以发起连接。在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 Web Socket 协议。也就是说标准的 HTTPg 服务器无法实现 Web Sockets，只能是支持这种协议的专门服务器才能正常工作。

加密的连接以 wss://，未加密的连接用 ws://开头

```js js
const socket = new WebSocket("ws://www.example.com/test"); // 传入绝对的URL
```

发送、接收和关闭事件

```js js
socket.send("hello world"); // 只能发送纯文本

socket.onmessage = e => {
  // 当服务器向客户端发送消息时触发message事件
  const data = e.data;
  // next
};

socket.close(); // 关闭socket
```

#### 其他事件

- open: 在成功建立连接时触发
- error: 在发生错误时触发，连接不能持续
- close: 在连接关闭时触发

WebSocket 对象不支持 DOM2 级事件监听器，也就是说不能用 addEventListener

```js js
socket.onclose = (e) => {
  // 表示连接是否明确的关闭；服务器返回的状态码；包含服务器发回的消息
  console.log(e.wasClean, e.code, e.reason);
}
```