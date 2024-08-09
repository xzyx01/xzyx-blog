---
title: React 常见问题速览🔥
date: 2024-2-1
categories:
  - 框架
tags:
  - React
sticky: 8
---

### **类组件中如何自定义函数**
*类组件中，自定义函数必须使用箭头函数（因为箭头函数没有 this，这样就可以获取到类组件的 this，从而可以进行其他操作）。

### **PureComponent 性能优于 Component 的原因**
PureComponent 会通过 props 和 state 的 `浅对比(只对比最外层属性)` 来判断 shouldComponentUpdate()（是否进行更新），因此性能更佳

### **自定义组件如何进行类型检查？**
```js
// 1. 安装
npm i prop-types
// 2. 引入
import PropTypes from "prop-types"
// 3. 使用
Modal.propTypes = {
    name: PropTypes.string,
    list: PropTypes.object,
    getList: PropTypes.func
}
```