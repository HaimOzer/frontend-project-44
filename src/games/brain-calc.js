import buildGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const operators = ['+', '-', '*'];

/**
 * Performs a mathematical operation on two numbers.
 *
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @param {string} operation - The mathematical operation to perform ('+', '-', or '*').
 * @returns {number} - The result of the mathematical operation.
 * @throws {Error} - If the operation is not supported.
 */
function useCalculator(number1, number2, operation) {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Invalid operator - ${operation}`);
  }
}

const gameDescription = 'What is the result of the expression?';

function createGameContent() {
  const randomNum1 = getRandomNumber(1, 30);
  const randomNum2 = getRandomNumber(1, 10);
  const randomOperationIndex = getRandomNumber(0, operators.length - 1);
  const randomOperation = operators[randomOperationIndex];
  const correctAnswer = String(useCalculator(randomNum1, randomNum2, randomOperation));
  const question = `${randomNum1} ${randomOperation} ${randomNum2}`;
  return [question, correctAnswer];
}

function playCalcGame() {
  buildGameLogic(gameDescription, createGameContent);
}

export default playCalcGame;
