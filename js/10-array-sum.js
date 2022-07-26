/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

const numbers = array1.concat(array2);
// console.log(numbers);
// console.log(array1);
// console.log(array2);

for (const number of numbers) {
  total += number;
}

console.log(total);

// Напиши функцию calculateTotalPrice(items)
// которая принимает массив цен (чисел) и возвращает их сумму

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};

console.log(calculateTotalPrice(cart));
