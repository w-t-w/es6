/*
1. 浏览器的进程
   浏览器进程
   GPU 进程
   渲染进程
   插件进程
   网络进程
1-1. 渲染进程
   GUI 线程: 用于处理解析渲染 html、css
   JS 线程: 经典 'JS 单线程'
   定时器线程: 用于处理定时器,会将符合条件的回调事件尽数移入至事件触发线程内
   事件触发线程: 经典的 Event Loop 事件循环执行机制
   异步 http 请求线程: 用于处理异步 http 请求,会将符合条件的回调事件尽数移入至事件触发线程内
2. request 请求头
   content-type: 用于向服务器端请求获取资源的类型
   referer: 包含了当前页面的来源页面的地址
   user-agent: 告知服务器端,访问者是通过什么工具来访问的
3. HTTP OPTIONS
   HTTP request OPTIONS 相当于是 Chrome 浏览器发送的一个预检性请求,会先想服务器端申请权限检测信息,如果申请通过,浏览器才会向服务端发送一个正式的请求
   场景
   跨域请求
4. redirect
   301: A 地址的资源被永久性的移除,A 地址的资源不可再被访问
   302: A 地址的资源被暂时性的转移,A 地址的资源仍然可被访问,只是临时性的从 A 地址 跳转到了 B 地址
5. HTTP 缓存策略
   强制缓存
   Expires: 会在服务器端返回的响应头加入 Expires 时间戳,表示在此时间戳范围内,浏览器只能取本地缓存
   Cache-Control
   max-age: 会在服务器端返回的响应头加入 max-age = 20000,表示当前资源在未来的 20000s 内不可再被请求,浏览器取本地缓存
   immutable: 表示浏览器永远只能取本地缓存
   no-cache: 表示在使用本地缓存之前,会强制要求将请求发送至服务器端校验
   no-store: 不会取任何的本地缓存,不会存储客户端请求以及服务器端响应有关的任何工作内容
   协商缓存
   ETag 与 If-None-Match: 会通过 URL 资源标识符与服务器端实行协商,如果服务器端发现 ETag 与 If-None-Match 不相同,则返回数据,状态码 200;否则状态码 304,浏览器取本地缓存
   Last-Modified 与 If-Modified-Since: 会通过最后修改的时间戳与服务器端实行协商,如果服务器端发现 Last-Modified 与 If-Modified-Since 不相同,则返回数据,状态码 200;否则状态码 304,浏览器取本地缓存
   优先级
   强制缓存优先级大于协商缓存,会先去判断强制缓存,如果强制缓存生效,则浏览器取本地缓存,否则再去向服务器端请求协商,看要不要取本地缓存
   ETag 优先级大于 Last-Modified,因为 Last-Modified 的设计只精确到秒,而 ETag 可以随时更新,比 Last-Modified 更加精确
   Cache-Control 优先级大于 Expires,Cache-Control: max-age = 20000 与 Expires 同时存在的情况下,Expires 会失效
 */