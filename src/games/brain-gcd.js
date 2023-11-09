import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

/**
 * Calculates the greatest common divisor (GCD) of two numbers using Euclidean algorithm.
 *
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @returns {number} - The GCD of the two input numbers.
 */
function gcdValue(first, second) {
  if (second === 0) {
    return first;
  }
  return gcdValue(second, first % second);
}

function createGameContent() {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 40);
  const question = `${randomNumber1} ${randomNumber2}`;

  const correctAnswer = String(gcdValue(randomNumber1, randomNumber2));

  return [question, correctAnswer];
}

function playGcdGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playGcdGame;
