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
// const shallowCopy = (o) => {
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