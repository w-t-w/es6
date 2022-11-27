// compose
// const add = x => x + x;
// const multiply = x => x * x;
// const compose = (...args) => x => args.reduceRight((a, b) => b(a), x);
// const result = compose(multiply, add)(40);
// console.log(result);

// pipe
// const add = x => x + x;
// const multiply = x => x * x;
// const pipe = (...args) => x => args.reduce((a, b) => b(a), x);
// const result = pipe(add, multiply)(50);
// console.log(result);

// flat
// const arr = [1, [2, 4, 5], [7, 8, 9, [20]], [21, 22, 23, [35, 39, 44, [52, 56, 64, [87, [33, [80]]]]]]];
// const flat = (arr, initial = []) => arr.reduce((a, b) => Array.isArray(b) ? flat(b, a) : a.concat(b), initial);
// const result = flat(arr);
// console.log(result);

// layer flat
// const arr = [1, [2, 4, 5], [7, 8, 9, [20]], [21, 22, 23, [35, 39, 44, [52, 56, 64, [87, [33, [80]]]]]]];
// const flat = (arr, layer = 1, initial = []) => arr.reduce((a, b) => (Array.isArray(b) && layer > 1) ? flat(b, layer - 1, a) : a.concat(b), initial);
// const result = flat(arr, 5);
// console.log(result);

// fibonacci
// const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
// const result = fibonacci(40);
// console.log(result);

// tailCall fibonacci
// const fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// const result = fibonacci(40);
// console.log(result);

// cache fibonacci
// const fibonacci = (n, n1 = 0, n2 = 1) => n === 0 ? n1 : fibonacci(n - 1, n2, n1 + n2);
// const memo = (fn, hasher) => {
//     const memoFunc = (...args) => {
//         const cache = memoFunc.cache,
//             hashKey = hasher ? hasher(...args) : args[0];
//         if (!cache[hashKey]) {
//             cache[hashKey] = fn(...args);
//         }
//         return cache[hashKey];
//     };
//     memoFunc.cache = {};
//     return memoFunc;
// };
// const fibonacciResult = memo(fibonacci)(5);
// console.log(fibonacciResult);

// curry
// const curryFunc = (a, b, c) => a + b + c;
// const curry = fn => {
//     return function _callee(...args) {
//         return args.length >= fn.length ? fn(...args) : (...innerArgs) => _callee(...args, ...innerArgs);
//     }
// };
// const curried = curry(curryFunc);
// console.log(curried(1, 4, 3));
// console.log(curried(1)(2, 5));
// console.log(curried(5)(2)(3));
// console.log(curried(1, 2)(3));

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
// }

// throttle
// const throttle = (fn, timeout) => {
//     let timer = null,
//         first = true;
//     return (...args) => {
//         if (first) {
//             fn(...args);
//             return true;
//         }
//         if (timer) {
//             return false;
//         }
//         timer = setTimeout(() => {
//             fn(...args);
//             clearTimeout(timer);
//             timer = null;
//         }, timeout);
//     };
// };

// factorial
// const factorial = n => n === 1 ? n : n * factorial(n - 1);
// const result = factorial(10);
// console.log(result);

// tailCall factorial
// const tailCallFactorial = (n, p = 1) => {
//     if (n === 1) {
//         return p * n;
//     }
//     return tailCallFactorial(n - 1, p * n);
// };
// const result = tailCallFactorial(10);
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
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: Symbol.for('secret'),
//     sports: {
//         ball: [
//             'football'
//         ]
//     },
//     love() {
//         console.log('I love you~');
//     },
//     [Symbol.for('egName')]: 'Gary'
// };
// const wtw_ano = shallowCopy(wtw);
// wtw_ano.age = 28;
// wtw_ano.sports.ball.push('basketball');
// console.log(wtw_ano, wtw);

// deep clone
// const deepClone = o => {
//     const _o = Array.isArray(o) ? [] : {};
//     for (const key of Reflect.ownKeys(o)) {
//         if (o.hasOwnProperty(key)) {
//             if (typeof o[key] === 'object' && o[key]) {
//                 _o[key] = deepClone(o[key]);
//             } else {
//                 _o[key] = o[key];
//             }
//         }
//     }
//     return _o;
// };
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: Symbol.for('secret'),
//     sports: {
//         ball: [
//             'football'
//         ]
//     },
//     love() {
//         console.log('I love you~');
//     },
//     [Symbol.for('egName')]: 'Gary'
// };
// wtw.me = wtw;
// const wtw_ano = deepClone(wtw);
// wtw_ano.age = 28;
// wtw_ano.sports.ball.push('basketball');
// console.log(wtw_ano, wtw);

