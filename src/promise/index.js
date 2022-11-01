// 创建未完成的 Promise
// const p1 = new Promise((resolve, reject) => {
//     resolve(42);
// });
// p1.then((val) => {
//     console.log(val);
// });
// 创建已处理的 Promise
// const resolve = Promise.resolve(42);
// resolve.then(val => {
//     console.log(val);
// });
// const reject = Promise.reject('wtw');
// reject.catch(err => {
//     console.log(err);
// });
// 抛出错误
// const p1 = new Promise((resolve, reject) => {
//     try {
//         throw new TypeError('类型错误');
//     } catch (err) {
//         reject(err);
//     }
// });
// p1.catch(err => {
//     console.log(err);
// });
// 全局处理 Promise 拒绝处理程序
// Nodejs
// unhandledRejection
// let reject;
// process.on('unhandledRejection', (reason, promise) => {
//     console.log('unhandledRejection');
//     console.log(reason.message);
//     console.log(promise === reject);
// });
// process.on('rejectionHandled', (promise) => {
//     console.log('rejectionHandled');
//     console.log(promise === reject);
// });
// reject = Promise.reject(new TypeError('类型错误'));
// setTimeout(() => {
//     reject.catch((err) => {
//         console.log(err);
//     });
// }, 2000);
// Nodejs 对于全局 Promise 的拒绝处理程序
// const unhandledRejectionMap = new Map();
// process.on('unhandledRejection', (reason, promise) => {
//     unhandledRejectionMap.set(promise, reason);
// });
// process.on('rejectionHandled', (promise) => {
//     unhandledRejectionMap.delete(promise);
// });
//
// function resolveUnhandledRejection(map) {
//     setInterval(() => {
//         map.forEach((reason, promise) => {
//             console.log(reason.message, promise);
//         });
//         map.clear();
//     }, 2 * 60 * 1000);
// }
// resolveUnhandledRejection(unhandledRejectionMap);
// let reject;
// reject = Promise.reject(new TypeError('类型错误~~~'));
// // 浏览器 Web 对于全局 Promise 的拒绝处理程序
// let reject;
// window.onunhandledrejection = function ({type, reason, promise}) {
//     console.log(type);
//     console.log(reason.message);
//     console.log(promise === reject);
// };
// window.onrejectionhandled = function ({type, promise}) {
//     console.log(type);
//     console.log(promise === reject);
// }
// reject = Promise.reject(new TypeError('类型错误###'));
// reject.catch(err => {
//     console.log(err);
// });
// setTimeout(() => {
//     reject.catch(err => {
//         console.log(err);
//     });
// }, 2000);
// 串行的 Promise
// const p1 = new Promise((resolve, reject) => {
//     resolve(48);
// });
// p1.then(val => {
//     console.log(val);
// }).then(() => {
//     console.log('Finished');
// });
// const p1 = new Promise((resolve, reject) => {
//     resolve(52);
// });
// const p2 = p1.then(val => {
//     console.log(val);
// });
// p2.then(() => {
//     console.log('Finished');
// });
// 捕获错误
// const p1 = new Promise((resolve, reject) => {
//     resolve(44);
// });
// p1.then(val => {
//     console.log(val);
//     throw new TypeError('类型错误!!!');
// }).catch(err => {
//     console.log(err);
// });
// const p1 = new Promise((resolve, reject) => {
//     resolve(44);
// });
// const p2 = p1.then(val => {
//     console.log(val);
//     throw new TypeError('类型错误!!!');
// });
// p2.catch(err => {
//     console.log(err);
// });
// 在 Promise 链中的返回值
// const p1 = new Promise((resolve, reject) => {
//     resolve(46);
// });
// p1.then(val => {
//     console.log(val);
//     return val + 1;
// }).then(val => {
//     console.log(val);
// });
// const p1 = new Promise((resolve, reject) => {
//     resolve(46);
// });
// const p2 = p1.then(val => {
//     console.log(val);
//     return val + 1;
// });
// p2.then(val => {
//     console.log(val);
// });
// const reject = Promise.reject(48);
// reject.catch(val => {
//     console.log(val);
//     return val + 1;
// }).then(val => {
//     console.log(val);
// });
// const p1 = Promise.reject(45);
// const reject = Promise.resolve(p1);
// reject.catch(val => {
//     console.log(val);
// });
// 非 Promise 的 Thenable 对象
// const o = {
//     then(resolve, reject) {
//         resolve(52);
//     }
// };
// const p1 = Promise.resolve(o);
// p1.then(val => {
//     console.log(val);
// });
// const o = {
//     then(resolve, reject) {
//         reject(52);
//     }
// };
// const reject = Promise.reject(52);
// const p1 = Promise.reject(reject);
// p1.then(val => {
//     console.log(val);
// });
// 在 Promise 链中返回 Promise
// const p1 = new Promise((resolve, reject) => {
//     resolve(88);
// });
// const p2 = new Promise((resolve, reject) => {
//     resolve(120);
// })
// p1.then(val => {
//     console.log(val);
//     return p2;
// }).then(val => {
//     console.log(120);
// });
// const p1 = new Promise((resolve, reject) => {
//     resolve(88);
// });
// const p2 = new Promise((resolve, reject) => {
//     reject(120);
// })
// const p3 = p1.then(val => {
//     console.log(val);
//     return p2;
// });
// p3.catch(err => {
//     console.log(err);
// });
// const p1 = new Promise((resolve, reject) => {
//     resolve(99);
// });
// p1.then(val => {
//     console.log(val);
//     const p2 = new Promise((resolve, reject) => {
//         reject(110);
//     });
//     return p2;
// }).catch(err => {
//     console.log(err);
// });
// Promise.all
// const p1 = Promise.resolve(46);
// const p2 = Promise.resolve(52);
// const p3 = new Promise((resolve, reject) => {
//     resolve(99);
// });
// const all = Promise.all([p1, p2, p3]);
// all.then(arr => {
//     console.log(arr instanceof Array);
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// });
// const p1 = Promise.resolve(46);
// const p2 = Promise.reject(52);
// const p3 = new Promise((resolve, reject) => {
//     resolve(99);
// });
// const all = Promise.all([p1, p2, p3]);
// all.catch(val => {
//     console.log(val instanceof Array);
//     console.log(val);
// });
// Promise.race
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(48)
//     }, 800)
// });
// const p2 = Promise.reject(52);
// const p3 = new Promise((resolve, reject) => {
//     resolve(99);
// });
// const race = Promise.race([p1, p2, p3]);
// race.catch(val => {
//     console.log(val);
// });
// 派生类继承自 Promise
// class MyPromise extends Promise {
//     success(...args) {
//         return this.then(...args);
//     }
//
//     failure(...args) {
//         return this.catch(...args);
//     }
// }
// const p1 = new MyPromise((resolve, reject) => {
//     resolve(60);
// });
// p1.success(val => {
//     console.log(val);
//     throw new TypeError('类型错误&&&');
// }).failure(err => {
//     console.log(err);
// });
// const resolve = MyPromise.resolve(45);
// const reject = MyPromise.reject(new TypeError('类型错误((('));
// console.log(resolve instanceof MyPromise);
// console.log(reject instanceof MyPromise);
// Promise 异步生成器
// const fs = require('fs');
// function run(taskRun) {
//     const task = taskRun();
//
//     let result = task.next();
//
//     (function step() {
//         const value = result.value,
//             done = result.done;
//         if (!done) {
//             const resolve = Promise.resolve(value);
//             resolve.then(data => {
//                 result = task.next(data);
//                 step();
//             }).catch(err => {
//                 result = task.throw(err);
//                 step();
//             });
//         }
//     })();
// }
// function readFile(name) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(name, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }
// run(function* () {
//     const text1 = yield readFile('./src/promise/assets/1.txt');
//     console.log(text1);
//     const text2 = yield readFile('./src/promise/assets/2.txt');
//     console.log(text2);
// });