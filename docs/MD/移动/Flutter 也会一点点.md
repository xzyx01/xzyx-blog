---
title: Flutter 也会一点点！🔥
date: 2024-2-1
categories:
  - 移动
tags:
  - Flutter
---

### **Flutter 的优缺点**
* 优点：高性能，高保真，热重载
* 缺点：不支持热更新，相比其他移动端框架，生态不完整

### **Flutter 跨平台原理？**
自写 UI 渲染引擎，实现跨平台


### **常用功能代码片段**
* 点击空白区域收起键盘
```dart
FocusScope.of(context).requestFocus(new FocusNode());
```
* 键盘弹出时底部溢出如何解决？
  * 溢出部分增加滑动属性
  * Scaffold 的 resizeToAvoidBottomPadding: false，避免遮挡布局