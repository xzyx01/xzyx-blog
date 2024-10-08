---
title: 简单了解一下 webpack 吧！🔥
date: 2024-2-1
categories:
  - 工程
tags:
  - Webpack
---


[原文](https://juejin.cn/post/7323135762797953035?searchId=202403251514009DFEC4B0949BFA1B38F1)

### **webpack 是 node 写的**
webpack 由于是 node 写的，所有可以在里面使用 node 的内置模块，其实 vite 也是 node 写的。

### **loader 是啥？**
webpack 是有短板的，它只能打包 js 代码，loader 可以让 webpack 理解除了 js 以外的文件。

### **plugin 是啥？**
plugin 的能力比 loader 还强，它不仅可以识别除了 js 以外的语言，还可以在这个过程中做其他的事情（loader 能干的事情 plugin 也能干）。

### **讲一讲 babel 是什么？**
* babel 主要用来转换代码，保证代码的兼容性（将高级的语法转换成低级的语法，保证版本低的浏览器也支持）
* babel 内部主要由以下四个步骤实现:
  1. 使用 babyIon 将原始代码转换成 AST（抽象语法树）
  2. 使用 babel-traverse 将上一步获取的 AST 进行优化，获取优化后的 AST
  3. 使用 babel-generator 将优化后的 AST 转换成代码
  4. 使用 babel-core 将转换成的代码封装成一个 api（供外部调用）