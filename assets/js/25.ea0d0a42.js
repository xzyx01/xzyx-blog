(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{450:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"修改分支名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改分支名称"}},[t._v("#")]),t._v(" "),a("strong",[t._v("修改分支名称")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("old-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("old-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" // 将本地和远程关联\n")])])]),a("h3",{attrs:{id:"合并分支-将-dev-分支合并到-master-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支-将-dev-分支合并到-master-分支"}},[t._v("#")]),t._v(" "),a("strong",[t._v("合并分支（将 dev 分支合并到 master 分支）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rebase")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push push\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("h3",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" "),a("strong",[t._v("删除分支")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".删除本地分支：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".删除远程分支：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"新建分支-从-master-新建-dev-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支-从-master-新建-dev-分支"}},[t._v("#")]),t._v(" "),a("strong",[t._v("新建分支（从 master 新建 dev 分支）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/dev dev\n")])])]),a("h3",{attrs:{id:"git-代码提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-代码提交规范"}},[t._v("#")]),t._v(" "),a("strong",[t._v("git 代码提交规范")])]),t._v(" "),a("ul",[a("li",[t._v("feat: 新功能（feature）")]),t._v(" "),a("li",[t._v("fix: bug 修复")]),t._v(" "),a("li",[t._v("docs: 文档")]),t._v(" "),a("li",[t._v("refactor: 代码重构")]),t._v(" "),a("li",[t._v("revert: 版本回退")]),t._v(" "),a("li",[t._v("perf: 性能优化")]),t._v(" "),a("li",[t._v("test: 测试")]),t._v(" "),a("li",[t._v("build: 打包")])])])}),[],!1,null,null,null);a.default=r.exports}}]);