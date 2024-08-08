---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 5
---

1. keep-alive 的原理<br>
>1. keep-alive 的使用场景：<br>
>比如说一个带搜索框的列表页，搜索完后进入其中某一项的详情页，再返回的时候，搜索条件就会丢失。这个时候如果我们想保留搜索条件，就可以使用 keep-alive
>2. keep-alive 的实质:<br>
keep-alive 是 vue 的一个全局组件。它不会被渲染出来，也不会出现在父组件的组件链中。当它包裹动态组件的时候，会缓存不活动的组件，而不是销毁它们。
>3. keep-alive 的用法，keep-alive 接收三个参数:<br>
>&nbsp;&nbsp;1. include: include 内的组件会被缓存<br>
>&nbsp;&nbsp;2. exclude: exclude 内的组件不会被缓存<br>
>&nbsp;&nbsp;3. max: 表示缓存组件的最大数量<br>
>4. keep-alive 的原理:
>keep-alive 组件会执行以下钩子函数：<br>
>&nbsp;&nbsp;1. 执行 created 钩子。会初始化一个 cache 对象，用来存储 vdom；初始化一个 key 数组，用来存储动态组件的标识。<br>
>&nbsp;&nbsp;2. 执行 mounted 钩子。会实时监听 include 和 exclude，并执行相应的操作，主要是执行 render 函数：<br>
>&nbsp;&nbsp;&nbsp;&nbsp;1. 初次渲染时，cache 对象里面没有内容，直接渲染，并将渲染的动态组件存储进 cache 里<br>
>&nbsp;&nbsp;&nbsp;&nbsp;2. 后续渲染时，会判断是否命中缓存，如果命中，会拿到存储的 vdom 直接进行渲染
>&nbsp;&nbsp;3. 执行 destroy 钩子。会清除掉与缓存相关的内容。

2. vue slot 的原理
>1. slot 是 vue 的一套内容分发机制，用来向组件注入内容，slot 是内容分发的出口，template 是内容分发的入口
>2. slot 分为三种：
>&nbsp;&nbsp;1. 默认插槽<br>
>&nbsp;&nbsp;2. 具名插槽，出口以 name 标识，入口以 v-slot:name 标识<br>
>&nbsp;&nbsp;3. 作用域插槽，用来向父组件中插入子组件的内容。出口（slot）以 :value 来分发，入口（template）以 v-slot:name="value" 来引用

3. eventBus 的原理
>eventBus 本质上是一个 vue 实例，利用实例的 $emit 和 $on 进行非父子组件之间的通信