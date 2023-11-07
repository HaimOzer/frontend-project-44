import readlineSync from 'readline-sync'; // user input function

function buildGameLogic(gameDescription, createGameContent) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  const roundsToWin = 3;

  for(let round = 1; round <= roundsToWin; round += 1) {
    const [question, correctAnswer] = createGameContent();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default buildGameLogic;
