---
title: HTML 常见问题速览🔥
date: 2024-2-1
categories:
  - 基础
tags:
  - HTML
sticky: 4
---

### **BOM 和 DOM 的区别？**
BOM：浏览器对象模型，该模型上常使用的方法：
  * window.history.back(): 返回上一页
  * window.history.go(n): 跳转到 n 页
  * window.innerHeight/window.innerWidth: 浏览器可视区域高度/宽度，不包括控制台、菜单栏、工具栏、滚动条

DOM：文档对象模型

### **script 标签 defer 和 async 的区别？**
* 都是用来异步加载脚本的，但加载完成后脚本的执行存在区别
* defer: 解析 html 文档时，会在后台异步加载脚本。脚本加载完不会立即执行，会等到文档解析完成后再执行
* async: 解析 html 文档时，会在后台异步加载脚本。脚本加载完立即执行，此时会阻塞文档解析，直到脚本执行完毕文档才能继续解析。


### **HTML 第一行代码的作用？**
HTML 代码的第一行（`<!DOCTYPE html>`）用于声明文档的类型，并且告诉浏览器使用哪种 HTML 标准来解析页面
