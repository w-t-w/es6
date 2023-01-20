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

// 28. generator thunk
// const path = require('path');
// const fs = require('fs');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// function run(taskRun) {
//     const task = taskRun();
//     function next(err, data) {
//         if (err) task.throw(err);
//         const {done, value} = task.next(data);
//         if (done) return;
//         value(next);
//     }
//     next();
// }
// const readFile = Thunk(fs.readFile);
// run(function* () {
//     let content = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log(content);
//     content = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log(content);
// });
// const fs = require('fs'),
//     path = require('path');
// function run(taskRun) {
//     return new Promise((resolve, reject) => {
//         const task = taskRun();
//         let result = task.next();
//         (function step() {
//             const {value, done} = result;
//             if (!done) {
//                 if (typeof value === 'function') {
//                     value((err, data) => {
//                         if (err) result = task.throw(err);
//                         result = task.next(data);
//                         step();
//                     });
//                 } else {
//                     result = task.next(value);
//                     step();
//                 }
//             }
//             if (done) {
//                 resolve(value);
//             }
//         })();
//     });
// }
// function readFile(...args) {
//     return function (callback) {
//         fs.readFile(...args, callback);
//     };
// }
// run(function* () {
//     let content = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log(content);
//     content = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log(content);
//     return content;
// }).then(result => {
//     console.log('end:', result);
// });
// const fs = require('fs'),
//     path = require('path');
// const Thunk = (fn) => (...args) => callback => fn(...args, callback);
// const readFileThunk = Thunk(fs.readFile);
// function run(taskRun) {
//     return new Promise(resolve => {
//         const task = taskRun();
//         function next(err, data) {
//             if (err) task.throw(err);
//             const {done, value} = task.next(data);
//             if (done) return resolve(value);
//             value(next);
//         }
//         next();
//     });
// }
// run(function* () {
//     let content = yield readFileThunk(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log(content);
//     content = yield readFileThunk(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log(content);
//     return content;
// }).then(result => {
//     console.log(result);
// });

// 29. promise timeout
// const timeoutPromise = (promise, timeout) => {
//     return Promise.race([promise, new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 status: 'rejected',
//                 reason: '请求超时!'
//             });
//         }, timeout);
//     })]);
// };
// const timer = timeoutPromise(new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             status: 'fulfilled',
//             value: [{name: 'wtw', age: 28}]
//         });
//     }, 2000);
// }), 1000);
// timer.then(value => {
//     console.log(value);
// }).catch(reason => {
//     console.log(reason);
// });

// 30. bubble sort(冒泡排序)
// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
//
// const arr = [3, 15, 6, 19, 8, 4, 20, 7, 1, 9, 5, 2];
// const result = bubbleSort(arr);
// console.log(result);

// 31. insert sort(插入排序)
// function insertSort(arr) {
//     const {length} = arr;
//     for (let i = 0; i < length; i++) {
//         let j = i;
//         while (j > 0) {
//             if (arr[j - 1] > arr[j]) {
//                 const temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//             }
//             j--;
//         }
//     }
//     return arr;
// }
// const arr = [3, 15, 6, 19, 8, 4, 20, 7, 1, 9, 5, 2, 6];
// const result = insertSort(arr);
// console.log(result);

// 32. merge sort(归并排序)
// function merge(a, b) {
//     const a_length = a.length,
//         b_length = b.length,
//         result = [];
//     let i = 0,
//         j = 0;
//     while (i < a_length && j < b_length) {
//         if (a[i] <= b[j]) {
//             result.push(a[i]);
//             i++;
//         } else {
//             result.push(b[j]);
//             j++;
//         }
//     }
//     if (i === a_length && j < b_length) {
//         while (j < b_length) {
//             result.push(b[j]);
//             j++;
//         }
//     }
//     if (j === b_length && i < a_length) {
//         while (i < a_length) {
//             result.push(a[i]);
//             i++;
//         }
//     }
//     return result;
// }
// function mergeSort(arr) {
//     const length = arr.length;
//     if (length <= 1) {
//         return arr;
//     }
//     const middle = Math.floor(length / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }
// const arr = [3, 15, 6, 19, 8, 4, 20, 7, 1, 9, 5, 2, 6];
// const result = mergeSort(arr);
// console.log(result);

// 33. quick sort(快速排序)
// function benchMark(arr, left, right) {
//     const x = arr[left];
//     let i = left,
//         j = right;
//     while (i < j) {
//         while (i < j && arr[j] >= x) {
//             j--;
//         }
//         if (i < j) {
//             arr[i] = arr[j];
//         }
//         while (i < j && arr[i] <= x) {
//             i++;
//         }
//         if (i < j) {
//             arr[j] = arr[i];
//         }
//     }
//     arr[i] = x;
//     return i;
// }
// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         const index = benchMark(arr, left, right);
//         quickSort(arr, left, index - 1);
//         quickSort(arr, index + 1, right);
//     }
//     return arr;
// }
// const arr = [3, 15, 6, 19, 8, 4, 20, 7, 1, 9, 4, 5, 2, 6, 10, 0, 17];
// const result = quickSort(arr);
// console.log(result);

// 34. tapable
// const {
// SyncHook,
// SyncBailHook,
// SyncWaterfallHook,
// AsyncSeriesHook,
// AsyncSeriesBailHook,
// AsyncSeriesWaterfallHook,
// } = require('tapable');
// class Car {
//     constructor() {
//         this.hooks = {
//             accelerate: new AsyncSeriesWaterfallHook(['Accelerate'])
//         }
//     }
// }
// const car = new Car();

// SyncHook
// this.call = function lazyCompile(Accelerate) {
//     const fn = function (Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         _fn0(Accelerate);
//         var _fn1 = _x[1];
//         _fn1(Accelerate);
//     };
//     return fn(Accelerate);
// }
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
//     return Accelerate;
// });
// const result = car.hooks.accelerate.call(200);
// console.log(result);

