// export let number = 100;
// export var name = 'wtw';
// export const drink = 'water';
//
// export function count() {
//     number++;
// }
//
// function sum() {
//     number = number + 2;
// }
//
// export {sum as default};
// import sum from './module';
// export {number, name, drink, count} from './module';
Array.prototype.pushAll = function (args) {
    if (!Array.isArray(args)) {
        throw new TypeError('参数必须为数组!!');
    }
    return this.push(...args);
};