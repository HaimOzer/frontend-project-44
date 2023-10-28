import readlineSync from 'readline-sync';
import greetAndGetName from '../../src/cli.js';

function playCalcmGame(name) {
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operators = '+-*';
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let expectedAnswer;
    switch (randomOperator) {
      case '+':
        expectedAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        expectedAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        expectedAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        console.log('Это Pre-Alpha версия. Доступны только (+) (-) (*) функции.');
        console.log('Попробуйте снова.');
        break;
    }

    if (parseInt(userAnswer, 10) === expectedAnswer) {
      console.log('Correct !');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`);
  }
}

const name = greetAndGetName();
playCalcmGame(name);
