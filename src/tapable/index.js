// const {
//     SyncHook,
//     SyncBailHook,
//     SyncWaterfallHook,
//     AsyncSeriesHook,
//     AsyncSeriesBailHook,
//     AsyncSeriesWaterfallHook
// } = require('tapable');

// class Car {
//     constructor() {
//         this.hooks = {
//             accelerate: new AsyncSeriesBailHook(['Accelerate'])
//         };
//     }
// }
// const car = new Car();

// SyncHook
// this.call = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         _fn0(Accelerate);
//         var _fn1 = _x[1];
//         _fn1(Accelerate);
//     }
//
//     return fn(...args);
// };
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
//     return Accelerate;
// });
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     return Accelerate;
// });
// const result = car.hooks.accelerate.call(210);
// console.log(result);

// SyncBailHook
// this.call = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         var _result0 = _fn0(Accelerate);
//         if (_result0 !== undefined) {
//             return _result0;
//         } else {
//             var _fn1 = _x[1];
//             var _result1 = _fn1(Accelerate);
//             if (_result1 !== undefined) {
//                 return _result1;
//             } else {
//             }
//         }
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
// });
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     return Accelerate;
// });
// const result = car.hooks.accelerate.call(210);
// console.log(result);

// SyncWaterfallHook
// this.call = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         var _fn0 = _x[0];
//         var _result0 = _fn0(Accelerate);
//         if (_result0 !== undefined) {
//             Accelerate = _result0;
//         }
//         var _fn1 = _x[1];
//         var _result1 = _fn1(Accelerate);
//         if (_result1 !== undefined) {
//             Accelerate = _result1;
//         }
//         return Accelerate;
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
//     return Accelerate + 100;
// });
// car.hooks.accelerate.tap('WarningLamp', (Accelerate) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     return Accelerate + 90;
// });
// const result = car.hooks.accelerate.call(210);
// console.log(result);

// AsyncSeriesHook
// this.callAsync = function lazyCompile(...args) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, _err1 => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     _callback();
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, _err0 => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 _next0();
//             }
//         });
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
//     callback(null, Accelerate + 120);
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     callback(null, Accelerate + 120);
// });
// car.hooks.accelerate.callAsync(220, (err, result) => {
//     console.log(`Error: ${err}`);
//     console.log(`data: ${result}`);
// });

// AsyncSeriesBailHook
// this.callAsync = function lazyCompile(...args) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, (_err1, _result1) => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     if(_result1 !== undefined) {
//                         _callback(null, _result1;
//                     } else {
//                         _callback();
//                     }
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, (_err0, _result0) => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 if (_result0 !== undefined) {
//                     _callback(null, _result0);
//                 } else {
//                     _next0();
//                 }
//             }
//         });
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
//     callback();
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     callback(null, Accelerate + 140);
// });
// car.hooks.accelerate.callAsync(220, (err, result) => {
//     console.log(`Error: ${err}`);
//     console.log(`data: ${result}`);
// });

// AsyncSeriesWaterfallHook
// this.callAsync = function lazyCompile(...args) {
//     function fn(Accelerate, _callback) {
//         'use strict';
//         var _context;
//         var _x = this._x;
//         function _next0() {
//             var _fn1 = _x[1];
//             _fn1(Accelerate, (_err1, _result1) => {
//                 if (_err1) {
//                     _callback(_err1);
//                 } else {
//                     if (_result1 !== undefined) {
//                         Accelerate = _result1;
//                     }
//                     _callback(null, Accelerate);
//                 }
//             });
//         }
//         var _fn0 = _x[0];
//         _fn0(Accelerate, (_err0, _result0) => {
//             if (_err0) {
//                 _callback(_err0);
//             } else {
//                 if (_result0 !== undefined) {
//                     Accelerate = _result0;
//                 }
//                 _next0();
//             }
//         });
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate}`);
//     callback(null, Accelerate + 90);
// });
// car.hooks.accelerate.tapAsync('WarningLamp', (Accelerate, callback) => {
//     console.log(`the car's accelerate is up to ${Accelerate} again`);
//     callback(null, Accelerate + 140);
// });
// car.hooks.accelerate.callAsync(220, (err, result) => {
//     console.log(`Error: ${err}`);
//     console.log(`data: ${result}`);
// });

