---
title: Git 的基本操作，你会吗？🔥
date: 2024-2-1
categories:
  - 工具
tags:
  - Git
---

### **修改分支名称**
```bash
git branch -m [old-branch] [new-branch]
git push origin :[old-branch] [new-branch]
git branch --set-upstream-to=origin/[new-branch] [new-branch] // 将本地和远程关联
```
### **合并分支（将 dev 分支合并到 master 分支）**
```bash
git branch -a
git pull -rebase
git push push
git checkout master
git merge dev
git push
```

### **删除分支**
```bash
1.删除本地分支：
git branch -D [branch-name]
2.删除远程分支：
git push origin -D [branch-name]
```

### **新建分支（从 master 新建 dev 分支）**
```bash
git checkout master
git pull 
git checkout -b dev
git push origin dev
git branch
git branch --set-upstream-to=origin/dev dev
```
### **git 代码提交规范**
* feat: 新功能（feature）
* fix: bug 修复
* docs: 文档
* refactor: 代码重构
* revert: 版本回退
* perf: 性能优化
* test: 测试
* build: 打包