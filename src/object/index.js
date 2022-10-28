// 对象
// 对象属性方法简写
// 可计算属性方法名
// 方法
// Object.is 除了 +0 -> -0 以及 NaN,其余都与 === 的结果相同
// console.log(-0 === +0);
// console.log(Object.is(-0, +0));
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));
// Object.assign
// 浅复制
// const person = {
//     name: 'wtw',
//     age: 28
// };
// console.log(Object.assign({}, person, {age: 29, hobby: 'engineer'}));
// 重复的对象属性方法
// const person = {
//     name: 'Gary',
//     name: 'wtw',
//     age: 29
// };
// console.log(person);
// 自有属性枚举排序
// const person = {
//     2: 200,
//     1: 'first',
//     a: 'a',
//     c: 'c',
//     100: 'hundred'
// };
// person.d = 'desert';
// console.log(Object.getOwnPropertyNames(person));
// console.log(Reflect.ownKeys(person));
// for (let key in person) {
//     console.log(key);
// }
// console.log(Object.keys(person));
// console.log(JSON.stringify(person));
// 增强对象原型
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function WTW(name, age, hobby) {
//     Person.call(this, name, age);
//     this.hobby = hobby;
// }
//
// Object.setPrototypeOf(WTW.prototype, Person.prototype);
// const wtw = new WTW('wtw', 29, 'engineer');
// console.log(Object.getPrototypeOf(wtw) === WTW.prototype);
// console.log(wtw.__proto__ === WTW.prototype);
// 原型访问 Super 引用
// const person = {
//     name: 'wtw',
//     age: 29,
//     introduce() {
//         return `I'm ${this.name}, ${this.age} year's old`;
//     }
// };
// const wtw = {
//     name: 'Gary',
//     hobby: 'engineer',
//     introduce() {
//         return `${Object.getPrototypeOf(this).introduce.call(this)}, I love ${this.hobby}`
//     }
// };
// super 引用绑定内置对象 [[HomeObject]],可直接访问原型
// const wtw = {
//     name: 'Gary',
//     hobby: 'engineer',
//     introduce() {
//         return `${super.introduce()}, I love ${this.hobby}`
//     }
// };
// Object.setPrototypeOf(wtw, person);
// console.log(wtw.introduce());
// const wtw_ano = Object.create(wtw);
// console.log(wtw_ano.introduce());
// 方法正式的定义