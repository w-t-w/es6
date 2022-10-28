// 解构赋值
// 对象解构
// const wtw = {
//     name: 'Gary',
//     age: 29
// };
// const {name, age} = wtw;
// console.log(name, age);
// const wtw = {
//     name: 'Gary',
//     age: 29
// };
// let name, age;
// function isPerson(value) {
//     console.log(value === wtw);
// }
// isPerson({name, age} = wtw);
// console.log(name, age);
// 默认值
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// let {name, age, hobby = 'computer'} = wtw;
// console.log(name, age, hobby);
// console.log(name, age, hobby);
// 非同名变量赋值
// const wtw = {
//     name: 'wtw',
//     age: 29
// };
// let {name: firstName = 'Yin', age: lastAge, hobby = 'computer'} = wtw;
// console.log(firstName, lastAge, hobby);
// 嵌套解构
// 数组解构
// let a = 1, b= 2;
// [b, a] = [a, b];
// console.log(a, b);
// const colors = ['red', 'blue', 'yellow'];
// let [, , thirdColor = 'purple'] = colors;
// console.log(thirdColor);
// 嵌套解构
// 不定元素
// 跟不定参数一致,必须作为末尾元素集合存在
// const colors = ['red', 'blue', 'yellow'];
// let [firstColor, ...colors_ano] = colors;
// console.log(colors_ano);
// const colors = ['red', 'blue', 'yellow'];
// const [...colors_ano] = [...colors];
// console.log(colors_ano);
// 混合解构
// 解构参数
// 必须传值的解构参数
// 解构参数的默认值
// const defaultParams = {
//     name: 'wtw',
//     age: 29,
//     gender: 'man',
//     hobby: 'computer'
// };
// function person({
//                     name = defaultParams.name,
//                     age = defaultParams.age,
//                     gender = defaultParams.gender,
//                     hobby = defaultParams.hobby
//                 } = defaultParams) {
//     console.log(name, age, gender, hobby);
// }
//
// person({name: 'Gary', gender: 'woman'});