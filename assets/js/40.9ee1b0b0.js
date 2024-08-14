(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{465:function(t,s,a){"use strict";a.r(s);var r=a(2),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://juejin.cn/post/7282692088016437307",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"一-模板开发的痛点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-模板开发的痛点"}},[t._v("#")]),t._v(" "),s("strong",[t._v("一. 模板开发的痛点")])]),t._v(" "),s("p",[t._v("通常我们都是通过模板来定义我们的 ui，这也是官方推荐的编写方式，模板开发具有诸多优点：")]),t._v(" "),s("ul",[s("li",[t._v("简单易上手，接近原生 html 的编写方式")]),t._v(" "),s("li",[t._v("内置了自定义指令，事件修饰符等方便的功能")]),t._v(" "),s("li",[t._v("模板在编译期间会做一些优化如静态提升，所以性能更佳")]),t._v(" "),s("li",[t._v("内置 css scoped 方案，简单有效，体验优于 csc module 和 css in js 方案")])]),t._v(" "),s("p",[t._v("但是纯模板开发也有一些缺点：")]),t._v(" "),s("ul",[s("li",[t._v("不够灵活，模板语法由于不是标准的 js 语法，在实现一些复杂场景的时候，便会显得束手束脚，写的代码会变得臃肿")]),t._v(" "),s("li",[t._v("难以复用代码片段，基于 vue 文件的单文件方案导致无法在同一个文件中定义多个组件，很多时候我们不得不新建一个文件来创建组件，使得我们组件拆分不那么灵活")])]),t._v(" "),s("h3",{attrs:{id:"二-jsx-开发的痛点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-jsx-开发的痛点"}},[t._v("#")]),t._v(" "),s("strong",[t._v("二. jsx 开发的痛点")])]),t._v(" "),s("p",[t._v("模板语法不够灵活，但这却是 jsx 的长处。借助 @vitejs/plugin-vue-jsx 插件，我们可以很方便的在 vue3 中使用 jsx 来开发。它有着很多优点：")]),t._v(" "),s("ul",[s("li",[t._v("自由，由于 jsx 语法本质上就是 js，所以可以随心所欲的写")]),t._v(" "),s("li",[t._v("便于组件拆分，可以在同一个文件中组织多个组件")])]),t._v(" "),s("p",[t._v("jsx 语法的缺点：")]),t._v(" "),s("ul",[s("li",[t._v("不能使用自定义指令，事件修饰符等功能")]),t._v(" "),s("li",[t._v("由于 jsx 直接就是运行时，无法在编译期间做一些优化，导致性能比不过模板")]),t._v(" "),s("li",[t._v("没法使用 definePros、defineEmits 等只能用在 setup 中的语法")]),t._v(" "),s("li",[t._v("没法使用 css scoped")])]),t._v(" "),s("h3",{attrs:{id:"三-混合编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-混合编程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("三. 混合编程")])]),t._v(" "),s("p",[t._v("既然模板开发和 jsx 都有各自的优缺点，我们可以将其综合一下。")]),t._v(" "),s("ul",[s("li",[t._v("如何开启 setup script + jsx 的混合编程模式？")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),t._v(" setup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Comp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Comp msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Comp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);