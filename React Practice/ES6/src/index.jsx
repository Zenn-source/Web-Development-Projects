// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// const filterNumbers = numbers.filter((num) => {
//   return num < 10;
// });

// console.log(filterNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const addedNumbers = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// });

// console.log(addedNumbers);

// //Find - find the first item that matches from an array.

// const findNum = numbers.find((num) => {
//   return num > 10;
// });

// console.log(findNum);

// //FindIndex - find the index of the first item that matches.

// const findIndex = numbers.findIndex((num) => {
//   return num > 10;
// });

// console.log(findIndex);

import emojipedia from './emojipedia';

// 1. Make a new array with all meanings
// 2. Limit to 100 words per meaning

let emoji = emojipedia.map((emoji) => {
  return emoji.meaning.substring(0, 100);
});

console.log(emoji);
