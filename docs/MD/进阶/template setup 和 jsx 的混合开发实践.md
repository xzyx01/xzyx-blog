---
title: template setup 和 jsx 的混合开发实践🔥
date: 2024-8-10
categories:
  - 进阶
tags:
  - Vue3
---

[原文](https://juejin.cn/post/7282692088016437307)

### **一. 模板开发的痛点**
通常我们都是通过模板来定义我们的 ui，这也是官方推荐的编写方式，模板开发具有诸多优点：
* 简单易上手，接近原生 html 的编写方式
* 内置了自定义指令，事件修饰符等方便的功能
* 模板在编译期间会做一些优化如静态提升，所以性能更佳
* 内置 css scoped 方案，简单有效，体验优于 csc module 和 css in js 方案

但是纯模板开发也有一些缺点：
* 不够灵活，模板语法由于不是标准的 js 语法，在实现一些复杂场景的时候，便会显得束手束脚，写的代码会变得臃肿
* 难以复用代码片段，基于 vue 文件的单文件方案导致无法在同一个文件中定义多个组件，很多时候我们不得不新建一个文件来创建组件，使得我们组件拆分不那么灵活

### **二. jsx 开发的痛点**
模板语法不够灵活，但这却是 jsx 的长处。借助 @vitejs/plugin-vue-jsx 插件，我们可以很方便的在 vue3 中使用 jsx 来开发。它有着很多优点：
* 自由，由于 jsx 语法本质上就是 js，所以可以随心所欲的写
* 便于组件拆分，可以在同一个文件中组织多个组件

jsx 语法的缺点：
* 不能使用自定义指令，事件修饰符等功能
* 由于 jsx 直接就是运行时，无法在编译期间做一些优化，导致性能比不过模板
* 没法使用 definePros、defineEmits 等只能用在 setup 中的语法
* 没法使用 css scoped

### **三. 混合编程**
既然模板开发和 jsx 都有各自的优缺点，我们可以将其综合一下。
* 如何开启 setup script + jsx 的混合编程模式？
```js
<script lang="jsx" setup>
import { defineComponent } from "vue"

const Comp = defineComponent({
    props: {
        msg: String
    },
    setup(props){
        return () => (<span>{props.msg}</span>)
    }
})
</script>

<template>
    <Comp msg="comp"></Comp>
</template>
```