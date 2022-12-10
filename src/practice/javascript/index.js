// compose
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = compose(multiply, add)(50);
// console.log(result);

// pipe
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = pipe(add, multiply)(60);
// console.log(result);

// flat
// const arr = [1, [2, 3], [4, 5, [6]], [7, 8, [9, [10]]], [11, 12, [13, [14, [15, 16, 17, 18, 19, 20]]]]];
//
// const flat = (arr, initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const result = flat(arr);
// console.log(result);

// layer flat
// const arr = [1, [2, 3], [4, 5, [6]], [7, 8, [9, [10]]], [11, 12, [13, [14, [15, 16, 17, 18, 19, 20]]]]];
// const flat = (arr, layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const result = flat(arr, 4);
// console.log(result);

// fibonacci
// const fibonacci = n => (n === 1 || n === 0) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const result = fibonacci(40);
// console.log(result);

// tailCall fibonacci
// const fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// const result = fibonacci(100);
// console.log(result);

// cache fibonacci
// const memo = (fn, hasher) => {
//     const memoFunc = (...args) => {
//         const cache = memoFunc.cache;
//         const hashKey = hasher ? hasher(...args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn(hashKey);
//         }
//         return cache[hashKey];
//     }
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const fibonacci = n => (n === 1 || n === 0) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const fibonacciMemo = memo(fibonacci);
// let result = fibonacciMemo(40);
// console.log(result);
// result = fibonacciMemo(40);
// console.log(result);
// result = fibonacciMemo(40);
// console.log(result);

// curry
// const curry = (a, b, c) => a + b + c;
// const curryFunc = fn => function callee(...args) {
//     return args.length >= fn.length ? fn(...args) : (...nextArgs) => callee(...args, ...nextArgs)
// };
// const curried = curryFunc(curry);
// console.log(curried(2, 3, 4));
// console.log(curried(2)(3)(4));
// console.log(curried(2, 3)(4));
// console.log(curried(2)(3, 4));

// debounce
// const debounce = (fn, timeout) => {
//     let timer = null;
//     return (...args) => {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//         }, timeout);
//     }
// };

// throttle
// const throttle = (fn, timeout) => {
//     let timer = null,
//         firstRequest = true;
//     return (...args) => {
//         if (timer) return false;
//         if (firstRequest) {
//             fn(...args);
//             firstRequest = false;
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     }
// }
// const throttleFunc = throttle(() => {}, 1000);

// factorial
// const factorial = n => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(10);
// console.log(result);

// tailCall factorial
// const factorial = (n, p = 1) => n === 1 ? n * p : factorial(n - 1, n * p);
// const result = factorial(1000);
// console.log(result);

// shallow copy
// const shallowCopy = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// };
// const symbol = Symbol.for('pro');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: {
//         sports: 'football'
//     },
//     [symbol]: 'yes',
//     introduce() {
//     },
//     another: undefined
// };
// const gary = shallowCopy(wtw);
// gary.age = 28;
// gary.name = 'Gary';
// gary.hobby.sports = 'basketball';
// console.log(wtw, gary);

// deep clone
// const deepClone = (o) => {
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
// };
// const symbol = Symbol.for('pro');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: {
//         sports: 'football'
//     },
//     [symbol]: 'yes',
//     introduce() {
//     },
//     another: undefined
// };
// wtw.me = wtw;
// const gary = deepClone(wtw);
// gary.age = 28;
// gary.name = 'Gary';
// gary.hobby.sports = 'basketball';
// console.log(wtw, gary);

