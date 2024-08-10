---
title: Vue3 相比 Vue2 优化了什么地方？🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - Vue3
---

[原文](https://juejin.cn/post/7327099448333434915)

### **OptionsApi 和 CompositionApi 的比较**
* 选项式 API 通过定义 data、computed、watch、method 等属性与方法，共同处理页面逻辑。但是当组件变得复杂时，对应的属性列表也会变长，从而导致后续难以阅读和维护。
* 组合式 API 根据逻辑功能来组织，一个功能所定义的所有方法通常会放在一起（高内聚，低耦合）。这样当我们需要修改一个功能的时候，就不需要在文件中跳来跳去。
* 组合式相对选项式的有点:
  1. 逻辑复用体验更佳。在选项式 api 中，通常使用 mixin 来进行逻辑复用，但当混入多个 mixin 会存在许多问题（命名冲突、数据来源不清晰）。而组合式 api 可以通过编写多个函数就能够解决。
  2. 组合式 api 中见不到 this 的使用，减少了 this 指向不明的情况。
  3. 组合式 api 几乎全都是函数，会有更好的类型推断。

### **Vue3 中为什么采用 Proxy 代替 defineProperty?**
* defineProperty：劫持的是对象的属性，然后进行深度遍历，给每个属性添加 getter 和 setter，从而实现响应式。但是会存在以下问题：
  1. 检测不到对象属性的添加和删除
  2. 数组 API 方法检测不到（因此通过重写数组原型链上的方法来实现响应式）
  3. 需要对每个属性进行深度遍历，如果是嵌套对象，需要深层次监听，造成性能问题
* Proxy：监听整个对象，对象的所有操作都会进入监听操作。有以下优点：
  1. 可以直接劫持整个对象，返回一个新对象，我们通过操作这个新对象来实现响应式。
  2. 可以直接监听数组的变化
  3. 有13种拦截方法，不限于 apply、ownKeys、deleteProperty、has 等，这些都是 Object.definePeoperty 不具备的
  

### **Vue3 响应式原理**  
* Vue3 通过 ES6 的 Proxy 和 Refelct 相互配合实现数据响应式。
* Proxy 是深度监听，可以监听对象和数组内的任意元素，从而实现视图更新。
* 响应式大致分为三个阶段：
  1. 初始化阶段。通过组件初始化方法形成对应的 proxy 对象和一个负责渲染的 effect。
  2. get 依赖收集阶段。通过解析 template，替换真实的 data 属性，来触发 get，然后通过 stack 方法，通过 proxy 对象和 Key 形成对应的 deps，将负责渲染的 effect 存入 deps（这个过程还有其他的 effect，如 watchEffect）
  3. set 派发更新阶段。当我们 this[key] = value 改变属性格时，首先通过 trigger 方法，通过 proxy 对象和 key 找到对应的 deps，然后给 deps 分类成 computedRunners 和 effect，然后依次执行，如果需要调度的，直接放入调度。
  >问题1: Proxy 只会代理对象的第一层，那么 vue3 又是怎么样处理这个问题的？
  ><br>通过判断当前 Reflect.get 返回值是否为对象，如果是则再通过 reactive 做代理，这样就实现了深度观测

  >问题2：检测数组的时可能多次触发 get/set，那么如何防止触发多次呢？
  ><br>通过判断 key 是否为当前被代理对象 target 自身属性，也可以通过判断旧值与新值是否相等，只有满足上面两个条件之一时，才有可能执行 trigger
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
### **v-if 和 v-for 的优先级**
* vue2 中，v-for 的优先级高于 v-if，虽然可以一起使用，但是不推荐，因为 v-if 也会获取到 v-for 的元素，造成不必要要的渲染性能消耗
* vue3 中，v-if 的优先级高于 v-for，不能一起使用（会直接报错）