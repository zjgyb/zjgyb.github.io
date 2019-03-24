---
title: vue-cli3使用mock
copyright: true
date: 2019-01-28 21:56:22
category: Vue
tags:
  - Vue
  - Vue CLI 3
  - mock
keywords:
description:
images:
---


{% note primary %}
本文介绍了关于Vue CLI 3如何配置mock数据
{% endnote %}
<!-- more -->

1. 在根目录新建`vue.config.js`文件和`mock`文件夹

2. 在mock文件夹中存放数据，例如`index.json`

3. `vue.config.js`进行配置

```js js
const mockIndex = require('./mock/index.json');

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get('/api/index', (req, res) => {
        res.json(mockIndex);
      });
    }
  }
};
```

4. 如何调用

```js js
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('/api/index')
      .then(res => { this.info = res })
  },
}
```