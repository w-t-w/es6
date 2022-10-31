// 基本用法
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     introduce() {
//         console.log(`Hello, I'm ${this.name}, ${this.age} year's old, I love ${this.hobby}`);
//     }
// }
// let wtw = new Person('wtw', 29, {hobby: 'computer'});
// console.log(wtw instanceof Person);
// console.log(wtw instanceof Object);
// const classical = new wtw.introduce();
// for (let key in wtw) {
//     console.log(key);
// }
// ES5 模拟类
// let Person = (function () {
//     const Person = function (name, age, hobby) {
//         if (new.target === undefined) {
//             throw new TypeError('必须使用 new 构造调用!');
//         }
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     };
//     Object.defineProperty(Person.prototype, 'introduce', {
//         value: function () {
//             if (new.target !== undefined) {
//                 throw new Error('原型链上的方法不可使用 new 构造调用');
//             }
//             console.log(`hello, I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//         },
//         enumerable: false,
//         configurable: true,
//         writable: true
//     });
//     return Person;
// })();
// const wtw = new Person('wtw', 29, {hobby: 'computer'});
// console.log(wtw instanceof Person);
// console.log(wtw instanceof Object);
// const classical = new wtw.introduce();
// for (let key in wtw) {
//     console.log(key);
// }
// 类表达式
// const Person = class {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// };
// const wtw = new Person('wtw', 29, {hobby: 'computer'});
// wtw.introduce();
// 命名的类表达式
// let Person = class Person_ano {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// }
// const wtw = new Person('wtw', 29, {hobby: 'computer'});
// console.log(wtw instanceof Person);
// console.log(wtw instanceof Object);
// wtw.introduce();
// 使用 ES5 去模拟命名类表达式
// let Person = (function () {
//     const Person_ano = function (name, age, hobby) {
//         if (new.target === undefined) {
//             throw new TypeError('类必须使用 new 构造调用!');
//         }
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     Object.defineProperty(Person_ano.prototype, 'introduce', {
//         value: function () {
//             if (new.target !== undefined) {
//                 throw new TypeError('原型链上的方法不可使用 new 构造调用!');
//             }
//             console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//         },
//         enumerable: false,
//         writable: true,
//         configurable: true
//     });
//     return Person_ano;
// })();
// const wtw = new Person('wtw', 29, {hobby: 'computer'});
// wtw.introduce();
// for (let key in wtw) {
//     console.log(key);
// }
// 作为一级公民的类
// 类可被作为参数传递
// function createObject(classObj, ...args) {
//     return new classObj(...args);
// }
// const wtw = createObject(class {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// }, 'wtw', 29, {hobby: 'computer'});
// wtw.introduce();
// 类可直接声明时构造调用
// const wtw = new class {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// }('wtw', 29, {hobby: 'computer'});
// wtw.introduce();
// 访问器属性
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     get getName() {
//         return this.name;
//     }
//
//     set setName(name) {
//         this.name = name;
//     }
// }
// const wtw = new Person('wtw');
// console.log(wtw.getName);
// wtw.setName = 'Gary Yin';
// console.log(wtw.getName);
// for (let key in wtw) {
//     console.log(key);
// }
// 使用 ES5 模拟拥有访问器属性的类
// let Person = (function () {
//     const Person = function (name) {
//         if (new.target === undefined) {
//             console.log('类必须使用 new 构造调用!');
//         }
//         this.name = name;
//     };
//     Object.defineProperties(Person.prototype, {
//         getName: {
//             enumerable: false,
//             configurable: true,
//             get: function () {
//                 return this.name;
//             }
//         },
//         setName: {
//             enumerable: false,
//             configurable: true,
//             set: function (name) {
//                 this.name = name;
//             }
//         }
//     });
//     return Person;
// })();
// const wtw = new Person('wtw');
// console.log(wtw.getName);
// wtw.setName = 'Gary';
// console.log(wtw.getName);
// for (let key in wtw) {
//     console.log(key);
// }
// 可计算的类成员
// 生成器方法
// class NumberDemo {
//     * createGenerator() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
// const classical = new NumberDemo('Gary', 29, {hobby: 'computer'});
// const iterator = classical.createGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 创造类可迭代对象
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// }
// const wtw = new Person('wtw', 29, 'computer');
// wtw.introduce();
// for (let val of wtw) {
//     console.log(val);
// }
// 静态成员
// class Person {
//     static getName() {
//         return `I'm Gary~`;
//     }
//
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// }
// console.log(Person.getName());
// 继承与派生
// 类方法遮蔽
// 基本用法
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
// }
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// ES5 中的用法
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype.area = function () {
//     return this.width * this.height;
// };
// function Square(width, height) {
//     RectAngle.call(this, width, height);
// }
// Object.setPrototypeOf(Square.prototype, RectAngle.prototype);
// Square.prototype.area = function () {
//     return Math.PI * RectAngle.prototype.area.call(this);
// };
// const square = new Square(10, 10);
// console.log(square.area());
// 继承的访问器属性
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     get getWidth() {
//         return this.width;
//     }
//     set setWidth(width) {
//         this.width = width;
//     }
// }
// class Square extends RectAngle {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// square.setWidth = 20;
// console.log(square.width);
// console.log(square.area());
// 继承的静态成员
// class Person {
//     static getName() {
//         return `I'm Gary~`;
//     }
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     introduce() {
//         console.log(`hello,I'm ${this.name},${this.age} year's old,I love ${this.hobby['hobby']}`);
//     }
// }
// class Gary extends Person {
//     constructor(name, age, hobby, gender) {
//         super(name, age, hobby);
//         this.gender = gender;
//     }
// }
// const wtw = new Gary('wtw', 30, {hobby: 'woman'}, 'man');
// console.log(Gary.getName());
// 继承自普通函数以及函数表达式
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype.area = function () {
//     return this.width * this.height;
// };
// class Square extends RectAngle {
//     area() {
//         return Math.PI * this.width * this.height;
//     }
// }
// const square = new Square(10, 20);
// console.log(square.area());
// class RectAngle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
// }
// function getArea() {
//     return RectAngle;
// }
// class Square extends getArea() {
//     area() {
//         return Math.PI * super.area();
//     }
// }
// const square = new Square(20, 20);
// console.log(square.area());
// const area = {
//     area() {
//         return Math.PI * this.width * this.height;
//     }
// };
// const perimeter = {
//     perimeter() {
//         return 2 * this.width * Math.PI;
//     }
// };
// function mixin(...mixin) {
//     function Bind(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     Object.assign(Bind.prototype, ...mixin);
//     return Bind;
// }
// class Square extends mixin(area, perimeter) {
// }
// const square = new Square(20, 20);
// console.log(square.area());
// console.log(square.perimeter());
// 内置对象继承
// function MyArray(...args) {
//     Array.call(this, ...args);
// }
// Object.setPrototypeOf(MyArray.prototype, Array.prototype);
// const arr = new MyArray();
// arr[0] = 'red';
// console.log(arr);
// console.log(arr.length);
// arr.length = 0;
// console.log(arr[0]);
// class MyArray extends Array {}
// const arr = new MyArray();
// arr[0] = 'red';
// console.log(arr);
// console.log(arr.length);
// arr[1] = 'yellow';
// arr.length = 0;
// console.log(arr[0], arr[1]);
// Symbol.species
// class MyArray extends Array {}
// const arr = new MyArray();
// arr[0] = 'red';
// arr[1] = 'yellow';
// arr[2] = 'blue';
// console.log(arr);
// console.log(arr instanceof MyArray);
// console.log(arr instanceof Array);
// const slice = arr.slice(0, 2);
// console.log(arr instanceof MyArray);
// console.log(arr instanceof Array);
// class RectAngle {
//     static get [Symbol.species]() {
//         return this;
//     }
//
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     clone() {
//         return new RectAngle[Symbol.species](this.width, this.height);
//     }
// }
// class Square extends RectAngle {
//     static get [Symbol.species]() {
//         return RectAngle;
//     }
// }
// const rectAngle = new RectAngle(10, 20),
//     rectAngleClone = rectAngle.clone();
// console.log(rectAngleClone instanceof RectAngle);
// const square = new Square(20, 20),
//     squareClone = square.clone();
// console.log(squareClone instanceof Square);
// console.log(squareClone instanceof RectAngle);
// class MyArray extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
// const arr = new MyArray();
// arr[0] = 'red';
// arr[1] = 'yellow';
// arr[2] = 'blue';
// arr[3] = 'purple';
// console.log(arr instanceof MyArray);
// console.log(arr instanceof Array);
// const slice = arr.slice(0, 2);
// console.log(slice instanceof MyArray);
// console.log(slice instanceof Array);
// new.target 在类中的使用
// 抽象基类