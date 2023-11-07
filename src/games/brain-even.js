import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

function createGameContent() {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

function playEvenGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playEvenGame;
