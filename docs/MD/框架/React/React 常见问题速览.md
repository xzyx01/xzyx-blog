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
[原文](https://juejin.cn/post/7289234975349358627)
### **你知道哪些 react hooks？**

hooks | 解释
-|-
useState | 用于管理功能组件中的状态
useEffect | 用于在功能组件中执行副作用，例如获取数据或订阅事件
useContext | 用于访问功能组件内的 React 上下文的值
useRef | 用于创建对跨渲染持续存在的元素或值的可变引用
useCallBack | 用于记忆函数，以防止不必要的重新渲染
useMemo | 用于记忆值，通过缓存昂贵的计算来提高性能
useReducer | 用于通过 reducer 函数管理状态，类似于 Redux 的工作原理
useLayoutEffect | 与 useEffect 类似，但效果在所有 dom 突变后同步运行

### **react 中的虚拟 dom 是什么？**
虚拟 dom 是 react 中的一个概念，其中创建实际 dom 的轻量级虚拟表示并将其存储在内存中。它是一种优化 web 应用程序性能的编程技术。当 react 组件的数据或状态发生更改时，虚拟 dom 会被更新，而不是直接操作真实的 dom。然后，虚拟 dom 会计算组件的先前状态和更新状态之间的差异。一旦识别出差异，react 就会高效的仅更新必要的部分。这种方法最大限度的减少了 dom 操作的数量，提高应用程序的整体性能。通过使用虚拟 dom，react 提供了一种创建动态和交互式用户界面的方法，同时确保最佳效率和渲染速度。

### **react 如何渲染元素数组?**
```jsx
const list = ["1", "2", "3"];

function App(){
    return (
      <div>
        {list.map(item => <span>{item}</span>)}
      </div>
    );
}
```

### **条件渲染**
```jsx
<div>{isShow && <span>show</span>}</div>
<div>{isShow ? <span>show</span> : null}</div>

```

### **useMemo 的简单使用**
用于缓存和记忆计算结果，仅在依赖项发生变化才会重新计算结果（类似 computed）。对于第一个函数参数，接受一个执行计算的回调；对于第二个数组参数，接受一个依赖关系数组。
```jsx
const memoValue = useMemo(() => calc(a, b), [a, b]);
```

### **useCallBack 简单使用**
返回回调的记忆版本，只有当其中一个依赖项发生变化时，回调才会发生。这在将回调传递给依赖链接平等性的优化子组件时非常有用，可避免不必要的呈现。
```jsx
const callBackValue = useCallback(() => calc(a, b), [a, b]);
```

### **受控组件和非受控组件的区别？**
区别在于如何管理和更新其状态。受控组件的状态是由 react 控制的，非受控组件的状态由自己决定
```jsx
const [value, setValue] = useState("");
<button onClick={() => console.log(value)}></button>; // 受控组件

const inputRef = useRef(null);
<input type="text" name="name" ref={inputRef}></input>
<button onClick={() => console.log(inputRef.current.value)}></button> // 非受控组件
```

### **函数式组件和类组件的区别？**
主要区别在于定义方式和使用语法的不同：
* 类组件继承 React.Component，使用 render 方法返回 jsx，通过 this.state 可以访问组件生命周期和进行状态管理（this.setState()）
```jsx
class App extends React.Component {
    state = { value: 0 };
    add = () => {
        this.setState({
            value: this.state.value + 1
        })
    };
    render(){
        return (
            <>
                <p>{value}</p>
            </p>
        );
    }
}
```
* 函数组件被定义为简单的 js 函数，接收 props 并直接返回 jsx。功能组件无权访问生命周期函数或状态。一般来说，函数组件更简单、更易于阅读和测试。建议尽可能使用函数式组件。
```jsx
import { useState } from 'react';
const App = () => {
    const [value, setValue ] = useState(0);
    const add = () => {
        setValue(value + 1);
    };
    return(
        <>
          <p>{value}</p>
        </>
    )
}
```

### **类组件的生命周期**
* constructor: 这是创建组件时调用的第一个方法，用于初始化状态或绑定事件，在函数式组件中，可使用 useState 代替
* render: 负责渲染 jsx 标记并返回要在屏幕上显示的内容
* componentDidMount: 组件在 dom 中渲染后立即调用该方法，通常用于初始化任务，api 调用或者进行事件监听
* componentWillUnmount: 在组件从 dom 中删除之前调用，可以用来删除事件监听等

### **useState**
useState 返回一个状态值和更新它的函数。在初始化渲染期间，返回的状态值与第一个参数相同。还可以接受函数作为参数，该函数将之前的状态值作为参数。

### **useEffect**
用于执行副作用。第一个参数（是一个方法）返回一个函数时，该函数会在组件卸载时执行；第二个参数（是一个数组）为空时，只会在初始化时执行一次；当第二个参数不为空时，会在初始化和数组内元素发生变化的时候执行。
```jsx
useEffect(() = {
  /// do some
}, []);

useEffect(() = {
  /// do some
  return function(){
    /// do some when unmount
  }
}, [state1, state2]);
```

### **react 的 props**
props 是父组件传递给子组件的参数，是只读的，子组件无法更改。

### **什么是 jsx？**
默认情况下，在 react 中使用下面的代码创建元素:
```js
const elem = React.createElement(
    'h3',
    { className: 'title'},
    '内容'
);
```
但是有了 jsx（本质上是语法糖，语言上的扩展），我们可以这样写：
```jsx
const elem = (<h3 className="title">内容</h3>)
```

### **什么是 props 透传？**
指的是多层嵌套组件传递 props 存在的问题，即使某些中间组件不需要这些参数，可为了传递，还是需要使用，这可能会造成代码冗余。我们可以使用状态管理库来解决这个问题。

### **什么是 react 的上下文？**
在 react 中，数据是由父组件到子组件传递的。但是这种单项数据流在某些特定场景很繁琐（如所选语言、主题），因为这些数据需要传递给所有的组件。为了解决这个问题，上下文提供了一种在组件间共享数据的方法，而无需明确地将数据传递到每一层。只要上下文值发生改变时，调用 useContext 的组件就会重新渲染。

### ***react 中如何访问 dom 元素？*
引用是通过 React.createRef() 或 useRef() 创建的，并通过 ref 属性附加到元素上，从而访问 ref.current 来访问真实的 dom 元素。

### **什么是 SSR（服务端渲染）?**
SSR 是一种在服务器上渲染网页，并将渲染完成的网页发送到客户端进行显示的技术。它允许服务器生成网页的完整 HTML，包括动态内容，并将其作为请求的响应返回给客户端。
<br>在传统的客户端呈现方式中，客户端会收到一个最小的 HTML 页面，然后向服务器提出额外的数据和资源请求，用于在客户端呈现页面。这会导致页面加载时间变长，并且对 SEO 产生负面影响，因为搜索引擎爬虫很难索引 js 驱动的内容。
<br>使用 SSR 时，服务器通过执行必要的 js 代码来生成最终的 HTML，从而完成网页的渲染。
<br>SSR 常出现在 react 的 Next.js 和 vue 的 Nuxt.js 中以启用服务端呈现功能。