// deep clone loop
// const deepClone = o => {
//     const source = new WeakMap();
//     const deepCloneFactory = o => {
//         const _o = Array.isArray(o) ? [] : {};
//         const existObj = source.get(o);
//         if (existObj) {
//             return existObj;
//         }
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key)) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = deepCloneFactory(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return deepCloneFactory(o);
// };
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: Symbol.for('secret'),
//     sports: {
//         ball: [
//             'football'
//         ]
//     },
//     love() {
//         console.log('I love you~');
//     },
//     [Symbol.for('egName')]: 'Gary'
// };
// wtw.me = wtw;
// const wtw_ano = deepClone(wtw);
// wtw_ano.age = 28;
// wtw_ano.sports.ball.push('basketball');
// console.log(wtw_ano, wtw);

// pick
// const pick = (o, ...property) => {
//     const source = new WeakMap();
//     const pickFactory = o => {
//         const _o = Array.isArray(o) ? [] : {};
//         const existObj = source.get(o);
//         if (existObj) {
//             return existObj;
//         }
//         source.set(o, o);
//         for (const key of Reflect.ownKeys(o)) {
//             if (o.hasOwnProperty(key) && property.includes(String(key))) {
//                 if (o[key] && typeof o[key] === 'object') {
//                     _o[key] = pickFactory(o[key]);
//                 } else {
//                     _o[key] = o[key];
//                 }
//             }
//         }
//         return _o;
//     };
//     return pickFactory(o);
// };
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: Symbol.for('secret'),
//     sports: {
//         ball: [
//             'football'
//         ]
//     },
//     love() {
//         console.log('I love you~');
//     },
//     [Symbol.for('egName')]: 'Gary'
// };
// wtw.me = wtw;
// const wtw_ano = pick(wtw, 'age', 'me', 'hobby', 'love', 'sports', 'ball');
// wtw_ano.age = 28;
// wtw_ano.sports.ball.push('basketball');
// console.log(wtw_ano, wtw);

// new
// const myNew = (fn, ...args) => {
//     const obj = {},
//         result = fn.call(obj, ...args),
//         isObject = typeof result === 'object' && result !== null,
//         isFunction = typeof result === 'function';
//     if (isFunction || isObject) {
//         return result;
//     }
//     obj.__proto__ = fn.prototype;
//     return obj;
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

// instanceof
// const myInstanceof = (targetObject, targetClass) => {
//     if (!targetObject || !targetClass || !targetObject.__proto__ || !targetClass.prototype) {
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
// Person.prototype.introduce = function () {
//     console.log(`I'm ${this.name},${this.age} year's old~`);
// };
// const wtw = new Person('Gary', 28);
// console.log(myInstanceof(wtw, Person));
// console.log(myInstanceof(wtw, Object));
// console.log(myInstanceof({}, Object));
// console.log(myInstanceof({}, Person));

// unit
// const unit = (fn) => {
//     try {
//         fn();
//     } catch (e) {
//         console.log(e);
//     }
// };
// const test = (desc, result) => {
//     return {
//         toBe(expectResult) {
//             if (result === expectResult) {
//                 console.log(`${desc} PASS -> ${expectResult}`);
//             } else {
//                 console.log(`${desc} FAILED -> got ${result}, expected ${expectResult}`);
//             }
//         }
//     }
// };
// const add = x => x + x;
// const multiply = x => x * x;
// unit(() => {
//     test('1+1', add(1)).toBe(4);
//     test('2+2', add(2)).toBe(3);
//     test('2*2', multiply(2)).toBe(4);
// });

// call
// Function.prototype.myCall = function (o, ...args) {
//     const symbol = Symbol.for('call');
//     o[symbol] = this;
//     const result = o[symbol](...args);
//     delete o[symbol];
//     return result;
// };
// const wtw = {
//     name: 'wtw',
//     introduce() {
//         console.log(this.name);
//     }
// };
// const gary = {
//     name: 'gary'
// };
// wtw.introduce();
// wtw.introduce.myCall(gary);

// apply
// Function.prototype.myApply = function (o, args) {
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
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// Person.myApply(wtw, ['Gary', 35]);
// console.log(wtw);

// bind
// next 下一次

// softBind
// next 下一次

// complete Promise
// next 下一次
