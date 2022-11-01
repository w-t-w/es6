// Array.of
// 用于规整初始化声明时的参数
// const arr = Array.of(1);
// const arr_old = Array(1, 2);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr_old[0]);
// console.log(arr_old[1]);
// console.log(arr_old.length);
// const arr = Array.of(24, 68, 48);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);
// Array.from
// 对于任何的可迭代对象或者类数组对象都可实现操作转化为数组,同时可以实行数组元素处理
// function createArr(length) {
//     return Array.from(Array.apply(null, {length: 100}), function map(item, index) {
//         return index + 1;
//     });
// }
// const arr = createArr(100);
// console.log(arr);
// 生成器的对象方法
// const person = {
//     name: 'wtw',
//     age: 29,
//     hobby: {hobby: 'computer'},
//     * [Symbol.iterator]() {
//         yield* Object.values(this);
//     }
// };
// const arr = Array.from(person);
// console.log(arr.length);
// console.log(arr);
// 生成器的对象方法
// Array.from 的第三个参数
// const num = {
//     base: 1,
//     add(num, index) {
//         return num + this.base;
//     }
// };
// const baseArr = [1, 2, 3];
// const transformArr = Array.from(baseArr, num.add, num);
// console.log(transformArr);
// 方法
// 获取并匹配符合条件的数组元素
// 获取并匹配符合条件
// 的数组元素下标
// const arr = [20, 30, 90, 50];
// const element = arr.find(item => item > 25);
// console.log(element);
// const index= arr.findIndex(item => item > 80);
// console.log(index);
// 向数组中指定位置填充指定元素
// const arr = [3, 6, 9, 7, 8];
// arr.fill(100);
// console.log(arr);
// const arr = [3, 6, 9, 7, 8];
// arr.fill(100, 1, 3);
// console.log(arr);
// const arr = [3, 6, 9, 7, 8];
// arr.fill(100, -2);
// console.log(arr);
// 向数组中指定位置添加指定位置的数组元素复制值
// const arr = [3, 6, 9, 7, 8];
// console.log(arr.copyWithin(1, 2, 4));
// console.log(arr.copyWithin(2, 3));
// console.log(arr.copyWithin(0, 2, -1));
// console.log(arr.copyWithin(0, 2));
// 定型数组
// 数组缓冲区
// const buffer = new ArrayBuffer(10);
// console.log(buffer.byteLength);
// 数组缓冲区视图
// const buffer = new ArrayBuffer(10),
//     view = new DataView(buffer),
//     view_ano = new DataView(buffer, 5, 2);
// console.log(view.buffer, view.byteOffset, view.byteLength);
// console.log(view_ano.buffer, view_ano.byteOffset, view_ano.byteLength);
// console.log(view.buffer === buffer, view_ano.buffer === buffer);
// 数组缓冲区视图读取和写入数据
// const buffer = new ArrayBuffer(10);
// const view = new DataView(buffer, 5, 3);
// view.setInt8(1, 1);
// view.setInt8(2, 2);
// console.log(view.getInt8(1));
// console.log(view.getInt8(2));
// console.log(view.getInt8(2));
// 多种方式创建定型数组
// 不使用 自定义数组缓冲区,直接使用定型数组声明
// const int8 = new Int8Array([25, 100]);
// const int32 = new Int32Array([48]);
// console.log(int8.length, int8.byteLength);
// console.log(int32.length, int32.byteLength);
// console.log(int8[0]);
// console.log(int8[1]);
// console.log(int32[0]);
// 或者使用定型数组的构造对象作为定型数组声明的参数
// const int8 = new Int8Array([25, 90, 88]);
// const int32 = new Int32Array(int8);
// console.log(int8.length, int8.byteLength);
// console.log(int32.length, int32.byteLength);
// console.log(int8, int32);
// 普通数组与定型数组的相似之处
// 通用方法
// const int8 = new Int8Array([75, 30, 100, 25]);
// const int8_new = int8.map(item => item + 10);
// console.log(int8_new);
// 转换为普通数组,使用迭代器,展开运算符
// const int8 = new Int8Array([75, 30, 100, 25]);
// const arr = [...int8];
// console.log(arr);
// console.log(arr.length);
// 定型数组相对于普通数组的不同之处
// const int32 = new Int32Array([36, 88, 24, 120]);
// int32[4] = 666;
// console.log(int32);
// int32.length = 2;
// console.log(int32);
// 定型数组特有的方法
// set
// const int32 = new Int32Array([36, 88, 24, 120]);
// int32.set([66], 2);
// console.log(int32);
// subarray
// const int32 = new Int32Array([36, 88, 24, 120]);
// const int32_split = int32.subarray(2, 4);
// console.log(int32_split.byteLength, int32_split.length);
// console.log(int32_split);