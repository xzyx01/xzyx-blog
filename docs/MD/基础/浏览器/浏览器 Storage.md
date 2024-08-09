---
title: 浏览器的 Storage🔥
date: 2024-2-12
categories:
  - 基础
tags:
  - 浏览器
  - 缓存
---

### **localStroage PK sessionStroage**

区别 | 解释
-|-
存储方式不同 | localStorage 持久化存储，sessionStorage 在页面关闭时数据就会被清除
共享方式不同 | localStorage 可以在同一站点共享；sessionStorage 不能在多个串口或标签页之间共享（但是通过 window.open 或者链接打开新页面时，新页面会复制当前页的 sessionStorage）

### **localStorage 是同步还是异步的 [原文](https://juejin.cn/post/7359405716090011659)**
* localStorage 是 web storage api 的一部分，它提供了一种存储键值对的机制。localStorage 的数据是持久存储在用户硬盘上的，而不是内存。这意味着即使用户关闭浏览器或者电脑，localStorage 中的数据也不会丢失，除非主动清除浏览器缓存或者使用代码删除。
* 当你通过 js 访问 localStorage 时，浏览器会从硬盘中读取数据或者向硬盘写入数据（虽然硬盘是 IO设备，IO 操作是异步的，但是 localStorage 却是同步的，因此在 localStorage 操作时，会阻塞 UI 更新和其他 js 的执行）。注意，在读写操作期间，数据可能会被暂时存放在内存中，以提高处理速度


### **强缓存和协商缓存**
强缓存具有以下特点：
1. 不会向服务器发送请求，直接从本地缓存获取数据
2. 请求资源的状态码为：200 ok(from memory cache)
3. 优先级：cache-control > expires

协商缓存具有以下特点：
1. 会向服务器发送请求，服务器会根据请求头的标志判断是否命中协商缓存
2. 如果命中缓存，返回 304 状态码，通知浏览器从缓存中读取资源
3. 优先级：Last-Modified 与 ETag 是可以一起使用的，服务器会优先验证 ETag，一致的情况下才会继续比较 Last-Modified，最后才决定返回 304
