// compose
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => Math.pow(x, 2);
// const result = compose(multiply, add)(40);
// console.log('result:', result);

// pipe
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x ** 2;
// const result = pipe(add, multiply)(60);
// console.log('result', result);

// flat
// const flat = (arr = [], initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13]]], [14, 15, [16, 17, [18, 19, [20, 21]]]], [22, 23, [24, 25, [26, 27, [28, 29, [30, 31]]]]]];
// const result = flat(arr);
// console.log('result', result);

// layer Flat
// const flat = (arr = [], layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13]]], [14, 15, [16, 17, [18, 19, [20, 21]]]], [22, 23, [24, 25, [26, 27, [28, 29, [30, 31]]]]]];
// let result = flat(arr);
// console.log('result', result);
// result = flat(arr, 2);
// console.log('result', result);
// result = flat(arr, 3);
// console.log('result', result);
// result = flat(arr, 4);
// console.log('result', result);
// result = flat(arr, 5);
// console.log('result', result);

// fibonacci
// const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// let result = fibonacci(40);
// console.log('result', result);
// result = fibonacci(40);
// console.log('result', result);

// tailCall Fibonacci
// const fibonacci = (n = 0, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// let result = fibonacci(40);
// console.log('result', result);
// result = fibonacci(40);
// console.log('result', result);

// cache Fibonacci
// const memo = (fn = function () {
// }, hasher) => {
//     function memoFunc(...args) {
//         const cache = memoFunc.cache,
//             hashKey = hasher ? hasher.apply(this, args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn.apply(this, args);
//         }
//         return cache[hashKey];
//     }
//
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const fibonacci = n => n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const fibonacciFunc = memo(fibonacci);
// let result = fibonacciFunc(40);
// console.log('result', result);
// result = fibonacciFunc(40);
// console.log('result', result);

// curry
// const curryDemo = (a, b, c, d) => a + b + c + d;
// const curry = fn => function cache(...args) {
//     return args.length >= fn.length ? fn.apply(this, args) : (...innerArgs) => cache.apply(this, args.concat(innerArgs));
// }
// const curried = curry(curryDemo);
// let result = curried(1)(2)(3)(4);
// console.log('result', result);
// result = curried(1, 2)(3)(4);
// console.log('result', result);
// result = curried(1, 2, 3)(4);
// console.log('result', result);
// result = curried(1, 2, 3, 4);
// console.log('result', result);
// result = curried(2, 3)(4, 5);
// console.log('result', result);
// result = curried(3)(4, 5, 6);
// console.log('result', result);

// factorial
// const factorial = (n = 1) => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(5);
// console.log('result', result);

// tallCall Factorial
// const factorial = (n = 1, p = 1) => n === 1 ? n * p : factorial(n - 1, n * p);
// const result = factorial(6);
// console.log('result', result);

// debounce
// const debounce = (fn, timeout) => {
//     let timer = null;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, timeout);
//     };
// };

// throttle
// const throttle = (fn, timeout) => {
//     let timer = null,
//         firstRequest = true;
//     return function (...args) {
//         if (timer) {
//             return false;
//         }
//         if (firstRequest) {
//             fn.apply(this, args);
//             firstRequest = false;
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// };

// shallow Copy
// const shallowCopy = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// };
// const secrets = Symbol.for('secrets');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     hobby: {sports: ['football', 'basketball']},
//     introduce() {
//     },
//     [secrets]: 'wangJinJin',
//     dislike: undefined
// };
// const me = shallowCopy(wtw);
// me.name = 'gary'
// console.log('me', me);
// console.log('wtw', wtw);
// console.log('---------');
// wtw.hobby.sports = ['football', 'basketball', 'tennis'];
// console.log('me', me);
// console.log('wtw', wtw);

// deep Clone
// const deepClone = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             if (o[key] && typeof o[key] === 'object') {
//                 _o[key] = deepClone(o[key]);
//             } else {
//                 _o[key] = o[key];
//             }
//         }
//     }
//     return _o;
// }
// const secrets = Symbol.for('secrets');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     hobby: {sports: ['football', 'basketball']},
//     introduce() {
//     },
//     [secrets]: 'wangJinJin',
//     dislike: undefined
// };
// wtw.me = wtw;
// const me = deepClone(wtw);
// me.name = 'gary';
// console.log('me', me);
// console.log('wtw', wtw);
// console.log('---------');
// wtw.hobby.sports = ['football', 'basketball', 'tennis'];
// console.log('me', me);
// console.log('wtw', wtw);

