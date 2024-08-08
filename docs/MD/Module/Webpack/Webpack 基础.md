[掘金原文](https://juejin.cn/post/7323135762797953035?searchId=202403251514009DFEC4B0949BFA1B38F1)

__注意：__
1. webpack 由于是 node 写的，所有可以在里面使用 node 的内置模块，其实 vite 也是 node 写的。

__loader 是啥？__<br>
webpack 是有短板的，它只能打包 js 代码，loader 可以让 webpack 理解除了 js 以外的文件。

__plugin 是啥？__<br>
plugin 的能力比 loader 还强，它不仅可以识别除了 js 以外的语言，还可以在这个过程中做其他的事情，loader 能干的事情 plugin 也能干。