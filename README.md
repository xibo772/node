 # node
node 工具模拟后台接口数据<br>
<br>
  ===

#### 下载地址：<br>
https://nodejs.org/zh-cn/<br><br>

建议推荐下载 .msi 下载完之后 下一步....完成,就可以
<br>

## 安装完成之后<br>
在命令行中 输入 `node -v`, 可以查看 node 版本<br>

## 创建文件目录
创建文件夹 `kdir $env:USERPROFILE\projects`<br>
导航到该文件夹 `cd $env:USERPROFILE\projects`<br?


## 创建 .js 文件(以 test.js 为例)
将一下内容粘帖到文件 test.js中<br>

```
const http = require('http');

const hostname = '127.0.0.1';//windows 建议使用 192.168.0.1 类的ip
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
保存文件,返回终端窗口 输入一下命令<br>
    `$ node test.js`<br>
这样的输出应出现在终端中:<br>
`Server running at http://127.0.0.1:3000/`<br>
在留言器中Web浏览器中访问 `http://127.0.0.1:3000/`<br>
如果显示`Hello,World!`,表示服务器正在运行.<br>








