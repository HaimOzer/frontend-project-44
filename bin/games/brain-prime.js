import readlineSync from 'readline-sync';
import greetAndGetName from '../../src/cli.js';

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function playBrainPrime() {
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
  const randomNum = Math.floor(Math.random() * 50) + 1;
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

    if (isPrime(randomNum) && userAnswer === 'yes' || !isPrime(randomNum) && userAnswer === 'no') {
      console.log('Correct !')
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime(randomNum) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`);
  }
}

const name = greetAndGetName();
playBrainPrime(name);
