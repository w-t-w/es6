// Symbol
// 基本用法
// 私有属性
// const element = {};
// const uid = Symbol('uid');
// const uid_ano = Symbol('uid');
// console.log(uid, uid_ano, uid === uid_ano);
// console.log(Object.is(uid, uid_ano));
// element[uid] = '370683199306300013';
// console.log(typeof uid, typeof uid_ano);
// console.log(element[uid]);
// for (let key in element) {
//     console.log(key);
// }
// Symbol 共享体系
// const uid = Symbol.for('uid');
// const person = {
//     [uid]: '370683199306300013'
// };
// const uid_ano = Symbol.for('uid');
// console.log(person[uid_ano]);
// console.log(uid === uid_ano);
// const uid_third = Symbol('uid');
// console.log(person[uid_third]);
// console.log(Symbol.keyFor(uid_ano));
// Symbol 类型强制转换
// const uid = Symbol('uid');
// console.log(String(uid));
// console.log(uid.toString());
// console.log(uid.valueOf());
// console.log(Number(uid));
// console.log(Boolean(uid));
// console.log('' + uid);
// console.log(uid / 1);
// Symbol 属性遍历
// Reflect.ownKeys, Object.getOwnPropertyNames
// const gender = Symbol.for('gender');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: 'computer',
//     [gender]: 'man',
//     [Symbol.iterator]() {
//         const self = this,
//             arr = Object.keys(this),
//             length = arr.length;
//         let count = 0;
//         return {
//             next() {
//                 return {
//                     value: self[arr[count++]],
//                     done: count > length
//                 }
//             }
//         };
//     }
// };
// for (let key in wtw) {
//     console.log(key);
// }
// for (let val of wtw) {
//     console.log(val);
// }
// console.log(Object.keys(wtw));
// console.log(Object.getOwnPropertyNames(wtw));
// console.log(Object.getOwnPropertySymbols(wtw));
// console.log(Reflect.ownKeys(wtw));
// wellKnown-symbols
// Symbol.hasInstance
// 用于重新定义 instanceof 判断构造对象是否在构造函数的原型链上
// const arr = ['Gary', 29, 'computer'];
// Object.defineProperty(Array, Symbol.hasInstance, {
//     value(val) {
//         return false;
//     }
// });
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// console.log(arr instanceof Array);
// console.log(Array[Symbol.hasInstance](arr));
// Symbol.isConcatSpreadable
// 用于重新定义对象是否与类数组 concat 合并
// const arr = ['Gary', 29, 'hobby'];
// const arr_ano = arr.concat([true, 'man'], {gender: 'woman'});
// console.log(arr_ano);
// const wtw = {
//     0: 'wtw',
//     1: 29,
//     2: 'computer',
//     length: 3,
//     [Symbol.isConcatSpreadable]: true
// };
// console.log([true, 'man', {gender: 'woman'}].concat(wtw));
// Symbol.search
// Symbol.replace
// Symbol.match
// Symbol.split
// 用于重新自定义 search、replace、match、split 以按照自定义规则查找、替换、匹配和分割字符串
// const changeSymbol = {
//     [Symbol.search](val) {
//         return val.length > 10;
//     },
//     [Symbol.replace](sourceValue, replaceValue) {
//         return sourceValue.length > 10 ? replaceValue : sourceValue;
//     },
//     [Symbol.match](val) {
//         return val.length > 10 ? [val] : null;
//     },
//     [Symbol.split](val) {
//         return val.length > 10 ? [val] : [];
//     }
// };
// const test = 'hello wtw';
// const test_ano = 'hello Gary~';
// console.log(test.search(changeSymbol));
// console.log(test_ano.search(changeSymbol));
// console.log(test.replace(changeSymbol, test_ano));
// console.log(test_ano.replace(changeSymbol, test));
// console.log(test.match(changeSymbol));
// console.log(test_ano.match(changeSymbol));
// console.log(test.split(changeSymbol));
// console.log(test_ano.split(changeSymbol));
// Symbol.toPrimitive
// 用于重新定义对象强制类型转换,数字模式,字符串模式,默认模式
// 数字模式
// 会先去调用 valueOf 转换,如若是原始值,则返回,否则
// 调用 toString 转换,如若是原始值,则返回,否则
// 如果再无可选值,则抛出错误
// 字符串模式
// 会先去调用 toString 转换,如若是原始值,则返回,否则
// 调用 valueOf 转换,如果是原始值,则返回,否则
// 如果再无可选值,则抛出错误
// function Temprerature(degree) {
//     this.degree = degree;
// }
// Temprerature.prototype[Symbol.toPrimitive] = function (hint) {
//     switch (hint) {
//         case 'string':
//             return `${this.degree}%`;
//         case 'number':
//             return this.degree / 4;
//         case 'default':
//             return `temprerature: ${this.degree}`;
//     }
// };
// const today = new Temprerature(26);
// today[Symbol.toPrimitive] = function (hint) {
//     switch (hint) {
//         case 'string':
//             return `${this.degree}%`;
//         case 'number':
//             return this.degree / 4;
//         case 'default':
//             return `temprerature: ${this.degree}`;
//     }
// };
// console.log(String(today));
// console.log(today / 2);
// console.log(today + '');
// Symbol.toStringTag
// 用于重新自定义对象类型识别 Object.prototype.toString.call
// function Person(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }
// const wtw = new Person('wtw', 26, 'computer');
// console.log(Object.prototype.toString.call(wtw) === '[object Object]');
// wtw[Symbol.toStringTag] = 'Person';
// console.log(Object.prototype.toString.call(wtw) === '[object Object]');
// console.log(Object.prototype.toString.call(wtw) === '[object Person]');
// Array.prototype[Symbol.toStringTag] = 'WTW';
// const arr = ['Gary', 29, 'computer'];
// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// console.log(Object.prototype.toString.call(arr) === '[object WTW]');