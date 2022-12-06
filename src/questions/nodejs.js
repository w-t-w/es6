// 基础
// console.log(Date);
// console.log(Math);
// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(setTimeout, setInterval);
// console.log(process.argv.slice(2));
// console.log(process.platform);
// console.log(process.resourceUsage(), process.memoryUsage(), process.cpuUsage());

// 使用最简单的方式来写一个石头、剪刀、布的游戏
// const paper = 'paper',
//     rock = 'rock',
//     scissors = 'scissors';
// function computerChoose() {
//     let computerOptions;
//     const computerRandom = Math.random() * 3;
//     if (computerRandom < 1) {
//         computerOptions = paper;
//     } else if (computerRandom < 2) {
//         computerOptions = rock;
//     } else {
//         computerOptions = scissors;
//     }
//     return computerOptions;
// }
// function userChoose(chooseOptions) {
//     const computerOptions = computerChoose();
//     console.log(`电脑: ${computerOptions}`);
//     if ((chooseOptions === paper && computerOptions === rock) || (chooseOptions === scissors && computerOptions === paper) || (chooseOptions === rock && computerOptions === scissors)) {
//         console.log('你赢了!');
//     } else if (chooseOptions === computerOptions) {
//         console.log('平局!');
//     } else {
//         console.log('你输了!');
//     }
// }
// const userOptions = process.argv.slice(2)[0];
// userChoose(userOptions);

// 使用模块规范改造石头、剪刀、布的游戏
// const game = require('./module');
// let count = 0;
// console.log('请输入您要出的选项:');
// process.stdin.on('data', (result) => {
//     const userOptions = result.toString().trim();
//     const gameResult = game(userOptions);
//     if (gameResult === 1) {
//         console.log('你赢了!');
//         count++;
//     } else if (gameResult === -1) {
//         console.log('你输了!');
//     } else {
//         console.log('平局!');
//     }
//     if (count === 3) {
//         console.log('你太厉害了!我不跟你玩儿了!');
//         process.exit(2);
//     }
// });

// 实现网页版石头、剪刀、布的游戏
// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');
// const path = require('path');
// const fs = require('fs');
// const game = require('./module');
// const PORT = 3000;
// let count = 0,
//     outFlag = true,
//     out = [{data: '你太厉害了!我不跟你玩儿了!'}];
// const server = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') {
//         res.statusCode = 200;
//         res.end();
//         return;
//     }
//     if (req.url.includes('/game')) {
//         const {query} = url.parse(req.url);
//         const {action} = querystring.parse(query);
//         const gameResult = game(action);
//         let gameResultText;
//         if (gameResult === 1) {
//             gameResultText = '你赢了!';
//             count++;
//         } else if (gameResult === -1) {
//             gameResultText = '你输了!';
//         } else {
//             gameResultText = '平局!';
//         }
//         if (count >= 3) {
//             res.statusCode = 500;
//             const length = out.length;
//             if (length > 1) {
//                 out[0] = out[length - 1];
//                 out.length = 1;
//             }
//             if (length <= 1 && outFlag) {
//                 out.unshift({data: gameResultText});
//                 outFlag = false;
//             }
//             res.end(JSON.stringify(out));
//             return;
//         }
//         res.statusCode = 200;
//         res.end(JSON.stringify({data: gameResultText}));
//     }
//     if (req.url === '/') {
//         res.statusCode = 200;
//         fs.createReadStream(path.resolve(process.cwd(), './src/questions/index.html'), 'utf-8').pipe(res);
//     }
// });
// server.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}~`);
// });

// 用 express 优化石头、剪刀、布的游戏
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const game = require('./module');
// const PORT = 3000;
// let count = 0,
//     pickCount = 0,
//     lastPick = null,
//     outFlag = true,
//     userPick = [{data: '你作弊!'}],
//     userPickFlag = true,
//     afterUserPick = [{data: '我不跟你玩了!'}],
//     out = [{data: '你太厉害了!我不跟你玩了!'}];
// const app = express();
// app.get('/favicon', (req, res) => {
//     res.status(200);
//     res.send('');
//     return;
// });
// app.get('/game', (req, res, next) => {
//     if (!userPickFlag) {
//         res.status(500);
//         res.send(afterUserPick);
//         return;
//     }
//     if (pickCount >= 2) {
//         res.status(400);
//         res.send(userPick);
//         userPickFlag = false;
//         return;
//     }
//     next();
//     console.log(res.value);
//     const {action} = res;
//     if (!lastPick || lastPick !== action) {
//         pickCount = 0;
//     } else {
//         pickCount++;
//     }
//     lastPick = action;
// }, (req, res, next) => {
//     const {action} = req.query;
//     const gameResult = game(action);
//     res.gameResult = gameResult;
//     res.action = action;
//     next();
// }, (req, res, next) => {
//     const {gameResult} = res;
//     let gameResultText;
//     if (gameResult === 1) {
//         gameResultText = '你赢了!';
//         count++;
//     } else if (gameResult === -1) {
//         gameResultText = '你输了!';
//     } else {
//         gameResultText = '平局!';
//     }
//     res.gameResultText = gameResultText;
//     next();
// }, (req, res, next) => {
//     const {gameResultText} = res;
//     if (count >= 3) {
//         const {length} = out;
//         if (length > 1) {
//             out[0] = out[length - 1];
//             out.length = 1;
//         }
//         if (outFlag) {
//             out.unshift({data: gameResultText});
//             outFlag = false;
//         }
//         res.status(500);
//         res.send(JSON.stringify(out));
//         return;
//     }
//     next();
// }, (req, res, next) => {
//     const {gameResultText} = res;
//     res.status(200);
//     res.send({data: gameResultText});
//     res.value = 'build';
//     next();
// });
// app.get('/', (req, res, next) => {
//     res.status(200);
//     res.send(fs.readFileSync(path.resolve(process.cwd(), './src/questions/index.html'), 'utf-8'));
// });
// app.listen(PORT, () => {
//     console.log(`Server is running at localhost:${PORT}`);
// });

