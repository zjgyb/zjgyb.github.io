(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{780:function(e,v,t){"use strict";t.r(v);var _=t(6),o=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("来自掘金的"),t("a",{attrs:{href:"https://juejin.cn/post/6919373017218809864",target:"_blank",rel:"noopener noreferrer"}},[e._v("高频前端面试题汇总"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("Vue基本原理")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("关键字：Vue实例、遍历"),t("code",[e._v("data")]),e._v("对象、"),t("code",[e._v("Object.defineProperty")]),e._v("、"),t("code",[e._v("getter/setter")]),e._v("、"),t("code",[e._v("Watcher")]),e._v("实例、关联组件")]),e._v(" "),t("p",[e._v("在创建Vue实例对象时，Vue内部会遍历"),t("code",[e._v("data")]),e._v("对象，对象内的每个属性通过"),t("code",[e._v("Object.defineProperty")]),e._v("转成相应的"),t("code",[e._v("getter/setter")]),e._v("，同时创建一个"),t("code",[e._v("Watcher")]),e._v("实例来收集"),t("code",[e._v("getter/setter")]),e._v("，当对象内的数据发生变化后即setter被触发，那么它会通知watcher实例，从而使关联的组件从新渲染。")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("双向绑定的原理")])]),e._v(" "),t("p",[e._v("关键字：数据劫持、发布-订阅模式、递归遍历、"),t("code",[e._v("compile")]),e._v("解析绑定、watcher、update")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("数据劫持过程：通过对对象的递归遍历，设置"),t("code",[e._v("getter/setter")]),e._v("属性，监听数据变化")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("compile")]),e._v("解析模板，添加数据更新的绑定函数到"),t("code",[e._v("Watcher")]),e._v("中")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("Watcher")]),e._v("是"),t("code",[e._v("observe")]),e._v("和"),t("code",[e._v("compile")]),e._v("之间的桥梁，调用自身的"),t("code",[e._v("update")]),e._v("，并触发compile中的绑定函数")])]),e._v(" "),t("li",[t("p",[e._v("当数据变化时，通知"),t("code",[e._v("Watcher")]),e._v("，更新视图，当视图交互(input)变更时，触发数据更新函数，然后更新属性，更新视图，这就是双向绑定的原理")])]),e._v(" "),t("li",[t("p",[e._v("Object.defineProperty缺点")])])]),e._v(" "),t("p",[e._v("关键字：新增属性、数组下标更改")]),e._v(" "),t("p",[e._v("Vue中对push、pop、shift、unshift、splice、sort、reverse进行了重写")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("新增的对象属性如果不重新设置，那么新增的属性将不会被监听到")])]),e._v(" "),t("li",[t("p",[e._v("重写了数组的方法，对于数组下标更新数据或者通过length的方式更新数据并不能受到监听")])]),e._v(" "),t("li",[t("p",[e._v("MVVM、MVC、MVP的区别")])]),e._v(" "),t("li",[t("p",[e._v("MVC"),t("br"),e._v("\n关键字：Model、View、Controller"),t("br"),e._v(" "),t("code",[e._v("View->Controller->Model->View")])])]),e._v(" "),t("li",[t("p",[e._v("MVVM"),t("br"),e._v("\n关键字：Model、View、ViewModel")])])]),e._v(" "),t("p",[t("code",[e._v("Model")]),e._v("<->"),t("code",[e._v("ViewModel")]),e._v("->"),t("code",[e._v("Model")])]),e._v(" "),t("p",[e._v("实现Model和View数据的自动同步")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li")])])}),[],!1,null,null,null);v.default=o.exports}}]);