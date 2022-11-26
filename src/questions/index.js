// 基于 javascript 的问题

// 1. 让下面的代码可以运行：
// Array.prototype.multiply = function () {
//     const result = this.reduce((initial, next) => {
//         return initial.concat(next ** 2);
//     }, [...this]);
//     Object.assign(this, result);
// };
// const a = [1, 2, 3, 4, 5];
// a.multiply();
// console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]

// 2. 以下代码会返回 false，解释为什么会这样：
// false
// console.log(0.2 + 0.1 === 0.3);
// 解: 在计算时,会将十进制的数字类型先强制类型转换为二进制,相加之后结果再转换回来,Javascript 浮点类型的精度只存在 float 类型,还不够极其精确,所以自然就会出现错误

// 3. JavaScript 中有哪些不同的数据类型？
// 解: string、number、object、boolean、undefined、function、symbol

// 4. 解决以下异步代码问题。
// 获取并计算属于某个班级（假设 ID 为 75）的每个学生的平均分数。每个学生在一年内可以参加一门或多门课程。以下 API 可用于获取所需的数据。
// // GET LIST OF ALL THE STUDENTS
// GET /api/students
// Response:
// [{
//     "id": 1,
//     "name": "John",
//     "classroomId": 75
// }]
// // GET COURSES FOR GIVEN A STUDENT
// GET /api/courses?filter=studentId eq 1
// Response:
// [{
//     "id": "history",
//     "studentId": 1
// }, {
//     "id": "algebra",
//     "studentId": 1
// },]
// // GET EVALUATION FOR EACH COURSE
// GET /api/evaluation/history?filter=studentId eq 1
// Response:
// {
//     "id": 200,
//     "score": 50,
//     "totalScore": 100
// }
// 编写一个以班级 ID 作为参数的函数，你将使用这个函数计算该班级中每个学生的平均分数。这个函数的最终输出应该是带有平均分数的学生列表：
// [
//     { "id": 1, "name": "John", "average": 70.5 },
//     { "id": 3, "name": "Lois", "average": 67 },
// ]
// 使用普通回调、promises、observables、generator 或 async-wait 编写所需的函数。尝试使用至少 3 种不同的技术解决这个问题。
// 异步生成器
// import axios from 'axios';
//
// const request = axios.create({});
//
// request.interceptors.request.use(request => {
//     return request;
// });
//
// request.interceptors.response.use(({data}) => {
//     const {statusCode = 200, data: _data} = data;
//     if (statusCode === 200) {
//         return _data;
//     }
// });

// generator
// async function getStudents(classID) {
//     return request.request({
//         url: `./constants/classrooms.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {classroomId: classID}
//     });
// }
// async function getCourses(studentId) {
//     return request.request({
//         url: `./constants/courses.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// async function getEvaluation(evaluation, studentId) {
//     return request.request({
//         url: `./constants/${evaluation}/scores.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// function* getAverage(classroomId) {
//     let result = [];
//     const arr_students = yield getStudents(classroomId);
//     for (let val of arr_students) {
//         let totalCount = 0;
//         const {id: studentId = 0, name = ''} = val;
//         const arr_courses = yield getCourses(studentId);
//         let course,
//             length = arr_courses.length;
//         while (course = arr_courses.pop()) {
//             const {id: course_id} = course;
//             const {score = 0} = yield getEvaluation(course_id, studentId);
//             totalCount += score;
//         }
//         result = [...result, {id: studentId, name, average: parseFloat((totalCount / length).toFixed(2))}];
//     }
//     return result;
// }
// function run(taskGenerator) {
//     const task = taskGenerator();
//     let result = task.next();
//     return new Promise(resolve => {
//         (function step() {
//             const {value, done} = result;
//             if (!done) {
//                 const promise = Promise.resolve(value);
//                 promise.then(val => {
//                     result = task.next(val);
//                     step();
//                 }, err => {
//                     result = task.throw(err);
//                     step();
//                 });
//             }
//             if (done && value !== undefined) {
//                 resolve(value);
//             }
//         })();
//     });
// }
// run(function* () {
//     return yield* getAverage(75);
// }).then(result => {
//     console.log('result:', result);
// });