// SyncBailHook
// this.call = function lazyCompile(Accelerate) {
//     function fn(Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         var _result0 = _fn0(Accelerate);
//         if (_result0 !== undefined) {
//             return _result0;
//         } else {
//             var _fn1 = _x[1];
//             var _result1 = _fn1(Accelerate);
//             if (_result1 !== undefined) {
//                 return _result1;
//             } else {
//             }
//         }
//     }
//     return fn(Accelerate);
// }
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
// });
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`car is accelerate to ${Accelerate} again~`);
//     return Accelerate + 80;
// });
// const result = car.hooks.accelerate.call(245);
// console.log(result);

// SyncWaterfallHook
// this.call = function lazyCompile(Accelerate) {
//     function fn(Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         var _result0 = _fn0(Accelerate);
//         if (_result0 !== undefined) {
//             Accelerate = _result0;
//         }
//         var _fn1 = _x[1];
//         var _result1 = _fn1(Accelerate);
//         if (_result1 !== undefined) {
//             Accelerate = _result1;
//         }
//         return Accelerate;
//     }
//     fn(Accelerate);
// }
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
//     return Accelerate + 70;
// });
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`car is accelerate to ${Accelerate} again~`);
//     return Accelerate + 80;
// });
// const result = car.hooks.accelerate.call(245);
// console.log(result);

// AsyncSeriesHook
// this.callAsync = function lazyCompile(Accelerate, callback) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, _err1 => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     _callback();
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, _err0 => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 _next0();
//             }
//         });
//     }
//     fn(Accelerate, callback);
// }
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
//     callback();
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate} again~`);
//     callback();
// });
// car.hooks.accelerate.callAsync(245, (err, result) => {
//     if(err) console.log(err);
//     console.log(`the result is ${result}`);
// });

// AsyncSeriesBailHook
// this.callAsync = function lazyCompile(Accelerate, callback) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, (_err1, _result1) => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     if (_result1 !== undefined) {
//                         _callback(null, _result1);
//                     } else {
//                         _callback();
//                     }
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, (_err0, _result0) => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 if (_result0 !== undefined) {
//                     _callback(null, _result0);
//                 } else {
//                     _next0();
//                 }
//             }
//         });
//     }
//     fn(Accelerate, callback);
// };
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
//     callback(null, Accelerate + 100);
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate} again~`);
//     callback();
// });
// car.hooks.accelerate.callAsync(245, (err, result) => {
//     if(err) console.log(err);
//     console.log(`the result is ${result}`);
// });

// AsyncSeriesWaterfallHook
// this.callAsync = function lazyCompile(Accelerate, callback) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, (_err1, _result1) => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     if (_result1 !== undefined) {
//                         Accelerate = _result1;
//                     }
//                     _callback(null, Accelerate);
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, (_err0, _result0) => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 if (_result0 !== undefined) {
//                     Accelerate = _result0;
//                 }
//                 _next0();
//             }
//         });
//     }
//     fn(Accelerate, callback);
// };
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate}~`);
//     callback(null, Accelerate + 100);
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`car is accelerate to ${Accelerate} again~`);
//     callback(null, Accelerate + 75);
// });
// car.hooks.accelerate.callAsync(245, (err, result) => {
//     if(err) console.log(err);
//     console.log(`the result is ${result}`);
// });

// AsyncSeriesHook Promise
// this.promise = function lazyCompile(Accelerate) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _x = this._x;
//             var _sync = true;
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _hasResult1 = false;
//                 var _promise1 = _x[1];
//                 if (!_promise1 || !_promise1.then)
//                     throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(() => {
//                     _hasResult1 = true;
//                     _resolve();
//                 }, _err1 => {
//                     if (_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _hasResult0 = false;
//             var _promise0 = _x[0];
//             if (!_promise0 || !_promise0.then)
//                 throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(() => {
//                 _hasResult0 = true;
//                 _next0();
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//     return fn(Accelerate);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate}~`);
//         resolve(Accelerate);
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate} again~`);
//         resolve(Accelerate);
//     });
// });
// car.hooks.accelerate.promise(245).then(value => {
//     console.log(value);
// });

// AsyncSeriesBailHook Promise
// this.promise = function lazyCompile(Accelerate) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _x = this._x;
//             var _sync = true;
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err;
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _hasResult1 = false;
//                 var _promise1 = _x[1];
//                 if (!_promise1 || !_promise1.then)
//                     throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(_result1 => {
//                     _hasResult1 = true;
//                     if (_result1 !== undefined) {
//                         _resolve(_result1);
//                     } else {
//                         _resolve();
//                     }
//                 }, _err1 => {
//                     if (_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _hasResult0 = false;
//             var _promise0 = _x[0];
//             if (!_promise0 || !_promise0.then)
//                 throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(_result0 => {
//                 _hasResult0 = true;
//                 if (_result0 !== undefined) {
//                     _resolve(_result0);
//                 } else {
//                     _next0();
//                 }
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//
//     return fn(Accelerate);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate}~`);
//         resolve();
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate} again~`);
//         resolve();
//     });
// });
// car.hooks.accelerate.promise(245).then(value => {
//     console.log(`the result is ${value}`);
// });

// AsyncSeriesWaterfallHook Promise
// this.promise = function lazyCompile(Accelerate) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _x = this._x;
//             var _sync = true;
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err;
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _hasResult1 = false;
//                 var _promise1 = _x[1];
//                 if (!_promise1 || !_promise1.then)
//                     throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(_result1 => {
//                     _hasResult1 = true;
//                     if (_result1 !== undefined) {
//                         Accelerate = _result1;
//                     }
//                     _resolve(Accelerate);
//                 }, _err1 => {
//                     if (_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _hasResult0 = false;
//             var _promise0 = _x[0];
//             if (!_promise0 || !_promise0.then)
//                 throw new TypeError('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(_result0 => {
//                 _hasResult0 = true;
//                 if (_result0 !== undefined) {
//                     Accelerate = _result0;
//                 }
//                 _next0();
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//     return fn(Accelerate);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate}~`);
//         resolve(Accelerate + 80);
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', (Accelerate) => {
//     return new Promise((resolve, reject) => {
//         console.log(`car is accelerate to ${Accelerate} again~`);
//         resolve(Accelerate + 190);
//     });
// });
// car.hooks.accelerate.promise(245).then(value => {
//     console.log(`the result is ${value}`);
// });

