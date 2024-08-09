---
title: 一起探究 Vue2 的内部实现原理吧🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue2
---

### **nextTick 原理**
* vue 中采用异步更新策略，数据变化并不会立即触发页面更新，而是将更新任务放入异步任务队列等待执行。
* 基于上面的情况，但是有时我们修改了数据后，想要马上获取修改后的 dom，这个时候获取的 dom 可能不是最新的。这个时候我们就可以使用 nextTick 将回调插入到异步任务队列里面（更新任务之后），从而保证获取的 dom 是最新的。
* 其内部实现主要是将传入的回调包装成异步任务。优先考虑微任务 Promise.then()，其次优先级从高到低依次是 MutationObserver、setImmediate、setTimeout

### **vuex 的原理**
* vuex 是 vue 的一套状态管理机制，方便全局数据的共享。它是一个插件，内部采用 vue 的 mixin 来实现。
* vuex 的内部实现：
  1. vuex 内部主要由 Store 类和 install 方法组成
  2. 执行 Vue.use() 实际调用的就是 install 方法。install 内部使用 vue 的 mixin，触发 beforeCreate 钩子，将 Store 类挂载到实例的 $option 上。以后组件查找一个数据的时候，会首先在自身的 option 上查找，如果没有找到，会沿着父组件链向上查找，直到根实例（根实例一定存在，因为初始化根实例时手动挂载了）。
  3. Store 类提供 state、getter、mutation、action。其中 mutation 用于同步操作，使用 commit 触发；action 用于异步操作，使用 dispatch 触发。这样做的目的是避免双方同时进行相同操作，无法定位谁先执行完，不利于问题的定位。

### **vue 的数据响应式原理**
1. 使用 vue 框架，首先会调用 vue 的构造函数来创建一个 vue 的实例。同时会给构造函数传入一个 options（也就是我们在 vue 组件导出的对象（export default options））
2. 然后会执行 `initMixin`，将 _init 挂载到实例上，用来处理传入的 options（其内部会执行 initState 方法，响应式就是在这里完成的），initState 主要进行以下工作：
   * initProp：对传入组件的 prop 进行处理
   * initMethod：对传入组件的 method 进行处理
   * initCompute：对传入组件的 computed 进行处理
   * initWatch：对传入组件的 watch 进行处理
   * initData，对传入组件的 data 进行处理（数据响应式就是在此处完成），主要进行两步操作:
      * 对数据进行代理，简化数据的访问方式
      * 进行数据的响应式处理，其中对象和数组分开处理
        1. 数组的响应式。数组通常包含多项，出于性能考虑，数组响应式通过重写数组原型上的方法实现（7个）。主要重写的有 pop
、push、shift、unshift、reverse、sort、splice
        2. 对象的响应式。通过 observe(data)，返回一个 Observer 实例，Observer 会调用内部的 walk 方法遍历对象的所有属性进行 defineReactive 处理，本质上是通过 Object.defineProperty 来进行 set 和 get 劫持:
            *  首先会为对象的每一个属性初始化一个 dep 实例，用来收集相关的 watcher
            * 在进行 get 劫持时，会进行依赖收集，也就是调用 dep.depend() 方法，将相关的 watcher 添加进 dep 内部的数组内
            * 在进行 set 劫持时，执行 dep.notify() 派发更新，通知属性对应 dep 中的 watcher 去更新视图

### **vue 中的三种 watcher**
vue 中存在三种 watcher，分别对应三种不同的应用场景:
* 定义 data 时生成的 watcher，负责更新视图
* 定义 computed 时生成的 watcher
* 用户自定义的 watch 生成的 watcher

### **响应式核心参与者 Observer（观察者）、Watcher（订阅者）、Dep（沟通者）**
* Observer 负责递归监听对象属性（利用 Object.defineProperty 递归拦截传入 data 对象属性的 set 和 get），在属性值发生改变的时候，触发相应的 watcher
* watcher 执行回调，完成页面的更新（`watcher 是什么时候实例化的呢？在 compile 解析 el 阶段（也就是初次渲染的时候），解析到代码中包含 {{data}}、v-model、v-bind、computed、watch 这类的语法，都会生成一个 watcher 实例，此时 dep.target 会指向这个新生成的 watcher，从而把 watcher 添加到对应属性的 dep 中（dep.addSub(Dep.target)）。但是需要注意，target 是 dep 的静态属性，它是一个全局的 watcher，同一时间只会存在一个，任何地方都是可以访问到的。每一个 watcher 首次执行的时候就会将自己赋值给 Dep.target，执行完毕就会置空让其他 watcher 使用`。）
* dep：对象的每个属性都会有一个 dep，内部会维护一个数组，用来存放该属性相关的 watcher，它是在 observer 时实例化的。


### **vue 的模板编译原理**
`模板编译的最终目的是生成 render 函数`。使用 vue 时，首先会调用 vue 的构造函数，然后调用 initMixin。在 initMixin 中会将 $mount 挂载到实例上。$mount 方法主要就是完成模板编译的，主要通过 compileToFunction(template) 将模板转换成 render 函数，主要通过两个步骤完成：
  1. 通过 parse 函数将模板转换成 AST
  2. 将 AST 通过 generate 生成 render 函数

### **vue 是如何将元素渲染到页面上的？**
1. 使用 vue 会调用 vue 的构造函数，并执行 initMixin 函数（其中会进行模板的编译和元素的渲染）。
2. 执行 initMixin，会将 $mount 挂载到实例的原型上。$mounted 会进行组件的挂载，执行 mountComponent(el) 方法。mountComponent 会执行 vm._update(vm._render) 来更新视图
3. lifecyleMixin 主要和组件生命周期相关，会将 _update 挂载到实例的原型上（供 mountComponent 调用）。而 _update 主要是用来通过 vdom 创建真实的 dom，这个时候存在两种情况：
   * 初次渲染，path 里面只有 oldVnode，它是一个真实的 dom，此时会直接替换掉
   * 后续更新，通过传入 path 的新老节点，依靠 diff 来确定最终需要创建的真实 dom
4. renderMixin，将 _render 函数挂载到实例的原型上（供 mountComponent 调用）。_render 函数调用模板编译产生的 render 函数来生成 vnode，其中不同的元素会通过不同的方法来生成。

### **vue 是如何删除一个节点的？**
* 删除 vue 组件节点，会进行以下操作：
  1. 触发组件的 beforeDestory 钩子
  2. 删除所有的 vdom，并进行重新渲染
  3. 移除掉所有相关的 watcher
  4. 递归调用销毁，目的是为了将其子组件销毁掉
  5. 触发组件的 destroy 钩子
  6. 移除事件监听，主要是通过 $off 将事件中心置空
* 删除普通元素节点，会进行以下操作
  1. 触发 patch，此过程会执行 remove 和 destroy 钩子，同时会执行对应平台的删除操作
  2. 如果节点绑定了指令，会使用 unbind 对指令进行解绑