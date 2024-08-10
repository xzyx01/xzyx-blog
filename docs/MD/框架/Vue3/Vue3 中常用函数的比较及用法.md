---
title: Vue3 中常用函数的比较及用法🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue3
---


### **watch 和 watchEffect 的区别？**
* watch 既要指明数据源，又要指明监听的回调
* watch 可以自动监听数据源作为依赖，不用指明监听哪个数据，监听回调用到哪个数据就会自动监听哪个数据
* watch 可以访问改变前后的值，watchEffect 只能获取改变后的值
* watch 运行的时候不会立即执行，值改变后才会执行（可通过 immeriate 改变）；而 watchEffect 运行后就立即执行

### **ref 与 reactive 的区别？**
* ref 与 reactive 它们主要用于响应式数据的创建
* ref 函数可以接收原始数据类型和引用数据类型
* 使用 ref 声明的数据，在 js 中使用的时候，需要添加 .value 后缀
* reactive 函数只能接收引用数据类型
* ref 底层还是使用 reactive 来做，ref 是在 reactve 上进行了封装，增强了其能力，使其支持了对原始数据的支持
* reactive 能做的 ref 能做，reactive 不能做的 ref 也能做