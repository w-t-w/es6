// 1. compose
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = compose(multiply, add)(40);
// console.log(result);

// 2. pipe
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = pipe(add, multiply)(80);
// console.log(result);

// 3. flat
// const flat = (arr, initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13, 14, 15, 16]]], [17, 18, 19, 20, [21, 22, [23, 24, 25, 26, [27, 28, 29, [30, 31, [32, 33, [34, 35, 36]]]]]]]];
// const result = flat(arr);
// console.log(result);

// 4. layer flat
// const flat = (arr, layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13, 14, 15, 16]]], [17, 18, 19, 20, [21, 22, [23, 24, 25, 26, [27, 28, 29, [30, 31, [32, 33, [34, 35, 36]]]]]]]];
// const result = flat(arr, 6);
// console.log(result);

// 5. fibonacci
// const fibonacci = (n) => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const result = fibonacci(40);
// console.log(result);

// 6. tailCall fibonacci
// const fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// const result = fibonacci(60);
// console.log(result);

// 7. cache fibonacci
// const memo = (fn, hasher) => {
//     const memoFunc = (...args) => {
//         const cache = memoFunc.cache,
//             hashKey = hasher ? hasher.apply(this, ...args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn(...args);
//         }
//         return cache[hashKey];
//     };
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const fibonacci = (n) => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const memoFunc = memo(fibonacci);
// let result = memoFunc(40);
// console.log(result);
// result = memoFunc(40);
// console.log(result);
// result = memoFunc(40);
// console.log(result);

// 8. curry
// const curry = fn => function callee(...args) {
//     return args.length >= fn.length ? fn(...args) : (...innerArgs) => callee(...args, ...innerArgs);
// };
// const curryFunc = (a, b, c) => a * b * c;
// const curried = curry(curryFunc);
// let result = curried(1)(2)(4);
// console.log(result);
// result = curried(1, 2)(5);
// console.log(result);
// result = curried(1)(2, 6);
// console.log(result);
// result = curried(1, 2, 8);
// console.log(result);

// 9. debounce
// const debounce = (fn, timeout) => {
//     let timer;
//     return (...args) => {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//         }, timeout);
//     };
// }

// 10. throttle
// const throttle = (fn, timeout) => {
//     let timer = null,
//         first = true;
//     return (...args) => {
//         if (timer) {
//             return false;
//         }
//         if (first) {
//             fn(...args);
//             return true;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// };

// 11. factorial
// const factorial = n => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(5);
// console.log(result);

// 12. tailCall factorial
// const factorial = (n, p = 1) => n <= 1 ? p * n : factorial(n - 1, p * n);
// const result = factorial(40);
// console.log(result);

// 13. shallow copy
// const shallowCopy = (o) => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             _o[key] = o[key];
//         }
//     }
//     return _o;
// };
// const person = {
//     name: 'wtw',
//     age: 29,
//     hobby: {sports: 'basketball'},
//     home() {
//     },
//     [Symbol.for('sports')]: 'basketball'
// };
// const wtw = shallowCopy(person);
// console.log(wtw, person);
// person.hobby.sports = 'football';
// console.log(wtw, person);

// 14. deep clone
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
// const person = {
//     name: 'wtw',
//     age: 29,
//     hobby: {sports: 'basketball'},
//     home() {
//     },
//     [Symbol.for('sports')]: 'basketball'
// };
// person.me = person;
// const wtw = deepClone(person);
// console.log(wtw, person);
// person.hobby.sports = 'football';
// console.log(wtw, person);