// 用 koa 优化石头、剪刀、布的游戏
// const Koa = require('koa');
// const mount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
// const game = require('./module');
// const PORT = 3000;
// const koa = new Koa();
// const gameKoa = new Koa();
// let count = 0,
//     sameFlag = true,
//     sameCount = 0,
//     lastOptions,
//     userFlag = true,
//     userSame = {data: '你作弊!'},
//     userSameAfter = {data: '我不跟你玩儿了!'},
//     userOver = [{data: '你太厉害了!我不跟你玩儿了!'}];
// koa.use(mount('/favicon.ico', async (ctx, next) => {
//     ctx.response.status = 200;
//     ctx.response.body = '';
//     await next();
// }));
// koa.use(mount('/game', gameKoa));
// koa.use(mount('/', async (ctx, next) => {
//     ctx.response.status = 200;
//     ctx.response.body = fs.readFileSync(path.resolve(process.cwd(), './src/questions/index.html'), 'utf-8');
// }));
// gameKoa.use(async (ctx, next) => {
//     if (!sameFlag) {
//         ctx.response.status = 500;
//         ctx.response.body = JSON.stringify(userSameAfter);
//         return;
//     }
//     if (sameCount >= 2) {
//         ctx.response.status = 400;
//         ctx.response.body = JSON.stringify(userSame);
//         sameFlag = false;
//         return;
//     }
//     await next();
//     if (typeof lastOptions === 'undefined' || lastOptions !== ctx.action) {
//         sameCount = 0;
//     } else {
//         sameCount++;
//     }
//     lastOptions = ctx.action;
// });
// gameKoa.use(async (ctx, next) => {
//     const {action} = ctx.request.query;
//     const gameResult = game(action);
//     ctx.gameResult = gameResult;
//     ctx.action = action;
//     await next();
// });
// gameKoa.use(async (ctx, next) => {
//     const {gameResult} = ctx;
//     let gameResultText;
//     if (gameResult === 1) {
//         gameResultText = '你赢了!';
//         count++;
//     } else if (gameResult === -1) {
//         gameResultText = '你输了!';
//     } else {
//         gameResultText = '平局!';
//     }
//     ctx.gameResultText = gameResultText;
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             ctx.value = 'wtw';
//             resolve();
//         }, 4000);
//     });
//     await next();
// });
// gameKoa.use(async (ctx, next) => {
//     const {gameResultText} = ctx;
//     if (count >= 3) {
//         ctx.response.status = 500;
//         const length = userOver.length;
//         if (length > 1) {
//             userOver[0] = userOver[length - 1];
//             userOver.length = 1;
//         }
//         if (userFlag) {
//             userOver.unshift({data: gameResultText});
//             userFlag = false;
//         }
//         ctx.response.body = JSON.stringify(userOver);
//         return false;
//     }
//     await next();
// });
// gameKoa.use(async (ctx, next) => {
//     const {gameResultText} = ctx;
//     ctx.response.status = 200;
//     ctx.response.body = JSON.stringify({data: gameResultText});
// });
// koa.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}~`);
// });

// 单工通信
// const Socket = require('net').Socket;
// const PORT = 4000;
// const socket = new Socket({});
// socket.connect({
//     host: '127.0.0.1',
//     port: PORT,
//     keepAlive: true
// });
// setInterval(() => {
//     socket.write(Buffer.from('I\'m Gary,29 year\'s old~'));
// }, 1000);

