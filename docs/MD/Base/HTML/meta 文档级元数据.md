---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
img: logo.png
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 9
---

[掘金原文](https://juejin.cn/post/7089271039842058253?searchId=20240325092953DDC0218125331A81F146)

* name 属性
>name 和 content 一起使用，name 表示元数据的名称，content 表示元数据的值

name | content
-|-
author |网页作者名字，例如某个组织或者机构
description | 对页面精简的描述
keywords | 与页面相关的关键词，使用逗号分割。某些搜索引擎在遇到这些关键词时，会使用关键词对文档进行分类
viewport | 为视口的初始大小提供指示，目前仅作用于移动设备：<br>1. width 设置视口宽度为设备宽度（device-width），<br>2. initial-scale 设置视口宽度与视口大小的缩放比例
robots | 表示爬虫对此网页的处理行为，content 可为：<br>1. all：索引此页面<br>2. none: 忽略此网页
renderer | 指定双核浏览器的渲染方式，content 可为：<br>1. webkit<br>2. ie-comp（IE 兼容模式）<br>3. ie-stand（IE 标准模式）

* http-equiv 属性
>http-equiv 也是和 name 一起使用的，name 表示元数据的名称，content 表示元数据的值

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```
上面这段代码是用来做 IE 浏览器适配的：
1. IE=edge 告诉浏览器，以当前浏览器支持的最新版本来适配
2. chrome=1 告诉浏览器，如果当前 IE 浏览器安装了 Google Chrome Frame 插件，就以 chrome 内核来渲染页面

* content-type 
>用来声明文档类型和字符集

```html
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
```