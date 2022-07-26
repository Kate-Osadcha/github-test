/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string2 = "JavaScript";

const letters = string2.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  // if
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //     }

  // тернарник
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);

// функция

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";
  // console.log(letters);
  for (const letter of letters) {
    invertedString +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }
  return invertedString;
};

const string1 = "JavaScript";

console.log(changeCase(string1));
console.log(changeCase("qweRTY")); // QWErty
console.log(changeCase("mAnGo")); // MaNgO
console.log(changeCase("AjAx")); // aJaX
