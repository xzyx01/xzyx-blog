---
title: Vue3 常见问题速览🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue3
sticky: 7
---

### **vue3 的生命周期**
* 初始化（setup）: onBeforeCreate 和 onCreaate 的结合
>script setup 是 vue3 的语法糖，简化了组合式 api 的写法，并且运行性能更高。具有以下特点：
>* 属性和方法无需返回，直接使用
>* 引入组件的时候，会自动注册
>* 使用 defineProps 接收父组件传递的值
>* 使用 useAttrs 获取属性，useSlots 获取插槽，defineEmits 获取自定义事件
>* 默认不会对外暴露任何属性，需要使用 defineExpose 进行暴露
* 渲染：onBeforeMount 和 onMounted
* 更新：onBeforeUpdate 和 onUpdated
* 销毁：onBeforeUnmount 和 onUnmounted
* keep-alive: onActivated（组件激活），onDeactivated（组件失活）