// compose
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = compose(multiply, add)(20);
// console.log('result:', result);

// pipe
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = pipe(add, multiply)(40);
// console.log(result);

// flat
// const flat = (arr = [], initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13, [14, 15]]]], [16, 17, [18, 19, [20, 21, 22, [23, 24, 25, [26, 27, [28, 29]]]]]], [30, 31, 32, 33, [34, 35, [36, 37, [38, 39, [40, 41, [42, 43, 44, [45, 46, [47, 48, 49, [50]]]]]]]]]];
// const result = flat(arr);
// console.log('arr:', result);

// layer Flat
// const flat = (arr = [], layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13, [14, 15]]]], [16, 17, [18, 19, [20, 21, 22, [23, 24, 25, [26, 27, [28, 29]]]]]], [30, 31, 32, 33, [34, 35, [36, 37, [38, 39, [40, 41, [42, 43, 44, [45, 46, [47, 48, 49, [50, 51, 52]]]]]]]]]];
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
// result = flat(arr, 6);
// console.log('result', result);
// result = flat(arr, 7);
// console.log('result', result);
// result = flat(arr, 8);
// console.log('result', result);
// result = flat(arr, 9);
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
// const memo = (fn, hasher) => {
//     const memoFunc = (...args) => {
//         const cache = memoFunc.cache;
//         const hashKey = typeof hasher !== 'undefined' ? hasher(...args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn(...args);
//         }
//         return cache[hashKey];
//     };
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const fibonacciMemo = memo(fibonacci);
// let result = fibonacciMemo(40);
// console.log('result', result);
// result = fibonacciMemo(40);
// console.log('result', result);

// curry
// const curry = fn => function curryCallee(...args) {
//     return (args.length >= fn.length) ? fn.apply(this, args) : (...innerArgs) => curryCallee.apply(this, args.concat(innerArgs));
// };
// const curried = (a, b, c) => [a, b, c];
// const curryFunc = curry(curried);
// let result = curryFunc(1, 2, 3);
// console.log('result', result);
// result = curryFunc(4)(5)(6);
// console.log('result', result);
// result = curryFunc(7, 8)(9);
// console.log('result', result);
// result = curryFunc(10)(11, 12);
// console.log('result', result);
// result = curryFunc(13)(14)(15);
// console.log('result', result);

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
//     };
// };

// throttle
// const throttle = (fn, timeout) => {
//     let timer = null,
//         firstRequest = true;
//     return (...args) => {
//         if (timer) {
//             return false;
//         }
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
//     };
// };

// factorial
// const factorial = (n = 1) => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(12);
// console.log('result', result);

// tailCall Factorial
// const factorial = (n = 1, p = 1) => n === 1 ? n * p : factorial(n - 1, n * p);
// const result = factorial(12);
// console.log('result', result);

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
// const lover = Symbol.for('abby');
// const me = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     introduce() {
//     },
//     [lover]: 'zhaoYue',
//     hobby: {
//         sports: {
//             ball: 'basketball'
//         }
//     }
// };
// const meAno = shallowCopy(me);
// meAno.age = 30;
// meAno.name = 'Gary';
// me.hobby.sports.ball = 'football';
// console.log(me, meAno);

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
// };
// const lover = Symbol.for('abby');
// const me = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     introduce() {
//     },
//     [lover]: 'zhaoYue',
//     hobby: {
//         sports: {
//             ball: 'basketball'
//         }
//     }
// };
// me.own = me;
// const meAno = deepClone(me);
// meAno.age = 30;
// meAno.name = 'Gary';
// me.hobby.sports.ball = 'football';
// console.log(me, meAno);

// deep Clone Loop
// const deepClone = o => {
//     const source = new WeakMap();
//     const deepCloneFunc = o => {
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
// const lover = Symbol.for('abby');
// const me = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     introduce() {
//     },
//     [lover]: 'zhaoYue',
//     hobby: {
//         sports: {
//             ball: 'basketball'
//         }
//     }
// };
// me.own = me;
// const meAno = deepClone(me);
// meAno.age = 30;
// meAno.name = 'Gary';
// me.hobby.sports.ball = 'football';
// console.log(me, meAno);

// pick
// const pick = (o, ...property) => {
//     const source = new WeakMap();
//     const deepClone = o => {
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
// const lover = Symbol.for('abby');
// const me = {
//     name: 'wtw',
//     age: 29,
//     gender: true,
//     introduce() {
//     },
//     [lover]: 'zhaoYue',
//     hobby: {
//         sports: {
//             ball: 'basketball'
//         }
//     }
// };
// me.own = me;
// const meAno = pick(me, 'name', 'age', 'own', 'hobby', 'sports', 'ball', lover);
// meAno.age = 30;
// meAno.name = 'Gary';
// me.hobby.sports.ball = 'football';
// console.log(me, meAno);

