[掘金原文](https://juejin.cn/post/7344282440725577765)

__type 和 interface 之间的区别__
<br>typeScript 允许我们使用 type 和 interface 来定义类型。type 定义的类型可以通过较差类型（&）来复用。值得注意的是，type 和 interface 也可以相互复用。
```ts
// 复用 type 定义的类型
type Point = {
  x: number,
  y: number
};
type Coordinate = Point & {
    z: number
};
```
```ts
// 复用 interface 定义的类型
interface Point {
  x: number,
  y: number
};
interface Coordinate extends Point {
  z: number
}
```
```ts
// interface 复用 type 定义的类型
type Point = {
  x: number,
  y: number
};
interface Coordinate extends Point {
    z: number
}
```
```ts
// type 复用 interface 定义的类型
interface Point {
    x: number,
    y: number
}
type Coordinate = Point & {
  z: number
};
```
```ts
// 只需要复用 c 属性
interface Props {
    a: string,
    b: string,
    c: string
}
// Omit（工具类型）：选择的类型
interface Props1 extends Omit<Props, 'c'>{
    d: string
}
// Pick（工具类型）：排除的类型
interface Props1 extends Pick<Props, 'a'|'b'>{
  d: string
}
```

__元组__
<br>元组是处理一个数组中包含不同类型元素的理想选择，它可以保持每个元素类型的明确性
```ts
function useHook() : [string: number]{
    return ["文本", 12];
}
function MyComponent() {
    const [text, number] = useHook();
    return null;
}
```

__函数重载__
<br>函数重载可以用来处理参数数量和类型不固定的函数。通过函数重载，我们可以在同一函数名下定义多个函数实现，根据不同的参数类型、数量或返回类型进行区分
```ts
function greet(name: string): string;
function greet(age: number): number;
function greet(value: any): string {
  if (typeof value === "string") {
    return `Hello, ${value}`;
  } else if (typeof value === "number") {
    return `You are ${value} years old`;
  }
}
```

__定义组件属性时，该使用 type 还是 interface？__
<br>同名接口会自动合并，同名类型会冲突，因此推荐使用 interface 定义组件类型。这样使用者可以通过 declare module 语句自由扩展组件属性，增强代码的灵活性。
```ts
interface Info {
    name: string
};
interface Info {
    age: number
};
const userInfo: info = { name: "张三", age: 12};
```