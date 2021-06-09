module.exports = [
  ['demo-code'],
  [
    "@vuepress/medium-zoom",
    {
      selector: ".page img",
    },
  ],
  ["flowchart"],
  [
    "dynamic-title",
    {
      showIcon: "favicon.ico",
      showText: "(/≧▽≦/)欢迎帅哥美女！",
      hideIcon: "cry.ico",
      hideText: "(●—●)呜呜，不要走嘛！！",
      recoverTime: 2000,
    },
  ],
  // 更新刷新插件
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        popupComponent: 'MySWUpdatePopup',
        buttonText: "刷新",
      },
    },
  ],
  // 代码复制弹窗插件
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",
      tip: {
        content: "复制成功!",
      },
    },
  ]
];