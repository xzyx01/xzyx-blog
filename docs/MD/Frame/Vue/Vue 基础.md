* vue 是什么？
>vue 项目是一个单页应用，由路由系统、数据系统、组件系统组成，对 SEO 支持较弱。

* vue 路由常见问题

全局前置守卫
```js
router.beforeEach((to, from, next) => {
    // to: 将要进入的路由
    // from: 将要离开的路由
    // next(): 放行函数，不放行路由无法跳转
})
```

全局后置守卫
```js
router.afterEach((to, from) => {
    // to: 将要进入的路由
    // from: 将要离开的路由
})
```

路由传参
>1. query: 可使用 name 或 path 来引入路由。参数会显示在 url 上，刷新后页面参数不会丢失
>2. params: 只能使用 name 引入路由。参数不显示在 url 上，刷新后页面参数丢失

打开一个新页面的几种方式
```js
1. const newPath = this.$router.resolve({path: "", query: {}});
2. window.open(newPath.href, "_blank");
3. <router-link target="_blank" :to={path:"", query: {}}></router-link>
```

* mixin（混入）
>1. mixin 本质上是一个对象，可使用 vue 组件的所有选项式 api。相比于工具函数的封装，可以更好的使用 vue 组件的特性。
>2. mixin 定义的 data、methods、computed 在组件中可直接使用。
>3. 组件引入 mixin 后，生命周期函数会合并，优先执行 mixin。
```js
// 定义混入 mixin.js
export default {
    data(){
        return{

        }
    },
    methods: {},
    mounted(){}
}
// 引入混入
import mixin from "mixin.js"
mixins: [mixin]
```
