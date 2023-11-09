import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Checks if a number is a prime number.
 *
 * @param {number} number - The number to be checked for primality.
 * @returns {boolean} - `true` if the number is prime, `false` otherwise.
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function createGameContent() {
  const randomNumber = getRandomNumber(1, 50);
  const question = `${randomNumber}`;

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
}

function playPrimeGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playPrimeGame;
