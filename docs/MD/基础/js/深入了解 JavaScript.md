---
title: 深入了解 JavaScript🔥
date: 2024-01-13
categories:
  - 基础
tags:
  - JavaScript
---

### **JavaScript 的特性 [原文](https://juejin.cn/post/7325800661232615463)**

### **进程与线程**
进程是指 CPU 在运行指令和保存上下文所需的时间，是程序的一次执行过程。`而线程是进程中更小的单位`，指的是一段指令执行所需的时间。在浏览器中，一个 tab 页可以看作一个进程，而渲染线程、http 请求线程和js引擎线程则是协同工作的线程。

### **JavaScript的单线程特性**
js 是单线程的，这意味着它一次只能执行一个任务。这种设计带来了一些优点，比如节约内存和减少上下文切换的时间。

### **什么是异步任务？**
异步任务分为宏任务和微任务，通过事件循环机制来执行（微任务优先级大于宏任务）：
* 宏任务：script（同步代码也属于宏任务），setTimeout、setInterval、setImmediate、I/O、UI-rendering
* 微任务：promise.then()、MutationObserver、process.nextTick()

### **event-loop（事件循环机制）**
event-loop是 js 异步执行的基础，遵循以下原则:
1. 优先执行同步代码（属于宏任务）
2. 当执行栈为空时（即同步任务执行完），开始执行微任务
3. 当微任务执行完，开始执行宏任务队列的任务
4. 一轮 event-loop 完成后，进行下一轮