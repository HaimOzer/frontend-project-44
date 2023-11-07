/*
 * Генерирует случайное целое число в заданном диапазоне.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @return {number} - Случайное целое число.
 */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;
