/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log("smallestNumber: ", smallestNumber);

// let bigllestNumber = numbers[0];
// for (const number of numbers) {
//   if (number > bigllestNumber) {
//     bigllestNumber = number;
//   }
// }
// console.log("bigllestNumber: ", bigllestNumber);

//////////////////////////////////////////////////////////

//  Напиши функцию findSmallesNumber(numbers) для поиска самого маленького
// числа в массиве,при условии что числа уникальные (не повторяются).
const arr = [3, 8, 12, -2, 15];
const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(findSmallesNumber(arr)); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
