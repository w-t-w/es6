// 基本多文种平面
// 2^8 码位
// utf-8
// 辅助平面
// utf-16
// 2^16 码位
// 字符串长度
// 正则表达式
// 字符位
// 字符编码
// 编码转换
// var str = '𠮷兆';
// var regExp = /^..$/;
// console.log(str.length);
// console.log(regExp.test(str));
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));
// console.log(str.codePointAt(0));
// console.log(str.codePointAt(1));
// console.log(str.codePointAt(2));
// console.log(String.fromCharCode(134071));
// console.log(String.fromCodePoint(134071));
// 字符串排序方式
// normalize
// 正则表达式 \u 修饰符
// var str = '𠮷';
// var regExp = /^..$/u;
// var regExp = /𠮷{2}兆/u;
// var regExp = /𠮷{2}兆/u;
// var regExp = /\u{20bb7}/u;
// console.log(regExp.test(str));
// char isUTF16
// var str = '兆';
// function isUTF16(char) {
//     return char.codePointAt(0) > 0xFFFF;
// }
// console.log(isUTF16(str));
// 字符串长度
// function getStrLength(str) {
//     const strArr = str.match(/[\s\S]/ug);
//     return strArr ? strArr.length : 0;
// }
// 字符子串识别
// console.log(getStrLength('𠮷千兆'));
// startsWith,endsWith,includes,repeat
// var str = 'wtw:Gary Yin';
// console.log(str.startsWith('w'));
// console.log(str.endsWith('n'));
// console.log(str.includes('G'));
// console.log(str.startsWith('w', 2));
// console.log(str.endsWith('i', 11));
// console.log(str.includes('G', 4));
// 字符串重复打印
// var str = 'wtw';
// console.log(str.repeat(3));
// console.log(str.repeat(5));
// 粘滞描述符
// \y
// var str = 'hello1 hello2 hello3 hello4';
// var regExp_y = /hello\d\s/y;
// var regExp_g = /hello\d\s/g;
// var regExp = /hello\d\s/;
// console.log(regExp_y.exec(str)[0]);
// console.log(regExp_g.exec(str)[0]);
// console.log(regExp.exec(str)[0]);
// console.log(regExp_y.lastIndex);
// console.log(regExp_g.lastIndex);
// console.log(regExp.lastIndex);
// console.log(regExp_y.exec(str));
// console.log(regExp_g.exec(str));
// console.log(regExp.exec(str));
// console.log(regExp_y.lastIndex);
// console.log(regExp_g.lastIndex);
// console.log(regExp.lastIndex);
// console.log(regExp_y.exec(str));
// console.log(regExp_g.exec(str));
// console.log(regExp.exec(str));
// console.log(regExp_y.lastIndex);
// console.log(regExp_g.lastIndex);
// console.log(regExp.lastIndex);
// console.log(regExp.sticky);
// console.log(regExp_g.sticky);
// console.log(regExp_y.sticky);
// 正则表达式描述符覆盖
// var regExp = new RegExp(/hello\d\s/ig, 'uy');
// 获取描述符
// console.log(regExp.flags);
// console.log(regExp.source);
// var regExp = new RegExp(/hello\d\s/ig, 'uy');
// function getRegExpFlags(regExp) {
//     regExp = regExp.toString();
//     return regExp.substring(regExp.lastIndexOf('/') + 1);
// }
// console.log(getRegExpFlags(regExp));
// 模板字符串
// 多行字符串
// 字符串占位符
// const wtw = {
//     name: 'wtw',
//     age: 25,
//     hobby: 'engineer'
// };
// console.log(`I'm ${wtw.name},
// ${wtw.age} year's old,
// I love ${wtw.hobby}~`);
// 模板标签
// function person(strs, ...args) {
//     let result = '',
//         argsLength = args.length;
//     for (let i = 0; i < argsLength; i++) {
//         result += strs[i];
//         result += args[i];
//     }
//     result += strs[argsLength];
//     return result;
// }
// const wtw = {
//     name: 'wtw',
//     age: 29,
//     hobby: 'engineer'
// };
// const personWtw = person`I'm ${wtw.name},${wtw.age} year's old,I love ${wtw.hobby}~`;
// console.log(personWtw);
// const personWtw = String.raw`I'm ${wtw.name},\n${wtw.age} year's old,\nI love ${wtw.hobby}~`;
// console.log(personWtw);
// function raw(strs, ...args) {
//     let result = ``;
//     const argsLength = args.length;
//     for (let i = 0; i < argsLength; i++) {
//         result += strs.raw[i];
//         result += args[i];
//     }
//     result += strs.raw[argsLength];
//     return result;
// }
// const personWtw = raw`I'm ${wtw.name},\n${wtw.age} year's old,\nI love ${wtw.hobby}~`;
// console.log(personWtw);