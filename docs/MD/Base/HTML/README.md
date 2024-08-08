---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 10
---

* 浏览器内核
>浏览器内核又称为“渲染引擎”，用来解释网页语法并渲染到网页上。常见的浏览器内核如下：

浏览器|内核
-|-
IE | Trident
Chrome | Blink
Firefox | Gecko
safari | Webkit

* BOM 和 DOM 的区别？

BOM
>浏览器对象模型，该模型上常使用的方法：<br>
&nbsp;&nbsp;1. window.history.back(): 返回上一页<br>
&nbsp;&nbsp;2. window.history.go(n): 跳转到 n 页<br>
&nbsp;&nbsp;3. window.innerHeight/window.innerWidth: 浏览器可视区域高度/宽度，不包括控制台、菜单栏、工具栏、滚动条

DOM
>文档对象模型

* script 标签 defer 和 async 的区别？
>* defer: 异步加载 script。解析 html 文档时，会在后台加载脚本，文档解析过程中不中断，等到文档解析结束后，才会执行脚本
>* async: 异步加载 script。解析 html 文档时，会在后台加载脚本，文档解析过程中不中断，等到脚本加载完成后，文档停止解析，开始执行脚本，脚本执行完毕后，文档继续解析。

* PC 端项目等比缩放至移动端
```html
<!-- 修改 index.html 内容: -->
<meta name="viewport" content="user-scalable=yes">
```

* HTML 第一行代码的作用
>HTML 代码的第一行用于声明文档的类型，并且高速浏览器使用哪种 HTML 标准来解析页面
```html
<!DOCTYPE html>
```