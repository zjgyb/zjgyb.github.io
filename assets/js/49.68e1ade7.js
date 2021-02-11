(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{602:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("原本认为JS对象分类十分简单，但是看到有许多分法并且每一种分法似乎都有道理，因此我列举出一些分法以及它们的包含范围，算是拾人牙慧吧，同时发表一些自己的看法，最后总结一下一些常用的全局函数和属性。")]),t._v(" "),a("h2",{attrs:{id:"分类方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类方法"}},[t._v("#")]),t._v(" 分类方法")]),t._v(" "),a("p",[t._v("我看到有四种分类方法：")]),t._v(" "),a("p",[t._v("{% note info %}\n最主要的是前两种，后两种只是涉及到了而已，但是我还是拿出来讨论一下。\n{% endnote %}")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("内部对象")]),t._v("、"),a("strong",[t._v("宿主对象")]),t._v("和"),a("strong",[t._v("自定义对象")]),t._v("三种")])]),t._v(" "),a("ul",[a("li",[t._v("内部对象——包含"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("Function")]),t._v("、"),a("code",[t._v("Global")]),t._v("、"),a("code",[t._v("Math")]),t._v("、"),a("code",[t._v("Error")]),t._v("...")]),t._v(" "),a("li",[t._v("宿主对象——运行JS脚本环境提供的对象，包含"),a("code",[t._v("Window")]),t._v("、"),a("code",[t._v("Document")]),t._v("、"),a("code",[t._v("FormDate")]),t._v("、"),a("code",[t._v("XMLHttpRequest")]),t._v("...")]),t._v(" "),a("li",[t._v("自定义对象——开发人员自己定义的对象")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://www.w3school.com.cn/js/pro_js_object_types.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school"),a("OutboundLink")],1),t._v("中的分类，分为"),a("strong",[t._v("本地对象(native object)")]),t._v("、"),a("strong",[t._v("内置对象(build-in object)")]),t._v("、**宿主对象(host object)**三种")])]),t._v(" "),a("ul",[a("li",[t._v("本地对象——独立于宿主环境的ECMAScript实现提供的对象，例如"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("Function")]),t._v("...")]),t._v(" "),a("li",[t._v("内置对象——总共两类"),a("code",[t._v("Global")]),t._v("和"),a("code",[t._v("Math")]),t._v("，"),a("code",[t._v("Global")]),t._v("对象包含顶级函数(全局函数)，例如"),a("code",[t._v("parseInt")]),t._v("、"),a("code",[t._v("parseFloat")]),t._v("...和顶级属性(全局属性)，例如"),a("code",[t._v("Infinity")]),t._v("、"),a("code",[t._v("undefined")]),t._v("...")]),t._v(" "),a("li",[t._v("宿主对象——所有非本地对象都是，即由ECMAScript实现的宿主环境提供的对象，所有BOM和DOM对象都是宿主对象")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v("只定义了一种"),a("strong",[t._v("内置对象")]),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v("，因此不是内置对象我把它归类为其他对象")])]),t._v(" "),a("ul",[a("li",[t._v("内置对象——"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("Function")]),t._v("、"),a("code",[t._v("Global")]),t._v("、"),a("code",[t._v("Math")]),t._v("、"),a("code",[t._v("Error")]),t._v("...，等同于第一种的内部对象")]),t._v(" "),a("li",[t._v("其他对象——除内置对象之外的对象")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("高程中分为两类"),a("strong",[t._v("Global对象")]),t._v("和"),a("strong",[t._v("Math对象")]),t._v("，它们都属于单体内置对象")])]),t._v(" "),a("ul",[a("li",[t._v("Global对象——Global对象方法、Global对象属性、window对象")]),t._v(" "),a("li",[t._v("Math——保存数学公式和信息提供的公共位置，分为Math对象属性、Math对象方法")])]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[t._v("第一种分类中的“内部对象”，等同于第三种分类的“内置对象”")]),t._v(" "),a("li",[t._v("第一种分类的“宿主对象”等同于第二种的“宿主对象”")])]),t._v(" "),a("h2",{attrs:{id:"规范上的解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范上的解释"}},[t._v("#")]),t._v(" 规范上的解释")]),t._v(" "),a("p",[t._v("引用"),a("a",{attrs:{href:"http://es5.github.io/#x4.3.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范"),a("OutboundLink")],1),t._v("上的解释")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("native object")]),t._v("\nobject in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment.\n"),a("strong",[t._v("NOTE")]),t._v("  Standard native objects are defined in this specification. Some native objects are built-in; others may be constructed during the course of execution of an ECMAScript program.")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("build-in object")]),t._v("\nobject supplied by an ECMAScript implementation, independent of the host environment, that is present at the start of the execution of an ECMAScript program.\n"),a("strong",[t._v("NOTE")]),t._v(" Standard built-in objects are defined in this specification, and an ECMAScript implementation may specify and define others. Every built-in object is a native object. A built-in constructor is a built-in object that is also a constructor.")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("host object")]),t._v("\nobject supplied by the host environment to complete the execution environment of ECMAScript.\n"),a("strong",[t._v("NOTE")]),t._v(" Any object that is not native is a host object.")])]),t._v(" "),a("p",[t._v("这里很好的印证了W3school里面的分类符合规范说的。")]),t._v(" "),a("h2",{attrs:{id:"我的见解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的见解"}},[t._v("#")]),t._v(" 我的见解")]),t._v(" "),a("p",[t._v("从之前的分类其实看出第一种的"),a("strong",[t._v("内部对象")]),t._v("其实就是第二种的"),a("strong",[t._v("本地对象")]),t._v("，而第二种的"),a("strong",[t._v("内置对象")]),t._v("其实是属于"),a("strong",[t._v("本地对象")]),t._v("的，因此我认为可以把JS对象分成第一种分类方法的三种，其中的"),a("strong",[t._v("内部对象")]),t._v("又可以分为需要通过"),a("code",[t._v("new")]),t._v("创建的"),a("strong",[t._v("本地对象")]),t._v("和不需要手动实例化的"),a("strong",[t._v("内置对象")])]),t._v(" "),a("p",[t._v("也就是")]),t._v(" "),a("ul",[a("li",[t._v("内部对象(本地对象+内置对象)")]),t._v(" "),a("li",[t._v("宿主对象(执行环境提供)")]),t._v(" "),a("li",[t._v("自定义对象(开发人员自定义)")])]),t._v(" "),a("h2",{attrs:{id:"常用的全局函数和属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的全局函数和属性"}},[t._v("#")]),t._v(" 常用的全局函数和属性")]),t._v(" "),a("h3",{attrs:{id:"global对象相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global对象相关"}},[t._v("#")]),t._v(" global对象相关")]),t._v(" "),a("ol",[a("li",[t._v("Number相关")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123.23z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123.23")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("{% note warning %}\n在ES6中这些方法可定义到了Number对象上，我认为前面加上Number更符合语境。因此以后写前面还是加上Number\n{% endnote %}")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("URL相关(常用于与后端对接的时候get方法传参)")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://zjgyb.github.io/CSS-animate1.html #input-radio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不会对本身属于URL的特殊字符进行编码，例如冒号、正斜杠、问号、井号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" encodeURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodeURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://zjgyb.github.io/CSS-animate1.html%20#input-radio")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodeURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://zjgyb.github.io/CSS-animate1.html #input-radio")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对它发现的任何非标准字符进行编码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" encodeCom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodeCom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https%3A%2F%2Fzjgyb.github.io%2FCSS-animate1.html%23input-radio")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodeCom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "https://zjgyb.github.io/CSS-animate1.html #input-radio"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("内置的属性"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Function")]),t._v("...这些就不展开了")])]),t._v(" "),a("h3",{attrs:{id:"math相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math相关"}},[t._v("#")]),t._v(" Math相关")]),t._v(" "),a("h4",{attrs:{id:"math属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math属性"}},[t._v("#")]),t._v(" Math属性")]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.718...")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.141...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"math方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math方法"}},[t._v("#")]),t._v(" Math方法")]),t._v(" "),a("p",[a("strong",[t._v("Min")]),t._v(" & "),a("strong",[t._v("Max")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("Ceil")]),t._v("、"),a("strong",[t._v("Floor")]),t._v("、"),a("strong",[t._v("Round")]),t._v(" & "),a("strong",[t._v("Trunc")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 四舍五入")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去除一个数的小数部分，负数是表现为ceil，正数表现为Floor")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -3")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("Random")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" upper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" choices "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" upper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lower "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" choices "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1-10之间")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("Abs")])]),t._v(" "),a("div",{staticClass:"language-js js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("看来JS对象分类并不简单。😂")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3school.com.cn/js/pro_js_object_types.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school(中文)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://es5.github.io/#x4.3.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES5规范"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.creativebloq.com/features/12-common-javascript-questions-answered",target:"_blank",rel:"noopener noreferrer"}},[t._v("首屏图片"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);