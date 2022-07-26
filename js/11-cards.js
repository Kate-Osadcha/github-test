/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.table(cards);

// Удаление (по индексу), метод indexOf()
const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);
console.log(index);

cards.splice(index, 1);

console.table(cards);

//  Добавление (по индексу)
const cardToInsert = "Карточка-6";
const index1 = 3;
cards.splice(index1, 0, cardToInsert);

console.table(cards);

//  Обновление (по индексу)
// const cardsToUpdate = "Карточка-3";
// cards.splice(3, 1, cardsToUpdate);
// console.table(cards);

const cardsToUpdate = "Карточка-4";
const index2 = cards.indexOf(cardsToUpdate);
cards.splice(index2, 1, "Обновленная карточка-4");
console.table(cards);
