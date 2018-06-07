# 安卓驱动环境

window和android一条连接桥

- [node环境下使用adb驱动安卓手机](https://github.com/Wscats/node-tutorial/issues/24)

- [node驱动终端命令](https://github.com/Wscats/node-tutorial/issues/25)

# websocket

运营的场景 直播 聊天 游戏

HTML5的技术

[socket.io的npm包介绍文档](https://www.npmjs.com/package/socket.io)

|前端|后端|
|-|-|
|`socket.io.js`|`require("socket.io")`|
|`socket.io.js---->提供io全局变量的方法`|`var io = require('socket.io')(server)`|


从前到后
```js
//从前到后
//从前端发送信息到后端
socket.emit('信息的名字'，'信息的内容');
//从后端接受前端
client.on('信息的名字', function(data) {
		data//信息的内容
});
```

从后到前
```js
//从后到前
client.emit('信息的名字', '信息的内容');

socket.on('信息的名字'，function(data) {
		data//信息的内容
});
```