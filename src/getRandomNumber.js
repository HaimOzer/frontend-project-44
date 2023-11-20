/**
 * Generates a random integer within a specified range.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer.
 */

function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;
