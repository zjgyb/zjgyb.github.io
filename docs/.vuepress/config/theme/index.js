const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: "auto",
  authorAvatar: '/avatar.jpg',
  // 评论
  valineConfig: {
    appId: "qzOeHVSL5KMvr5tgiCnzAIA8-gzGzoHsz", // your appId
    appKey: "rONYpsgFK6ApQr7pq6dbx2kR", // your appKey
    notify: true, // mail notifier , https://github.com/xCss/Valine/wiki
    verify: false, // Verification code
    placeholder: "Just go go", // comment box placeholder
    avatar: "robohash", // gravatar style
    pageSize: 10, // pagination size
    isComment: false
  },
});