// new
// const newCall = (fn, ...args) => {
//     if (typeof fn !== 'function') {
//         throw new TypeError('The fn argument must be a function');
//     }
//     const obj = {};
//     const o = fn.apply(this, args);
//     const isObject = (typeof o === 'object') && o !== null;
//     const isFunction = typeof o === 'function';
//     if (isObject || isFunction) {
//         return o;
//     }
//     // obj.__proto__ = fn.prototype;
//     Object.setPrototypeOf(obj, fn.prototype);
//     return obj;
// };

// instanceof
// const instanceofCall = (target, targetClass) => {
//     if (!target || !targetClass || !target.__proto__ || !targetClass.prototype) {
//         throw new TypeError();
//     }
//     let current = target.__proto__;
//     while (current) {
//         if (current === targetClass.prototype) {
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
// const wtw = new Person('wtw', 28);
// console.log(instanceofCall(wtw, Person));
// console.log(instanceofCall(wtw, Object));
// console.log(instanceofCall({}, Object));
// console.log(instanceofCall({}, Person));

// unit
// const unit = fn => {
//     try {
//         fn();
//     } catch (err) {
//         console.error(err);
//     }
// };
// const test = (desc, result) => {
//     return {
//         expected(expectResult) {
//             if (result === expectResult) {
//                 console.log(`${desc} is PASSED!`);
//             } else {
//                 console.error(`${desc} is FAILED: the expected result is ${expectResult}, but get ${result}`);
//             }
//         }
//     };
// };
// const add = (a, b) => a + b;
// unit(() => {
//     test('3 + 4', add(3, 4)).expected(7);
//     test('7 + 9', add(7, 9)).expected(16);
//     test('8 + 11', add(8, 9)).expected(19);
// });

// call
// if (typeof Function.prototype.callBind === 'undefined') {
//     Function.prototype.callBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The call must be a function');
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
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// Person.callBind(wtw, 'Gary', 44);
// console.log(wtw);

// apply
// if (typeof Function.prototype.applyBind === 'undefined') {
//     Function.prototype.applyBind = function (context, args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The apply must be a function');
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
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// Person.applyBind(wtw, ['Gary', 34]);
// console.log(wtw);

// bind
// if (typeof Function.prototype.bind === 'undefined') {
//     Function.prototype.bind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The bind must be a function');
//         }
//         const self = this;
//         function F() {
//         }
//         const fBind = function (...innerArgs) {
//             return self.apply(this instanceof fBind ? this : context, args.concat(innerArgs));
//         };
//         F.prototype = this.prototype;
//         fBind.prototype = F.prototype;
//         Object.setPrototypeOf(F.prototype, this.prototype);
//         Object.setPrototypeOf(fBind.prototype, F.prototype);
//         return fBind;
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {name: 'wtw', age: 29};
// const gary = Person.bind(wtw, 'Gary');
// const o = new gary(32);
// console.log(o);
// gary(30);
// console.log(wtw);

// softBind
// if (typeof Function.prototype.softBind === 'undefined') {
//     Function.prototype.softBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('The softBind must be a function');
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
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {name: 'wtw', age: 29};
// const whiteWood = {name: 'whiteWood', age: 36};
// const gary = Person.softBind(wtw, 'Gary');
// const o = new gary(32);
// console.log(o);
// gary(30);
// console.log(wtw);
// gary.call(whiteWood, 35);
// console.log(whiteWood);
// gary.apply(whiteWood, [48]);
// console.log(whiteWood);

