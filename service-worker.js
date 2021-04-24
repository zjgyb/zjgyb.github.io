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
    "revision": "b8e6648539c55ca1f52021a457d2de56"
  },
  {
    "url": "assets/css/0.styles.4d2797e0.css",
    "revision": "2bcdf9f88d6b9801c8ac65ed89577f55"
  },
  {
    "url": "assets/img/basic-selector.c876988d.png",
    "revision": "c876988d603e24ccb6add17571c6dcd1"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bubbleSort.b7d216a5.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "assets/img/client.eb1f8d33.png",
    "revision": "eb1f8d33b1723e9c4c3fcbd44c59b90b"
  },
  {
    "url": "assets/img/css-display.7775c5c8.png",
    "revision": "7775c5c89d817acba24ff9c8c82d169e"
  },
  {
    "url": "assets/img/father-son.0d286d60.png",
    "revision": "0d286d6079746c1721cdfcec354f8670"
  },
  {
    "url": "assets/img/hsl_rgb.f03fccb9.png",
    "revision": "f03fccb90be73e21ff323630d3391aa6"
  },
  {
    "url": "assets/img/inOrder.49acea8c.png",
    "revision": "49acea8c85862c6db6a2d532c4d608e2"
  },
  {
    "url": "assets/img/insertionSort.be81c151.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "assets/img/margin-brother.2fe28003.png",
    "revision": "2fe28003afa192569611d37382e891a2"
  },
  {
    "url": "assets/img/mergeSort.9541d116.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "assets/img/new.8b0f4969.svg",
    "revision": "8b0f4969fee8f1ab52fe7c29ce2e087b"
  },
  {
    "url": "assets/img/offset.d3965e52.png",
    "revision": "d3965e5277d32414c4ec9700b1c06c5b"
  },
  {
    "url": "assets/img/posOrder.5f7af7a0.png",
    "revision": "5f7af7a06286612d39b9efccb24faa1a"
  },
  {
    "url": "assets/img/preOrder.ac4e92c8.png",
    "revision": "ac4e92c8e755f0ac7e4c587842921abf"
  },
  {
    "url": "assets/img/pseudo-classes.30b160e3.png",
    "revision": "30b160e339e6cc64f98ddcecdf9d8e8c"
  },
  {
    "url": "assets/img/pseudo-element.e44eab84.png",
    "revision": "e44eab840072dc00011854928fb0bcaf"
  },
  {
    "url": "assets/img/rect.72490735.png",
    "revision": "72490735017fa6d84f48fc6d1cf0cb52"
  },
  {
    "url": "assets/img/responsive-adaptive.d6bc5a3a.jpg",
    "revision": "d6bc5a3a75f3524763582b0fd213db93"
  },
  {
    "url": "assets/img/rgb_hsl.45bca5ec.png",
    "revision": "45bca5ecf8f440308347a8520247f9fe"
  },
  {
    "url": "assets/img/scroll.91801003.png",
    "revision": "91801003da41a8404043e982663ad4f5"
  },
  {
    "url": "assets/img/selectionSort.44be35da.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/show1.b5d74bbd.png",
    "revision": "b5d74bbdf0dc4788b60bbeafc3964074"
  },
  {
    "url": "assets/js/1.da517fab.js",
    "revision": "bbd4dd9d7f8c44d8a64161e6f3c3fc23"
  },
  {
    "url": "assets/js/10.b36c8cb6.js",
    "revision": "dcb0849d527e70dd6ca34d73a1c6b292"
  },
  {
    "url": "assets/js/11.fe4afc2a.js",
    "revision": "f67a7361b85223d5cbe0338fd3773f99"
  },
  {
    "url": "assets/js/12.2e228583.js",
    "revision": "0adb701b9d2cbfeb71d5b8208384a779"
  },
  {
    "url": "assets/js/13.64acbed3.js",
    "revision": "a30f05a7c2d19ec1d78b3ac2870fa1f4"
  },
  {
    "url": "assets/js/14.dcc4175a.js",
    "revision": "b1ae0ef7f308ccb4c6c4f40de07e0f00"
  },
  {
    "url": "assets/js/15.add9b766.js",
    "revision": "4611ffcaacc7a732784c68b212141700"
  },
  {
    "url": "assets/js/16.14cd9f8b.js",
    "revision": "99d6c631d4d5bd8dae433091707feac1"
  },
  {
    "url": "assets/js/17.f8704303.js",
    "revision": "81614fcf66e3818f2880e43a24aa6406"
  },
  {
    "url": "assets/js/18.269925f0.js",
    "revision": "d53b3513f4ac22db89cff52b601abf3b"
  },
  {
    "url": "assets/js/19.c05f2d23.js",
    "revision": "6be9b1b86aff936a8a972d9100ad39f5"
  },
  {
    "url": "assets/js/20.69c35bb1.js",
    "revision": "be37178243f077b1e7dfa704fa6fec68"
  },
  {
    "url": "assets/js/21.e9fd048f.js",
    "revision": "324d0332b61a0df2e8d3a273aaade812"
  },
  {
    "url": "assets/js/22.700c3918.js",
    "revision": "561d8a030ff72230057266f6f9a8f014"
  },
  {
    "url": "assets/js/23.391066f3.js",
    "revision": "aa6e0d60c800a4f76220d690095193ba"
  },
  {
    "url": "assets/js/24.25656e63.js",
    "revision": "66383800cccb49f2006bab485c6292b3"
  },
  {
    "url": "assets/js/25.2bee4f09.js",
    "revision": "9f7cb02173d864c169d265fd5187dc1e"
  },
  {
    "url": "assets/js/26.cffef6a2.js",
    "revision": "1b70881f3ecd996eedc84d64cb782618"
  },
  {
    "url": "assets/js/27.f903123f.js",
    "revision": "e2d0fb203c484ad5ccf927708f294b05"
  },
  {
    "url": "assets/js/28.573abb4d.js",
    "revision": "5bd25c517f339c422e648f602973c9bb"
  },
  {
    "url": "assets/js/29.6675187f.js",
    "revision": "0a14efe8baca0f5f958931893939ad2d"
  },
  {
    "url": "assets/js/30.ea676eb1.js",
    "revision": "c5d22de1f17b9f417194eae2622c6002"
  },
  {
    "url": "assets/js/31.60162ef1.js",
    "revision": "b50693f01c8d89c80602bb398263a11e"
  },
  {
    "url": "assets/js/32.68d86036.js",
    "revision": "b17f8a29a1b050c7bd50343ee76f19d2"
  },
  {
    "url": "assets/js/33.e15eab0d.js",
    "revision": "c562408c6d8bf0930f45652a1ccf83ee"
  },
  {
    "url": "assets/js/34.766ca646.js",
    "revision": "af61835f58498ca649879bfb02d690fc"
  },
  {
    "url": "assets/js/35.8ee4b445.js",
    "revision": "2b1d2ae88953198d9a0c2f90cc465ced"
  },
  {
    "url": "assets/js/36.718ddf2c.js",
    "revision": "9e9518db316ca5111eedaae12b283872"
  },
  {
    "url": "assets/js/37.aca18e3f.js",
    "revision": "e345bfea1f36cea3d3760c4f471c6bf0"
  },
  {
    "url": "assets/js/38.a5f7e6f8.js",
    "revision": "9b8954a67b29b3ab852cee1edc84d062"
  },
  {
    "url": "assets/js/39.b534ad3b.js",
    "revision": "5ab81544b6bf0e5dd5e3091b01a8568e"
  },
  {
    "url": "assets/js/4.e7fb90ae.js",
    "revision": "e08d7b94aedab8fe0444ced6b66be2c0"
  },
  {
    "url": "assets/js/40.78564ae9.js",
    "revision": "6aaca41df82b383ef51f6b00a6a9e84f"
  },
  {
    "url": "assets/js/41.71b9be71.js",
    "revision": "daf5229b54205f344abf531655bd6d71"
  },
  {
    "url": "assets/js/42.586c9ec3.js",
    "revision": "2ae70f317e31bc839f97d0487c2c371e"
  },
  {
    "url": "assets/js/43.a522dcc7.js",
    "revision": "308b78a69b4f51397b4c8806617dca12"
  },
  {
    "url": "assets/js/44.43ccbcef.js",
    "revision": "10b22fe85bc18bfe89ed9540525bf4f9"
  },
  {
    "url": "assets/js/45.5b407546.js",
    "revision": "affe1453fafabebbe457639869315141"
  },
  {
    "url": "assets/js/46.efebf3c7.js",
    "revision": "b486600b23586de58b5d2815560738a4"
  },
  {
    "url": "assets/js/47.9f962526.js",
    "revision": "0906e4aa63db09bba7de0fd0edf043cb"
  },
  {
    "url": "assets/js/48.05cfdaab.js",
    "revision": "bcadeea7dcc9aa4ec508f1b85e7e8fa8"
  },
  {
    "url": "assets/js/49.6e586e2c.js",
    "revision": "80108c1dea1b793312f2b45b2d5ec450"
  },
  {
    "url": "assets/js/5.0d2a9542.js",
    "revision": "0907a1f84cf91f06e3fa50e4b76d4e9d"
  },
  {
    "url": "assets/js/50.b01d083d.js",
    "revision": "a99f6ad8c164df303b7c63d8d3fa221d"
  },
  {
    "url": "assets/js/51.b31c1138.js",
    "revision": "139a86ba878c1c5359a8135203fea63c"
  },
  {
    "url": "assets/js/52.c0f5fcac.js",
    "revision": "5f94d022e9f9a75e3c85189c5adfc446"
  },
  {
    "url": "assets/js/53.14d8938b.js",
    "revision": "2e762909808cea8300e9d0344f8c9cd2"
  },
  {
    "url": "assets/js/54.e627bb20.js",
    "revision": "4f47dc3f4857dc227f59ad27744f79d9"
  },
  {
    "url": "assets/js/55.0cc35979.js",
    "revision": "11fa1cda2ecca2275b26bb1d94d9ea02"
  },
  {
    "url": "assets/js/56.4ca8a800.js",
    "revision": "e11573690b51378e51065c98ac6a9877"
  },
  {
    "url": "assets/js/57.08e201e7.js",
    "revision": "8605b8623b060964396fa7c3a34b6fd5"
  },
  {
    "url": "assets/js/58.f5d605e8.js",
    "revision": "2322628ac365cd0cfd2f79b1d9128cc4"
  },
  {
    "url": "assets/js/59.37726a8f.js",
    "revision": "79870d84cfb611ece2577f0110125e08"
  },
  {
    "url": "assets/js/6.124d876a.js",
    "revision": "2c86bc45031d6149546885c434611ec3"
  },
  {
    "url": "assets/js/60.1dce9eee.js",
    "revision": "2d5a0e915c23906251fc7e7154877967"
  },
  {
    "url": "assets/js/61.91273064.js",
    "revision": "4d757159a648c1b5104823bb559adf96"
  },
  {
    "url": "assets/js/62.69c1a380.js",
    "revision": "cd828f2dc080377274578e8904aaafe5"
  },
  {
    "url": "assets/js/63.ccd9bbac.js",
    "revision": "d8585564e907e45a776d35cb5d17c428"
  },
  {
    "url": "assets/js/64.aeaf1f47.js",
    "revision": "6c2f12711c38db0733b05cffa1f31cbf"
  },
  {
    "url": "assets/js/65.21a07544.js",
    "revision": "8f3471f680120020b2a3c52b9670d859"
  },
  {
    "url": "assets/js/66.9d65341d.js",
    "revision": "a08361423437cb7cfa350d16588afbde"
  },
  {
    "url": "assets/js/67.27adc554.js",
    "revision": "b7c503e84ed0eb5230c732452a28e3b3"
  },
  {
    "url": "assets/js/68.5ac791ce.js",
    "revision": "b4a0adc7bd0afa52a725ded30479d0eb"
  },
  {
    "url": "assets/js/69.94a5a00c.js",
    "revision": "55a902f98b8047fcf45055ff4d17188a"
  },
  {
    "url": "assets/js/7.aaa803e9.js",
    "revision": "56f938255ea1b7c101c65f4d215b122c"
  },
  {
    "url": "assets/js/70.746f349f.js",
    "revision": "8827cab69c113878e93694158ecefcac"
  },
  {
    "url": "assets/js/71.89492a50.js",
    "revision": "e4c2d8b0782df636f2b2d029bed3bacc"
  },
  {
    "url": "assets/js/72.2c82ae52.js",
    "revision": "27d2a8ec81ecb466991047c8246c45fc"
  },
  {
    "url": "assets/js/73.d735dae0.js",
    "revision": "b391584294125b7654e009c9eb04c231"
  },
  {
    "url": "assets/js/74.dea5af75.js",
    "revision": "1135d836c06adb3e86f3db7603b85994"
  },
  {
    "url": "assets/js/75.0a33a7f5.js",
    "revision": "a3f4e538f09952b258c743c50788cd44"
  },
  {
    "url": "assets/js/76.086ff280.js",
    "revision": "8752327c4d8ca3bb7aa5501aab5e4ddc"
  },
  {
    "url": "assets/js/77.ac134c3b.js",
    "revision": "0d17a116b01b236777f1a9021d4bfdf7"
  },
  {
    "url": "assets/js/78.98788d92.js",
    "revision": "650d111076710ceec8ec49aee8e7df17"
  },
  {
    "url": "assets/js/79.57c844e2.js",
    "revision": "d3901f3c569802c546b217a4c2bb7b5f"
  },
  {
    "url": "assets/js/8.61ad7555.js",
    "revision": "9477395c7b3c0adee71c0b3209fa6d54"
  },
  {
    "url": "assets/js/80.1d09e1f0.js",
    "revision": "45c5bfe1b4a0bb9b1535e52f70686b8b"
  },
  {
    "url": "assets/js/81.e2dc8620.js",
    "revision": "63d96c8b4979c78fbb3a87813336569f"
  },
  {
    "url": "assets/js/9.d67de81c.js",
    "revision": "5e00e5c6b03c161fad6cbba771554caa"
  },
  {
    "url": "assets/js/app.ee66c766.js",
    "revision": "e2e2dc82ea3a4ac16aa9f484f6f099fc"
  },
  {
    "url": "assets/js/vendors~flowchart.0324543b.js",
    "revision": "53843cb436c4b33810f601c699b3e866"
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
    "url": "categories/CSS/index.html",
    "revision": "298496cdfd2c6a29dbf97ef19dd9db7a"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "07560fa01b70b87b0324ee2e4991cdca"
  },
  {
    "url": "categories/index.html",
    "revision": "5c0fad053c4fef7bd9e202f5725a8342"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a6d20fe193f8e7a47f6651bd5f55ade9"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "dfd1ce2f7047feba5cf31e0d4fae3311"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e04c411460dddeef7d250d16ed33985e"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "bb98daa425f09a0e4eca1cb6761044b9"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d3d78bafc70fed223a51a43d5dd1ef22"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "528d8ae25177b8edc840c0d2ec0e559e"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "882fd8fe3064b1b0659a826861ec2b9a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f082ff70a8f9c29a95399609cc13f841"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "eac4d10c95608fd19622e4c2c27dc90f"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "178ab82824abf3b2b5e0b142261b3c59"
  },
  {
    "url": "categories/阅读笔记/index.html",
    "revision": "d3d5f35a99e72d5ab95ed8e299d46893"
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
    "revision": "9ae4e6e55cbb4125965178cfec0fb9b6"
  },
  {
    "url": "tag/AJAX/index.html",
    "revision": "eacd91ed96c21c383a0835c67a7990f5"
  },
  {
    "url": "tag/animation/index.html",
    "revision": "5c00397fc4df3bbf6eb2f4b2b69cb794"
  },
  {
    "url": "tag/API/index.html",
    "revision": "2c4769c64e394176657814a8db5366c2"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "e154377e6cdb57372d49950ffe07510c"
  },
  {
    "url": "tag/audio/index.html",
    "revision": "8f82da580040a9547e379984b5822fee"
  },
  {
    "url": "tag/body-parser/index.html",
    "revision": "3b95d67f60a11bc2624807b258ee19a3"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "4e3ced6ec64271d9b27c247bbffe8e1e"
  },
  {
    "url": "tag/border/index.html",
    "revision": "9a878e980252db183ddee8e6e810f02d"
  },
  {
    "url": "tag/browser/index.html",
    "revision": "c110943b2718e39b13f5accfc20b317e"
  },
  {
    "url": "tag/canvas/index.html",
    "revision": "203bfda15fd5490b501873b22bb40794"
  },
  {
    "url": "tag/client/index.html",
    "revision": "83cc855d72b2efe60c6169442e147197"
  },
  {
    "url": "tag/Color/index.html",
    "revision": "eb3209197923955524c247cadd42f343"
  },
  {
    "url": "tag/Comet/index.html",
    "revision": "aedbe27c4c38be7092cadbaf78954b52"
  },
  {
    "url": "tag/cookie/index.html",
    "revision": "e4319b04b08ce2b496a49fc0fe1dc7fb"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "f595aba27849a0cf76c6588d7002a0f9"
  },
  {
    "url": "tag/css变量/index.html",
    "revision": "7f0c6801d7adeb5e5b1aad4f51db36fb"
  },
  {
    "url": "tag/CSS选择器/index.html",
    "revision": "6f19af308d57d80f56bd65c78b4d6874"
  },
  {
    "url": "tag/dataTransfer/index.html",
    "revision": "6caa7dc38c65f7b3c29dc7738c329a13"
  },
  {
    "url": "tag/Date/index.html",
    "revision": "4d852df16d842d651ea585d4cbda70ac"
  },
  {
    "url": "tag/Document/index.html",
    "revision": "6a36838ca8a8b4cfebca6e679117bd98"
  },
  {
    "url": "tag/DocumentFragment/index.html",
    "revision": "d905152f545b1f2b305b4f792223766e"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "b93a52a5f30e25326da35efc8490e20d"
  },
  {
    "url": "tag/DOM2/index.html",
    "revision": "5a4c29c331f759ee148be4ce9d554616"
  },
  {
    "url": "tag/DOM3/index.html",
    "revision": "5a084f53fe13c73411493dac25eb7faf"
  },
  {
    "url": "tag/ES10/index.html",
    "revision": "32f617584417da5c816ff1a1b734a2ee"
  },
  {
    "url": "tag/es5/index.html",
    "revision": "66f6c9cf01aa260a0ab11d4e1b2fae2f"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "4aec322b3a515afbe8249c4625c76739"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "d0bea78f9d9f0dca5a3a744fc39b2dc2"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "695e9c65d5c8495d8a1540bc6b1206aa"
  },
  {
    "url": "tag/ES7/index.html",
    "revision": "050121d1ab141511f68d45dd2ba1566f"
  },
  {
    "url": "tag/express-session/index.html",
    "revision": "d5d739c599d3dfe7fac3272fc035a19e"
  },
  {
    "url": "tag/express/index.html",
    "revision": "854095b2bfeeb94bca1d86b3220dde36"
  },
  {
    "url": "tag/filter/index.html",
    "revision": "71700b0a59856ea312238a2ac82fae0a"
  },
  {
    "url": "tag/form/index.html",
    "revision": "34120cbc0b6145aa503403c2219c42c1"
  },
  {
    "url": "tag/getBoundingClientRect/index.html",
    "revision": "a3f0056bd6db5563842d543625bd1dce"
  },
  {
    "url": "tag/getComputedStyle/index.html",
    "revision": "1c6ef597074f24c324423aa3f4d117fb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "496b0c6a3aa2d7303155557da48d3767"
  },
  {
    "url": "tag/HEX/index.html",
    "revision": "9d4fb3fed2edc6a713fc9ba12bb366c4"
  },
  {
    "url": "tag/HSL/index.html",
    "revision": "9714596bcfdeeaa66f5d3437ed04ac18"
  },
  {
    "url": "tag/html/index.html",
    "revision": "830b48120b8cfd2c3e7cb53101e40a72"
  },
  {
    "url": "tag/html5/index.html",
    "revision": "81c5f192f37190d7cfd1dfef1bacf064"
  },
  {
    "url": "tag/HTML5/index.html",
    "revision": "c035da32d30daec65a67337e26dfc194"
  },
  {
    "url": "tag/IDE/index.html",
    "revision": "94ae00db34be8dddec02a04ce2af1182"
  },
  {
    "url": "tag/index.html",
    "revision": "31922126045295dd4cfc70702414759c"
  },
  {
    "url": "tag/IndexedDB/index.html",
    "revision": "fc9e087fd6259d3d32af1e4388d74acd"
  },
  {
    "url": "tag/innerText/index.html",
    "revision": "a48ea43eb22e8d09e350637a397e54b4"
  },
  {
    "url": "tag/instanceof/index.html",
    "revision": "17eaa01161893ed6a0c0e29c81239323"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e751867717e4bc0aeacd51e622ec6892"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a86d6acd42fd3e50b2eff80b258982c3"
  },
  {
    "url": "tag/Js/index.html",
    "revision": "31a6d7290db7a7752ad8e54447fd0f5d"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "7f5d6a07dcdf3dcaaed69cf1e892f878"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "2a9b21dc8b93417cf84dab191c8471b3"
  },
  {
    "url": "tag/JSONP/index.html",
    "revision": "b0062fc6bf684f320ed8a9c9cffadd01"
  },
  {
    "url": "tag/Less/index.html",
    "revision": "faf881f3b42e328b1a1a26c22da0bfe1"
  },
  {
    "url": "tag/localStorage/index.html",
    "revision": "696b8334fd223aca6a54c8091c748f84"
  },
  {
    "url": "tag/login/index.html",
    "revision": "c8274c902a3ab3729f4ac8db5de70bd5"
  },
  {
    "url": "tag/margin/index.html",
    "revision": "51d88c7b2269c85985c02859a42f0a2c"
  },
  {
    "url": "tag/meta/index.html",
    "revision": "0184d99a9bc0e75483a9c57f878a05a9"
  },
  {
    "url": "tag/method/index.html",
    "revision": "5ead240a40ac76d21b411b80b0c51eb4"
  },
  {
    "url": "tag/mixin/index.html",
    "revision": "913e7b4e0e6f8fc583014eebf6b6bebf"
  },
  {
    "url": "tag/mock/index.html",
    "revision": "6688819b36b73e8359e0d58316ac0eea"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "46b7d2c166f7e90eee33d58bef78aaae"
  },
  {
    "url": "tag/NodeIterator/index.html",
    "revision": "07e8c0dab13a4c83ff4260e7d93b5ef5"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "83f24a0f87fbc475bd9f4c5a086d4dae"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "634886eb9df7cbcdb1d0e2adedb1ce23"
  },
  {
    "url": "tag/offset/index.html",
    "revision": "b98486f126bef24793e3b5d3f98fab32"
  },
  {
    "url": "tag/package.json字段/index.html",
    "revision": "9d5573a66ee04fd751971e9d77a08e96"
  },
  {
    "url": "tag/padding/index.html",
    "revision": "67c87624e6314484b11cd70e882e49cc"
  },
  {
    "url": "tag/popstate/index.html",
    "revision": "c2ac3bc2c97acce1a6ded411a71d4275"
  },
  {
    "url": "tag/postMessage/index.html",
    "revision": "bedb84df64056d2f92012eb7c0ce1d29"
  },
  {
    "url": "tag/preventDefault/index.html",
    "revision": "94fd27fb2e22b874dbcd792ad71fdebf"
  },
  {
    "url": "tag/pug/index.html",
    "revision": "69220b6b1219e33f012c53741274d7f3"
  },
  {
    "url": "tag/pushState/index.html",
    "revision": "234674f7b2a4c9649289919e2460aa9b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "348a9689149ccc5edece75662bd2e76d"
  },
  {
    "url": "tag/regular-expression/index.html",
    "revision": "c59b1324bda44cdc0412d9741e75f0e8"
  },
  {
    "url": "tag/resource/index.html",
    "revision": "ff13e29538a01e2745066f0603b5d8c5"
  },
  {
    "url": "tag/RGBA/index.html",
    "revision": "deaad067d544403790fba20dcf48118b"
  },
  {
    "url": "tag/scroll/index.html",
    "revision": "e9fa232ae656492b681033166a260cd2"
  },
  {
    "url": "tag/scrollIntoView/index.html",
    "revision": "673a9fd50c7bff311cca3a30b6c193bb"
  },
  {
    "url": "tag/select/index.html",
    "revision": "f668deb2a15d02be522e16b5068dcd32"
  },
  {
    "url": "tag/server/index.html",
    "revision": "1730fefd3e1a0b96f2ccea8efa98c3cf"
  },
  {
    "url": "tag/sessionStorage/index.html",
    "revision": "341333e6eea40bce0f24cdf394082c8c"
  },
  {
    "url": "tag/Set/index.html",
    "revision": "d8fce225aa3f45682f43994e7d17e6bd"
  },
  {
    "url": "tag/signp/index.html",
    "revision": "13d296a561779c1fa0cb5f5de925a43e"
  },
  {
    "url": "tag/socket.io/index.html",
    "revision": "0860de0d20efad6e9b0f2e20290109dc"
  },
  {
    "url": "tag/srcset/index.html",
    "revision": "a597616af2ff519c61413871733e6afc"
  },
  {
    "url": "tag/SSE/index.html",
    "revision": "5507ccd0afac7dfe858193e2bbd73388"
  },
  {
    "url": "tag/stopPropagation/index.html",
    "revision": "d3bc6060c01fc6f6653f91654d2c0379"
  },
  {
    "url": "tag/String/index.html",
    "revision": "98e9a5be101c32056c72521cfbf8d1f3"
  },
  {
    "url": "tag/submit/index.html",
    "revision": "e9c445e90992e595038d2405d6347a99"
  },
  {
    "url": "tag/Table/index.html",
    "revision": "136375cb69852b4c6ddcef795ccd362e"
  },
  {
    "url": "tag/TreeWalker/index.html",
    "revision": "82cfc332d363f7ceaa4cfc07338d20d3"
  },
  {
    "url": "tag/typeof/index.html",
    "revision": "ca3be615e7a67b22027be54160767676"
  },
  {
    "url": "tag/VeeValidate/index.html",
    "revision": "8b318bc9b1f5a5921928b72efea22eae"
  },
  {
    "url": "tag/video/index.html",
    "revision": "0b78d5e904ff8cfc3f0a624d72bfc010"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6660dda70822c41260441967e49ae80c"
  },
  {
    "url": "tag/Vue CLI 3/index.html",
    "revision": "f755369309be22b178d5851b03975954"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "af3234e57dc84a29cf7056ea1357b10d"
  },
  {
    "url": "tag/Web Sockets/index.html",
    "revision": "d682523ce88dffd495baa9a39a92dfd7"
  },
  {
    "url": "tag/websocket/index.html",
    "revision": "9cc64c1a00de06ff3f692d2ec47d8d81"
  },
  {
    "url": "tag/ws/index.html",
    "revision": "62c0979b524ddd119fd4999039d4e0b6"
  },
  {
    "url": "tag/XMLHTTPRequest/index.html",
    "revision": "86b450a3eb4411e4a549d1e294ee9215"
  },
  {
    "url": "tag/中介者模式/index.html",
    "revision": "b3bcd4232f29ced804ce5c15646ed3d0"
  },
  {
    "url": "tag/中序遍历/index.html",
    "revision": "d63a0df8fae1f793655863cde531d441"
  },
  {
    "url": "tag/事件冒泡/index.html",
    "revision": "005a3e3d1132d2a26b0be4c16236b3c6"
  },
  {
    "url": "tag/事件处理程序/index.html",
    "revision": "384c98d2464331cc6cec86da28c3cb8a"
  },
  {
    "url": "tag/事件委托/index.html",
    "revision": "16d2f4dae132d2ae5c98e16060614b3c"
  },
  {
    "url": "tag/事件捕获/index.html",
    "revision": "aa47b5a961d7bd13da891276afafa03d"
  },
  {
    "url": "tag/事件模拟/index.html",
    "revision": "45e664555bc12b609716059a4330fc1e"
  },
  {
    "url": "tag/二分查找/index.html",
    "revision": "cd17302bc8b3ead2979bcb5ae1e2b7c4"
  },
  {
    "url": "tag/二叉查找树/index.html",
    "revision": "7314d1f10c237b7d207c9cb44446ab5b"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "c86cbbf2757ceb8f56f94be22b84c63b"
  },
  {
    "url": "tag/代理模式/index.html",
    "revision": "a5eeee9d7c518909ff475ddc1c5740d3"
  },
  {
    "url": "tag/伪元素/index.html",
    "revision": "b450b24cd06cb15195553f4b77995c99"
  },
  {
    "url": "tag/伪类/index.html",
    "revision": "6cee445fb137e693c74b690f3519afc4"
  },
  {
    "url": "tag/偏函数/index.html",
    "revision": "37f64a7ce4616ad2e0cfcbc81dbcbc05"
  },
  {
    "url": "tag/先序遍历/index.html",
    "revision": "03ee981b5312c951643ea0e95c6a5a6a"
  },
  {
    "url": "tag/关于/index.html",
    "revision": "f7dd819e4bb041a4d13c3abd8095bf2e"
  },
  {
    "url": "tag/冒泡排序/index.html",
    "revision": "dd6c6d409164316b5e98e2effc46fece"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "b7aeef352e66dcb4a84b3e78cb0cc859"
  },
  {
    "url": "tag/列表/index.html",
    "revision": "35c5b258b240d6254838f620a2ecc288"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "9b5972bcf176010b984c3f9382f74768"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "9b486fe62818e694254e9b4f31dc9383"
  },
  {
    "url": "tag/单例模式/index.html",
    "revision": "be842d0db0b75b95240622b1e516c0d2"
  },
  {
    "url": "tag/双向链表/index.html",
    "revision": "3106ad56d779952e6001100fe14f25de"
  },
  {
    "url": "tag/双飞翼布局/index.html",
    "revision": "c31df63cee380304d162ac53f8de27e4"
  },
  {
    "url": "tag/发布订阅模式/index.html",
    "revision": "bc3da1cb0d4497097b88419337f062b6"
  },
  {
    "url": "tag/后序遍历/index.html",
    "revision": "0aca1ac3a876572de38407710bbf3deb"
  },
  {
    "url": "tag/响应式布局/index.html",
    "revision": "fca73c4da4f21f153e3e219df8e922be"
  },
  {
    "url": "tag/图像Ping/index.html",
    "revision": "150e21c340937802634698dac6f64a60"
  },
  {
    "url": "tag/圣杯布局/index.html",
    "revision": "1c24c3ff500918f3491c5e362453f8fb"
  },
  {
    "url": "tag/基本选择器/index.html",
    "revision": "01e50a05cb1f0b838d20fc949de1e4ae"
  },
  {
    "url": "tag/多元素组合选择器/index.html",
    "revision": "65ba919853645518bfff3ff3067a0d9b"
  },
  {
    "url": "tag/字典/index.html",
    "revision": "43e945caaa14dbb811fd6dd9a76d8123"
  },
  {
    "url": "tag/字段含义/index.html",
    "revision": "6bb8b31e0e88ab4e634bb88414550772"
  },
  {
    "url": "tag/富文本/index.html",
    "revision": "707b4a5151e88df2007bbed3512fd9a1"
  },
  {
    "url": "tag/属性选择器/index.html",
    "revision": "c9ef22d182860b01f16be20c478c3103"
  },
  {
    "url": "tag/希尔排序/index.html",
    "revision": "76586e8dd1b1137e7494f4448f561e8b"
  },
  {
    "url": "tag/开链/index.html",
    "revision": "e7b442b3196e40a0702f9ed80e64fe7b"
  },
  {
    "url": "tag/弹性布局/index.html",
    "revision": "a8067725d00046ff49cdd74d750cf96a"
  },
  {
    "url": "tag/归并排序/index.html",
    "revision": "26acd5472dd647fc7ccfc415dd7d194b"
  },
  {
    "url": "tag/循环链表/index.html",
    "revision": "3f1936fa65f181d9a25402d7f02d9baa"
  },
  {
    "url": "tag/快速排序/index.html",
    "revision": "edf490638f70755a42f15c1660f967fe"
  },
  {
    "url": "tag/拖拽/index.html",
    "revision": "f1dab5978cb22f71dd7620b45a692c2f"
  },
  {
    "url": "tag/插入排序/index.html",
    "revision": "ddf96f50b7e065d25945421457b6ea4b"
  },
  {
    "url": "tag/散列/index.html",
    "revision": "8f088ea66c8c74cbb5c04c8c19399aeb"
  },
  {
    "url": "tag/新增标签/index.html",
    "revision": "09112a069f471741c4ad67f252ab080c"
  },
  {
    "url": "tag/日期/index.html",
    "revision": "02b41f41e0811729346fd451ab1342c0"
  },
  {
    "url": "tag/柯里化/index.html",
    "revision": "5e8f86975d1f7f0f0dc6bd2eebffc6a8"
  },
  {
    "url": "tag/栈/index.html",
    "revision": "96976958875914c0b3d5066d2cf0607d"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "709d079b0dced8b17cb57ace163b142d"
  },
  {
    "url": "tag/流式布局/index.html",
    "revision": "d6e4f3a9f4d06186bb2702ea97b8df34"
  },
  {
    "url": "tag/碰撞/index.html",
    "revision": "2e8432ef3b7e5fe2c4ec707334527d49"
  },
  {
    "url": "tag/策略模式/index.html",
    "revision": "34d669834549fca521556778c76fb89a"
  },
  {
    "url": "tag/线性探测/index.html",
    "revision": "471cc5be896c6b8a0fa4ddb24911b292"
  },
  {
    "url": "tag/职责链模式/index.html",
    "revision": "eef0fe662821cd1ceee062d35d0f5144"
  },
  {
    "url": "tag/自适应布局/index.html",
    "revision": "aaf3d20e921e557b7f7f3b29627dfd8b"
  },
  {
    "url": "tag/观察者模式/index.html",
    "revision": "dde8c1da098790d39003aeeac25dcf4b"
  },
  {
    "url": "tag/计算属性/index.html",
    "revision": "448c3fb3a66702185519485def2f425e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e2f9fbdcdc433bf0133b85c2f817b373"
  },
  {
    "url": "tag/贪心算法/index.html",
    "revision": "8d91e6128dec201da6d24b23ab22f1e8"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "9f01df4c5d6ecff6aa709ccc79383fae"
  },
  {
    "url": "tag/跨文档消息传递/index.html",
    "revision": "a5028e201b06016eeb3947978eba5a0d"
  },
  {
    "url": "tag/选择排序/index.html",
    "revision": "2081c39f7b8de08feca4faea4c2d7357"
  },
  {
    "url": "tag/选择框/index.html",
    "revision": "fb4d3824c36d01fa31231966bdeeb9ce"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "82c60c68b179f9c10d9297fa4b530a0d"
  },
  {
    "url": "tag/阅读笔记/index.html",
    "revision": "9b83160c3c52cad9b446a9becfa331ed"
  },
  {
    "url": "tag/队列/index.html",
    "revision": "85be0143edcf4cef76c8e35732587e50"
  },
  {
    "url": "tag/集合/index.html",
    "revision": "0a5dab1c1be78d09da3a421e0c9a9512"
  },
  {
    "url": "tag/静态布局/index.html",
    "revision": "b23611b17fec5c3249669e5066e2da46"
  },
  {
    "url": "tag/顺序查找/index.html",
    "revision": "0759d6904242746c5ffe9748b40509c6"
  },
  {
    "url": "tag/预加载/index.html",
    "revision": "f55a7dbe5f1ff9af1d15a192a2f4f376"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a3fd9ba4ab7e1f0c45f27acfd3f3af4"
  },
  {
    "url": "views/about/index.html",
    "revision": "2256f9af6d84101843431eda279457fe"
  },
  {
    "url": "views/algorithm/erchashu.html",
    "revision": "48278c0cac8f36b732eb20756b243094"
  },
  {
    "url": "views/algorithm/JSjinasusuanfahegaojisuanfa.html",
    "revision": "c3c9936bcaa2664d5a7949ce1980b141"
  },
  {
    "url": "views/algorithm/jslianbiao.html",
    "revision": "ce0739f1d22c5ca6f412d3feb187dd18"
  },
  {
    "url": "views/algorithm/jszidianhejihe.html",
    "revision": "836e556ac9ac9241cb22e15aadb127cc"
  },
  {
    "url": "views/algorithm/liebiaohesanlie.html",
    "revision": "63d53063c06c34c0e79412196e7b0627"
  },
  {
    "url": "views/algorithm/paixu.html",
    "revision": "6b634524fd1d6e068352feba363c7c47"
  },
  {
    "url": "views/algorithm/zhanyuduilie.html",
    "revision": "22f0b483e93a0f4b4d59f65cc9a50e7f"
  },
  {
    "url": "views/css/2018/css_variable.html",
    "revision": "d563e59ffd982ff778c045a23be50e45"
  },
  {
    "url": "views/css/2019/CSS-animate.html",
    "revision": "611e37ffc9d19cae1fa7907b9bf547db"
  },
  {
    "url": "views/css/2019/CSS-animate1.html",
    "revision": "43d1aceab5979fad440c19b0590ba5f4"
  },
  {
    "url": "views/css/2020/css_content.html",
    "revision": "a00d5cad1962cb9605ce1c8571cd1595"
  },
  {
    "url": "views/css/2020/css_display.html",
    "revision": "4119b1789fc8f67b952f95fe845e05e6"
  },
  {
    "url": "views/css/2020/css_selector.html",
    "revision": "2e4b752c3f03b311c1d4e8f047873043"
  },
  {
    "url": "views/css/2020/less.html",
    "revision": "5d1e6933090ee1c1116cd282cd8cfff3"
  },
  {
    "url": "views/designMode/js_category.html",
    "revision": "c1fe2bb675468fa11b9f77e2ea359c84"
  },
  {
    "url": "views/designMode/js_parter.html",
    "revision": "d793b702f5b34d34bf24e2e4d7470c12"
  },
  {
    "url": "views/designMode/js_proxy.html",
    "revision": "ec804b9c40378642370f864d6c8b4585"
  },
  {
    "url": "views/designMode/js_single.html",
    "revision": "03fbdaf40f837a6ef903cd2a179ca008"
  },
  {
    "url": "views/designMode/js_viewer.html",
    "revision": "36ecb6f1c7c5fa1110b393205e3bc971"
  },
  {
    "url": "views/designMode/js_zhize.html",
    "revision": "4e2badd46cbd369933ecb09a50b03044"
  },
  {
    "url": "views/frontEnd/2018/git.html",
    "revision": "c815fc5c9e0057e3a8579724ba553068"
  },
  {
    "url": "views/frontEnd/2020/package_json.html",
    "revision": "d89946769cbd707228d18021e4d842ea"
  },
  {
    "url": "views/frontEnd/2020/vscode_commond.html",
    "revision": "2b116c1300b29a8453794e0906b71ce6"
  },
  {
    "url": "views/html/2019/meta.html",
    "revision": "ebb69fd4c8b0aa9478d3659c6a627a2b"
  },
  {
    "url": "views/html/2019/Pug.html",
    "revision": "d9be157c191e9c45e1f8e6e3b4d7b8de"
  },
  {
    "url": "views/html/2020/HTML5_tag.html",
    "revision": "3c3d02a8bc99043dfc8ca7999c449905"
  },
  {
    "url": "views/js/2018/js_compress.html",
    "revision": "bc9178f163a2e02a120f13382fbe830d"
  },
  {
    "url": "views/js/2018/js_es6_to_es5.html",
    "revision": "eff6eed2d84c7bd3e8984632120a51f8"
  },
  {
    "url": "views/js/2018/js_function.html",
    "revision": "f3fa014f00da13b08449268a5a695778"
  },
  {
    "url": "views/js/2018/js_preload.html",
    "revision": "23e012e12c8d069ec0921d118db7967e"
  },
  {
    "url": "views/js/2018/stop.html",
    "revision": "d190b1aa36de5fc5615a6e908824d68c"
  },
  {
    "url": "views/js/2019/canvas.html",
    "revision": "2cea7eec4c7145850b6525e4287d4389"
  },
  {
    "url": "views/js/2019/color_change.html",
    "revision": "e9b814439bdd80e610700937f7fc1d1d"
  },
  {
    "url": "views/js/2019/curry.html",
    "revision": "51c2ec35d925086a3c334be9242cd606"
  },
  {
    "url": "views/js/2019/formdata.html",
    "revision": "6123ce768a017ed9ae56d9c03161fdec"
  },
  {
    "url": "views/js/2019/js_object_category.html",
    "revision": "4f44686b46db7135fb93a1b0c881a5a2"
  },
  {
    "url": "views/js/2019/js_type.html",
    "revision": "46b5752f1b8857a04795ca7545b53651"
  },
  {
    "url": "views/js/2019/regular-express-1.html",
    "revision": "8cf3cc0e66b4b87c4542884622edc263"
  },
  {
    "url": "views/js/2019/socket-io.html",
    "revision": "a34b5330dd1e77f66a2309838f20641a"
  },
  {
    "url": "views/js/2019/web_cookie.html",
    "revision": "786c1a738e37b24b8e5241cb09963c71"
  },
  {
    "url": "views/js/2019/websocket.html",
    "revision": "4d264031c49345fd74aa0afe8f9a3237"
  },
  {
    "url": "views/js/2020/bom.html",
    "revision": "0de9648633e01297f7aa3e66e37e6a9b"
  },
  {
    "url": "views/js/2020/date.html",
    "revision": "11737f70ea5af1c5e32c3305a091c9ea"
  },
  {
    "url": "views/js/2020/DOM_more.html",
    "revision": "59a160a6f7ee060ac32d23b3d521139b"
  },
  {
    "url": "views/js/2020/dom.html",
    "revision": "237605779bec4385c55a6f400b00b61d"
  },
  {
    "url": "views/js/2020/dom2_dom3.html",
    "revision": "f20a76a011463aa8c26068ac948daf12"
  },
  {
    "url": "views/js/2020/es6.html",
    "revision": "8566fb0ab74e79a0a525e483ee6da44f"
  },
  {
    "url": "views/js/2020/HTML5.html",
    "revision": "3df99e959efc94780b570012edebf380"
  },
  {
    "url": "views/js/2020/IndexedDB.html",
    "revision": "c3b20ae84074793854fcf1b1c7f656b2"
  },
  {
    "url": "views/js/2020/JavaScript_event.html",
    "revision": "6c2f935f31ec000348f48e12c480964f"
  },
  {
    "url": "views/js/2020/JavaScript_form.html",
    "revision": "04fb7f69af271ed7a3a97aea3e0b7f5d"
  },
  {
    "url": "views/js/2020/JS_array.html",
    "revision": "8ed833db30a07a5dcc36db1c659ab958"
  },
  {
    "url": "views/js/2020/js_string.html",
    "revision": "e376f68ed0caba1aa9604ca2d5d5b63f"
  },
  {
    "url": "views/js/2020/JSON_AJAX.html",
    "revision": "0b3c2182a90c7a6f44c3f14edc3eaa6f"
  },
  {
    "url": "views/node/2019/nodejs_sign.html",
    "revision": "c60c7069db523d0c52ed489f7c3e0d4d"
  },
  {
    "url": "views/others/2020/study_source.html",
    "revision": "eca6042450a74467d4c52ee66c1c8f36"
  },
  {
    "url": "views/others/2021/210210.html",
    "revision": "f3cdc25391c0e53e713a64b9211b20bc"
  },
  {
    "url": "views/others/2021/theme.html",
    "revision": "f61003913d3a946dfc15de9ee7012ee3"
  },
  {
    "url": "views/python/2018/python_study.html",
    "revision": "9e30ac5c01363b83b2e329a8cf3e43e8"
  },
  {
    "url": "views/reading/2021/202102.html",
    "revision": "22764938a3afa99ef9da48c787e81b0c"
  },
  {
    "url": "views/vue/2019/VeeValidate.html",
    "revision": "a53764e0be3bda74581f90593ec85c30"
  },
  {
    "url": "views/vue/2019/vue_study.html",
    "revision": "3413f563be1d24664b8dbdc343d20f32"
  },
  {
    "url": "views/vue/2019/vue_study2.html",
    "revision": "4d90c6de2e72db399c79b060846ca9bc"
  },
  {
    "url": "views/vue/2019/vue_study3.html",
    "revision": "05002f1f03d99d94c6b0ebeb4f45faab"
  },
  {
    "url": "views/vue/2019/vue_style.html",
    "revision": "29d8b1f3b312371d050f5860ccc730fe"
  },
  {
    "url": "views/vue/2019/vue-cli3_mock.html",
    "revision": "120ee453e93b82569714c13a1dd5e499"
  },
  {
    "url": "views/vue/2021/vue_source.html",
    "revision": "154c7c41511c53be929b00d7caf3a17e"
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
