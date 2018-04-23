# user-dashboard
#### 起服务
~~ PORT=8000 npm start ~~

### 步骤
###Step 1. 环境
1.dva-cli 0.7+
2.node 6.5+

###Step 2. 配置 antd 和 babel-plugin-import
babel-plugin-import 用于按需引入 antd 的 JavaScript 和 CSS，这样打包出来的文件不至于太大。

$ npm i antd --save
$ npm i babel-plugin-import --save-dev
修改 .roadhogrc，在 "extraBabelPlugins" 里加上：

["import", { "libraryName": "antd", "style": "css" }]
###Step 3. 配置代理，能通过 RESTFul 的方式访问 http://localhost:8000/api/users
修改 .roadhogrc，加上 "proxy" 配置：

"proxy": {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
},
然后启动应用：(这个命令一直开着，后面不需要重启)

$ npm start
浏览器会自动开启，并打开 http://localhost:8000 。

访问 http://localhost:8000/api/users ，就能访问到 http://jsonplaceholder.typicode.com/users 的数据。(由于 typicode.com 服务的稳定性，偶尔可能会失败。不过没关系，正好便于我们之后对于出错的处理)




###注：
 - 数据模拟： jsonplaceholder/mock.js
 - 使用的自动化工具为roadhog，新版本为webpack

