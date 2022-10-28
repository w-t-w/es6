// Set
// 基本用法
// const set = new Set();
// set.add('wtw');
// set.add(29);
// set.add(true);
// set.add({hobby: 'computer'});
// console.log(set);
// console.log(set.has('wtw'));
// console.log(set.has(true));
// console.log(set.size);
// set.delete('wtw');
// console.log(set.has('wtw'));
// console.log(set.size);
// set.clear();
// console.log(set);
// console.log(set.size);
// set.forEach((item, key, ownSet) => {
//     console.log(item);
//     console.log(key);
//     console.log(set === ownSet);
// });
// 初始化声明并添加数据
// const person = ['wtw', 29, true, {hobby: 'computer'}];
// const set = new Set(person);
// console.log(set);
// 转换为数组
// const person = ['wtw', 29, true, {hobby: 'computer'}];
// const set = new Set(person);
// const wtw = [...set];
// console.log(wtw);
// 去重
// const deduplication = function (arr) {
//     return [...new Set(arr)];
// }
// const arr = [1, 2, 4, 3, 4, 6, 7, 8, 2, 9, 8, 3, 10, 1, 1, 5, 7, 8, 3, 5, 4];
// const arr_new = deduplication(arr);
// console.log(arr_new);

// WeakSet
// const set = new Set();
// let obj = {name: 'wtw'};
// set.add(obj);
// console.log(set.size);
// obj = null;
// console.log(set.size);
// console.log([...set]);
// const set = new WeakSet();
// let element = {type: 'div'};
// set.add(element);
// console.log(set.has(element));
// console.log(set.size);
// set.clear();
// set.forEach((item, key, ownSet) => {
//     console.log(item, key, ownSet);
// });
// console.log([...set]);
// for(let key of set.keys()) {
//     console.log(key);
// }
// for(let val of set.values()) {
//     console.log(val);
// }
// for(let [key, val] of set.entries()) {
//     console.log(`${key} => ${val}`);
// }
// element = null;
// console.log(set);

// Map
// const map = new Map();
// const hobby = {hobby: 'computer'};
// map.set('name', 'wtw');
// map.set('age', 29);
// map.set('gender', true);
// map.set(hobby, true);
// console.log(map);
// console.log(map.size);
// console.log(map.has('name'));
// console.log(map.has(hobby));
// map.delete('age');
// console.log(map.size);
// console.log(map.get(hobby));
// console.log(map.get('name'));
// map.clear();
// console.log(map.size);
// map.forEach((item, key, ownMap) => {
//     console.log(item, key);
//     console.log(ownMap === map);
// });
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let val of map.values()) {
//     console.log(val);
// }
// for (let [key, val] of map.entries()) {
//     console.log(`${JSON.stringify(key)} => ${val}`);
// }
// 初始化声明并添加数据
// const map = new Map([['name', 'wtw'], ['age', 29], ['gender', true]]);
// console.log(map.size);
// console.log(map);

// WeakMap
// const map = new WeakMap();
// map.set('name', 'wtw');
// const hobby = {hobby: 'computer'};
// map.set(hobby, 'engineer');
// console.log(map.size);
// console.log(map.has(hobby));
// console.log(map.get(hobby));
// map.clear();
// map.forEach((item, key, ownMap) => {
//     console.log(item, key);
//     console.log(ownMap === map);
// });
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let val of map.values()) {
//     console.log(val);
// }
// for (let [key, val] of map.entries()) {
//     console.log(`${JSON.stringify(key)} => ${val}`);
// }

// ES5 私有数据
// const Person = (function () {
//     const personal = {};
//     let personalId = 0;
//
//     function Person(name) {
//         Object.defineProperty(this, '_id', {
//             value: personalId++,
//             writable: false,
//             configurable: false,
//             enumerable: false
//         });
//         personal[this._id] = {name};
//     }
//
//     Person.prototype.getName = function () {
//         return personal[this._id]['name'];
//     };
//
//     return Person;
// })();
// const wtw = new Person('wtw');
// const gary = new Person('gary');
// const simon = new Person('simon');
// const lily = new Person('lily');
// console.log(lily._id);
// lily._id = 1;
// console.log(lily._id);
// console.log(lily.getName());
// console.log(gary.getName());
// console.log(wtw.getName());
// console.log(simon.getName());

// ES6 私有数据
// const Person = (function () {
//     const personal = new WeakMap();
//     class Person {
//         constructor(name) {
//             personal.set(this, {name});
//         }
//         getName() {
//             return personal.get(this)['name'];
//         }
//     }
//     return Person;
// })();
// let wtw = new Person('wtw');
// let gary = new Person('gary');
// let simon = new Person('simon');
// let lily = new Person('lily');
// console.log(lily.getName());
// console.log(gary.getName());
// console.log(wtw.getName());
// console.log(simon.getName());
// gary = null;
// console.log(gary.getName());