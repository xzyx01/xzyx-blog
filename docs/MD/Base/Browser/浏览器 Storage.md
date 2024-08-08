__localStorage 是同步还是异步的？[掘金原文](https://juejin.cn/post/7359405716090011659)__
<br>localStorage 是 web storage api 的一部分，它提供了一种存储键值对的机制。localStorage 的数据是持久存储在用户硬盘上的，而不是内存。这意味着即使用户关闭浏览器或者电脑，localStorage 中的数据也不会丢失，除非主动清除浏览器缓存或者使用代码删除。
<br>当你通过 js 访问 localStorage 时，浏览器会从硬盘中读取数据或者向硬盘写入数据（虽然硬盘是 IO设备，IO 操作是异步的，但是 localStorage 却是同步的，因此在 localStorage 操作时，会阻塞 UI 更新和其他 js 的执行）。然而，在读写操作期间，数据可能会被暂时存放在内存中，以提高处理速度。但主要的特点是它的持久性，以及它不会依赖于会话的持续性。


* localStroage 和 sessionStroage

怎么存储的?
>localStroage 存储的数据可以长期保留，sessionStroage 存储的数据在页面关闭时会被清除

怎么共享的?
>localStroage 可以在同一网站共享数据，sessionStroage 不能再多个窗口或标签页之间共享数据，但是通过 window.open 或链接打开新页面时（不能是新窗口），新页面会复制当前页的 sessionStroage

* 强缓存和协商缓存

强缓存
>* 不会向服务器发送请求，直接从本地缓存获取数据
>* 请求资源的状态码为：200 ok(from memory cache)
>* 优先级：cache-control > expires

协商缓存
>* 会向服务器发送请求，服务器会根据请求头的资源判断是否命中协商缓存
>* 如果命中缓存，返回 304 状态码，通知浏览器从缓存中读取资源
>* 优先级：Last-Modified 与 ETag 是可以一起使用的，服务器会优先验证 ETag，一致的情况下才会继续比较 Last-Modified，最后才决定返回 304
