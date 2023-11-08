import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function createProgression(beginProgression, interval) {
  const result = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(beginProgression + interval * i);
  }
  return result;
}

function createGameContent() {
  const beginProgression = getRandomNumber(1, 30);
  const interval = getRandomNumber(2, 9);
  const progressionLine = createProgression(beginProgression, interval);
  const hiddenElementOfLine = getRandomNumber(0, progressionLine.length - 1);
  const correctAnswer = String(progressionLine[hiddenElementOfLine]);
  const question = progressionLine.join(' ').replace(correctAnswer, '..');
  return [question, correctAnswer];
}

function playProgressionGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playProgressionGame;
