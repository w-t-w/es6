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

// layer flat
