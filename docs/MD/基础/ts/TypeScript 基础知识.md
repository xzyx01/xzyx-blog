---
title: TypeScript 基础知识🔥
date: 2024-3-12
categories:
  - 基础
tags:
  - TypeScript
---

[原文](https://juejin.cn/post/7321542773076082699)

### **一. 什么是 TypeScript？**
由微软开发，是 JavaScript 超集。通过添加静态类型、类、接口、模块等功能，使得大型应用程序更易维护。可编译为纯 JavaScript，能在任何支持 JavaScript 的地方运行。使用 TypeScript 可帮助开发人员在编码过程中避免一些常见错误。

### **二. 类型声明和类型推断的区别？**
类型声明显式指定函数或变量的类型，类型推断是 TS 根据赋值语句右侧的值自动推断变量的类型
```ts
let x: number = 10; // 类型声明
let y = 10; // TS 会自动推断 y 的类型为 number
```

### **三. 什么是接口？**
接口定义对象应包含哪些属性和方法，可以用来约束对象的结构，提高代码的可读性和维护性

### **四. 什么是泛型？**
泛型是一种在定义函数、类或接口时使用类型参数的方式，以增加代码的灵活性和重用性
```ts
function fun<T>(arg: T): T{
    return arg;
}
let res = fun<string>("hello"); // T 为 string 类型，因此参数和返回值也是 string
```

### **五. 什么是枚举？**
枚举是一种对值集合命名的方式，提供一种便捷的方式来使用一组有意义的常量
```ts
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;
```

### **六. 怎么定义可空类型（null、undefined）？**
可使用联合类型定义可空类型
```ts
let text: number | null = 10;
```

### **七. 联合类型和交叉类型的区别？**
联合类型表示一个值可以是多种类型中的一种；而交叉类型定义了一个新类型，包含多种类型的特性。
```ts
let text: number | string;
text = 10;
text = "10";

interface A {
    a(): void;
}
interface B {
    b(): void;
}
type C = A & B();
```

### **八. 什么是 TypeScript 中的声明文件？**
声明文件（格式为 .d.ts），用于描述已有 JavaScript 代码库的类型信息。它们提供了类型定义和元数据，以便在 TypeScript 项目中使用这些库时获得智能感和类型安全。

### **九. 命名空间和模块的区别？**
* 模块（module）：在一个大型项目中，可以将相关的代码组织到单独的文件，并使用模块来导入和导出
* 命名空间（namespace）：命名空间可以将具有相似功能或属性的类、接口等进行分组，以避免全局命名冲突。
```ts
export function say(name: string){
    return name;
}
import { say } from "say.js"

namespace Say {
    export function say(name: string){
        return name;
    }
}
<reference path="say.js">
Say.say('xzyx');
```

### **十. 什么是类型断言？**
类型断言允许手动指定一个值的类型，这在需要明确告诉编译器某个值的类型时非常有用
```ts
let val: any = "a string";
let len: number = (val as string).length;
```

### **十一. 可选参数和默认参数？**
* 可选参数允许函数中的某些参数不传值，在参数后面加上 ？ 表示可选
* 默认参数运行在声明函数时为参数指定默认值，这样如果调用时未传参会使用默认值
```ts
function fun(name: string, age?: number){}
function fun(name: string, age: number = 16){}
```

### **十二. 什么是类型守卫？**
类型守卫是一种用于在运行时检查类型的技术
```ts
function fun(a: any): a is string {}
```

### **十三. const 和 readonly 的区别？**
* const 
1. const 用于声明常量，一旦被赋值后，不能重新赋值
2. 常量必须在声明时就赋值
3. 通常用于存储不会发生变化的值
* readonly
1. 用于标记类的属性，表示该属性只能在类的构造函数或声明时赋值，并且不能再改变
2. 只读属性，防止外部代码修改某些属性
```ts
class Person {
    readonly name: stirng;
    constructor(name: string){
        this.name = name;
    }
}
```

### **十四. 使用 any 类型需要注意什么？**
any 允许我们不指定具体的类型，可以是任意类型的值。使用 any 相当于放弃了静态类型检查，使得代码在编译阶段不会对这些值进行检查。

### **十五. TypeScript 中的数据类型**
基本类型

类型 | 解释
-|-
number | 数字
string | 字符串
boolean | 布尔值
null、undefined | 空值
symbol | 唯一值，不可变的值

引用类型

类型 | 解释
-|-
array | 数组
tuple | 元组
enum | 枚举
object | 对象
interface | 接口
function | 函数类型
void | 函数没有返回值
any | 任意值
union types | 联合类型，表示一个值可以是几种类型之一
intersection types |交叉类型，表示一个值同时拥有多种类型的特性