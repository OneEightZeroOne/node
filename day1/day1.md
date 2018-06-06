# 什么是node.js

1.是一个Chrome V8引擎的封装（chrome浏览器的控制台抽离的部分）

2.相对其他环境(java,php,python,199x)，出现的较晚

3.脱离浏览器环境运行的，浏览器环境（前端，客户端）  node.js其实可以充当服务器（后端，服务端）

node.js  vs  php,java,python

|语言|||
|-|-|-|
|js|前端语言 |chrome浏览器|
|nodejs| 后端语言 | node (chrome v8)浏览器控制台|

# npm

npm就是nodejs的应用商店

nodejs环境下的包管理中心（npm）  setInterval(系统包) gulp(第三方包)

android手机打电话，信息，相册，设置(系统应用)，微信，饿了么，QQ支付宝（第三方应用） 生态环境

# npm包安装

直接从npm包管理中心下载xxx包到本地的nodejs环境使用
```js
npm install xxx
npm i xxx
```

全局安装-g
```js
npm install -g xxx
```

使用包，配合`require("xxx")`
```js
var gulp = require("gulp")
```

# 运行脚本

```js
node xxx.js
```


# cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

# 文档

- [菜鸟教程nodejs](https://www.runoob.com/nodejs/nodejs-tutorial.html)
- [node官网的API](https://nodejs.org/dist/latest-v8.x/docs/api)

```

```

> window和docuemnt对象在node是没有的

> BOM和DOM对象在node是不存在

# 回调函数

同步和异步都能写回调，但是同步的回调是没意义的，异步才有意义



nodejs它的机制，是基于第二种，它所有选择都是不等这个30分钟披萨（不会原地等待），我都用回调（留下回拨电话）来解决

php，是基于第一种，它选择等待披萨完成


# 内置模块

node自带的模块[官网API](https://nodejs.org/en/docs/)

fs 读写文件
http http操作网络
os 操作系统
net TCP/IP

# 第三模块

gulp 压缩合并处理代码
request 下载 模拟请求
cheerio 处理html结构的后端版jquery
mysql 处理mysql数据库
express 后端框架
body-parser express处理请求体的模块

# 自定义模块

自己写的模块需要用一个module.exports导出，再另外一份JS里面require该模块的路径

导出

```js
//tool.js
module.exports = {
	plus: function(a, b) {
		return a + b;
	},
	mult: function(a, b) {
		return a * b;
	}
}
```

导入

```js
var tool = require("./tool.js");
console.log(tool);
console.log(tool.plus(9,8));
console.log(tool.mult(9,8));
```


# 异步和同步

|异步|同步|
|-|-|
|非阻塞|阻塞|
|依赖回调|不需要回调|
|高效但不稳定|相对低效稳定|
|开发难度高|开发难度低|
|回调金字塔 回调地狱|没有|


# 事件驱动

事假驱动是node异步运行的机制，运用的时候引入events模块来实现

