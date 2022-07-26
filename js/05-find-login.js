/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

// через for

let message = `Пользователь ${loginToFind} не найден.`;
for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];

  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}

console.log(message);

// через for...of

let message1 = `Пользователь ${loginToFind} не найден.`;
for (const login of logins) {
  if (login === loginToFind) {
    message1 = `Пользователь ${loginToFind} найден.`;
    break;
  }
}

console.log(message1);

// Метод includes() с тернарным оператором

const message2 = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

console.log(message2);

// Функция с for...of

const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден.`;
    }
  }
  return `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, loginToFind));

// Функция с includes() и тернарным оператором

const findLogin1 = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin1(logins, loginToFind));