// 半双工通信
// const Socket = require('net').Socket;
// const socket = new Socket({});
// const PORT = 4000;
// const lessonIds = [
//     136797,
//     136798,
//     136799,
//     136800,
//     136801,
//     136803,
//     136804,
//     136806,
//     136807,
//     136808,
//     136809,
//     141994,
//     143517,
//     143557,
//     143564,
//     143644,
//     146470,
//     146569,
//     146582
// ];
// const lessonIds_length = lessonIds.length;
// let index;
// socket.connect({
//     host: '127.0.0.1',
//     port: PORT,
//     keepAlive: true
// });
// index = Math.floor(Math.random() * lessonIds_length);
// socket.write(encode(lessonIds[index]));
// socket.on('data', (buffer) => {
//     console.log(`${lessonIds[index]}: ${buffer.toString().trim()}`);
//     index = Math.floor(Math.random() * lessonIds_length);
//     socket.write(encode(lessonIds[index]));
// });
// function encode(id) {
//     const buffer = Buffer.alloc(4);
//     buffer.writeInt32BE(id);
//     return buffer;
// }

// 全双工通信
// const Socket = require('net').Socket;
// const socket = new Socket({});
// const PORT = 4000;
// const lessonIds = [
//     136797,
//     136798,
//     136799,
//     136800,
//     136801,
//     136803,
//     136804,
//     136806,
//     136807,
//     136808,
//     136809,
//     141994,
//     143517,
//     143557,
//     143564,
//     143644,
//     146470,
//     146569,
//     146582
// ];
// let index,
//     oldBuffer = null,
//     seq = 0,
//     lessonLength = lessonIds.length;
// socket.connect({
//     host: '127.0.0.1',
//     port: PORT,
//     keepAlive: true
// });
// for (let i = 0; i < 100; i++) {
//     index = Math.floor(Math.random() * lessonLength);
//     socket.write(encode(lessonIds[index]));
// }
// socket.on('data', (buffer) => {
//     let packageLength;
//     while (packageLength = isComplete(buffer)) {
//         const package = buffer.slice(0, packageLength);
//         buffer = buffer.slice(packageLength);
//         const {seq, data} = decode(package);
//         console.log(`包 ${seq}: 接收到的数据为 ${data}`);
//     }
//     oldBuffer = buffer;
// });
// function encode(id) {
//     const body = Buffer.alloc(4);
//     body.writeInt32BE(id);
//     const header = Buffer.alloc(6);
//     header.writeInt16BE(seq);
//     header.writeInt32BE(body.length, 2);
//     console.log(`包 ${seq}: 请求的 id 为 ${id}`);
//     seq++;
//     return Buffer.concat([header, body]);
// }
// function decode(buffer) {
//     const seq = buffer.readInt16BE(),
//         data = buffer.slice(6).toString().trim();
//     return {
//         seq,
//         data
//     }
// }
// function isComplete(buffer) {
//     if (buffer.length < 6) {
//         return 0;
//     }
//     const bodyLength = buffer.readInt32BE(2);
//     return 6 + bodyLength;
// }

// 全双工通信(完整版)
// const Socket = require('net').Socket;
// const socket = new Socket({});
// const PORT = 4000;
// const lessonIds = [
//     136797,
//     136798,
//     136799,
//     136800,
//     136801,
//     136803,
//     136804,
//     136806,
//     136807,
//     136808,
//     136809,
//     141994,
//     143517,
//     143557,
//     143564,
//     143644,
//     146470,
//     146569,
//     146582
// ];
// const lessonLength = lessonIds.length;
// let index,
//     oldBuffer = null,
//     seq = 0;
// socket.connect({
//     host: '127.0.0.1',
//     port: PORT,
//     keepAlive: true
// });
// for (let i = 0; i < 100; i++) {
//     index = Math.floor(Math.random() * lessonLength);
//     socket.write(encode(lessonIds[index]));
// }
// socket.on('data', (buffer) => {
//     let packageLength;
//     while (packageLength = isComplete(buffer)) {
//         const package = buffer.slice(0, packageLength);
//         buffer = buffer.slice(packageLength);
//         const {seq, data} = decode(package);
//         console.log(`包 ${seq}: 接收到的数据为 ${data}`);
//     }
//     oldBuffer = buffer;
// });
// function encode(id) {
//     const body = Buffer.alloc(4);
//     body.writeInt32BE(id);
//     const header = Buffer.alloc(6);
//     header.writeInt16BE(seq);
//     header.writeInt32BE(body.length, 2);
//     console.log(`包 ${seq} 请求的 id 为 ${id}`);
//     seq++;
//     return Buffer.concat([header, body]);
// }
// function decode(buffer) {
//     const seq = buffer.readInt16BE(),
//         data = buffer.slice(6).toString().trim();
//     return {
//         seq,
//         data
//     }
// }
// function isComplete(buffer) {
//     if (buffer.length < 6) {
//         return 0;
//     }
//     const bodyLength = buffer.readInt32BE(2);
//     return 6 + bodyLength;
// }