// deep Clone Loop
// const deepClone = o => {
//     const source = new WeakMap();
//     function deepCloneInner(o) {
//         const _o = Array.isArray(o) ? [] : {};
//         const existObj = source.get(o);
//         if (existObj) return existObj;
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deepCloneInner(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//     return deepCloneInner(o);
// };
// const secrets = Symbol.for('secrets');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     hobby: {sports: ['football', 'basketball']},
//     introduce() {
//     },
//     [secrets]: 'wangJinJin',
//     dislike: undefined
// };
// wtw.me = wtw;
// const me = deepClone(wtw);
// me.name = 'gary';
// console.log('me', me);
// console.log('wtw', wtw);
// console.log('---------');
// wtw.hobby.sports = ['football', 'basketball', 'tennis'];
// console.log('me', me);
// console.log('wtw', wtw);

// pick
// const pick = (o, ...property) => {
//     const source = new WeakMap();
//     function deepClone(o) {
//         const _o = Array.isArray(o) ? [] : {};
//         const existObj = source.get(o);
//         if (existObj) return existObj;
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && property.includes(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deepClone(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     }
//     return deepClone(o);
// };
// const secrets = Symbol.for('secrets');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     hobby: {sports: 'basketball'},
//     introduce() {
//     },
//     [secrets]: 'wangJinJin',
//     dislike: undefined
// };
// wtw.me = wtw;
// const me = pick(wtw, 'name', 'hobby', 'sports', 'age', 'introduce', secrets);
// me.name = 'gary';
// console.log('me', me);
// console.log('wtw', wtw);
// console.log('---------');
// wtw.hobby.sports = 'tennis';
// console.log('me', me);
// console.log('wtw', wtw);

// new
// function newCall(fn, ...args) {
//     if (typeof fn !== 'function') {
//         throw new TypeError('The first argument to a function must be a method');
//     }
//     const o = {};
//     const result = fn.apply(o, args);
//     const isObject = typeof result === 'object' && result !== null;
//     const isFunction = typeof result === 'function';
//     if (isObject || isFunction) {
//         return result;
//     }
//     // o.__proto__ = fn.prototype;
//     Object.setPrototypeOf(o, fn.prototype);
//     return o;
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = newCall(Person, 'wtw', 29);
// console.log(wtw);
// wtw.introduce();

// instanceof
// function instanceofCall(targetObject, targetClass) {
//     if (!targetObject || !targetClass || !targetObject.__proto__ || !targetClass.prototype) {
//         return false;
//     }
//     let current = targetObject.__proto__;
//     while (current) {
//         if (current === targetClass.prototype) {
//             return true;
//         }
//         current = current.__proto__;
//     }
//     return false;
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = new Person('wtw', 29);
// console.log(instanceofCall(wtw, Person));
// console.log(instanceofCall(wtw, Object));
// console.log(instanceofCall({}, Object));
// console.log(instanceofCall({}, Person));

// unit
// const unit = fn => {
//     try {
//         fn();
//     } catch (err) {
//         console.error('error:', err);
//     }
// };
// const test = (desc, result) => {
//     return {
//         expected(expectedResult) {
//             if (result === expectedResult) {
//                 console.log(`${desc} is PASSED!`);
//             } else {
//                 console.error(`${desc} is FAILED:the expected result is ${expectedResult},but get ${result}!`);
//             }
//         }
//     };
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit(() => {
//     test('3 + 4', add(3, 4)).expected(7);
//     test('6 * 9', multiply(6, 9)).expected(54);
//     test('9 * 9', multiply(8, 9)).expected(81);
// });

// call
// if (Function.prototype.callBind === undefined) {
//     Function.prototype.callBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The caller to this method must be a function');
//         }
//         const symbol = Symbol.for('call');
//         context[symbol] = this;
//         const result = context[symbol](...args);
//         delete context[symbol];
//         return result;
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name},${this.age} year's old~`);
// };
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// Person.callBind(wtw, 'gary', 30);
// console.log(wtw);

// apply
// if (Function.prototype.applyBind === undefined) {
//     Function.prototype.applyBind = function (context, args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The caller to this method must be a function');
//         }
//         const symbol = Symbol.for('apply');
//         context[symbol] = this;
//         const result = context[symbol](...args);
//         delete context[symbol];
//         return result;
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const gary = {
//     name: 'gary',
//     age: 22
// };
// Person.applyBind(gary, ['white_than_wood', 26]);
// console.log(gary);

// bind
// if (Function.prototype.bindMock === undefined) {
//     Function.prototype.bindMock = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The caller to this method must be a function');
//         }
//         const self = this;
//         function F() {
//         }
//         const fBind = function (...innerArgs) {
//             return self.apply(this instanceof fBind ? this : context, args.concat(innerArgs));
//         }
//         Object.setPrototypeOf(F.prototype, this.prototype);
//         Object.setPrototypeOf(fBind.prototype, F.prototype);
//         return fBind;
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name},${this.age} year's old~`);
// };
// const wtw = {
//     name: 'whiteThanWood',
//     age: 29
// };
// const lily = {
//     name: 'lily',
//     age: 28
// };
// const white_than_wood = Person.bindMock(wtw, 'white_than_wood');
// white_than_wood(38);
// console.log(wtw);
// const wtwBind = Person.bindMock(wtw, 'wtw');
// const wtwObj = new wtwBind(40);
// console.log(wtw);
// console.log(wtwObj);
// wtwObj.introduce();
// const w_than_w = Person.bindMock(wtw, 'w_than_w');
// w_than_w.call(lily, 25);
// console.log(wtw);
// console.log(lily);

// softBind
// if (Function.prototype.softBind === undefined) {
//     Function.prototype.softBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The caller to this method must be a function');
//         }
//         const self = this;
//         function F() {
//         }
//         const fBind = function (...innerArgs) {
//             return self.apply((!this || this === window) ? context : this, args.concat(innerArgs));
//         };
//         Object.setPrototypeOf(F.prototype, this.prototype);
//         Object.setPrototypeOf(fBind.prototype, F.prototype);
//         return fBind;
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name},${this.age} year's old~`);
// };
// const wtw = {
//     name: 'whiteThanWood',
//     age: 29
// };
// const lily = {
//     name: 'lily',
//     age: 28
// };
// const white_than_wood = Person.softBind(wtw, 'white_than_wood');
// white_than_wood(38);
// console.log(wtw);
// const wtwBind = Person.softBind(wtw, 'wtw');
// const wtwObj = new wtwBind(40);
// console.log(wtw);
// console.log(wtwObj);
// wtwObj.introduce();
// const w_than_w = Person.softBind(wtw, 'w_than_w');
// w_than_w.call(lily, 25);
// console.log(wtw);
// console.log(lily);

// Promise
// const PromiseCall = (() => {
//     const PENDING = 'PENDING';
//     const FULFILLED = 'FULFILLED';
//     const REJECTED = 'REJECTED';
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => callback());
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => callback());
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//         then(onFulfilled, onRejected) {
//             if (typeof onFulfilled !== 'function') {
//                 onFulfilled = value => value;
//             }
//             if (typeof onRejected !== 'function') {
//                 onRejected = reason => {
//                     if (reason instanceof Error) {
//                         throw reason;
//                     } else {
//                         throw new Error(reason);
//                     }
//                 }
//             }
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onFulfilled !== 'function') {
//                                 resolve(this.value);
//                             } else {
//                                 (function thenable(value) {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable.call(this, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }.bind(this))(this.value);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(this.reason);
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, reject) => {
//                     this.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(this.value);
//                                 } else {
//                                     (function thenable(value) {
//                                         then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject)
//                                         }
//                                     }.bind(this))(this.value);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//     }
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same'));
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             });
//         }
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return reject(x);
//             let then,
//                 call = false;
//             try {
//                 then = x.then;
//             } catch (err) {
//                 reject(err);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (call) return;
//                         call = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (call) return;
//                         call = true;
//                         reject(r);
//                     });
//                 } catch (err) {
//                     if (call) return;
//                     reject(err);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     return Promise;
// })();
// const promise = new PromiseCall((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve({
//                     then(resolve, reject) {
//                         resolve('hello,');
//                     }
//                 });
//             }
//         });
//     }, 300);
// });
// promise.then(val => {
//     console.log(val);
//     return `${val}wtw`;
// }).then(content => {
//     console.log(content);
//     return {
//         then(resolve, reject) {
//             resolve(`${content},29 year's old~`);
//         }
//     };
// }).then(end => {
//     console.log(end);
//     return new PromiseCall(resolve => resolve(`${end},my wife is wangJinJin`));
// }).then(result => {
//     console.log(result);
//     throw new TypeError(`${result},I love computer`);
// }).then(null, reason => {
//     console.error(reason);
// });

