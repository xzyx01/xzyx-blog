---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 3
---

[掘金原文](https://juejin.cn/post/7325800661232615463)

__进程与线程__
<br>进程是指CPU在运行指令和保存上下文所需的时间，是程序的一次执行过程。而线程是进程中更小的单位，指的是一段指令执行所需的时间。在浏览器中，一个tab页可以看作一个进程，而渲染线程、http 请求线程和js引擎线程则是协同工作的线程。

__JavaScript的单线程特性__
<br>js是单线程的，这意味着它一次只能执行一个任务。这种设计带来了一些优点，比如节约内存和减少上下文切换的时间。

__异步任务__
<br>异步任务分为宏任务和微任务，通过事件循环机制来执行（微任务优先级大于宏任务）：
* 宏任务：script（同步代码也属于宏任务），setTimeout、setInterval、setImmediate、I/O、UI-rendering
* 微任务：promise.then()、MutationObserver、process.nextTick()

__event-loop__
<br>event-loop是js异步执行的基础，遵循以下原则:
1. 执行同步代码，属于宏任务
2. 当执行栈为空时，查询是否有异步任务需要执行
3. 执行微任务队列中的任务
4. 如果需要，渲染页面
5. 执行宏任务队列的任务，开始下一轮 event-loop
