// 基本语法
// 导出模块
// 导入模块
// 导入单个绑定
// import {number} from './export';
// console.log(number);
// 导入多个绑定
// import {number, name, drink} from './export';
// console.log(number, name, drink);
// 导入整个模块
// import * as modules from './export';
// console.log(modules.name);
// console.log(modules.number);
// console.log(modules.drink);
// ESM 的特性
// 静态分析
// 赋值引用
// import {number, count} from './export';
// console.log(number);
// count();
// console.log(number);
// 导出时重命名
// import {number, add} from './export';
// console.log(number);
// add();
// console.log(number);
// 导入时重命名
// import {number, add as sum} from './export';
// console.log(number);
// sum();
// console.log(number);
// 模块的默认值
// 导出默认值
// import pow, {number} from './export';
// console.log(number);
// pow();
// console.log(number);
// 导入默认值
// import {default as pow, number} from './export';
// console.log(number);
// pow();
// console.log(number);
// import sum, {number} from './export';
// console.log(number);
// sum();
// console.log(number);
// 重新导出一个绑定
// import {number, count} from './export';
// console.log(number);
// count();
// console.log(number);
// 无绑定导入
// import './export';
// const colors = ['purple'];
// const pushColors = ['red', 'yellow', 'blue', 'orange'];
// const perfectColors = colors.pushAll(pushColors);
// console.log(perfectColors);
// console.log(colors);
// Web 浏览器中的模块加载顺序
// 下载并解析
// 递归下载并解析
// 递归执行
// 执行
// import * as modules from './export';
// console.log(modules.number);
// modules.default();
// console.log(modules.number);