// 冒泡排序
// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// const array = [3, 1, 5, 9, 4, 15, 10, 28, 11, 16, 8, 6, 4, 7];
// const result = bubbleSort(array);
// console.log(result);

// 插入排序
// function insertSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         let j = i;
//         while (j > 0) {
//             if (arr[j] < arr[j - 1]) {
//                 const temp = arr[j - 1];
//                 arr[j - 1] = arr[j];
//                 arr[j] = temp;
//             }
//             j--;
//         }
//     }
//     return arr;
// }
// const array = [3, 1, 5, 9, 4, 15, 10, 28, 11, 16, 8, 6, 4, 7];
// const result = insertSort(array);
// console.log(result);

// 快速排序
// function benchmark(arr, left, right) {
//     const x = arr[left];
//     let i = left,
//         j = right;
//     while (i < j) {
//         while (i < j && arr[j] >= x) {
//             j--;
//         }
//         if (i < j) {
//             arr[i] = arr[j];
//         }
//         while (i < j && arr[i] <= x) {
//             i++;
//         }
//         if (i < j) {
//             arr[j] = arr[i];
//         }
//     }
//     arr[i] = x;
//     return i;
// }
// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         const index = benchmark(arr, left, right);
//         quickSort(arr, left, index - 1);
//         quickSort(arr, index + 1, right);
//     }
//     return arr;
// }
// const array = [3, 1, 5, 9, 4, 15, 10, 28, 11, 16, 8, 6, 4, 7];
// const result = quickSort(array);
// console.log(result);

// 归并排序
// function merge(a, b) {
//     const arr = [],
//         a_length = a.length,
//         b_length = b.length;
//     let i = 0,
//         j = 0;
//     while (i < a_length && j < b_length) {
//         if (a[i] <= b[j]) {
//             arr.push(a[i]);
//             i++;
//         } else {
//             arr.push(b[j]);
//             j++
//         }
//     }
//     if (i === a_length && j < b_length) {
//         while (j < b_length) {
//             arr.push(b[j]);
//             j++
//         }
//     }
//     if (j === b_length && i < a_length) {
//         while (i < a_length) {
//             arr.push(a[i]);
//             i++
//         }
//     }
//     return arr;
// }
// function mergeSort(arr) {
//     const length = arr.length;
//     if (length <= 1) {
//         return arr;
//     }
//     const middle = Math.floor(length / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }
// const array = [3, 1, 5, 9, 4, 15, 10, 28, 11, 16, 8, 6, 4, 7];
// const result = mergeSort(array);
// console.log(result);

// 获取最长字符子串
// function longStr(str) {
//     let arr = [], max = 0;
//     for (let i = 0; i < str.length; i++) {
//         const index = arr.indexOf(str[i]);
//         if (index !== -1) {
//             arr.splice(0, index + 1);
//         }
//         arr.push(str.charAt(i));
//         max = Math.max(arr.length, max);
//     }
//     return max;
// }
// const str = 'abcdefghijklmnopqrstuvwxyzabcabcdefgabcdefghijklmnopqrstuvwxy';
// let result = longStr(str);
// console.log(result);
// const str_ano = 'bbbbb';
// result = longStr(str_ano);
// console.log(result);