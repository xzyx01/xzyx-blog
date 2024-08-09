---
title: Vue3 常见问题速览🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue3
sticky: 7
---

### **vue2 和 vue3 响应式的区别？**
* vue2: Object.defineProperty 只对对象初始的属性有效，对新增的属性无效
* vue3: 利用 ES6 的 proxy 对数据进行代理，对新增的属性也有效
```js
// 由 Proxy 和 Reflect 配合完成
new Proxy(target, {
    // 参数: 原对象，属性名，代理后的对象
    get(target, key, receiver){
        return Reflect.get(target, key, receiver)
    },
    // 参数：原对象，属性名，设置的值，代理后的对象
    set(target, key, value, receiver){
        Reflect.set(target, key, value, receiver)
    }
})
```

### **vue3 的生命周期**
* 初始化（setup）: onBeforeCreate 和 onCreaate 的结合
* 渲染：onBeforeMount 和 onMounted
* 更新：onBeforeUpdate 和 onUpdated
* 销毁：onBeforeUnmount 和 onUnmounted
* keep-alive: onActivated（组件激活），onDeactivated（组件失活）

### **vue3 如何定义响应式数据？**
* ref
  * 定义基本数据类型，生成 RefImpl 实例
  * 定义引用数据类型，生成 Proxy 实例
  * 在模板中可直接使用，在 script 中需要通过 .value 修改和获取值
* reactive
  * 只能定义引用数据类型，生成 Proxy 实例
  * 在模板和 script 中都可以直接使用，无需像 ref 使用 .value
  * shallowReactive 为浅层响应，只有最外层属性具有响应式

### **vue3 PK vue2 的区别**
* vue3 组件引入后，无需注册，可直接使用
* 具名插槽使用方法不同
  * vue2: slot = "name"
  * vue3: v-slot:name
* 作用域插槽使用方法不同
  * vue2：slot-scope="data" 
  * vue3： #data
* vue2 中 v-for 的优先级比 v-if 高（所以不建议一起使用，因为 v-if 在渲染过程中没发挥作用），vue3 相反，因此 v-for 可以和 v-if 一起使用
