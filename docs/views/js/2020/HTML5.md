---
title: HTML5脚本编程
categories: JavaScript
tags:
  - 跨文档消息传递
  - postMessage
  - 拖拽
  - dataTransfer
  - video
  - audio
  - pushState
  - popstate
copyright: true
description: 本文是介绍HTML5脚本编程，涉及跨文档消息传递、拖拽、媒体元素、历史状态管理，参考自高程16章
images: /DOM2和DOM3/gc.png
date: 2020-01-17 21:44:02
keywords:
---


## 前言

本文根据高程中的十六章来写的，相当于个人的读书笔记。

## 跨文档消息传递

> 简称 XDM，指的是来自不同域的页面间传递消息。XDM 的核心是 postMessage()方法，目的是向另一个地方传递数据。

postMessage()方法接收两个参数：一条消息和一个表示消息接收方来自哪个域的字符串。

## 原生拖放

### 拖放事件

拖动某元素时，将依次触发下列事件

- dragstart: 按下鼠标键并开始移动鼠标时，会在被拖放的元素上触发 dragstart 事件。这时光标变成不能拖放图案(圆环中加一条反斜线)，表示不能把元素放到自己上面
- drag: 在元素被拖动期间会持续触发该事件
- dragend: 当拖动停止时触发

大多数浏览器会为正被拖动的元素创建一个半透明的副本，这个副本始终跟随着光标移动。当某个元素被拖动到一个有效的放置目标上时，下列事件会依次触发：

- dragenter: 只要有元素拖放到放置目标上，就会触发 dragenter 事件
- dragover: 被拖动的元素还在放置目标的范围内移动时就会持续触发该事件
- dragleave: 如果元素被拖出放置目标就会触发
- drop: 元素放置到目标对象中就会触发

### 自定义放置目标

因为元素一般默认不支持放置，因此如果把一个元素变成可放置，需要重写 dragover 和 dragenter 事件的默认行为。

```js js
const box = document.getElementById("box");
box.addEventListener("dragover", e => {
  e.preventDefault();
});

box.addEventListener("dragenter", e => {
  e.preventDefault();
});
```

### dataTransfer 对象方法

为了在拖放操作时实现数据交换而引入 dataTransfer 对象，该对象有两个方法：

- getData(): 获取数据
- setData(): 第一个参数取值为 text 或者 URL，HTML5 允许指定各种 MIME 类型，之前两种类型被映射成 text/plain 和 text/uri-list

在拖动文本框中的文本时，浏览器会调用 setData()方法，将拖动的文本以 text 格式保存在 dataTransfer 对象中。类似的，在拖放链接或图像时，会调用 setData()方法并保存 URL。

其他方法：

- addElement(element): 为拖动操作添加一个元素，但是只有 firefox 支持
- clearData(format): 清除以特定格式保存的数据
- setDragImage(element, x, y): 拖动时指定一幅图像，当拖动发生时，显示在光标下方

### dataTransfer 对象属性

利用 dataTransfer 对象，可以确定被拖动的元素以及作为放置目标的元素能接受什么操作，利用其两个属性：

- dropEffect: 四种可能的值，none(不能把拖动的元素放在这里)，move(应该把拖动的元素移动到放置目标)，copy(应该把拖动的元素复制到放置目标)，link(表示放置目标会打开拖动的元素，拖动元素必须是一个链接)，要使用该属性，必须在 dragenter 事件处理程序中针对放置目标来设置它
- effectAllowed: dropEffect 需要搭配 effectAllowed 才有用，必须在 dragstart 事件处理程序中设置 effectAllowed 属性，该属性有以下可能的值：

* uninitialized: 没有给被拖动的元素设置任何放置行为
* none: 被拖动的元素不能有任何行为
* copy: 只允许值为 copy 的 dropEffect
* link: ~
* move: ~
* copyLink: 允许值为 copy 和 link 的 dropEffect
* copyMove: copy + move
* linkMove: link + move
* all: 允许任意 dropEffect

其他属性：

- types: 当前保存的数据类型，为类数组的集合

### 可拖动

> 默认情况下，图像、链接和文本是可以拖动的，不需要额外的代码，文本需要选中情况下才能拖动，图像和链接随时可以拖动

如果想让其他元素能够被拖动，html 中设置 draggable=true

```html html
<div class="box" draggable="true"></div>
```

## 媒体元素

audio 和 video 的基本用法：使用这两个元素时，至少要在标签中包含 src 属性，指向要加载的媒体文件。还可以设置 width 和 height 属性以指定视频播放器的大小，而为 poster 属性指定图像的 URI 可以在加载视频内容期间显示一幅图像。另外，如果标签中 controls 属性，则意味着浏览器应该显示 UI 控件，以便用户直接操作媒体。

```html html
<!-- 嵌入视频 -->
<video src="conference.mpg" id="myvideo">Video player not available.</video>
<!-- 嵌入音频 -->
<audio src="song.mp3" id="myaudio">Audio player not available.</audio>
```

并不是所有浏览器支持所有的媒体格式，所以要考虑兼容性的话可以使用不同的媒体来源

```html html
<video id="myvideo">
  <source src="conference.webm" type="video/webm; codecs='vp8, vorbis'" />
  <source src="conference.ogv" type="video/ogg; codecs='theora, vorbis'" />
  <source src="conference.mpg" />
  Video player not available.
</video>

<audio id="myaudio">
  <source src="song.ogg" type="audio/ogg" />
  <source src="conference.ogv" type="audio/mpeg" />
  Audio player not available.
</audio>
```

