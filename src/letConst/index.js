// 变量提升
// function doIt(condition) {
//     console.log(number);
//     if (condition) {
//         var number = 200;
//     }
//     console.log(number);
// }
// doIt();

// let
// function doIt(number) {
//     console.log(condition);
// 块级作用域
//     if (number) {
//         let condition;
//     }
//     console.log(condition);
// }
// doIt();

// 重复声明
// function foo() {
//     'use strict';
//     var bar = 'bar';
//     var bar = 'barbar';
//     console.log(bar);
// }
// foo();

// 禁止重复声明
// function foo() {
//     let bar = 'bar';
//     let bar = 'barbar';
// }
// foo();

// const
// const person = {
//     name: 'wtw',
//     age: 29
// };
// person.age = 30;
// console.log(person);
// person = {
//     name: 'Gary',
//     age: 26
// };
// const number = 100;
// number = 240;

// TDZ —— 临时死区
// {
//     console.log(name);
//     let name = 'wtw';
//     console.log(age);
//     const age = 30;
// }

// 循环块级作用域绑定
// var arr = [];
// for (var i = 0; i < 50; i++) {
//     arr.push(function () {
//         console.log('arr: ' + (i + 1));
//     });
// }
// arr.forEach(function (item) {
//     item();
// });
// 循环中的函数,闭包
// var arr = [];
// for (var i = 0; i < 50; i++) {
//     arr.push((function (i) {
//         return function () {
//             console.log('arr: ' + (i + 1));
//         };
//     })(i));
// }
// arr.forEach(function (item) {
//     item();
// });
// 循环中的函数,let
// var arr = [];
// for (let i = 0; i < 50; i++) {
//     arr.push(function () {
//         console.log('arr: ' + (i + 1));
//     });
// }
// arr.forEach(function (item) {
//     item();
// });
// 循环中的函数,const
// var arr = [];
// for (const i = 0; i < 50; i++) {
//     arr.push(function () {
//         console.log('arr: ' + (i + 1));
//     });
// }
// arr.forEach(function (item) {
//     item();
// });
// var obj = {
//     name: 'wtw',
//     age: 28,
//     hobby: 'engineer'
// };
// for(const key in obj) {
//     console.log(key, obj[key]);
// }

// 全局块作用域绑定
// var bar = 'bar';
// console.log(window.bar);
// console.log(window.bar === bar);
// let bar = 'bar';
// console.log(window.bar);
// console.log(window.bar === bar);

// 块级绑定最佳实践的进化
// 一般认为,平常使用 const 声明,遇到变量才用 let 声明.