// complete Promise
// const PromiseCall = (() => {
//     const PENDING = 'PENDING';
//     const FULFILLED = 'FULFILLED';
//     const REJECTED = 'REJECTED';
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.value = value;
//                     this.status = FULFILLED;
//                     this.onFulfilledCallbacks.forEach(callback => callback());
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.reason = reason;
//                     this.status = REJECTED;
//                     this.onRejectedCallbacks.forEach(callback => callback());
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//         then(onFulfilled, onRejected) {
//             if (typeof onFulfilled !== 'function') {
//                 onFulfilled = value => value;
//             }
//             if (typeof onRejected !== 'function') {
//                 onRejected = reason => {
//                     if (reason instanceof Error)
//                         throw reason;
//                     else
//                         throw new Error(reason);
//                 };
//             }
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onFulfilled !== 'function') {
//                                 resolve(this.value);
//                             } else {
//                                 (function thenable(value) {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable.call(this, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }.bind(this))(this.value);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(this.reason);
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, reject) => {
//                     this.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(this.value);
//                                 } else {
//                                     (function thenable(value) {
//                                         then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }.bind(this))(this.value);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//         catch(onRejected) {
//             if (typeof onRejected !== 'function') {
//                 onRejected = reason => {
//                     if (reason instanceof Error)
//                         throw reason;
//                     else
//                         throw new Error(reason);
//                 };
//             }
//             return this.then(null, onRejected);
//         }
//         finally(fn) {
//             if (typeof fn !== 'function') {
//                 throw new TypeError('parameter must be a function');
//             }
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).then(() => {
//                     if (reason instanceof Error)
//                         throw reason;
//                     else
//                         throw new Error(reason);
//                 });
//             });
//         }
//     }
//     Promise.resolve = value => {
//         if (value instanceof Promise)
//             return value;
//         return new Promise(resolve => {
//             resolve(value);
//         });
//     };
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//     Promise.all = lists => {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[current++] = value;
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = function (lists) {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = function (lists) {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[current++] = {
//                         status: 'fulfilled',
//                         value
//                     };
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     result[current++] = {
//                         status: 'rejected',
//                         reason
//                     };
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same'));
//         if (x instanceof Promise) {
//             return x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             });
//         }
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return reject(x);
//             let then,
//                 call = false;
//             try {
//                 then = x.then;
//             } catch (err) {
//                 reject(err);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (call) return;
//                         call = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (call) return;
//                         call = true;
//                         reject(r);
//                     });
//                 } catch (err) {
//                     if (call) return;
//                     reject(err);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     return Promise;
// })();
// const promise = new PromiseCall((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve({
//                     then(resolve, reject) {
//                         resolve('hello,');
//                     }
//                 });
//             }
//         });
//     }, 300);
// });
// promise.then(val => {
//     console.log(val);
//     return `${val}wtw`;
// }).then(content => {
//     console.log(content);
//     return {
//         then(resolve) {
//             resolve(`${content},29 year's old~`);
//         }
//     };
// }).then(end => {
//     console.log(end);
//     return new PromiseCall(resolve => resolve(`${end},my wife is wangJinJin`));
// }).then(result => {
//     console.log(result);
//     throw new TypeError(`${result},I love computer`);
// }).catch(reason => {
//     console.error(reason);
// });
// PromiseCall.resolve('I love JinJin').then(value => console.log(value));
// PromiseCall.reject(new TypeError('JinJin')).catch(reason => console.error(reason));
// PromiseCall.all([1, 2, 3]).then(values => console.log(values));
// PromiseCall.all([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 500)), PromiseCall.reject('all JinJin love KaiKai'), 3]).then(values => console.log(values)).catch(reason => console.error(reason));
// PromiseCall.race([1, 2, 3]).then(value => console.log(value)).catch(reason => console.error(reason));
// PromiseCall.race([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 500)), PromiseCall.reject('race JinJin love KaiKai'), 3]).then(value => console.log('race', value)).catch(reason => console.error(reason));
// PromiseCall.allSettled([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 500)), PromiseCall.reject('race JinJin love KaiKai'), 3]).then(value => console.log('allSettled', value)).catch(reason => console.error(reason));

// test complete Promise
// const PromiseCall = (() => {
//     const PENDING = 'PENDING';
//     const FULFILLED = 'FULFILLED';
//     const REJECTED = 'REJECTED';
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = value => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => callback());
//                 }
//             };
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => callback());
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//         then(onFulfilled, onRejected) {
//             if (typeof onFulfilled !== 'function') {
//                 onFulfilled = value => value;
//             }
//             if (typeof onRejected !== 'function') {
//                 onRejected = reason => {
//                     if (reason instanceof Error)
//                         throw reason;
//                     else
//                         throw new Error(reason);
//                 };
//             }
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onFulfilled !== 'function') {
//                                 resolve(this.value);
//                             } else {
//                                 (function thenable(value) {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable.call(this, y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }.bind(this))(this.value);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 reject(this.reason);
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, reject) => {
//                     this.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(this.value);
//                                 } else {
//                                     (function thenable(value) {
//                                         then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable.call(this, y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }.bind(this))(this.value);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     reject(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, reject);
//                                 }
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//         catch(onRejected) {
//             return this.then(null, onRejected);
//         }
//         finally(fn) {
//             if (typeof fn !== 'function') {
//                 throw new TypeError('parameter must be a function');
//             }
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).then(() => {
//                     if (reason instanceof Error)
//                         throw reason
//                     else
//                         throw new Error(reason);
//                 });
//             });
//         }
//     }
//     Promise.resolve = value => {
//         if (value instanceof Promise)
//             return value;
//         return new Promise(resolve => {
//             resolve(value);
//         });
//     };
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//     Promise.all = lists => {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[current++] = value;
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = lists => {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = lists => {
//         return new Promise((resolve, reject) => {
//             if (!Array.isArray(lists)) return reject(new TypeError('parameter must be an array'));
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[current++] = {
//                         status: 'fulfilled',
//                         value
//                     };
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     result[current++] = {
//                         status: 'rejected',
//                         reason
//                     };
//                     if (current === length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//     Promise.deferred = () => {
//         const dfd = {};
//         dfd.promise = new Promise((resolve, reject) => {
//             dfd.resolve = resolve;
//             dfd.reject= reject;
//         });
//         return dfd;
//     }
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same'));
//         if (x instanceof Promise)
//             return x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             });
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return reject(x);
//             let then,
//                 call = false;
//             try {
//                 then = x.then;
//             } catch (err) {
//                 reject(err);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (call) return;
//                         call = true;
//                         resolvePromise(promise, y, resolve, reject);
//                     }, r => {
//                         if (call) return;
//                         call = true;
//                         reject(r);
//                     });
//                 } catch (err) {
//                     if (call) return;
//                     reject(err);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     return Promise;
// })();
// console.log('normal');
// setTimeout(() => {
//     console.log('timeout');
// }, 10);
// const promise = new PromiseCall((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve({
//                     then(resolve, reject) {
//                         resolve('hello,');
//                     }
//                 });
//             }
//         });
//     }, 300);
// });
// promise.then(val => {
//     console.log(val);
//     return `${val}wtw`;
// }).then(content => {
//     console.log(content);
//     return {
//         then(resolve) {
//             resolve(`${content},29 year's old~`);
//         }
//     };
// }).then(end => {
//     console.log(end);
//     return new PromiseCall(resolve => resolve(`${end},my wife is wangJinJin`));
// }).then(result => {
//     console.log(result);
//     throw new TypeError(`${result},I love computer`);
// }).catch(reason => {
//     console.error(reason);
// });
// PromiseCall.resolve('I love JinJin').then(value => console.log(value));
// PromiseCall.reject(new TypeError('JinJin')).catch(reason => console.error(reason));
// PromiseCall.all([1, 2, 3]).then(values => console.log(values));
// PromiseCall.all([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 500)), PromiseCall.reject('all JinJin love KaiKai'), 3]).then(values => console.log(values)).catch(reason => console.error(reason));
// PromiseCall.race([1, 2, 3]).then(value => console.log(value)).catch(reason => console.error(reason));
// PromiseCall.race([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 500)), PromiseCall.reject('race JinJin love KaiKai'), 3]).then(value => console.log('race', value)).catch(reason => console.error(reason));
// PromiseCall.allSettled([new PromiseCall(resolve => setTimeout(() => {
//     resolve('love')
// }, 10000)), PromiseCall.reject('race JinJin love KaiKai'), 3]).then(value => console.log('allSettled', value)).catch(reason => console.error(reason));
// module.exports = PromiseCall;

// generator Thunk
// const fs = require('fs');
// const path = require('path');
// const firstFilePath = path.resolve(process.cwd(), 'src/questions/assets/1.txt');
// const secondFilePath = path.resolve(process.cwd(), 'src/questions/assets/2.txt');
// const thunk = fn => (...args) => callback => fn(...args, callback);
// const generator = taskRunner => {
//     const task = taskRunner();
//     function next(err, data) {
//         if (err) return err instanceof Error ? task.throw(err) : task.throw(new Error(err));
//         const {value, done} = task.next(data);
//         if (done) return true;
//         if (typeof value === 'function') {
//             value(next);
//         } else {
//             next(null, value);
//         }
//     }
//     next();
// };
// const readFile = thunk(fs.readFile);
// generator(function* () {
//     const first = yield readFile(firstFilePath, 'utf-8');
//     console.log('first,', first);
//     const second = yield readFile(secondFilePath, 'utf-8');
//     console.log('second', second);
//     return second;
// });

// promise Generator Thunk
// const fs = require('fs');
// const path = require('path');
// const thunk = fn => (...args) => callback => fn(...args, callback);
// const firstFilePath = path.resolve(process.cwd(), 'src/questions/assets/1.txt');
// const secondFilePath = path.resolve(process.cwd(), 'src/questions/assets/2.txt');
// const promiseGenerator = taskRunner => {
//     return new Promise((resolve, reject) => {
//         const task = taskRunner();
//         function next(err, data) {
//             if (err) return reject(task.throw(err instanceof Error ? err : new Error(err)));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             if (typeof value === 'function') {
//                 value(next);
//             } else {
//                 const promise = Promise.resolve(value);
//                 promise.then(val => {
//                     next(null, val);
//                 }, reason => {
//                     next(reason);
//                 });
//             }
//         }
//         next();
//     });
// };
// const readFile = thunk(fs.readFile);
// promiseGenerator(function* () {
//     const first = yield readFile(firstFilePath, 'utf-8');
//     console.log('first:', first);
//     const second = yield readFile(secondFilePath, 'utf-8');
//     console.log('second:', second);
//     return second;
// }).then(value => {
//     console.log('end:', value);
// }, reason => {
//     console.log('reason', reason);
// });

// promise Timeout
// const promiseTimeout = (promise, timeout) => {
//     return Promise.race([Promise.resolve(promise).then(value => {
//         return (typeof value !== 'object' || !value.hasOwnProperty('status')) ? {status: 'fulfilled', value} : value;
//     }), new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时!'
//             });
//         }, timeout);
//     })]);
// };
// promiseTimeout(new Promise(resolve => {
// resolve({status: 'fulfilled', value: 'wonderful!'});
// resolve('wonderful!');
// setTimeout(() => {
//     resolve('wonderful!');
// }, 3100);
//     setTimeout(() => {
//         resolve({status: 'fulfilled', value: 'wonderful!'});
//     }, 2900);
// }), 3000).then(val => {
//     console.log('val:', val);
// }).catch(reason => {
//     console.error('reason:', reason);
// });

// get Character's Length
// const getUTF16StrLength = str => {
//     const strTransform = str.toString() || String(str);
//     return strTransform.match(/[\s\S]/ug).length;
// }
// const str = 'a𠮷bcd𠮷𠮷efg';
// const length = getUTF16StrLength(str);
// console.log('str length:', length);

// judge UTF-16 Character
// const judgeUTF16Char = str => {
//     const strTransform = str.toString() || String(str);
//     return strTransform.codePointAt(0) > 0xFFFF;
// };
// const result = judgeUTF16Char('𠮷b');
// const result = judgeUTF16Char('a𠮷b');
// console.log('result', result);

// flags Method Imitate
// const getFlags = regExp => {
//     if (!regExp instanceof RegExp)
//         throw new TypeError('parameter mast be a RegExp');
//     const regExpTransform = regExp.toString() || String(regExp);
//     return regExpTransform.substring(regExpTransform.lastIndexOf('/') + 1);
// };
// const regExp = /^.$/uimg;
// console.log(getFlags(regExp));