// 15. deep clone loop
// const deepClone = (o) => {
//     const source = new WeakMap();
//     const deepClone = (o) => {
//         const _o = Array.isArray(o) ? [] : {},
//             existObj = source.get(o);
//         if (existObj) return existObj;
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deepClone(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deepClone(o);
// };
// const person = {
//     name: 'wtw',
//     age: 29,
//     hobby: {sports: 'basketball'},
//     home() {
//     },
//     [Symbol.for('sports')]: 'basketball'
// };
// person.me = person;
// const wtw = deepClone(person);
// console.log(wtw, person);
// person.hobby.sports = 'football';
// console.log(wtw, person);
// person.age = 30;
// console.log(wtw, person);

// 16. pick
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
//     };
//     return deepClone(o);
// };
// const symbol = Symbol.for('sports');
// const person = {
//     name: 'wtw',
//     age: 29,
//     hobby: {sports: 'basketball'},
//     home() {
//     },
//     [symbol]: 'basketball'
// };
// person.me = person;
// const wtw = pick(person, 'age', 'home', 'hobby', 'sports', symbol);
// console.log(wtw, person);
// person.hobby.sports = 'football';
// console.log(wtw, person);
// person.age = 30;
// console.log(wtw, person);

// 17. new
// const myNew = (fn, ...args) => {
//     const o = {},
//         result = fn.call(o, ...args),
//         isObject = typeof result === 'object' && result !== null,
//         isFunction = typeof result === 'function';
//     if (isObject || isFunction) {
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
//     console.log(`I'm ${this.name},${this.age} year's old~`);
// };
// const wtw = myNew(Person, 'wtw', 29);
// console.log(wtw);
// wtw.introduce();

// 18. instanceof
// const myInstanceof = (targetObject, targetClass) => {
//     if (!targetObject || !targetClass || !targetClass.prototype || !targetObject.__proto__) {
//         return false;
//     }
//     let current = targetObject;
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
// const wtw = new Person('wtw', 29);
// let result = myInstanceof(wtw, Person);
// console.log(result);
// result = myInstanceof(wtw, Object);
// console.log(result);
// result = myInstanceof({}, Person);
// console.log(result);

// 19. unit
// const unit = (fn) => {
//     try {
//         fn();
//     } catch (e) {
//         console.error(e);
//     }
// };
// const test = (desc, result) => {
//     return {
//         toBe(realResult) {
//             if (result === realResult) {
//                 console.log(`${desc} PASS!`);
//             } else {
//                 console.log(`${desc} FAILED: the expect result is ${realResult}`);
//             }
//         }
//     }
// };
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// unit(() => {
//     test('1 + 1 = 2', add(1, 1)).toBe(2);
//     test('1 + 2 = 3', add(1, 1)).toBe(3);
//     test('2 * 4 = 8', multiply(2, 4)).toBe(8);
//     test('2 + 6 = 8', add(2, 4)).toBe(8);
// });

// 20. call
// Function.prototype.calling = function (o, ...args) {
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
// const o = {
//     name: 'wtw',
//     age: 29,
//     getName() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// Person.calling(o, 'Gary', 28);
// console.log(o);
// o.getName();

// 21. apply
// Function.prototype.applying = function (o, args) {
//     const symbol = Symbol.for('apply');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const o = {
//     name: 'wtw',
//     age: 29,
//     getName() {
//         console.log(`I'm ${this.name}, ${this.age} year's old~`);
//     }
// };
// Person.applying(o, ['Abby', 27]);
// console.log(o);
// o.getName();

// 22. bind
// Function.prototype.binding = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('此方法必须被函数调用!');
//     }
//     const self = this;
//     function F() {
//     }
//     const fBind = function (...innerArgs) {
//         return self.apply(this instanceof fBind ? this : context, args.concat(innerArgs));
//     };
//     Object.setPrototypeOf(F.prototype, this.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function() {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const o = {
//     name: 'wtw',
//     age: 29
// };
// const test_o = {
//     name: 'abby',
//     age: 27
// };
// const wtw = Person.binding(o, 'mooner');
// wtw.call(test_o, 25);
// console.log(o);
// console.log(test_o);
// wtw(28);
// console.log(o);
// const gary = new wtw(30);
// console.log(gary);
// console.log(o);
// gary.introduce();

// 23. softBind
// Function.prototype.softBind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new TypeError('此方法必须被函数所调用!');
//     }
//     const self = this;
//     function F() {
//     }
//     const fBind = function (...innerArgs) {
//         return self.apply((this === window || this === undefined) ? context : this, args.concat(innerArgs));
//     };
//     Object.setPrototypeOf(F.prototype, this.prototype);
//     Object.setPrototypeOf(fBind.prototype, F.prototype);
//     return fBind;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function() {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const o = {
//     name: 'wtw',
//     age: 29
// };
// const test_o = {
//     name: 'abby',
//     age: 27
// };
// const wtw = Person.softBind(o, 'mooner');
// wtw(28);
// console.log(o);
// const gary = new wtw(30);
// console.log(gary);
// console.log(o);
// gary.introduce();
// wtw.call(test_o,26);
// console.log(o);
// console.log(test_o);

// 25. Promise
// const MyPromise = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
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
//             }
//             const reject = (reason) => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             }
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//
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
//                                 then = value.then;
//                                 if (typeof then === 'function') {
//                                     then.call(this, y => {
//                                         thenable(y);
//                                     }, r => {
//                                         reject(r);
//                                     });
//                                 } else {
//                                     if (typeof onFulfilled !== 'function') {
//                                         resolve(value);
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, reject);
//                                     }
//                                 }
//                             }.bind(this))(this.value);
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
//                                 reject(this.reason)
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         } catch (err) {
//                             reject(err);
//                         }
//                     }, 0);
//                 })
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, reject) => {
//                     this.onFulfilledCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 (function thenable(value) {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable(y);
//                                         }, r => {
//                                             reject(r);
//                                         });
//                                     } else {
//                                         if (typeof onFulfilled !== 'function') {
//                                             resolve(value);
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, reject);
//                                         }
//                                     }
//                                 }.bind(this))(this.value);
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
//
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
//
//     return Promise;
// })();
// setTimeout(() => {
//     console.log('I love pzy~~~')
// }, 0);
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve('I love wtw!')
//             }
//         });
//     }, 2000);
// });
// promise.then(val => {
//     console.log(val);
//     return promise
// }).then(val => {
//     console.log(val);
//     return `wagawaga ${val}`;
// }).then(val => {
//     console.log(val);
//     throw new TypeError(val);
// }).then(val => {
//
// }, reason => {
//     console.log(reason);
// });
// console.log('pzy!');

