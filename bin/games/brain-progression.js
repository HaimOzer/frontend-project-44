#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateQuestion(progressionLength) {
  const startNumber = Math.floor(Math.random() * 50) + 1;
  const intervalNumber = Math.floor(Math.random() * 6) + 2;
  const indexOfHiddenNumber = Math.floor(Math.random() * progressionLength);
  const expectedAnswer = startNumber + indexOfHiddenNumber * intervalNumber;

  let questionString = 'Question: ';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === indexOfHiddenNumber) {
      questionString += '..';
    } else {
      questionString += startNumber + i * intervalNumber;
    }
    if (i < progressionLength - 1) {
      questionString += ' ';
    }
  }
  return { questionString, expectedAnswer };
}

export function playProgressionGame(name) {
  let correctAnswersCount = 0;
  const roundsToWin = 3;
  while (correctAnswersCount < roundsToWin) {
    const { questionString, expectedAnswer } = generateQuestion(10);
    console.log(questionString);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer, 10) === expectedAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`);
  }
}
