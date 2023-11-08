import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
