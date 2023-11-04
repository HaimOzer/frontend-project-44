#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetAndGetName from '../src/cli.js';

const name = greetAndGetName();

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export default function playGCD(name) {
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${num1} ${num2}`);
    const expectedAnswer = gcd(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === expectedAnswer) {
      console.log('Correct!');
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

playGCD(name);
