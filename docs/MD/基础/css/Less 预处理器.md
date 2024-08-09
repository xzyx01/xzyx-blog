---
title: Less 预处理器🔥
date: 2024-2-12
categories:
  - 基础
tags:
  - Less
---

### **Less 的常见用法**
```less
// 声明变量
@btn-color: red;
// 混入
.btn(){
    height: 80px;
    border-radius: 20px;
}
// 循环
makeFS(@n, @i:10) when(@i <= @n){
    .fs@{i}{
        font-size: @i + 'px';
    }
    makeFS(@n, @i+5);
}
makeFS(20);
// 生成
.fs10{ font-size: 10px };
.fs15{ font-size: 15px };
.fs20{ font-size: 20px };
// 将 less 文件编译成 css 文件
lessc style.less > style.css
```