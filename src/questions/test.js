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