// async-await
// async function getStudents(classID) {
//     return request.request({
//         url: `./constants/classrooms.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {classroomId: classID}
//     });
// }
// async function getCourses(studentId) {
//     return request.request({
//         url: `./constants/courses.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// async function getEvaluation(evaluation, studentId) {
//     return request.request({
//         url: `./constants/${evaluation}/scores.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// async function getAverage(classroomId) {
//     let result = [];
//     const arr_students = await getStudents(classroomId);
//     for (let val of arr_students) {
//         let totalCount = 0;
//         const {id: studentId = 0, name = ''} = val;
//         const arr_courses = await getCourses(studentId);
//         let course,
//             length = arr_courses.length;
//         while (course = arr_courses.pop()) {
//             const {id: course_id} = course;
//             const {score = 0} = await getEvaluation(course_id, studentId);
//             totalCount += score;
//         }
//         result = [...result, {id: studentId, name, average: parseFloat((totalCount / length).toFixed(2))}];
//     }
//     return result;
// }
// getAverage(75).then(result => {
//     console.log(result);
// });

// Promise
// function getStudents(classID) {
//     return request.request({
//         url: `./constants/classrooms.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {classroomId: classID}
//     });
// }
// function getCourses(studentId) {
//     return request.request({
//         url: `./constants/courses.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// function getEvaluation(evaluation, studentId) {
//     return request.request({
//         url: `./constants/${evaluation}/scores.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     });
// }
// function getAverage(classroomId) {
//     let result = [];
//     return getStudents(classroomId).then(arr_students => {
//         let courses,
//             arr_length = arr_students.length;
//         for (let [key, val] of arr_students.entries()) {
//             let totalCount = 0;
//             const {id: studentId = 0, name = ''} = val;
//             courses = getCourses(studentId).then(arr_courses => {
//                 let course,
//                     evaluation,
//                     length = arr_courses.length;
//                 while (course = arr_courses.pop()) {
//                     const {id: course_id} = course;
//                     evaluation = getEvaluation(course_id, studentId).then(({score}) => {
//                         totalCount += score;
//                         return {totalCount, length};
//                     });
//                     if (arr_courses.length <= 0) {
//                         return evaluation;
//                     }
//                 }
//             }).then(({totalCount, length}) => {
//                 result = [...result, {id: studentId, name, average: parseFloat((totalCount / length).toFixed(2))}];
//                 return result;
//             });
//             if (key === (arr_students.length - 1)) {
//                 return courses;
//             }
//         }
//     });
// }
// getAverage(75).then(result => {
//     console.log(result);
// });

// 回调函数 callback
// function getStudents(classID, callback) {
//     request.request({
//         url: `./constants/classrooms.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {classroomId: classID}
//     }).then(callback);
// }
// function getCourses(studentId, callback) {
//     request.request({
//         url: `./constants/courses.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     }).then(callback);
// }
// function getEvaluation(evaluation, studentId, callback) {
//     request.request({
//         url: `./constants/${evaluation}/scores.json`,
//         headers: {
//             'content-type': 'application/json'
//         },
//         method: 'get',
//         responseType: 'json',
//         params: {studentId}
//     }).then(callback);
// }
// function getAverage(classroomId, callback) {
//     let result = [];
//     getStudents(classroomId, arr_students => {
//         let students_length = arr_students.length;
//         for (let [student_key, val] of arr_students.entries()) {
//             let totalCount = 0;
//             const {id: studentId = 0, name = ''} = val;
//             getCourses(studentId, arr_courses => {
//                 const courses_length = arr_courses.length;
//                 for (let [key, course] of arr_courses.entries()) {
//                     const {id: course_id} = course;
//                     getEvaluation(course_id, studentId, ({score}) => {
//                         let result_previous_length = result.length;
//                         totalCount += score;
//                         if (key === (courses_length - 1)) {
//                             result = [...result, {
//                                 id: studentId,
//                                 name,
//                                 average: parseFloat((totalCount / courses_length).toFixed(2))
//                             }];
//                         }
//                         if (student_key === (students_length - 1) && (result_previous_length !== result.length)) {
//                             callback(result);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }
// getAverage(75, (result) => {
//     console.log(result);
// });

// 5. 使用 JavaScript 代理实现简单的数据绑定
// const inputText = document.getElementById('inputText');
// const getText = document.getElementById('getText');
// const proxyInputText = new Proxy(inputText, {
//     set(trapTarget, key, value) {
//         if (key === 'onkeyup') {
//             return Reflect.set(trapTarget, key, function (event) {
//                 getText.innerText = event.target.value;
//                 value(event);
//             });
//         }
//         return Reflect.set(trapTarget, key, value);
//     }
// });
// proxyInputText.onkeyup = function (event) {
//     console.log(event.target.value);
// };

