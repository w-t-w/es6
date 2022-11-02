// 基本用法
// const target = {};
// const proxy = new Proxy(target, {});
// console.log(target === proxy);
// console.log(proxy);
// console.log(typeof proxy);
// console.log(proxy instanceof Object);
// 代理陷阱
// set 代理陷阱验证属性
// const target = {
//     name: 'wtw'
// };
// const proxy = new Proxy(target, {
//     set(trapTarget, key, value, receiver) {
//         if (!trapTarget.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('新添加的属性值必须为数字!');
//             }
//         }
//         return Reflect.set(trapTarget, key, value, receiver);
//     }
// });
// proxy.name = 'Gary';
// proxy.age = 30;
// proxy.hobby = 'computer';
// console.log(proxy);
// get 代理陷阱验证对象结构
// const target = {
//     name: 'wtw',
//     age: 29
// };
// const proxy = new Proxy(target, {
//     get(trapTarget, key, receiver) {
//         if (!trapTarget.hasOwnProperty(key)) {
//             throw new ReferenceError('对象上不存在此属性!');
//         }
//         return Reflect.get(trapTarget, key, receiver);
//     }
// });
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.hobby);
// has 代理陷阱隐藏对象属性
// const target = {
//     name: 'wtw',
//     age: 29,
//     hobby: ['computer', 'read book']
// };
// const proxy = new Proxy(target, {
//     has(trapTarget, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.has(trapTarget, key);
//     }
// });
// console.log('name' in proxy);
// console.log('age' in proxy);
// console.log('hobby' in proxy);
// deleteProperty 代理陷阱防止删除对象属性
// const target = {
//     name: 'wtw',
//     age: 28,
//     hobby: ['computer', 'read book']
// };
// const proxy = new Proxy(target, {
//     deleteProperty(trapTarget, key) {
//         if (key === 'hobby') {
//             return false;
//         }
//         return Reflect.deleteProperty(trapTarget, key);
//     }
// });
// console.log(proxy.name);
// delete proxy.name;
// console.log(proxy.name);
// console.log(delete proxy.age);
// console.log(proxy.age);
// console.log(proxy);
// console.log(delete proxy.hobby);
// console.log(proxy.hobby);
// 原型代理陷阱
// const target = {};
// const proxy = new Proxy(target, {
//     setPrototypeOf(trapTarget, proto) {
//         return Reflect.setPrototypeOf(trapTarget, proto);
//     },
//     getPrototypeOf(trapTarget) {
//         return Reflect.getPrototypeOf(trapTarget);
//     }
// });
// console.log(Object.getPrototypeOf(proxy) === Object.prototype);
// const result = Object.setPrototypeOf(proxy, {});
// console.log(result === proxy);
// const target = {};
// const proxy = new Proxy(target, {
//     setPrototypeOf(trapTarget, proto) {
//         return false;
//     },
//     getPrototypeOf(trapTarget) {
//         return null;
//     }
// });
// console.log(Object.getPrototypeOf(proxy) === Object.prototype);
// console.log(Object.getPrototypeOf(proxy));
// Object.setPrototypeOf(proxy, {});
// 原型代理陷阱同样的方法的不同之处
// const result = Object.getPrototypeOf(1);
// console.log(result === Number.prototype);
// const reflectResult = Reflect.getPrototypeOf(1);
// const target = {};
// const result = Object.setPrototypeOf(target, {});
// console.log(result === target);
// const reflectResult = Reflect.setPrototypeOf(target, {});
// console.log(reflectResult === target);
// console.log(reflectResult);
// 属性可扩展代理陷阱
// const target = {
//     name: 'wtw'
// };
// const proxy = new Proxy(target, {
//     isExtensible(trapTarget) {
//         return Reflect.isExtensible(trapTarget);
//     },
//     preventExtensions(trapTarget) {
//         return Reflect.preventExtensions(trapTarget);
//     }
// });
// console.log(Object.isExtensible(proxy));
// proxy.age = 29;
// Object.preventExtensions(proxy);
// console.log(Object.isExtensible(proxy));
// proxy.hobby = ['computer', 'read books'];
// console.log(proxy);
// const target = {
//     name: 'wtw'
// };
// const proxy = new Proxy(target, {
//     isExtensible(trapTarget) {
//         return Reflect.isExtensible(trapTarget);
//     },
//     preventExtensions(trapTarget) {
//         return false;
//     }
// });
// console.log(Object.isExtensible(proxy));
// Object.preventExtensions(proxy);
// 属性可拓展代理陷阱同样的方法的不同之处
// const result = Object.isExtensible(1);
// console.log(result);
// const reflectResult = Reflect.isExtensible(1);
// console.log(reflectResult);
// const result = Object.preventExtensions(1);
// console.log(result);
// const reflectResult = Reflect.preventExtensions(1);
// console.log(reflectResult);
// 属性描述符代理陷阱
// const target = {
//     name: 'wtw'
// };
// const proxy = new Proxy(target, {
//     defineProperty(trapTarget, key, descriptor) {
//         return Reflect.defineProperty(trapTarget, key, descriptor);
//     },
//     getOwnPropertyDescriptor(trapTarget, key) {
//         return Reflect.getOwnPropertyDescriptor(trapTarget, key);
//     }
// });
// Object.defineProperty(proxy, 'age', {
//     value: 29
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'age'));
// 给 defineProperty 代理陷阱添加限制
// const target = {
//     name: 'wtw'
// };
// const proxy = new Proxy(target, {
//     defineProperty(trapTarget, key, descriptor) {
//         if (typeof key === 'symbol') {
//             return false;
//         }
//         return Reflect.defineProperty(trapTarget, key, descriptor);
//     }
// });
// const symbol = Symbol('wtw');
// Object.defineProperty(proxy, symbol, {
//     value: 'symbol'
// });
// 描述符对象的限制
// const target = {name: 'wtw'};
// const proxy = new Proxy(target, {
//     defineProperty(trapTarget, key, descriptor) {
//         console.log(descriptor.value);
//         console.log(descriptor.name);
//         return Reflect.defineProperty(trapTarget, key, descriptor);
//     }
// });
// Object.defineProperty(proxy, 'age', {
//     value: 29,
//     name: 'yin'
// });
// const target = {};
// const proxy = new Proxy(target, {
//     getOwnPropertyDescriptor(trapTarget, key) {
//         return {
//             name: 'yin'
//         }
//     }
// });
// console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
// ownKeys 陷阱
// const target = {};
// const proxy = new Proxy(target, {
//     ownKeys(trapTarget) {
//         return Reflect.ownKeys(trapTarget).filter(key => {
//             return (typeof key !== 'string') || (key[0] !== '_');
//         });
//     }
// });
// proxy.name = 'wtw';
// proxy._name = 'yin';
// proxy[Symbol('wtw')] = 'symbol';
// const keys = Object.keys(proxy);
// const names = Object.getOwnPropertyNames(proxy);
// const symbol = Object.getOwnPropertySymbols(proxy);
// console.log(keys.length);
// console.log(keys);
// console.log(names.length);
// console.log(names);
// console.log(symbol.length);
// console.log(symbol);
// 函数代理陷阱 apply、construct
// 验证函数参数
// function Person(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//     console.log(name, age, hobby);
// }
// const ProxyFunc = new Proxy(Person, {
//     apply(target, thisArg, argArray) {
//         for (let item of argArray) {
//             if (typeof item === 'number') {
//                 throw new TypeError('参数中不可存在数字类型!');
//             }
//         }
//         return Reflect.apply(target, thisArg, argArray);
//     }
// });
// const ProxyFunc = new Proxy(Person, {
//     construct(target, argArray) {
//         for (let item of argArray) {
//             if (typeof item === 'number') {
//                 throw new TypeError('参数中不可存在数字类型!');
//             }
//         }
//         return Reflect.construct(target, argArray);
//     }
// });
// const proxy = new ProxyFunc('wtw', 29, ['computer', 'read books']);
// 不用 new 构造调用函数
// function Person(name, age, hobby) {
//     if (new.target === undefined) {
//         throw new TypeError('此函数必须使用 new 构造调用');
//     }
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }
// const ProxyPerson = new Proxy(Person, {
//     apply(target, thisArg, argArray) {
//         return Reflect.construct(target, argArray);
//     }
// });
// const proxy = ProxyPerson('wtw', 29, ['computer', 'read books']);
// console.log(proxy);
// 覆写抽象基类
// class Person {
//     constructor(name, age, hobby) {
//         if (new.target === Person) {
//             throw new TypeError('此类为抽象基类!!');
//         }
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }
// const ProxyPerson = new Proxy(Person, {
//     construct(target, argArray) {
//         return Reflect.construct(target, argArray, function () {
//         });
//     }
// });
// const proxy = new ProxyPerson('wtw', 29, ['computer', 'read books']);
// const wtw = new Person('wtw', 29, ['computer', 'read books']);
// 可调用的类
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }
// const ProxyPerson = new Proxy(Person, {
//     apply(target, thisArg, argArray) {
//         return new target(...argArray);
//     }
// });
// const proxy = ProxyPerson('wtw', 29, ['computer', 'read books']);
// console.log(proxy);
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }
// const ProxyPerson = new Proxy(Person, {
//     apply(target, thisArg, argArray) {
//         return Reflect.construct(target, argArray);
//     }
// });
// const proxy = ProxyPerson('wtw', 29, ['computer', 'read books']);
// console.log(proxy);
// console.log(proxy instanceof ProxyPerson);
// console.log(proxy instanceof Person);
// 可撤销代理陷阱
// const target = {};
// const {proxy, revoke} = Proxy.revocable(target, {});
// proxy.name = 'wtw';
// console.log(proxy.name);
// revoke();
// console.log(proxy.name);
// 解决数组问题
// 检测数组索引
// 添加新元素时增加 length 的值
// 减少 length 的值来删除元素
// const colors = {length: 0};
// function isArrayIndex(index) {
//     const numericIndex = unit32(index);
//     return String(numericIndex) === index && numericIndex < (Math.pow(2, 32) - 1);
// }
// function unit32(index) {
//     return Math.floor(Math.abs(Number(index))) % Math.pow(2, 32);
// }
// const proxyColors = new Proxy(colors, {
//     set(target, key, value, receiver) {
//         let currentLength = Reflect.get(target, 'length');
//         if (isArrayIndex(key)) {
//             const numericKey = Number(key);
//             if (numericKey >= currentLength) {
//                 currentLength = numericKey + 1;
//             }
//             Reflect.set(target, 'length', currentLength, receiver);
//         } else {
//             for (let index = currentLength - 1; index >= value; index--) {
//                 Reflect.deleteProperty(target, index);
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// proxyColors[0] = 'wtw';
// proxyColors[1] = 29;
// proxyColors[2] = ['computer', 'read books'];
// proxyColors[3] = 'man';
// console.log(proxyColors);
// console.log(proxyColors.length);
// proxyColors.length = 2;
// console.log(proxyColors[2]);
// console.log(proxyColors[3]);
// console.log(proxyColors[0]);
// console.log(proxyColors);
// 实现 MyArray 类
// class MyArray {
//     constructor(length = 0) {
//         this.length = 0;
//         return new Proxy(this, {
//             set: (target, key, value, receiver) => {
//                 const currentLength = Reflect.get(target, 'length');
//                 if (this.isArrayIndex(key)) {
//                     if (key >= currentLength) {
//                         Reflect.set(target, 'length', Number(key) + 1, receiver);
//                     }
//                 } else {
//                     for (let index = currentLength - 1; index >= value; index--) {
//                         Reflect.deleteProperty(target, index);
//                     }
//                 }
//                 return Reflect.set(target, key, value, receiver);
//             }
//         });
//     }
//
//     static unit32(index) {
//         return Math.floor(Math.abs(Number(index))) % Math.pow(2, 32);
//     }
//
//     isArrayIndex(index) {
//         const numericIndex = this.constructor.unit32(index);
//         return String(numericIndex) === index && index < (Math.pow(2, 32) - 1);
//     }
// }
// const arr = new MyArray(3);
// arr[0] = 'wtw';
// arr[1] = 29;
// arr[2] = ['computer', 'read books'];
// console.log(arr.length);
// console.log(arr);
// arr[3] = 'man';
// console.log(arr.length);
// arr.length = 1;
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr);
// 将代理用作原型
// const target = {};
// const proxy = Object.create(new Proxy(target, {
//     defineProperty(target, p, attributes) {
//         if (typeof p === 'symbol') {
//             return false;
//         }
//         return Reflect.defineProperty(target, p, attributes);
//     }
// }));
// const symbol = Symbol('symbol');
// Object.defineProperty(proxy, symbol, {
//     value: 'symbol'
// });
// console.log(proxy);
// 在原型上使用 set 代理陷阱
// const target = {
//     name: 'wtw'
// };
// const proxy = Object.create(new Proxy(target, {
//     set(target, key, value, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             if (isNaN(value)) {
//                 throw new TypeError('新添加的属性值必须为数字!!!');
//             }
//         }
//         return Reflect.set(target, key, value, receiver);
//     }
// }));
// console.log(proxy.name);
// proxy.name = 'yin';
// proxy.age = 29;
// proxy.hobby = ['computer', 'read books!!'];
// 在原型上使用 get 代理陷阱
// const target = {
//     name: 'wtw'
// };
// const proxy = Object.create(new Proxy(target, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError('对象上不存在此属性!');
//         }
//         return Reflect.get(target, key, receiver);
//     }
// }));
// console.log(proxy.name);
// proxy.age = 29;
// console.log(proxy.age);
// 在原型上使用 has 代理陷阱
// const target = {
//     name: 'wtw'
// };
// const proxy = Object.create(new Proxy(target, {
//     has(target, key) {
//         if (key === 'hobby') {
//             throw new TypeError('爱好属性不可配置!!');
//         }
//         return Reflect.has(target, key);
//     }
// }));
// console.log(proxy.name);
// console.log('age' in proxy);
// proxy.age = 29;
// console.log('age' in proxy);
// proxy.hobby = ['computer', 'read books'];
// console.log('hobby' in proxy);
// 将代理用作类的原型
// function RectAngle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// RectAngle.prototype = new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError('对象上不存在此属性!');
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// const circle = new RectAngle(10, 10);
// console.log(circle.width);
// console.log(circle.height);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.widh * circle.height);
// function RectAngle() {
// }
// RectAngle.prototype = new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError('对象上不存在此属性!');
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const circle = new Square(20, 20);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.widh * circle.height);
// function RectAngle() {
// }
// const proxy = new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError('对象上不存在此属性!');
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
// }
// const circle = new Square(20, 20);
// console.log(Math.PI * circle.width * circle.height);
// console.log(Math.PI * circle.widh * circle.height);
// function RectAngle() {
// }
// const proxy = new Proxy({}, {
//     get(target, key, receiver) {
//         if (!target.hasOwnProperty(key)) {
//             throw new TypeError('对象上不存在此属性!');
//         }
//         return Reflect.get(target, key, receiver);
//     }
// });
// RectAngle.prototype = proxy;
// class Square extends RectAngle {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const circle = new Square(20, 20);
// console.log(Math.PI * circle.width * circle.height);
// console.log(circle.getArea());
// console.log(Math.PI * circle.widh * circle.height);
