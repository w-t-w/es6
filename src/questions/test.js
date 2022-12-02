// 2.
// const o = {1: 122, 2: 256, 5: 888};
// function toArray(o) {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         _o[key - 1] = o[key];
//     }
//     _o.length = 12;
//     return Array.from(_o, item => {
//         return item ? item : null;
//     });
// }
// const result = toArray(o);
// console.log(result);

// 7.
// var name = 'Tom';
// (function () {
//     if(typeof name == 'undefined') {
//         var name = 'Jack';
//         console.log('Goodbye ' + name);
//     } else {
//         console.log('Hello ' + name);
//     }
// })();

// 1.
// var name = 'Rose';
// function getName() {
//     console.log(this);
//     return this.name;
// }
// try {
//     const result = getName.call(null);
//     console.log(result);
// } catch (e) {
//     console.log('error', e);
// }
// try {
//     const result = getName.apply(undefined);
//     console.log(result);
// } catch (e) {
//     console.log('error', e);
// }
// const obj = {
//     name: 'Jack',
//     getName() {
//         return this.name;
//     }
// };
// const getMyName = obj.getName;
// getMyName();

// 2. 超时处理
// const timeoutPromise = (promise, timeout) => Promise.race([promise, new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject({
//             status: 'rejected',
//             reason: '请求超时'
//         });
//     }, timeout);
// })]);