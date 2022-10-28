// 参数的默认值
// 'use strict';
// function person(name = 'Gary', age = 26) {
//     console.log(name, age);
//     console.log(arguments[0], arguments[1]);
//     name = 'Gary';
//     age = 29;
//     console.log(name, age);
//     console.log(arguments[0], arguments[1]);
// }
// person('wtw', 28);
// const person = {
//     getName() {
//         return 'Gary';
//     }
// };
// function personWtw(name = person.getName(), age = 29) {
//     console.log(name, age);
// }
// personWtw();
// function personWtw(name = 'Gary', age = 29) {
//     // 相当于
//     // let name = age;
//     // let age = 29;
//     console.log(name, age);
// }
// personWtw();
// 不定参数
// pick
// function pick(source) {
//     const result = {};
//     for (let i = 1; i < arguments.length; i++) {
//         if (source[arguments[i]] !== undefined) {
//             result[arguments[i]] = source[arguments[i]];
//         }
//     }
//     return result;
// }
// function pick(source, ...props) {
//     const result = {};
//     for (let val of props) {
//         if (source[val]) {
//             result[val] = source[val];
//         }
//     }
//     return result;
// }
// const obj = {
//     name: 'Gary',
//     age: 29,
//     hobby: 'engineer'
// };
// console.log(pick(obj, 'name', 'hobby'));
// 增强的 Function 构造函数
// 参数的默认值
// 不定参数
// 展开运算符
// const numArr = [36, 40, 100, 80, 52, 77, 99, 8, 24, 120, 16, 33];
// console.log(Math.max(...numArr));
// console.log(Math.min(...numArr));
// name 属性
// function person(name, age, hobby) {
//     console.log(`I'm ${name}, ${age} year's old, I love ${hobby}`);
// }
// console.log(person.name);
// const person = {
//     name: 'wtw',
//     getName: function getPerson() {
//         return this.name;
//     },
//     get nameHave() {
//         return this.name;
//     }
// };
// console.log(person.getName(), person.getName.name, person.nameHave, person.nameHave.name);
// const func_new = new Function();
// console.log(func_new.name);
// const obj = {
//     name: 'Gary',
//     age: 29,
//     hobby: 'engineer'
// };
// function person() {
//     console.log(this.name);
//     console.log(this.age);
// }
// const personBind = person.bind(obj);
// console.log(personBind.name);
// 元属性 new.target
// [[Call]]
// [[Constructor]]
// function Person(name, age) {
//     if (!(this instanceof Person)) {
//         throw new TypeError('此函数只可被构造调用');
//     }
//     this.name = name;
//     this.age = age;
// }
// const wtw = new Person('wtw', 29);
// console.log(wtw.name, wtw.age);
// const simon = {};
// Person.call(wtw, 'wtw', 30);
// console.log(simon);
// console.log(wtw.name, wtw.age);
// function Person(name, age) {
//     console.log(new.target);
//     if (new.target === undefined) {
//         throw new TypeError('此函数只可被构造调用');
//     }
//     this.name = name;
//     this.age = age;
// }
// const wtw = new Person('wtw', 29);
// console.log(wtw.name, wtw.age);
// const simon = {};
// Person.call(wtw, 'wtw', 30);
// console.log(simon);
// console.log(wtw.name, wtw.age);
// 块级函数
// function foo(condition) {
//     console.log(bar);
//     if (condition) {
//         function bar() {
//
//         }
//     }
//     console.log(bar);
// }
// foo();
// 箭头函数
// 无 this、super、arguments以及new.target
// 不能使用 new 构造调用
// 无原型链
// const add = num => num * 2;
// const addAno = (num, numAno) => num + numAno;
// const addThree = (num, numAno, numThree) => {
//     return num + numAno + numThree
// };
// const addObj = () => ({name: 'wtw', age: 28});
// console.log(add(4));
// console.log(addAno(4, 5));
// console.log(addThree(4, 5, 6));
// console.log(addObj());
// const person = {
//     name: 'wtw',
//     age: 29,
//     introduce() {
//         setTimeout(() => {
//             console.log(`I'm ${this.name}, ${this.age} year's old`);
//         }, 1000);
//     }
// };
// person.introduce();
// const person = () => {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// };
// person('wtw', 29);
// const person = function (name, age) {
//     return () => arguments[0]
// };
// const wtw = person('wtw', 29);
// console.log(wtw());
// 尾调用优化
// 1. 必须是函数的最后一步执行
// 2. 不得使用任意函数内的变量,避免出现闭包
// 3. 执行的结果必须返回
// 原理: 防止创建多堆栈存储造成堆栈溢出,重复利用单堆栈高效执行.
// 应用: 递归
// 阶乘
// console.time('cost');
// function factorial(n) {
//     if (n === 1)
//         return n;
//     return n * factorial(n - 1);
// }
// factorial(9000);
// console.timeEnd('cost');
// console.time('cost');
// function factorial(n, result = 1) {
//     if (n === 1)
//         return result;
//     const _result = result * n;
//     return factorial(n - 1, _result);
// }
// console.log(factorial(9000));
// console.timeEnd('cost');