### 共有属性

- autoplay: 取得或设置 autoplay 标志
- buffered: 表示已下载的缓冲的**时间**范围的对象
- bufferedBytes: 表示已下载的缓冲的**字节**范围的对象
- bufferingRate: 下载过程中每秒钟平均接收到的位数
- bufferingThrottled(Boolean): 表示浏览器是否对缓冲进行了节流
- controls(Boolean): 取得或设置 controls 属性，用于显示或隐藏浏览器内置的控件
- currentLoop: 媒体文件已经循环的次数
- currentSrc: 当前播放的媒体文件的 URL
- currentTime(浮点数): 已经播放的秒数
- defaultPlaybackRate(浮点数): 取得或设置默认的播放速度，默认值为 1.0
- duration: 媒体的总播放时间(秒数)
- ended(Boolean): 表示媒体文件是否已经播放完成
- loop(Boolean): 取得或设置媒体文件在播放完成后是否再从头开始播放
- muted(Boolean): 取得或设置媒体文件是否静音
- networkState: 表示当前媒体的网络连接状态, 0(空)、1(正在加载)、2(加载元数据)、3(加载第一帧)、4(加载完成)
- paused(Boolean): 表示播放器是否暂停
- playbackRate: 取得或设置当前的播放速度，用户可以改变这个值
- played: 当目前为止已经播放的时间范围
- readState: 表示媒体是否已经就绪，0(数据不可用)、1(可以显示当前帧)、2(可以开始播放)、3(媒体可以从头到尾播放可以搜索的时间范围)
- seekable: 可以搜索的时间范围
- seeking(Boolean): 表示播放器是否正移动到媒体文件中的新位置
- src: 取得或设置媒体文件的来源
- start: 取得或设置媒体文件中开始播放的位置
- totalBytes: 当前资源所需的总字节数
- volume: 取得或设置当前音量，值为 0.0 到 1.0

#### video 独有属性

- videoHeight: 返回视频的高度
- videoWidth: 返回视频的宽度

### 共有事件

- abort(): 下载中断
- canplay(): 可以播放时；readyState 值为 2
- canplaythrough(): 播放可继续，而且应该不会中断，readyState 值为 3
- canshowcurrentframe(): 当前帧已经下载完成, readyState 值为 1
- dataunavailable(): 因为没有数据就不能播放；readyState 值为 0
- durationchange(): duration 属性的值改变
- empty(): 发生错误阻止了媒体下载
- ended(): 媒体已播放到末尾，停止播放
- error(): 下载期间发生网络错误
- load(): 所有媒体已加载完成，可能**被废弃**
- loadeddata(): 媒体第一帧已加载完成
- loadedmetadata(): 媒体的元数据已加载完成
- loadstart(): 下载已开始
- pause(): 播放已暂停
- playing(): 媒体已实际开始播放
- progress(): 正在下载
- ratechange(): 播放媒体速度改变
- seeked(): 搜索结束
- seedking(): 正移动到新位置
- stalled(): 浏览器尝试下载，但未接收到数据
- timeupdate(): currentTime 被以不合理或意外的方式更新
- volumechange(): volumn 属性值或 muted 属性值已改变
- waiting(): 播放暂停，等待下载更多数据

### 自定义媒体播放器

注意一开始媒体元数据未加载完全，所以需要监听 loadedmetadata

```html html
<video
  id="player"
  src="test1.mp4"
  poster="7.jpg"
  width="600"
  height="600"
></video>
<div class="controls">
  <input type="button" value="Play" id="video-btn" />
  <span id="curtime">0</span>
  <span id="duration">0</span>
</div>
<script>
  const player = document.getElementById("player");
  const videoBtn = document.getElementById("video-btn");
  const curtime = document.getElementById("curtime");
  const duration = document.getElementById("duration");
  player.addEventListener("loadedmetadata", function() {
    duration.innerHTML = player.duration;
  });

  class Play {
    start() {
      this.timer = setTimeout(() => {
        if (player.currentTime < player.duration) {
          this.start();
          curtime.innerHTML = player.currentTime;
        }
      }, 250);
    }
    stop() {
      clearTimeout(this.timer);
    }
  }

  const play = new Play();
  videoBtn.addEventListener("click", e => {
    if (player.paused) {
      player.play();
      videoBtn.value = "Pause";
      play.start();
    } else {
      player.pause();
      videoBtn.value = "Play";
      play.stop();
    }
  });
</script>
```

### 检测编解码器的支持情况

canPlayType(): 接收一种格式/编码器字符串，返回 probably、maybe 和空字符串

### Audio 类型

可以使用原生 JS 构造函数来创建音频，不需要插入文档就可以直接播放

```js js
const audio = new Audio("music.mp3");
audio.addEventListener("canplaythrough", function() {
  this.play();
});
```

## 历史状态管理

使用history.pushState()方法能够在不加载新页面的情况下改变浏览器的URL。该方法接收三个参数：状态对象、新状态的标题和可选的相对URL

```js js
history.pushState({ name: 'Nicholas' }, 'Nocholas page', 'nicholas.html');
```

还有popstate事件对象，在点击后退按钮时触发，history.replaceState()作用是重写当且状态，接收两个参数，与pushState前两个参数一致

这几个功能通常用于前端路由html模式，也就是`mode: history`