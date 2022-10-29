// const fs = require('fs');
// 模拟迭代器
// function createIterator(arr) {
//     const length = arr.length;
//     let count = 0;
//     return {
//         next() {
//             return {
//                 value: arr[count++],
//                 done: count > length
//             }
//         }
//     };
// }
// const arr = ['Gary', 29, true, {hobby: 'computer'}];
// const iterator = createIterator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器
// function* generator() {
//     yield 2 + 5;
//     yield 4 * 8;
//     yield 22 * 55;
// }
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器内的循环
// const wtw = ['wtw', 29, true, {hobby: 'computer'}];
// function* generatorArr(arr) {
//     for (let val of arr) {
//         yield val;
//     }
// }
// const iterator = generatorArr(wtw);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器函数表达式
// const arr = ['Gary', 28, true, {hobby: 'computer'}];
// const createGenerator = function* (arr) {
//     for (let val of arr) {
//         yield val;
//     }
// };
// const iterator = createGenerator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 生成器对象的方法
// const wtw = {
//     name: 'Gary',
//     age: 29,
//     gender: 'man',
//     hobby: {hobby: 'computer'},
//     * createGenerator() {
//         const wtw_arr = Object.values(this);
//         for (let val of wtw_arr) {
//             yield val;
//         }
//     }
// };
// const iterator = wtw.createGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 访问默认迭代器
// const arr = ['Gary', 29, true, {hobby: 'computer'}];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 创建可迭代对象
// const wtw = {
//     name: 'Gary',
//     age: 29,
//     gender: 'man',
//     hobby: {
//         hobby: 'computer'
//     },
//     // 委托生成器
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// for (let val of wtw) {
//     console.log(val);
// }
// 内建迭代器
// 集合迭代器
// const arr = ['Gary', 28, 'man', {hobby: 'computer'}];
// const set = new Set(arr);
// for (let val of set) {
//     console.log(val);
// }
// const arr = [['name', 'Gary'], ['age', 28], ['gender', 'man'], [{hobby: 'computer'}, 'engineer']];
// const map = new Map(arr);
// for (let [key, val] of map) {
//     console.log(`${JSON.stringify(key)} ===> ${val}`);
// }
// 字符串迭代器
// const str = 'hello 𠮷 wtw';
// for (let val of str) {
//     console.log(val);
// }
// for (let key of Object.keys(str)) {
//     console.log(key);
// }
// for (let val of Object.values(str)) {
//     console.log(val);
// }
// for (let [key, val] of Object.entries(str)) {
//     console.log(`${JSON.stringify(key)} ===> ${val}`);
// }
// NodeList 迭代器
// 展开运算符
// const arr = ['Gary', 28, 'man', {hobby: 'computer'}];
// const set = new Set(arr);
// console.log(...set);
// const arr = [['name', 'Gary'], ['age', 28], ['gender', 'man'], [{hobby: 'computer'}, 'engineer']];
// const map = new Map(arr);
// console.log(...map);
// const str = 'hello 𠮷 wtw';
// console.log(...str);
// 高级生成器功能
// 给迭代器传递参数
// function* generator() {
//     let first = yield 1;
//     let second = yield first + 5;
//     yield second;
// }
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next(11));
// console.log(iterator.next());
// 在迭代器中抛出错误
// function* generator() {
//     let first = yield 1;
//     let second = yield first + 4;
//     yield second + 6;
// }
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(5));
// console.log(iterator.throw(new Error('error!!!')));
// console.log(iterator.next(15));
// function* generator() {
//     let first = yield 1;
//     let second;
//     try {
//         second = yield first + 4;
//     } catch (err) {
//         second = 6;
//     }
//     yield second + 6;
// }
//
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(5));
// console.log(iterator.throw(new Error('error!!!')));
// console.log(iterator.next());
// 生成器中的返回语句
// function* generator() {
//     let first = yield 3 + 5;
//     let second = yield first + 7;
//     return second;
// }
//
// const iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(10));
// const result = iterator.next(100);
// console.log(result);
// 委托生成器
// function* wtw() {
//     yield 'Gary';
//     yield 29;
//     yield 'man';
//     return {hobby: 'computer'};
// }
// function* person() {
//     let hobby = yield* wtw();
//     console.log(hobby);
//     yield hobby;
// }
// const iterator = person();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 异步任务执行器
// function run(generator) {
//     const task = generator();
//     let result = task.next();
//     (function step() {
//         const val = result.value,
//             done = result.done;
//         if (!done) {
//             if (typeof val === 'function') {
//                 val(function (err, data) {
//                     if (err) {
//                         task.throw(err);
//                     }
//                     result = task.next(data);
//                     step();
//                 });
//             } else {
//                 result = task.next(val);
//                 step();
//             }
//         }
//     })();
// }
// run(function* () {
//     const text_one = yield readFile('./src/iteratorGenerator/assets/1.txt');
//     console.log(text_one);
//     const text_two = yield readFile('./src/iteratorGenerator/assets/2.txt');
//     console.log(text_two);
// });
// function readFile(name) {
//     return function (callback) {
//         fs.readFile(name, callback);
//     };
// }

