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
