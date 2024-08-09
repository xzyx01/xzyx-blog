---
title: JavaScript 常见问题速览🔥
date: 2024-01-22
categories:
  - 基础
tags:
  - JavaScript
sticky: 2
---

![alt text](https://pic4.zhimg.com/80/v2-7db75659e0d54bac8dd5d79adf4011f3_1440w.webp)
<!-- more -->

### **try-catch 能捕获异步代码中的错误吗？**
<span style="color: #3178c6;font-weight:bold">try catch 不能捕获异步任务中的错误。</span>因为 try-catch 是同步代码，在 event-loop 中，同步代码优先于异步代码执行。因此 try-catch 执行完后，异步任务还没开始执行，所以无法捕获到其中的错误。想要捕获异步任务中的错误，可以在异步任务中使用 try-catch。

### **不同数据类型之间的隐式转换**
转换为 String：
1. null => "null"
2. undefined => "undefined"
3. boolean => true 转换为 "true", false 转换为 "false"
4. number => 10 转换为 "10"，le21 转换为 "le+21"
5. array => 相当于调用 Array.prototype.join(',')，[1,2,3] 转换为 "1,2,3", [] 转换为 ""
6. object => 相当于调用 Object.prototype.toString()，返回 [object Object]

转换为 number：
1. null => 0
2. undefined => NaN
3. String => 如果是数字字符串，直接转换成对应数字；如果是空字符串，转换为 0；否则一律转换成 NaN
4. boolean => true:1, false: 0

转换为 boolean：
<br>false、null、undefined、0、""、NaN 转换为 false，其他一律转换为 true

<span style="color: #3178c6;font-weight:bold;">注意：不同数据类型之间比较时的隐式转换，会将双方都转换成 number 再进行比较，因为 number 的优先级最高</span>

### **prototype 和 `__proto__` 是什么？**
* prototype，显式原型，只有函数才有。本质上是一个引用，指向函数的原型对象。
* `__proto__`，隐式原型，实例上存在。本质上也是一个引用，指向创建该实例的构造函数的原型对象。

### **什么是原型链？**
1. 当我们试图从一个实例获取属性的时候，首先会在实例本身找。如果找不到，就会去实例的原型对象上找（就这样一直找，直到找到原型链的尽头（null））。这种查找的机制，我们称之为原型链。
2. js 中所有的对象都是由 Object 构造函数生成的，且原型链的顶端为 null，所以 <span style="color: #3178c6;font-weight:bold">Object.prototype.`__proto__` == null</span>

### **前后端联调请求参数的格式**
默认情况下，后端接口接收和响应 json 字符串数据。但是前端请求默认为 `application/x-www-form-urlencoded` 格式，会将参数转换为键值对 `?name=zhd&age=22` 发送给后端。因此我们需要设置 `content-type: application/json` 将参数转换为 json 字符串发送给后端。