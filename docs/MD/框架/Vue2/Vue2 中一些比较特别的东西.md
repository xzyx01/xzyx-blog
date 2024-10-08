---
title: Vue2 中一些比较特别的东西🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue2
---

### **mixin（混入）**
* mixin 本质上是一个对象，可使用 vue 组件的所有选项式 api。相比于工具函数的封装，可以更好的利用 vue 组件的特性。
* mixin 定义的 data、methods、computed 在组件中可直接使用。
* 组件引入 mixin 后，生命周期函数会合并，且优先执行。
```js
// 定义
export default {
    data(){
        return{

        }
    },
    methods: {},
    mounted(){}
}
// 使用
import mixin from "mixin.js"
mixins: [mixin]
```

### **深入了解 keep-alive 组件**
* keep-alive 的使用场景:
<br>比如说一个带搜索框的列表页，搜索完后进入其中某一项的详情页，再返回的时候，搜索条件就会丢失。这个时候如果我们想保留搜索条件，就可以使用 keep-alive

* keep-alive 是什么？
<br>keep-alive 是 vue 的一个全局组件。它不会被渲染出来，也不会出现在父组件的组件链中。当它包裹动态组件的时候，会缓存不活动的组件，而不是销毁它们。

* keep-alive 的用法，keep-alive 接收三个参数:
  1. include: 缓存的活动组件名称
  2. exclude: 不缓存的活动组件名称
  3. max: 缓存活动组件的最大数量

* keep-alive 内部执行过程:
  1. 执行 created 钩子。会初始化一个 cache 对象，用来存储 vdom；初始化一个 key 数组，用来存储动态组件的标识。
  2. 执行 mounted 钩子。会实时监听 include 和 exclude，并执行相应的操作，主要是执行 render 函数：
     * 初次渲染时，cache 对象里面没有内容，直接渲染，并将渲染的动态组件存储进 cache 里
     * 后续渲染时，会判断是否命中缓存，如果命中，会拿到存储的 vdom 直接进行渲染
  3. 执行 destroy 钩子。会清除掉与缓存相关的内容。

### **深入了解插槽（slot 和 template）**
* 插槽是 vue 的一套内容分发机制，用来向组件注入内容。slot 是内容分发的出口（定义在子组件中），template 是内容分发的入口（定义在父组件中）
* slot 分为三种：
  1. 默认插槽
  2. 具名插槽，出口以 name 标识，入口以 v-slot:name 标识
  3. 作用域插槽（用来向父组件中插入子组件的内容）。出口（slot）以 :value 来分发，入口（template）以 v-slot:name="value" 来引用

### **eventBus 是什么？**
eventBus 本质上是一个 vue 实例，利用实例的 $emit 和 $on 进行非父子组件之间的通信