// Цикл for

//  Напиши скрипт который подсчитывает общую сумму зарплат работников.
//  Кол-во работников хранится в перемнной employees.
//  Зарплата каждого работника это случайное число от 500 до 5000
//  Записать сумму в переменную totalSalary и вывести в консоль

// сделать переменные
const employees = 7;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;

// перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  // сгенерить случайную ЗП
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  // прибавить к тоталу
  totalSalary += salary;
}
// лог

// console.log(totalSalary);

////////////////////////////////////////////////////////////////////////////////

//  Напиши скрипт который подсчитывает сумму всех чётных чисел,
//  которые входят диапазон чисел в переменных от min до max.
//  Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }

  // вариант два
  // if (i % 2 !== 0) {
  //     continue
  // }
  // total +=i
}

console.log("total: ", total);
