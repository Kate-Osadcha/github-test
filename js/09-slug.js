/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(" ");
console.log(words);

const slug = words.join("-");
console.log(slug);

// цепочка вызова методов
const slug1 = title.toLowerCase().split(" ").join("-");
console.log(slug1);

// Функция (переиспользование кода)
const slugify = function (string) {
  return string.toLowerCase().split(" ").join("-");
};

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));
