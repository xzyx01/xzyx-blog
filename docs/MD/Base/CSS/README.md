* BFC 是什么？
>块级格式上下文，可通过 overflow: hidden、padding 来开启。开启后内部的元素不会影响外部元素（可解决子级 margin 造成 父级 margin 的问题）。同时开启后相邻元素垂直方向的 margin 不会叠加，水平方向会。

* 如何声明全局变量？
```css
:root{
    --button-color: red;
}
.btn{
    color: var(--button-color);
}
```

* calc 如何使用（计算符前后必须有空格）
```css
width: calc(100 + 50) + "px";
width: calc(100% - 20px);
width: calc(10px / 2);
```

* 如何解决文本溢出？
```css
// 单行文本溢出
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; // 不换行
```
```css
// 多行文本溢出
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box; // 借助 -webkit-box 布局完成
-webkit-box-orident: vertical;
-wevkit-line-clamp: 3;
```
* 过滤效果
>毛玻璃效果：filter 对元素本身应用过滤效果，backdrop-filter 对元素底部的内容应用过滤效果

过滤效果 | 语法
-|-
模糊 | blur(5px)
亮度 | brightness(1.4)
对比度 | contrast(2)
灰度 | grayscale(0.6)
色调变化 | hue-rotate(45deg)
反相 | invert(0.6)
饱和度 | saturate(2.5)
褐色 | speia(0.7)