// 6. 解释 JavaScript 的并发模型
// 实际上就是事件循环执行机制
// 同步代码,异步代码(宏事件、微事件)
// Javascript 是单线程语言,所以执行代码时都是自上而下执行,当遇到同步代码时,则立即执行,当遇到异步代码时,则会先放入到异步队列当中,等同步代码执行结束之后,才会轮询异步队列中的异步代码
// 异步队列中的事件又分为宏事件和微事件,会首先执行每一个宏事件中的微事件,最后执行宏事件

// 7. “new”关键字在 JavaScript 中有什么作用？
// 解: "new" 关键字是用于类、普通函数或者函数表达式构造调用时使用

// 8. JavaScript 中有哪些不同的函数调用模式？请详细解释
// 解: 普通调用、隐式绑定、显式绑定(call、apply)、new 绑定、bind 绑定

// 9. 介绍一些即将发布的新的 ECMAScript 提案
// 解: 尾调用优化

// 10. JavaScript 中的 iterator 和 iterable 是什么？你知道有哪些内置的 iterator 吗？
// 解: iterator 和 iterable 实际上就是迭代器,可迭代对象,比如说数组、集合、字典、字符串和 NodeList 集合等,默认迭代器实际上就是调用可迭代对象的 Symbol.iterator 方法(well-known symbols)

// 11. 如果我们将下面的对象转换为 JSON 字符串，会发生什么？
// const a = {
//     key1: Symbol(),
//     key2: 10
// }
// // What will happen?
// // {"key2": 10}
// console.log(JSON.stringify(a));

// 12. 参数的默认值的原理
// function argumentsFunc(x = '3', y = x) {
//     console.log('x,y:', x, y);
// }
// argumentsFunc();

// 13. 请问JS中的基本数据类型有几种？
// 解: String、Number、Boolean、Object、Undefined、Function、Symbol
// A
// 14. D
// 15. C
// 16. C
// 17. B
// 18. C
// 19. C
// 20. C
// 21. C
// 22. D
// 23. D

// 24. Promise
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
//                         callback(this.value);
//                     });
//                 }
//             };
//
//             const reject = (reason) => {
//                 if (this.status === PENDING) {
//                     this.status = REJECTED;
//                     this.reason = reason;
//                     this.onRejectedCallbacks.forEach(callback => {
//                         callback(this.reason);
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
//         then(onFulfilled, onRejected) {
//             if (typeof onFulfilled !== 'function') {
//                 onFulfilled = value => value;
//             }
//             if (typeof onRejected !== 'function') {
//                 onRejected = reason => {
//                     if (reason instanceof Error) {
//                         throw reason
//                     } else {
//                         throw new Error(reason);
//                     }
//                 }
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
//                                             thenable(y);
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
//                                 if (typeof onFulfilled !== 'function') {
//                                     resolve(this.value);
//                                 } else {
//                                     (function thenable(value) {
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
//
//             try {
//                 then = x.then;
//             } catch (err) {
//                 reject(err);
//             }
//
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
// const promise = new MyPromise((resolve, reject) => {
//     resolve({
//         then(resolve, reject) {
//             resolve({
//                 then(resolve) {
//                     resolve('wtw,white')
//                 }
//             });
//         }
//     });
// });
// setTimeout(() => {
//     console.log('pzy~~~');
// }, 0);
// promise.then(val => {
//     console.log(val);
//     return `ywk(${val})`;
// }).then(val => {
//     console.log('hhh', val);
//     return {
//         then(resolve) {
//             resolve('pzy ywk');
//         }
//     };
// }).then(val => {
//     console.log(val);
// });
// console.log('pzy!');

// 25. 冒泡排序(从小到大)
// const arr = [3, 5, 1, 6, 9, 7, 10, 8, 22, 15, 18];
// function bubble(arr) {
//     const result = [...arr],
//         length = result.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             if (result[j] > result[j + 1]) {
//                 let temp = result[j + 1];
//                 result[j + 1] = result[j];
//                 result[j] = temp;
//             }
//         }
//     }
//     return result;
// }
// const result = bubble(arr);
// console.log(result);

// 26. 插入排序(从小到大)
// const array = [3, 5, 1, 6, 9, 7, 10, 8, 22, 15, 18];
// function insert(arr) {
//     const result = [...arr],
//         length = result.length;
//     for (let i = 0; i < length; i++) {
//         let j = i;
//         while (result[j - 1] > result[j] && j > 0) {
//             let temp = result[j];
//             result[j] = result[j - 1];
//             result[j - 1] = temp;
//             j--;
//         }
//     }
//     return result;
// }
// const result = insert(array);
// console.log(result);
