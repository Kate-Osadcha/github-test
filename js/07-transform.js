/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for...of
 * - Потом через join()
 */

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

// через for...of

for (const frend of friends) {
  string += frend + ",";
}
string = string.slice(0, string.length - 1);
console.log(string);

// через join()

string = friends.join(",");
console.log(string);