// 26. complete Promise
// const MyPromise = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
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
//             }
//
//             const reject = (reason) => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             }
//
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//
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
//                             }.bind(this))(this.value);
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
//                                 }.bind(this))(this.value);
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
//
//         catch(onRejected) {
//             return this.then(null, onRejected);
//         }
//
//         finally(fn) {
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).catch(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//
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
//
//     Promise.resolve = params => {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(resolve => {
//             resolve(params);
//         });
//     };
//
//     Promise.reject = reason => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//
//     Promise.all = promiseLists => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             let count = 0;
//             const length = promiseLists.length,
//                 result = [];
//             promiseLists.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = value;
//                     if (length === count) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//
//     Promise.race = promiseLists => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             promiseLists.forEach((promise) => {
//                 Promise.resolve(promise).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//
//     Promise.allSettled = promiseLists => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
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
//                     if (length === count) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     count++;
//                     result[index] = {
//                         status: 'rejected',
//                         reason
//                     };
//                     if (length === count) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//
//     return Promise;
// })();
// setTimeout(() => {
//     console.log('I love pzy~~~')
// }, 0);
// let promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve('I love wtw!')
//             }
//         });
//     }, 2000);
// });
// promise.then(val => {
//     console.log(val);
//     return promise
// }).then(val => {
//     console.log(val);
//     return `wagawaga ${val}`;
// }).then(val => {
//     console.log(val);
//     throw new TypeError(val);
// }).catch(reason => {
//     console.log('catch', reason);
// });
// console.log('pzy!');
// MyPromise.all([1, 2, 3]).then(result => {
//     console.log(result);
// });
// MyPromise.all([1, MyPromise.reject(2), 3]).then(result => {
//     console.log(result);
// }).catch(reason => {
//     console.log('all catch', reason);
// });
// MyPromise.race([new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve(1), 0)
// }), MyPromise.reject(2), 3]).then(val => {
//     console.log(val);
// }).catch(reason => {
//     console.log('race catch', reason);
// });
// promise = new MyPromise((resolve, reject) => {
//     reject('22');
// });
// promise.then(val => {
//     console.log(val);
// }).catch(reason => {
//     console.log('', reason);
// });
// MyPromise.reject('222').then(val => {
//     console.log(val);
// }).catch(reason => {
//     console.log(reason);
// })

// 27. test complete Promise
// const MyPromise = (() => {
//     const PENDING = 'PENDING',
//         FULFILLED = 'FULFILLED',
//         REJECTED = 'REJECTED';
//
//     class Promise {
//         constructor(fn) {
//             this.status = PENDING;
//             this.value = null;
//             this.reason = null;
//             this.onFulfilledCallbacks = [];
//             this.onRejectedCallbacks = [];
//
//             const resolve = (value) => {
//                 if (this.status === PENDING) {
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback(value);
//                     });
//                 }
//             };
//
//             const reject = (reason) => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(reason);
//                     });
//                 }
//             };
//
//             try {
//                 fn(resolve, reject);
//             } catch (err) {
//                 reject(err);
//             }
//         }
//
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
//                             }.bind(this))(this.value);
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
//                                             resolvePromise(promise, x, resolve, reject)
//                                         }
//                                     }
//                                 }.bind(this))(this.value);
//                             } catch (err) {
//                                 reject(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     onRejected(this.reason);
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
//
//         catch(onRejected) {
//             return this.then(null, onRejected);
//         }
//
//         finally(fn) {
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).catch(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) return reject(new TypeError('The promise and the return value are the same'));
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             });
//         }
//         if (typeof x === 'function' || typeof x === 'object') {
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
//
//     Promise.resolve = (params) => {
//         if (params instanceof Promise) {
//             return params;
//         }
//         return new Promise(resolve => {
//             resolve(params);
//         });
//     };
//
//     Promise.reject = (reason) => {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//
//     Promise.all = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             const length = promiseLists.length,
//                 result = [];
//             let count = 0;
//             promiseLists.forEach((promise, index) => {
//                 Promise.resolve(promise).then(value => {
//                     count++;
//                     result[index] = value;
//                     if (count === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//
//     Promise.race = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
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
//
//     Promise.allSettled = (promiseLists) => {
//         if (!Array.isArray(promiseLists)) {
//             throw new TypeError('parameter must be an array');
//         }
//         return new Promise((resolve, reject) => {
//             const length = promiseLists.length,
//                 result = [];
//             let count = 0;
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
//
//     return Promise;
// })();
// setTimeout(() => {
//     console.log('I love pzy~~~')
// }, 0);
// let promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve, reject) {
//                 resolve('I love wtw!')
//             }
//         });
//     }, 2000);
// });
// promise.then(val => {
//     console.log(val);
//     return promise
// }).then(val => {
//     console.log(val);
//     return `wagawaga ${val}`;
// }).then(val => {
//     console.log(val);
//     throw new TypeError(val);
// }).catch(reason => {
//     console.log('catch', reason);
// });
// console.log('pzy!');
// MyPromise.all([1, 2, 3]).then(result => {
//     console.log(result);
// });
// MyPromise.all([1, MyPromise.reject(2), 3]).then(result => {
//     console.log(result);
// }).catch(reason => {
//     console.log('all catch', reason);
// });
// MyPromise.race([new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve(1), 0)
// }), MyPromise.reject(2), 3]).then(val => {
//     console.log(val);
// }).catch(reason => {
//     console.log('race catch', reason);
// });
