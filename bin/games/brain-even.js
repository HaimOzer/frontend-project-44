#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetAndGetName from '../../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function askUserForAnswer() {
  return readlineSync.question('Your answer: ');
}

function checkAnswer(userAnswer, randomNumber) {
  return (userAnswer === 'yes' && isEven(randomNumber)) || (userAnswer === 'no' && !isEven(randomNumber));
}

function playEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = askUserForAnswer();

    if (checkAnswer(userAnswer, randomNumber)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`);
  }
}

const name = greetAndGetName();
playEvenGame(name);