// AsyncSeriesHook Promise
// this.promise = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _sync = true;
//             var _x = this._x;
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _fn1 = _x[1];
//                 var _hasResult1 = false;
//                 var _promise1 = _fn1(Accelerate);
//                 if (!_promise1 || !_promise1.then)
//                     throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(() => {
//                     _hasResult1 = true;
//                     _resolve();
//                 }, _err1 => {
//                     if (_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _fn0 = _x[0];
//             var _hasResult0 = false;
//             var _promise0 = _fn0(Accelerate);
//             if (!_promise0 || !_promise0.then)
//                 throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(() => {
//                 _hasResult0 = true;
//                 _next0();
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate}`);
//         resolve(Accelerate);
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate} again`);
//         resolve(Accelerate);
//     });
// });
// car.hooks.accelerate.promise(220).then(value => {
//     console.log(value);
// });

// AsyncSeriesBailHook Promise
// this.promise = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _sync = true;
//             var _x = this._x;
//
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err;
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _fn1 = _x[1];
//                 var _hasResult1 = false;
//                 var _promise1 = _fn1(Accelerate);
//                 if (!_promise1 || !_promise1.then)
//                     throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(_result1 => {
//                     _hasResult1 = true;
//                     if (_result1 !== undefined) {
//                         _resolve(_result1);
//                     } else {
//                         _resolve();
//                     }
//                 }, _err1 => {
//                     if(_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _fn0 = _x[0];
//             var _hasResult0 = false;
//             var _promise0 = _fn0(Accelerate);
//             if (!_promise0 || !_promise0.then)
//                 throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(_result0 => {
//                 _hasResult0 = true;
//                 if (_result0 !== undefined) {
//                     _resolve(_result0);
//                 } else {
//                     _next0();
//                 }
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//     return fn(...args);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate}`);
//         resolve();
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate} again`);
//         resolve();
//     });
// });
// car.hooks.accelerate.promise(220).then(value => {
//     console.log(value);
// });

// AsyncSeriesWaterfallHook Promise
// this.promise = function lazyCompile(...args) {
//     function fn(Accelerate) {
//         return new Promise((_resolve, _reject) => {
//             'use strict';
//             var _context;
//             var _sync = true;
//             var _x = this._x;
//             function _error(_err) {
//                 if (_sync)
//                     _resolve(Promise.resolve().then(() => {
//                         throw _err;
//                     }));
//                 else
//                     _reject(_err);
//             }
//             function _next0() {
//                 var _fn1 = _x[1];
//                 var _hasResult1 = false;
//                 var _promise1 = _fn1(Accelerate);
//                 if (!_promise1 || !_promise1.then)
//                     throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
//                 _promise1.then(_result1 => {
//                     _hasResult1 = true;
//                     if (_result1 !== undefined) {
//                         Accelerate = _result1;
//                     }
//                     _resolve(Accelerate);
//                 }, _err1 => {
//                     if(_hasResult1) throw _err1;
//                     _error(_err1);
//                 });
//             }
//             var _fn0 = _x[0];
//             var _hasResult0 = false;
//             var _promise0 = _fn0(Accelerate);
//             if (!_promise0 || !_promise0.then)
//                 throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
//             _promise0.then(_result0 => {
//                 _hasResult0 = true;
//                 if (_result0 !== undefined) {
//                     Accelerate = _result0;
//                 }
//                 _next0();
//             }, _err0 => {
//                 if (_hasResult0) throw _err0;
//                 _error(_err0);
//             });
//             _sync = false;
//         });
//     }
//
//     return fn(...args);
// };
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate}`);
//         resolve(Accelerate + 90);
//     });
// });
// car.hooks.accelerate.tapPromise('WarningLamp', Accelerate => {
//     return new Promise(resolve => {
//         console.log(`the car's accelerate is up to ${Accelerate} again`);
//         resolve(Accelerate + 190);
//     });
// });
// car.hooks.accelerate.promise(220).then(value => {
//     console.log(value);
// });