// deep clone loop
// const deepClone = (o) => {
//     const source = new WeakMap();
//     const deepCloneFunc = (o) => {
//         const _o = Array.isArray(o) ? [] : {};
//         const existObj = source.get(o);
//         if (existObj) return existObj;
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deepCloneFunc(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deepCloneFunc(o);
// };
// const symbol = Symbol.for('pro');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: {
//         sports: 'football'
//     },
//     [symbol]: 'yes',
//     introduce() {
//     },
//     another: undefined
// };
// wtw.me = wtw;
// const gary = deepClone(wtw);
// gary.age = 28;
// gary.name = 'Gary';
// gary.hobby.sports = 'basketball';
// console.log(wtw, gary);

// pick
// const pick = (o, ...property) => {
//     const source = new WeakMap();
//     const deepClone = (o) => {
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
// }
// const symbol = Symbol.for('pro');
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: {
//         sports: 'football'
//     },
//     [symbol]: 'yes',
//     introduce() {
//     },
//     another: undefined
// };
// wtw.me = wtw;
// const gary = pick(wtw, 'name', 'age', 'me', symbol, 'hobby');
// gary.age = 28;
// gary.name = 'Gary';
// gary.hobby.sports = 'basketball';
// console.log(wtw, gary);

// new
// const myNew = (fn, ...args) => {
//     const o = {},
//         result = fn.apply(o, args),
//         isFunction = typeof result === 'function',
//         isObject = typeof result === 'object' && result !== null;
//     if (isFunction || isObject) {
//         return result;
//     }
//     o.__proto__ = fn.prototype;
//     return o;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const o = myNew(Person, 'wtw', 29);
// console.log(o);
// o.introduce();

// instanceof
// const myInstanceof = (targetObj, targetClass) => {
//     if (!targetObj || !targetClass || !targetObj.__proto__ || !targetClass.prototype) {
//         return false;
//     }
//     let current = targetObj;
//     while (current) {
//         if (current.__proto__ === targetClass.prototype) {
//             return true;
//         }
//         current = current.__proto__;
//     }
//     return false;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = new Person('wtw', 30);
// console.log(myInstanceof(wtw, Person));
// console.log(myInstanceof(wtw, Object));
// console.log(myInstanceof({}, Object));
// console.log(myInstanceof({}, Person));

// unit
// const unit = (fn) => {
//     try {
//         fn();
//     } catch (err) {
//         console.log(err);
//     }
// };
// const test = (desc, result) => {
//     return {
//         toBe: (expectResult) => {
//             if (result === expectResult) {
//                 console.log(`${desc} testing is PASS!`);
//             } else {
//                 console.log(`${desc} testing is FAILED!Expect result is ${expectResult},but get ${result}~`);
//             }
//         }
//     };
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit(() => {
//     test('1 + 2', add(1, 2)).toBe(3);
//     test('1 + 99', add(1, 99)).toBe(100);
//     test('2 + 99', add(2, 98)).toBe(101);
//     test('2 * 99', multiply(2, 99)).toBe(198);
//     test('3 * 99', multiply(3, 98)).toBe(297);
// });

// call
// Function.prototype.myCall = function (o, ...args) {
//     const symbol = Symbol.for('call');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const wtw = {
//     name: 'wtw',
//     age: 28,
//     getName() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// Person.myCall(wtw, 'Gary', 30);
// console.log(wtw);
// wtw.getName();

// apply
// Function.prototype.myApply = function (o, ...args) {
//     const symbol = Symbol.for('apply');
//     o[symbol] = this;
//     const result = o[symbol](...args[0]);
//     delete o[symbol];
//     return result;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const wtw = {
//     name: 'white_than_wood',
//     age: 31,
//     getName() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// Person.myApply(wtw, ['wtw', 29]);
// console.log(wtw);
// wtw.getName();

// bind
// Function.prototype.myBind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('bind 方法必须被一个函数调用!');
//     }
//     const self = this;
//     function F() {
//     }
//     const fBind = function (...innerArgs) {
//         return self.apply(this instanceof fBind ? this : context, [...args, ...innerArgs]);
//     };
//     Object.setPrototypeOf(F.prototype, this.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {
//     name: 'wtw',
//     age: 28,
//     introduce() {
//         console.log(`I'm ${this.name},${this.age} year's old~`);
//     }
// };
// const Gary = Person.myBind(wtw, 'gary');
// Gary(30);
// console.log(wtw);
// wtw.introduce();
// const WTW = Person.myBind(wtw, 'wtw');
// const white_than_wood = new WTW(26);
// console.log(wtw);
// wtw.introduce();
// console.log(white_than_wood);
// white_than_wood.introduce();

// softBind
// Function.prototype.softBind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('softBind 方法必须被一个函数调用!');
//     }
//     const self = this;
//     function F() {
//     }
//     const fBind = function (...innerArgs) {
//         return self.apply((this === window || this === undefined) ? context : this, [...args, ...innerArgs]);
//     };
//     Object.setPrototypeOf(F.prototype, this.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {
//     name: 'wtw',
//     age: 25,
//     introduce() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// const abby = {
//     name: 'abby',
//     age: 27,
//     introduce() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// const Gary = Person.softBind(wtw, 'Gary');
// Gary(33);
// console.log(wtw);
// wtw.introduce();
// const white_than_wood = Person.softBind(wtw, 'white_than_wood');
// const white = new white_than_wood(18);
// console.log(wtw);
// console.log(white);
// white.introduce();
// const Lily = Person.softBind(wtw, 'lily');
// Lily.call(abby, 22);
// console.log(wtw);
// console.log(abby);
// abby.introduce();

/** Event Loop
 * browser
 * 首先通过 JS 线程区分同异步程序,当遇到同步程序时优先执行,当遇到异步程序时会直接将其移入至相关的处理线程内(定时器线程、异步 HTTP 请求线程)
 * 接着会将相关的处理线程内的符合条件的回调事件尽数移入至事件触发线程内,由此进入 Event Loop 事件循环执行机制
 * 随后 Event Loop 事件循环执行机制会等至所有的同步程序都执行完毕之后,才会去轮询事件队列中的回调事件,触发执行
 * 最后 Event Loop 事件队列分为两种: 宏事件、微事件,每一次在执行宏事件之前,都会轮询执行微事件
 * 宏事件
 * script
 * I/O
 * setTimeout、setInterval
 * Node.js 中的 setImmediate
 * UI 事件
 * postMessage
 * 微事件
 * Promise
 * Node.js 中的 process.nextTick
 * Object 中的 observe
 * MutationObserver
 *
 * nodejs
 * timer: 执行 setTimeout、setInterval 的回调
 * pending callbacks: 延迟执行至下一次 I/O 回调
 * idle、prepare: 仅系统内部使用
 * pull: 检索 I/O 新事件,执行与 I/O 相关的回调函数
 * check: 执行 setImmediate 的回调
 * close callbacks: 会执行一些关闭的回调函数,如 socket.close
 * 注意: pull 阶段执行完毕之后,如果没有 setImmediate,且存在定时器到期,会绕回执行定时器 timer 阶段.
 */

// Promise
// const MyPromise = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//             const resolve = (value) => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//             const reject = (reason) => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//         then(onFulfilled = value => value, onRejected = reason => {
//             if (reason instanceof Error) {
//                 throw reason
//             } else {
//                 throw new Error(reason)
//             }
//         }) {
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable(y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(this.value);
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
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable(y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(this.value);
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
//         if (promise === x) {
//             return reject(new TypeError('The promise and the return value are the same'));
//         }
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             });
//         }
//         if (typeof x === 'function' || typeof x === 'object') {
//             if (x === null) {
//                 return reject(x);
//             }
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
// const promise = new MyPromise(resolve => {
//     resolve({
//         then(resolve) {
//             resolve('I love pzy!');
//         }
//     });
// });
// setTimeout(() => {
//     console.log('wtw');
// }, 0);
// promise.then(value => {
//     console.log(value);
//     return `${value} hiahiahia~`;
// }).then(1).then(value => {
//     console.log(value);
//     throw new TypeError(`err ${value}`);
// }).then(() => {}, err => {
//     console.log(err);
// });
// console.log('pzy~~');

// complete Promise
// const MyPromise = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
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
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             }
//             const reject = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             };
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//         then(onFulfilled = value => value, onRejected = reason => {
//             if (reason instanceof Error) {
//                 throw reason;
//             } else {
//                 throw new Error(reason);
//             }
//         }) {
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable(y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             })(this.value);
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 })
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
//                                 (function thenable(value) {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         then = value.then;
//                                         if (typeof then === 'function') {
//                                             then.call(this, y => {
//                                                 thenable(y);
//                                             }, r => {
//                                                 reject(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 })(this.value);
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
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).then(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) {
//             return reject(new TypeError('The promise and the return value are the same'));
//         }
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
//     Promise.resolve = (params) => {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(resolve => {
//             resolve(params);
//         });
//     };
//     Promise.reject = (reason) => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//     Promise.all = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new ReferenceError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             let count = 0;
//             const result = [],
//                 length = promiseLists.length;
//             if (length === 0) {
//                 resolve(result);
//             } else {
//                 promiseLists.forEach((promise, index) => {
//                     Promise.resolve(promise).then(value => {
//                         count++;
//                         result[index] = value;
//                         if (count === length) {
//                             resolve(result);
//                         }
//                     }, reason => {
//                         reject(reason);
//                     });
//                 });
//             }
//         });
//     };
//     Promise.race = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new ReferenceError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             promiseLists.forEach(promise => {
//                 Promise.resolve(promise).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new ReferenceError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             let count = 0;
//             const length = promiseLists.length,
//                 result = [];
//             promiseLists.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = {
//                         status: 'fulfilled',
//                         value
//                     };
//                     if (count === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason
//                     };
//                     if (count === length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//     return Promise;
// })();
// const promise = new MyPromise(resolve => {
//     resolve({
//         then(resolve) {
//             resolve('I love pzy!');
//         }
//     });
// });
// setTimeout(() => {
//     console.log('wtw');
// }, 0);
// promise.then(value => {
//     console.log(value);
//     return `${value} hiahiahia~`;
// }).then(1).then(value => {
//     console.log(value);
//     throw new TypeError(`err ${value}`);
// }).catch(err => {
//     console.log(err);
// });
// console.log('pzy~~');
// MyPromise.all([1, 2, 3]).then(result => {
//     console.log(result);
// });
// MyPromise.all([1, MyPromise.reject('lily!'), 3]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });
// MyPromise.race([new MyPromise(resolve => setTimeout(() => resolve('666'), 1000)), MyPromise.reject('8888'), 777]).then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// });
// MyPromise.allSettled([new MyPromise(resolve => setTimeout(() => resolve('666'), 4000)), MyPromise.reject('8888'), 777]).then(result => {
//     console.log(result);
// });

// Generator thunk
// const fs = require('fs');
// const path = require('path');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// const readFile = Thunk(fs.readFile);
// 第一种方法
// function run(taskRun) {
//     return new Promise(resolve => {
//         const task = taskRun();
//         let result = task.next();
//         (function step() {
//             const {done, value} = result;
//             if (!done) {
//                 if (typeof value === 'function') {
//                     value(function (err, data) {
//                         if (err) task.throw(err);
//                         result = task.next(data);
//                         step();
//                     });
//                 } else {
//                     result = task.next(value);
//                     step();
//                 }
//             } else {
//                 resolve(value);
//             }
//         })();
//     });
// }
// function readFile(filename) {
//     return function (callback) {
//         fs.readFile(filename, 'utf-8', callback);
//     };
// }
// run(function* () {
//     let result = yield readFile(path.resolve(__dirname, './assets/1.txt'));
//     console.log(result);
//     result = yield readFile(path.resolve(__dirname, './assets/2.txt'));
//     console.log(result);
//     return result;
// }).then(value => {
//     console.log(value);
// });
// 第二种方法
// function run(taskRun) {
//     return new Promise(resolve => {
//         const task = taskRun();
//         function next(err, data) {
//             if (err) task.throw(err);
//             const {done, value} = task.next(data);
//             if(done) return resolve(value);
//             value(next);
//         }
//         next();
//     });
// }
// run(function* () {
//     let result = yield readFile(path.resolve(__dirname, './assets/1.txt'), 'utf-8');
//     console.log(result);
//     result = yield readFile(path.resolve(__dirname, './assets/2.txt'), 'utf-8');
//     console.log(result);
//     return result;
// }).then(value => {
//     console.log(value);
// });

// promise timeout
// const timerPromise = (promise, timeout) => {
//     return Promise.race([promise, new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时'
//             });
//         }, timeout);
//     })]);
// };
// const promise = timerPromise(new Promise(resolve => {
//     setTimeout(() => {
//         resolve({
//             status: 'fulfilled',
//             value: 'data is mine!'
//         });
//     }, 2000);
// }), 1000);
// promise.then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// });