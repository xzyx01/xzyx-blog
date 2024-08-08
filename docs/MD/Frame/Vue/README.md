* Vue 和 React 异同
>1. 内部都是使用 vdom，都是组件化开发，同时也都是单项数据流（只支持父传子）
>2. react 使用 jsx 语法，vue 使用 template 模板语法
>3. react 不支持数据响应式，需要手动 setState；vue 支持数据响应式

* 如何创建一个项目？

使用 vite 创建 vue 项目
```bash
npm create vite
```
使用 vue-cli 创建 vue 项目
```bash
vue create [name]
```
使用 creat-react-app 创建 react 项目
```bash
npm i -g create-react-app
create-react-app [name]
```
使用 create-nuxt-app 创建 nuxt 项目
```bash
npm i -g create-nuxt-app
create-nuxt-app [name]
```

* 如何判断一个 vue 项目的系统环境
```js
if(process.env.NODE_ENV == "development"){
    // 开发环境
}else if(process.env.NODE_ENV === "product"){
    // 生产环境
}
```