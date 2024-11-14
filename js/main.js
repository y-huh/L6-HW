//1
// let array = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// let sortedArray = [];

// array.forEach(number => {
// let inserted = 0;
// sortedArray.forEach((sortedNumber, index) => {
//     if (number < sortedNumber && !inserted) {
//     sortedArray.splice(index, 0, number);
//     inserted = 1;
//     }
// });
// if (!inserted) {
//     sortedArray.push(number);
// }
// });

// console.log(sortedArray);

//2
// function rangeSum(arr, start, end) {
//     let sum = 0;

//     arr.forEach((num, index) => {
//     if (index >= start && index <= end) {
//         sum += num;
//     }
//     });

//     return sum;
// }

// let arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 5));

//3
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let uniqueArray = [];

// arr.forEach(number => {
//     if (!uniqueArray.includes(number)) {
//     uniqueArray.push(number);
//     }
// });

// console.log(uniqueArray);

//4
// const numbers = [3, 7, 2, 9, 4];

// let min = numbers[0];
// let max = numbers[0];

// numbers.forEach((number) => {
//     if (number < min) {
//     min = number;
//     }
//     if (number > max) {
//     max = number;
//     }
// });

// console.log("Eng kichik son: ", min);
// console.log("Eng katta son: ", max);

//5

//6
// const arr = [1, 2, 3, 4, 5];
// const swaper = [];

// arr.forEach((element, index) => {
//     swaper[arr.length - 1 - index] = element;
// });

// console.log("Teskari variant: ", swaper);

//7
// const array = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let odd = 0;

// array.forEach(number => {
//   if (number % 2 !== 0) {
//     console.log("Juft son: ", number);
//     odd++;
//   }
// });

// console.log("Toq sonlar soni:", odd);

//8
// const array = [2, 3, 4, 5, 7];
// const odd = [];

// array.forEach((element, index) => {
//   if (index % 2 !== 0) {
//     odd.push(element);
//   }
// });

// console.log("Toq sonning indexi: ", odd);

//9
// function odd(array) {
//     let max = 0;
  
//     array.forEach((element, index) => {
//       if (index % 2 !== 0) {
//         if (max === 0 || element > max) {
//           max = element;
//         }
//       }
//     });
  
//     return max;
//   }
  
//   const array = [2, 3, 4, 5, 7];
//   console.log("Eng katta toq index: ", odd(array));

//10
// function zeroBetweenMinMax(array) {
//     const min = Math.min(...array);
//     const max = Math.max(...array);

//     const minIndex = array.indexOf(min);
//     const maxIndex = array.indexOf(max);

//     const start = Math.min(minIndex, maxIndex) + 1;
//     const end = Math.max(minIndex, maxIndex);

//     array.forEach((value, index) => {
//         if (index >= start && index < end) {
//         array[index] = 0;
//         }
//     });

//     return array;
// }

// const array = [2, 1, 3, 8, 4];
//   console.log("Результат:", zeroBetweenMinMax(array));

//11
// function oddNums() {
//     const n = prompt("Son kiriting: ");

//     const odds = [];
//     for (let i = 0; i < n; i++) {
//       odds.push(i * 2 + 1);
//     }

//     return odds;
// }

// console.log(oddNums());

//12


//13
// function uniqueArray(array) {
//     const unique = [];
    
//     array.forEach((value) => {
//         if (!unique.includes(value)) {
//         unique.push(value);
//     }
//     });

//     unique.sort((a, b) => a - b);
    
//     return unique;
// }

// const arr = [3, 5, 6, 3, 2, 3];
// console.log("Unique array:", uniqueArray(arr));

//14
// function minJuft(array) {
//     let min = 0;

//     array.forEach((value, index) => {
//       if (index % 2 === 0) {
//         if (min === 0 || value < min) {
//         min = value;
//         }
//     }
//     });

//     return min;
// }

// const arr = [3, 5, 6, 3, 2, 3];
// console.log("Minimum juft indexi: ", minJuft(arr));
