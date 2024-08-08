* 1rpx 是什么意思？
>微信小程序响应式单位，1rpx = 屏幕宽度 / 750rpx（在 iPhone6 中，宽度为 375px，因此想要绘制宽 200px, 高 100px 的元素时，此时 1rpx = 375 / 750 = 0.5px, 1px = 2rpx, 因此采用响应式单位宽为 400rpx，高为 200rpx）

* uni-app 上传图片功能（上传单个文件）
```js
uploadImg(){
    uni.chooseImage({
        count: 1,
        success: res => {
            uni.uploadFile({
                url: [服务器地址],
                file: res.tempFiles[0],
                name: "file",
                fileType: "image",
                header: {
                    token: uni.getStroageSync("token")
                },
                success: res => {},
                fail: err => {}
            })
        }
    })
}
```


* 跨端原理
>uni-app 的执行通过 `编译器` 和 `运行时(runtime)` 配合完成。`编译器` 根据 `uni-app 的条件编译` 产生不同的编译输出物。而各个平台都有各自的 `runtime` 来解析编译输出物。使得 uni-app 可以 `一套代码，多端运行`。


* 路由

方法 | 解释
-|-
`uni.navigateTo()` | 页面入栈，跳转到 `非 tab 页`
`uni.navigateBack()` | 页面出栈，返回上一页
`uni.redirectTo()` | 关闭当前页，跳转到 `非 tab 页`
`uni.reLaunch()` | 关闭所有页面，跳转到 `非 tab 页`
`uni.switchTab()` | 关闭所有 `非 tab 页`，跳转到 `tab 页`

* 应用生命周期

钩子 | 解释
-|-
onLanuch | 全局触发一次，应用初始化完成触发
onShow | 应用启动或应用从后台切换至前台触发
onHide | 应用切换至后台触发
onError | 应用出错时触发。`可用于应用卡机，提示重启`

* 页面生命周期

钩子 | 解释
-|-
onLoad | 页面加载时触发，参数为上一个页面的路由传参，`下级页面回来不会触发`
onShow | 页面显示时触发，`每次显示都会触发`
onReady | 页面初次渲染完成触发
onHide | 页面隐藏触发
onUnload | 页面卸载触发
onResize | 页面尺寸变化触发
onPullDownRefresh | 页面下拉触发，常用于下拉刷新(重新获取数据后停止刷新 `uni.stopPullDownRefresh`)
onReachBottom | 页面触底触发，常用于数据懒加载
onPageScroll | 页面滚动触发
>注意：onLoad 和 onReady 只在初次加载和初次渲染的时候执行一次。因此下级页面返回时不会触发。因此如果返回时页面数据需要刷新，可使用 onShow。

* 组件生命周期

钩子 | 解释
-|-
beforeCreate() | 实例初始化之前触发
created() | 实例初始化完成触发
beforeMount | 元素挂载到实例之前触发
mounted() | 元素挂载到实例之后触发
beforeUpdate() | 数据更新前触发
updated() | 数据更新时触发
beforeDestory() | 实例销毁前触发
destoryed() | 实例销毁后触发

* 内置 css 变量
> 使用 var(css 变量) 即可使用 uni-app 内置 css 变量。
1. `var(--status-bar-height)`: 系统状态栏高度
2. `--window-top`: 内容区域距离顶部的距离，默认 `44px`
3. `--window-bottom`: 内容区域距离底部的距离，默认 `50px`

* 点击反馈

属性 | 解释
-|-
hover-class | 默认 none, 点击时的类名
hover-stop-propagation | 默认 false，阻止父节点出现点击态
hover-start-time | 默认 50，点击态出现延迟时间
hover-stay-time | 默认 400，点击态保留时间

* uni-app 与普通 vue 项目的区别
1. uni-app 不能使用 `*` 选择器
2. uni-app 的 `page` 节点等同于 `body` 节点
3. uni-app 的 `view` 节点相当于 `div` 节点
4. uni-app 的 `image` 节点相当于 `img` 节点

* vue 和 nvue 文件的区别
1. 发布为 `app` 时，vue 采用 `webview` 渲染，nvue 采用 `原生渲染`
2. nvue 只支持 `flex` 布局


* easyCom
>符合 `components/组件/组件.vue` 命名规范的组件，无需导入，可直接使用。easyCom 默认开启。
1. 组件不放在 components，如何使用 easyCom ？
```json
// page.json
"easyCom": {
    "autoscan": true,
    "custom": {
        "nu-(.*)": "@/nu-ui/nu-$1/nu-$1.vue"
    }
}
```

* 外部导入 uni-app 项目无法运行?
>原因：HBuildX 不会自动识别项目类型<br>
>解决：右键项目名称 => 重新识别项目类型

* uni-app 打包成 apk
1. 云打包：项目名称右键 => 发行 => 云打包 => 选择公共证书
2. 离线打包：常使用 `Android Studio` 进行打包

* UI 框架选择
1. `colorui`，首选，css 框架，没有封装成组件。
2. [uview](https://www.uviewui.com/components/intro.html)，功能齐全
3. [vantui](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/home)，不支持 app，只支持 h5 和微信小程序
