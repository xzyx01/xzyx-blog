Flutter 的优缺点
>优点：高性能，高保真，热重载

>缺点：不支持热更新，生态不完整

Flutter 跨平台原理
>自写 UI 渲染引擎，实现跨平台

移动端跨平台技术有哪些？
>web 技术

>原生渲染

>自渲染技术

常用功能代码片段

功能1：点击空白区域收起键盘
```dart
FocusScope.of(context).requestFocus(new FocusNode());
```
功能2：键盘弹出时底部溢出如何解决？
* 溢出部分增加滑动属性
* Scaffold 的 resizeToAvoidBottomPadding: false，避免遮挡布局