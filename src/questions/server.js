// 单工通信
// const net = require('net');
// const PORT = 4000;
// const server = net.createServer((socket) => {
//     socket.on('data', (buffer) => {
//         console.log(buffer, buffer.toString().trim());
//     });
// });
// server.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}~`);
// });

// 半双工通信
// const net = require('net');
// const PORT = 4000;
// const data = {
//     136797: "01 | 课程介绍",
//     136798: "02 | 内容综述",
//     136799: "03 | Node.js是什么？",
//     136800: "04 | Node.js可以用来做什么？",
//     136801: "05 | 课程实战项目介绍",
//     136803: "06 | 什么是技术预研？",
//     136804: "07 | Node.js开发环境安装",
//     136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
//     136807: "09 | 模块：CommonJS规范",
//     136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
//     136809: "11 | 模块：npm",
//     141994: "12 | 模块：Node.js内置模块",
//     143517: "13 | 异步：非阻塞I/O",
//     143557: "14 | 异步：异步编程之callback",
//     143564: "15 | 异步：事件循环",
//     143644: "16 | 异步：异步编程之Promise",
//     146470: "17 | 异步：异步编程之async/await",
//     146569: "18 | HTTP：什么是HTTP服务器？",
//     146582: "19 | HTTP：简单实现一个HTTP服务器"
// };
// const server = net.createServer((socket) => {
//     socket.on('data', (buffer) => {
//         setTimeout(() => {
//             socket.write(Buffer.from(data[buffer.readInt32BE()]));
//         }, 800);
//     });
// });
// server.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}~`);
// });

// 全双工通信
// const net = require('net');
// const PORT = 4000;
// const data = {
//     136797: "01 | 课程介绍",
//     136798: "02 | 内容综述",
//     136799: "03 | Node.js是什么？",
//     136800: "04 | Node.js可以用来做什么？",
//     136801: "05 | 课程实战项目介绍",
//     136803: "06 | 什么是技术预研？",
//     136804: "07 | Node.js开发环境安装",
//     136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
//     136807: "09 | 模块：CommonJS规范",
//     136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
//     136809: "11 | 模块：npm",
//     141994: "12 | 模块：Node.js内置模块",
//     143517: "13 | 异步：非阻塞I/O",
//     143557: "14 | 异步：异步编程之callback",
//     143564: "15 | 异步：事件循环",
//     143644: "16 | 异步：异步编程之Promise",
//     146470: "17 | 异步：异步编程之async/await",
//     146569: "18 | HTTP：什么是HTTP服务器？",
//     146582: "19 | HTTP：简单实现一个HTTP服务器"
// };
// const server = net.createServer((socket) => {
//     let oldBuffer = null;
//     socket.on('data', (buffer) => {
//         let packageLength;
//         while (packageLength = isComplete(buffer)) {
//             const package = buffer.slice(0, packageLength);
//             buffer = buffer.slice(packageLength);
//             const {seq, data} = decode(package);
//             socket.write(encode(seq, data));
//         }
//         oldBuffer = buffer;
//     });
// });
// function encode(seq, id) {
//     const body = Buffer.from(data[id]);
//     const header = Buffer.alloc(6);
//     header.writeInt16BE(seq);
//     header.writeInt32BE(body.length, 2);
//     return Buffer.concat([header, body]);
// }
// function decode(buffer) {
//     const seq = buffer.readInt16BE(),
//         body = buffer.readInt32BE(6);
//     return {
//         seq,
//         data: body
//     };
// }
// function isComplete(buffer) {
//     if (buffer.length < 8) {
//         return 0;
//     }
//     const bodyLength = buffer.readInt32BE(2);
//     return 6 + bodyLength;
// }
// server.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}~`);
// });

// 全双工通信(完整版)
// const net = require('net');
// const PORT = 4000;
// const data = {
//     136797: "01 | 课程介绍",
//     136798: "02 | 内容综述",
//     136799: "03 | Node.js是什么？",
//     136800: "04 | Node.js可以用来做什么？",
//     136801: "05 | 课程实战项目介绍",
//     136803: "06 | 什么是技术预研？",
//     136804: "07 | Node.js开发环境安装",
//     136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
//     136807: "09 | 模块：CommonJS规范",
//     136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
//     136809: "11 | 模块：npm",
//     141994: "12 | 模块：Node.js内置模块",
//     143517: "13 | 异步：非阻塞I/O",
//     143557: "14 | 异步：异步编程之callback",
//     143564: "15 | 异步：事件循环",
//     143644: "16 | 异步：异步编程之Promise",
//     146470: "17 | 异步：异步编程之async/await",
//     146569: "18 | HTTP：什么是HTTP服务器？",
//     146582: "19 | HTTP：简单实现一个HTTP服务器"
// };
// const server = net.createServer(socket => {
//     let oldBuffer = null;
//     socket.on('data', buffer => {
//         let packageLength;
//         while (packageLength = isComplete(buffer)) {
//             const package = buffer.slice(0, packageLength);
//             buffer = buffer.slice(packageLength);
//             const {seq, data} = decode(package);
//             socket.write(encode(seq, data));
//         }
//         oldBuffer = buffer;
//     });
// });
// server.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}`);
// });
// function isComplete(buffer) {
//     if (buffer.length < 6)
//         return 0;
//     const bodyLength = buffer.readInt32BE(2);
//     return 6 + bodyLength;
// }
// function decode(buffer) {
//     const seq = buffer.readInt16BE(),
//         id = buffer.slice(6).readInt32BE();
//     return {
//         seq,
//         data: data[id]
//     }
// }
// function encode(seq, data) {
//     const body = Buffer.from(data);
//     const header = Buffer.alloc(6);
//     header.writeInt16BE(seq);
//     header.writeInt32BE(body.length, 2);
//     return Buffer.concat([header, body]);
// }