// Promise
// const PromiseCall = (() => {
//     const PENDING = 'PENDING';
//     const FULFILLED = 'FULFILLED';
//     const REJECTED = 'REJECTED';
//
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
//                         callback();
//                     });
//                 }
//             };
//             const rejected = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback();
//                     });
//                 }
//             };
//             try {
//                 fn(resolve, rejected);
//             } catch (err) {
//                 rejected(err);
//             }
//         }
//
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
//                 promise = new Promise((resolve, rejected) => {
//                     setTimeout(() => {
//                         try {
//                             (function thenable(value) {
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(value);
//                                 } else {
//                                     then = value.then;
//                                     if (typeof then === 'function') {
//                                         then.call(this, y => {
//                                             thenable.call(this, y);
//                                         }, r => {
//                                             rejected(r);
//                                         })
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, rejected);
//                                     }
//                                 }
//                             }.bind(this))(this.value);
//                         } catch (err) {
//                             rejected(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, rejected) => {
//                     setTimeout(() => {
//                         try {
//                             if (typeof onRejected !== 'function') {
//                                 rejected(this.reason);
//                             } else {
//                                 const x = onRejected(this.reason);
//                                 resolvePromise(promise, x, resolve, rejected);
//                             }
//                         } catch (err) {
//                             rejected(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, rejected) => {
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
//                                                 thenable.call(this, y)
//                                             }, r => {
//                                                 rejected(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, rejected)
//                                         }
//                                     }.bind(this))(this.value);
//                                 }
//                             } catch (err) {
//                                 rejected(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     rejected(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, rejected);
//                                 }
//                             } catch (err) {
//                                 rejected(err);
//                             }
//                         }, 0);
//                     });
//                 });
//             }
//             return promise;
//         }
//     }
//
//     function resolvePromise(promise, x, resolve, rejected) {
//         if (promise === x) return rejected(new TypeError('The promise and the return value are the same'));
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, rejected);
//             });
//         }
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return rejected(x);
//             let then,
//                 call = false;
//             try {
//                 then = x.then;
//             } catch (err) {
//                 rejected(err);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (call) return;
//                         call = true;
//                         resolvePromise(promise, y, resolve, rejected);
//                     }, r => {
//                         if (call) return;
//                         call = true;
//                         rejected(r);
//                     });
//                 } catch (err) {
//                     if (call) return;
//                     rejected(err);
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
//     console.log('timeout~');
// }, 0);
// const promise = new PromiseCall((resolve, rejected) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve('promise call~~');
//                     }
//                 })
//             }
//         });
//     }, 0);
// });
// promise.then(val => {
//     console.log('first', val);
//     return `next ${val}`;
// }).then(nextVal => {
//     console.log('next', nextVal);
//     throw new TypeError(`error ${nextVal}`);
// }).then(endVal => {
//
// }, reason => {
//     console.error(reason);
// });
// console.log('callback~');

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
//                     this.status = FULFILLED;
//                     this.value = value;
//                     this.onFulfilledCallbacks.forEach(callback => {
//                         callback();
//                     });
//                 }
//             }
//             const rejected = reason => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback();
//                     });
//                 }
//             }
//             try {
//                 fn(resolve, rejected);
//             } catch (err) {
//                 rejected(err);
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
//                 promise = new Promise((resolve, rejected) => {
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
//                                             rejected(r);
//                                         });
//                                     } else {
//                                         const x = onFulfilled(value);
//                                         resolvePromise(promise, x, resolve, rejected);
//                                     }
//                                 }.bind(this))(this.value);
//                             }
//                         } catch (err) {
//                             rejected(err);
//                         }
//                     }, 0);
//                 });
//             }
//             if (this.status === REJECTED) {
//                 promise = new Promise((resolve, rejected) => {
//                     if (typeof onRejected !== 'function') {
//                         rejected(this.reason);
//                     } else {
//                         const x = onRejected(this.reason);
//                         resolvePromise(promise, x, resolve, rejected);
//                     }
//                 });
//             }
//             if (this.status === PENDING) {
//                 promise = new Promise((resolve, rejected) => {
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
//                                                 rejected(r);
//                                             });
//                                         } else {
//                                             const x = onFulfilled(value);
//                                             resolvePromise(promise, x, resolve, rejected);
//                                         }
//                                     }.bind(this))(this.value);
//                                 }
//                             } catch (err) {
//                                 rejected(err);
//                             }
//                         }, 0);
//                     });
//                     this.onRejectedCallbacks.push(() => {
//                         setTimeout(() => {
//                             try {
//                                 if (typeof onRejected !== 'function') {
//                                     rejected(this.reason);
//                                 } else {
//                                     const x = onRejected(this.reason);
//                                     resolvePromise(promise, x, resolve, rejected);
//                                 }
//                             } catch (err) {
//                                 rejected(err);
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
//     function resolvePromise(promise, x, resolve, rejected) {
//         if (promise === x) return rejected(new TypeError('The promise and the return value are the same'));
//
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, rejected);
//             });
//         }
//         if (typeof x === 'object' || typeof x === 'function') {
//             if (x === null) return rejected(x);
//             let then,
//                 call = false;
//             try {
//                 then = x.then;
//             } catch (err) {
//                 rejected(err);
//             }
//             if (typeof then === 'function') {
//                 try {
//                     then.call(x, y => {
//                         if (call) return;
//                         call = true;
//                         resolvePromise(promise, y, resolve, rejected);
//                     }, r => {
//                         if (call) return;
//                         call = true;
//                         rejected(r);
//                     });
//                 } catch (err) {
//                     if (call) return;
//                     rejected(err);
//                 }
//             } else {
//                 resolve(x);
//             }
//         } else {
//             resolve(x);
//         }
//     }
//     Promise.resolve = val => {
//         if (val instanceof Promise) {
//             return val;
//         }
//         return new Promise(resolve => {
//             resolve(val);
//         });
//     };
//     Promise.rejected = reason => {
//         return new Promise((resolve, rejected) => {
//             rejected(reason);
//         });
//     };
//     Promise.all = lists => {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise((resolve, rejected) => {
//             const result = [],
//                 length = lists.length;
//             let count = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[count++] = value;
//                     if (count === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     rejected(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = lists => {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise((resolve, rejected) => {
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     rejected(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = lists => {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise(resolve => {
//             const result = [],
//                 length = lists.length;
//             let count = 0;
//             lists.forEach(item => {
//                 Promise.resolve(item).then(value => {
//                     result[count++] = {
//                         status: 'fulfilled',
//                         value
//                     };
//                     if (count === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     result[count++] = {
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
//     console.log('timeout~');
// }, 0);
// const promise = new PromiseCall((resolve, rejected) => {
//     setTimeout(() => {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve('promise call~~');
//                     }
//                 })
//             }
//         });
//     }, 0);
// });
// promise.then(val => {
//     console.log('first', val);
//     return `next ${val}`;
// }).then(nextVal => {
//     console.log('next', nextVal);
//     throw new TypeError(`error ${nextVal}`);
// }).then(endVal => {
//     console.log('error', endVal);
// }).catch(reason => {
//     console.error(reason);
// });
// console.log('callback~');
// PromiseCall.resolve(66).then(value => {
//     console.log('value', value);
// });
// PromiseCall.all([1, 2, 3]).then(result => {
//     console.log('result', result);
// });
// PromiseCall.all([new PromiseCall(resolve => {
//     setTimeout(() => resolve(1), 1000)
// }), PromiseCall.rejected(new TypeError('2')), 3]).then(value => {
//     console.log('value', value);
// }).catch(reason => {
//     console.log('reason', reason);
// });
// PromiseCall.race([new PromiseCall(resolve => {
//     resolve('first');
// }), PromiseCall.rejected(new TypeError('race')), 3]).then(value => {
//     console.log('value', value);
// }).catch(reason => {
//     console.log('reason', reason);
// });
// PromiseCall.allSettled([1, 2, 3]).then(arr => {
//     console.log('arr', arr);
// });
// PromiseCall.allSettled([new PromiseCall(resolve => {
//     setTimeout(() => resolve('22'), 1500);
// }), PromiseCall.rejected(new TypeError('66')), 88]).then(arr => {
//     console.log('arr', arr);
// });

// generator Thunk
// const fs = require('fs');
// const path = require('path');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// const readFile = Thunk(fs.readFile);
// function run(taskRun) {
//     const task = taskRun();
//     function next(err, data) {
//         if (err) task.throw(err);
//         const {value, done} = task.next(data);
//         if (done) return true;
//         value(next);
//     }
//     next();
// }
// run(function* () {
//     const first = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log('1.txt:', first);
//     const second = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log('2.txt:', second);
//     return second;
// });

// promise Generator Thunk
// const fs = require('fs');
// const path = require('path');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// const readFile = Thunk(fs.readFile);
// const run = taskRun => {
//     return new Promise((resolve, rejected) => {
//         const task = taskRun();
//         function next(err, data) {
//             if (err) return rejected(task.throw(err));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             value(next);
//         }
//         next();
//     });
// };
// run(function* () {
//     const first = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log(first);
//     const second = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log(second);
//     return second;
// }).then(value => {
//     console.log('end', value);
// });

// promise Timeout
// const timerPromise = (promise, timeout) => {
//     return Promise.race([promise, new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             rejected({
//                 status: 'rejected',
//                 reason: '请求超时!'
//             });
//         }, timeout);
//     })]);
// };
// timerPromise(new Promise(resolve => {
//     setTimeout(() => {
//         resolve({
//             status: 'fulfilled',
//             value: '请求成功!'
//         });
//     }, 3200);
// }), 3100).then(result => {
//     console.log('result', result);
// }).catch(reason => {
//     console.error('reason', reason);
// });

// compose
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = compose(multiply, add)(20);
// console.log('result:', result);

// pipe
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const add = x => x + x;
// const multiply = x => x * x;
// const result = pipe(add, multiply)(30);
// console.log('result', result);

// flat
// const flat = (arr = [], initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13]]]];
// const result = flat(arr);
// console.log('result', result);

// layer flat
// const flat = (arr = [], layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const arr = [1, [2, 3], [4, 5, [6, 7]], [8, 9, [10, 11, [12, 13]]], [14, 15, [16, 17, [18, 19, [20, 21]]]], [22, 23, [24, 25, [26, 27, [28, 29, [30, 31, [32, 33]]]]]], [34, 35, [36, 37, [38, 39, [40, 41, [42, 43, [44, 45, [46, 47, [48, 49, [50]]]]]]]]]];
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
// result = flat(arr, 6);
// console.log('result', result);
// result = flat(arr, 7);
// console.log('result', result);
// result = flat(arr, 8);
// console.log('result', result);
// result = flat(arr, 9);
// console.log('result', result);

// fibonacci
// const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// let result = fibonacci(40);
// console.log('result', result);
// result = fibonacci(40);
// console.log('result', result);

// tailCall fibonacci
// const fibonacci = (n = 0, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// let result = fibonacci(40);
// console.log('result', result);
// result = fibonacci(40);
// console.log('result', result);

// cache fibonacci
// const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const memo = (fn, hasher) => {
//     function memoFunc(...args) {
//         const cache = memoFunc.cache;
//         const hashKey = hasher ? hasher.apply(this, args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn.apply(this, args);
//         }
//         return cache[hashKey];
//     }
//
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const memoFibonacci = memo(fibonacci);
// let result = memoFibonacci(40);
// console.log('result', result);
// result = memoFibonacci(40);
// console.log('result', result);

// curry
// const curry = fn => function cacheCurry(...args) {
//     return args.length >= fn.length ? fn.apply(this, args) : (...innerArgs) => cacheCurry.apply(this, args.concat(innerArgs));
// };
// const curried = (a, b, c, d) => a + b + c + d;
// const curryFunc = curry(curried);
// let result = curryFunc(2, 4, 6, 8);
// console.log('result', result);
// result = curryFunc(2)(6)(10)(14);
// console.log('result', result);
// result = curryFunc(2, 5)(8, 11);
// console.log('result', result);
// result = curryFunc(3)(7, 11, 15);
// console.log('result', result);
// result = curryFunc(3, 8)(13)(18);
// console.log('result', result);
// result = curryFunc(4, 6, 8)(10);
// console.log('result', result);

// debounce
// const debounce = function (fn, timeout) {
//     let timer = null;
//     return (...args) => {
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
// const throttle = function (fn, timeout) {
//     let timer = null,
//         firstRequest = true;
//     return (...args) => {
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

// factorial
// const factorial = (n = 1) => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(10);
// console.log('result', result);

// tailCall factorial
// const factorial = (n = 1, p = 1) => n === 1 ? n * p : factorial(n - 1, n * p);
// const result = factorial(5);
// console.log('result', result);

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
// const love = Symbol.for('love');
// const me = {
//     name: 'wtw',
//     age: 28,
//     gender: true,
//     introduce() {
//     },
//     hobby: {
//         sports: {
//             ball: ['basketball', 'football']
//         }
//     },
//     [love]: 'abby moon'
// };
// const me_ano = shallowCopy(me);
// console.log(me, me_ano);
// me.name = 'Gary';
// me.age = 29;
// me.hobby.sports.ball = ['volleyball', 'tennis'];
// console.log(me, me_ano);

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
// const love = Symbol.for('love');
// const me = {
//     name: 'wtw',
//     age: 28,
//     gender: true,
//     introduce() {
//     },
//     hobby: {
//         sports: {
//             ball: ['basketball', 'football']
//         }
//     },
//     [love]: 'abby moon'
// };
// me.own = me;
// const me_ano = deepClone(me);
// console.log(me, me_ano);
// me.name = 'Gary';
// me.age = 29;
// me.hobby.sports.ball = ['volleyball', 'tennis'];
// console.log(me, me_ano);

// deep clone loop
// const deepClone = o => {
//     const source = new WeakMap();
//     const deepCloneFunc = function (o) {
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
// const love = Symbol.for('love');
// const me = {
//     name: 'wtw',
//     age: 28,
//     gender: true,
//     introduce() {
//     },
//     hobby: {
//         sports: {
//             ball: ['basketball', 'football']
//         }
//     },
//     [love]: 'abby moon'
// };
// me.own = me;
// const me_ano = deepClone(me);
// console.log(me, me_ano);
// me.name = 'Gary';
// me.age = 29;
// me.hobby.sports.ball = ['volleyball', 'tennis'];
// console.log(me, me_ano);

// pick
// const pick = (o, ...property) => {
//     const source = new WeakMap();
//     const deepClone = o => {
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
// const love = Symbol.for('love');
// const me = {
//     name: 'wtw',
//     age: 28,
//     gender: true,
//     introduce() {
//     },
//     hobby: {
//         sports: {
//             ball: 'basketball'
//         }
//     },
//     [love]: 'abby moon'
// };
// me.own = me;
// const me_ano = pick(me, 'name', 'age', 'hobby', 'sports', 'ball', 'own', love);
// console.log(me, me_ano);
// me.name = 'Gary';
// me.age = 29;
// me.hobby.sports.ball = 'football';
// console.log(me, me_ano);

// new
// const newCall = (fn, ...args) => {
//     const obj = {};
//     const result = fn.apply(obj, args);
//     const isObject = typeof result === 'object' && result !== null;
//     const isFunction = typeof result === 'function';
//     if (isObject || isFunction) {
//         return result;
//     }
//     // obj.__proto__ = fn.prototype;
//     Object.setPrototypeOf(obj, fn.prototype);
//     return obj;
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old`);
// };
// const wtw = newCall(Person, 'wtw', 28);
// console.log(wtw);
// wtw.introduce();

// instanceof
// const instanceofCall = (target, targetClass) => {
//     if (!target || !targetClass || !target.__proto__ || !targetClass.prototype) {
//         throw new TypeError('');
//     }
//     let current = target.__proto__;
//     while (current) {
//         if (current === targetClass.prototype) {
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
// const wtw = new Person('wtw', 27);
// console.log(wtw);
// wtw.introduce();
// console.log(instanceofCall(wtw, Person));
// console.log(instanceofCall(wtw, Object));
// console.log(instanceofCall({}, Object));
// console.log(instanceofCall({}, Person));

// apply
// if (typeof Function.prototype.applyBind === 'undefined') {
//     Function.prototype.applyBind = function (context, args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('apply 方法必须被一个函数调用!');
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
// const wtw = {name: 'wtw', age: 28};
// Person.applyBind(wtw, ['gary', 29]);
// console.log(wtw);

// call
// if (typeof Function.prototype.callBind === 'undefined') {
//     Function.prototype.callBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('call 方法必须被一个函数调用!');
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
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {name: 'wtw', age: 26};
// Person.callBind(wtw, 'gary', 22);
// console.log(wtw);

// bind
// if (typeof Function.prototype.bindCall === 'undefined') {
//     Function.prototype.bindCall = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('bind 方法必须被一个函数调用');
//         }
//         const self = this;
//         function F() {
//         }
//         const fBind = function (...innerArgs) {
//             return self.apply(this instanceof fBind ? this : context, args.concat(innerArgs));
//         };
//         Object.setPrototypeOf(F.prototype, this.prototype);
//         Object.setPrototypeOf(fBind.prototype, F.prototype);
//         return fBind;
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {name: 'wtw', age: 29};
// const whiteThanWood = {name: 'white_than_wood', age: 20};
// const gary = Person.bindCall(wtw, 'gary');
// gary(26);
// console.log(wtw);
// const white_than_wood = new gary(22);
// console.log(white_than_wood, wtw);
// gary.call(whiteThanWood, 28);
// console.log(whiteThanWood, wtw);

// softBind
// if (typeof Function.prototype.softBind === 'undefined') {
//     Function.prototype.softBind = function (context, ...args) {
//         if (typeof this !== 'function') {
//             throw new TypeError('softBind 方法必须被一个函数调用');
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
//     };
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name}, ${this.age} year's old~`);
// };
// const wtw = {name: 'wtw', age: 29};
// const whiteThanWood = {name: 'white_than_wood', age: 20};
// const gary = Person.softBind(wtw);
// gary('gary', 26);
// console.log(wtw);
// const white_than_wood = new gary('white_than_wood', 22);
// console.log(white_than_wood, wtw);
// gary.call(whiteThanWood, 'whiteThanWood', 28);
// console.log(whiteThanWood, wtw);

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
//                                 const x = onRejected(this.value);
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
//     }
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) {
//             return reject(new TypeError('The promise and the return value are the same'));
//         }
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             }, r => {
//                 reject(r);
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
//     return Promise;
// })();
// console.log('sync');
// const promise = new PromiseCall(resolve => {
//     setTimeout(() => {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve('白木');
//                     }
//                 });
//             }
//         });
//     }, 0);
// });
// promise.then(value => {
//     console.log(value);
//     return `I'm ${value}`;
// }).then(result => {
//     console.log(result);
//     throw new TypeError(`error, ${result}`);
// }).then(end => {
// }, reason => {
//     console.log(reason);
// });
// setTimeout(() => {
//     console.log('async');
// }, 0);

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
//                 };
//             }
//             let promise,
//                 then;
//             if (this.status === FULFILLED) {
//                 promise = new Promise((resolve, reject) => {
//                     if (typeof onFulfilled !== 'function') {
//                         resolve(this.value);
//                     } else {
//                         (function thenable(value) {
//                             then = value.then;
//                             if (typeof then === 'function') {
//                                 then.call(this, y => {
//                                     thenable.call(this, y);
//                                 }, r => {
//                                     reject(r);
//                                 });
//                             } else {
//                                 const x = onFulfilled(value);
//                                 resolvePromise(promise, x, resolve, reject);
//                             }
//                         }.bind(this))(this.value);
//                     }
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
//                                 resolvePromise(promise, x, resolve, reject)
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
//             return this.then(value => {
//                 return Promise.resolve(fn()).then(() => value);
//             }, reason => {
//                 return Promise.resolve(fn()).then(() => {
//                     throw reason;
//                 });
//             });
//         }
//     }
//     Promise.resolve = function (asPromise) {
//         if (asPromise instanceof Promise) {
//             return asPromise;
//         }
//         return new Promise(resolve => {
//             resolve(asPromise);
//         });
//     };
//     Promise.reject = function (reason) {
//         return new Promise((resolve, reject) => {
//             reject(reason);
//         });
//     };
//     Promise.all = function (lists) {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach((list, index) => {
//                 Promise.resolve(list).then(value => {
//                     result[index] = value;
//                     if (current++ === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.race = function (lists) {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise((resolve, reject) => {
//             lists.forEach(list => {
//                 Promise.resolve(list).then(value => {
//                     resolve(value);
//                 }, reason => {
//                     reject(reason);
//                 });
//             });
//         });
//     };
//     Promise.allSettled = function (lists) {
//         if (!Array.isArray(lists)) throw new TypeError('parameter must be an array');
//         return new Promise((resolve, reject) => {
//             const result = [],
//                 length = lists.length;
//             let current = 0;
//             lists.forEach((list, index) => {
//                 Promise.resolve(list).then(value => {
//                     result[index] = {
//                         status: 'fulfilled',
//                         value
//                     };
//                     if (current++ === length) {
//                         resolve(result);
//                     }
//                 }, reason => {
//                     result[index] = {
//                         status: 'rejected',
//                         reason
//                     };
//                     if (current++ === length) {
//                         resolve(result);
//                     }
//                 });
//             });
//         });
//     };
//     function resolvePromise(promise, x, resolve, reject) {
//         if (promise === x) {
//             return reject(new TypeError('The promise and the return value are the same'));
//         }
//         if (x instanceof Promise) {
//             x.then(y => {
//                 resolvePromise(promise, y, resolve, reject);
//             }, r => {
//                 reject(r);
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
//                         resolvePromise(promise, y, resolve, reject)
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
// console.log('sync');
// const promise = new PromiseCall(resolve => {
//     setTimeout(() => {
//         resolve({
//             then(resolve) {
//                 resolve({
//                     then(resolve) {
//                         resolve('白木');
//                     }
//                 });
//             }
//         });
//     }, 0);
// });
// promise.then(value => {
//     console.log(value);
//     return `I'm ${value}`;
// }).then(result => {
//     console.log(result);
//     throw new TypeError(`error, ${result}`);
// }).catch(reason => {
//     console.log(reason);
// });
// Promise.resolve(new Promise(resolve => resolve('I love white_than_wood'))).then(value => {
//     console.log('value', value);
// });
// Promise.reject(new TypeError('what\'s wrong?abby moon.')).catch(reason => {
//     console.log('reason', reason);
// });
// Promise.all([1, 2, 3]).then(values => {
//     console.log(values);
// });
// Promise.all([
//     new Promise(resolve => {
//         setTimeout(() => resolve('first'));
//     }),
//     Promise.reject(new TypeError('what\'s wrong?abby moon + white_than_wood.')),
//     3
// ]).then(value => {
//     console.log('value', value);
// }).catch(reason => {
//     console.log('reason', reason);
// });
// Promise.race([
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve('first');
//         }, 0);
//     }),
//     Promise.reject(new TypeError('what\'s wrong?abby moon + white_than_wood + memory.')),
//     3
// ]).then(value => {
//     console.log('value', value);
// }).catch(reason => {
//     console.log('reason', reason);
// });
// Promise.allSettled([
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve('first');
//         }, 1000);
//     }),
//     Promise.reject(new TypeError('what\'s wrong?abby moon + white_than_wood + memory.')),
//     3
// ]).then(values => {
//     console.log('value', values);
// });
// setTimeout(() => {
//     console.log('async');
// }, 0);

// generator Thunk
// const fs = require('fs');
// const path = require('path');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// const readFile = Thunk(fs.readFile);
// function run(taskRun) {
//     const task = taskRun();
//     function next(err, data) {
//         if (err) task.throw(err);
//         const {value, done} = task.next(data);
//         if (done) return true;
//         value(next);
//     }
//     next();
// }
// run(function* () {
//     const first = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log('1.txt:', first);
//     const second = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log('2.txt', second);
//     return second;
// });

// promise Generator Thunk
// const fs = require('fs');
// const path = require('path');
// const Thunk = fn => (...args) => callback => fn(...args, callback);
// const readFile = Thunk(fs.readFile);
// function run(taskRun) {
//     return new Promise((resolve, reject) => {
//         const task = taskRun();
//         function next(err, data) {
//             if (err) return reject(task.throw(err));
//             const {value, done} = task.next(data);
//             if (done) return resolve(value);
//             value(next);
//         }
//         next();
//     });
// }
// run(function* () {
//     const first = yield readFile(path.resolve(process.cwd(), './src/questions/assets/1.txt'), 'utf-8');
//     console.log('1.txt', first);
//     const second = yield readFile(path.resolve(process.cwd(), './src/questions/assets/2.txt'), 'utf-8');
//     console.log('2.txt', second);
//     return second;
// }).then(value => {
//     console.log('end', value);
// });

// promise timeout
