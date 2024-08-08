<h1 style="text-align:center;">React 基础</h1><hr>


<h1 style="text-align:center;">React 开发技巧</h1><hr>

## 类组件 this 问题
* 类组件中，自定义函数必须使用箭头函数，才可以直接使用 this。

## PureComponent 比 Component 性能更佳
* PureComponent 会通过 props 和 state 的 `浅对比(只对比最外层属性)` 来判断 shouldComponentUpdate()

## props 类型检查
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