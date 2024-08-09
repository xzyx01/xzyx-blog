---
title: Vue2 常见问题速览🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue2
sticky: 6
---

### **Vue PK React**
* 内部都是使用 vdom（虚拟dom），都是组件化开发，同时也都是单项数据流（只支持父传子）
* react 使用 jsx 语法，vue 使用 template 模板语法
* react 不支持数据响应式（需要手动 setState）；vue 支持数据响应式

### **如何创建一个 Vue2 项目？**
使用 vite 创建 vue2 项目
```bash
npm create vite
```
使用 vue-cli 创建 vue2 项目
```bash
vue create [name]
```

### **如何判断一个 vue 项目当前的系统环境？**
```js
if(process.env.NODE_ENV == "development"){
    // 开发环境
}else if(process.env.NODE_ENV === "product"){
    // 生产环境
}
```

### **简单概括 vue 项目的特点？**
vue 项目是一个单页应用，由路由系统、数据系统、组件系统组成，对 SEO 支持较弱。

### **全局前置守卫**
```js
router.beforeEach((to, from, next) => {
    // to: 将要进入的路由
    // from: 将要离开的路由
    // next(): 放行函数，不放行路由无法跳转
})
```

### **全局后置守卫**
```js
router.afterEach((to, from) => {
    // to: 将要进入的路由
    // from: 将要离开的路由
})
```

### **query 和 params 路由传参的区别**
* query: 可使用 name 或 path 来引入路由。参数会显示在 url 上，刷新后页面参数不会丢失
* params: 只能使用 name 引入路由。参数不显示在 url 上，刷新后页面参数丢失


### **vue 中如何打开一个新页面？**
```js
1. const newPath = this.$router.resolve({path: "", query: {}});
2. window.open(newPath.href, "_blank");
3. <router-link target="_blank" :to={path:"", query: {}}></router-link>
```
