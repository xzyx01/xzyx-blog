__讲一讲常见的项目优化手段__

代码优化
1. `模块懒加载`。可以通过 `() => import()` 实现，因为如果不使用懒加载，所有的 js 代码都会打包进同一个 js 文件中，导致 js 文件体积过大，从而首屏加载就会很慢，导致白屏
2. `开启 Gzip 压缩代码`
3. 将一些小的图片转换为 base64，从而减少网络请求的次数，提高用户体验

webpack 优化（`本质上是一些插件的使用`）
1. `构建速度优化`。项目过大时，构建时间往往会很长，这个时候可以使用 `thread-loader` 进行多线程打包。同时使用 `cache-loader` 来缓存资源，以提高构建的速度。`具体的做法: 将这两个 loader 放在 babel-loader 之前执行`。
2. `打包体积优化`。可以使用工具对 css、js 代码进行压缩，同时开启 tree-shaking，过滤掉没有被使用的代码（正式环境默认开启）。同时正式环境，还可以关闭 source-map，以减小项目体积，

2. 讲一讲 babel 是什么？
>1. babel 主要用来转换代码，保证代码的兼容性
>2. babel 内部主要由以下四个步骤实现:<br>
>&nbsp;&nbsp;1. 使用 babyIon 将原始代码转换成 AST（抽象语法树）<br>
>&nbsp;&nbsp;2. 使用 babel-traverse 将上一步获取的 AST 进行优化，获取优化后的 AST<br>
>&nbsp;&nbsp;3. 使用 babel-generator 将优化后的 AST 转换成代码<br>
>&nbsp;&nbsp;4. 使用 babel-core 将转换成的代码封装成一个 api（供外部调用）<br>