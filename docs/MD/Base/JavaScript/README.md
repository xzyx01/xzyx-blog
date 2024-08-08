---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
image: /bg.jpg
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 1 
---


![alt text](/bg.jpg)

<!-- more -->

__try-catch 能捕获异步代码中的错误吗？__
<br>try catch 不能捕获异步任务中的错误。因为 try-catch 是同步代码，在 event-loop 中，同步代码优先于异步代码执行， 因此 try-catch 执行完后，异步任务还没开始执行，所以无法捕获到其中的错误。想要捕获异步任务中的错误，可以在异步任务重中使用 try-catch。






## 数据类型的隐式转化

不同数据类型转换为字符串的情况
>1. null => "null"
>2. undefined => "undefined
>3. boolean => true 转换为 "true", false 转换为 "false"
>4. number => 10 转换为 "10"，le21 转换为 "le+21"
>5. array => 相当于调用 Array.prototype.join(',')，[1,2,3] 转换为 "1,2,3", [] 转换为 ""
>6. object => 相当于调用 Object.prototype.toString()，返回 [object Object]

不同数据类型转换为 number 的情况
>1. null => 0
>2. undefined => NaN
>3. String => 如果是数字字符串，直接转换成对应数字；如果是空字符串，转换为 0；否则一律转换成 NaN
>4. boolean => true:1, false: 0

不同数据类型转换为 boolean 的情况
>false、null、undefined、0、""、NaN 转换为 false，其他一律转换为 true

不同数据类型之间比较时的隐式转换，会将双方都转换成 number 再进行比较，因为 number 的优先级最高

* 原型链

## prototype 和 `__proto__`
>1. prototype，显示原型，只有函数才有。本质上是一个引用，指向函数的原型对象。
>2. __proto__，隐式原型，实例上存在。本质上也是一个引用，指向创建该实例的构造函数的原型对象。

原型和原型链
>1. 当我们试图从一个实例获取属性的时候，首先会在实例本身找，如果找不到，就会去实例的原型对象上找，直到找到原型链的尽头（null）。这种查找的机制，我们称之为原型链。
>2. js 中所有的对象都是由 Object 构造函数生成的，且原型链的顶端为 null，所以 `Object.prototypr.__proto__ == null`

* 前后端联调数据格式

>默认情况下，后端接口接收和响应 `json` 字符串数据，但是前端请求默认为 `application/x-www-form-urlencoded` 格式，会将参数转换为键值对 `?name=zhd&age=22` 发送给后端。因此我们需要设置 `content-type: application/json` 将参数转换为 json 字符串发送给后端。