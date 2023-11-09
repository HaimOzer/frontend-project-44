import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What number is missing in the progression?';

/**
 * Creates an arithmetic progression of numbers.
 *
 * @param {number} progressionLength - The length of the progression.
 * @param {number} beginProgression - The first number in the progression.
 * @param {number} interval - The difference between numbers in the progression.
 * @returns {number[]} - An array representing the arithmetic progression.
 */
function createProgression(progressionLength, beginProgression, interval) {
  const result = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(beginProgression + interval * i);
  }
  return result;
}

function createGameContent() {
  const progressionLength = getRandomNumber(6, 12);
  const beginProgression = getRandomNumber(1, 30);
  const interval = getRandomNumber(2, 9);
  const progressionLine = createProgression(progressionLength, beginProgression, interval);
  const hiddenElementOfLine = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progressionLine[hiddenElementOfLine]);
  const question = progressionLine.join(' ').replace(correctAnswer, '..');
  return [question, correctAnswer];
}

function playProgressionGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playProgressionGame;
