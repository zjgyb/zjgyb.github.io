/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "10631b24ab30ac2b07d255b73d44507a"
  },
  {
    "url": "assets/css/0.styles.5370e23d.css",
    "revision": "38736663d00a0761cfc9be99f751f7e3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2973e36e.js",
    "revision": "ffeae23550971a08e4566ebb9e021f98"
  },
  {
    "url": "assets/js/10.87908baa.js",
    "revision": "69ac2bc19d63947cbb537cbd796b8394"
  },
  {
    "url": "assets/js/11.9c5a229b.js",
    "revision": "ba15ae73b7b7fa7bdc44c61dea719da7"
  },
  {
    "url": "assets/js/12.aa596178.js",
    "revision": "9aed1bfcb04c13478e9963538c22f142"
  },
  {
    "url": "assets/js/13.345c46a5.js",
    "revision": "1384131d0e1ad211cd48f59a269df6c7"
  },
  {
    "url": "assets/js/4.b924e6ff.js",
    "revision": "83be0de6a30b3a6d9aa526aa15e03254"
  },
  {
    "url": "assets/js/5.db363387.js",
    "revision": "b16fb0dd6aa2e78114d22ef73a2ff812"
  },
  {
    "url": "assets/js/6.0b52b1f1.js",
    "revision": "8a4d3a803d3c58713f4d0d04aba3e54f"
  },
  {
    "url": "assets/js/7.66f4face.js",
    "revision": "bda34af9a48b98ef13df71538436e04b"
  },
  {
    "url": "assets/js/8.ffca767f.js",
    "revision": "78aef0c4b2e9d02872b5e9673a5fd251"
  },
  {
    "url": "assets/js/9.73a355f6.js",
    "revision": "0654d10cafecf7875c4dd3a70b47fd91"
  },
  {
    "url": "assets/js/app.815790f8.js",
    "revision": "d534033048ee083ea621d58ee61a6231"
  },
  {
    "url": "assets/js/vendors~flowchart.ba870caa.js",
    "revision": "a2e56b9f48ea07043dfd8f2fa320c4fc"
  },
  {
    "url": "avatar.jpg",
    "revision": "0dc2ecd95d483d3e038494d114957be6"
  },
  {
    "url": "banner.jpg",
    "revision": "38ad7665b3d03e2eb2edcf02347ea21e"
  },
  {
    "url": "categories/index.html",
    "revision": "07c291e56de9ee23fdf92e4927d636a0"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "556f35e3788fb738cc7391526fcbb560"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_black.png",
    "revision": "341621b18486ba4639bd2fa6fa5aab98"
  },
  {
    "url": "hero_old.png",
    "revision": "6e0567b30bfbca91471a5d5b886a13c5"
  },
  {
    "url": "hero_write.png",
    "revision": "944bdac8ed5e270e2e51db554b4c2232"
  },
  {
    "url": "index.html",
    "revision": "c1d6baecdd6f24d190c7de26b2d3a65a"
  },
  {
    "url": "tag/index.html",
    "revision": "0e121fcc47928dd626f7c4f4159fc1ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "21af5a1177d634684921e791a5840335"
  },
  {
    "url": "views/其他/2021/210210.html",
    "revision": "f4bed039bd9ae69917d73540de1ddabc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
