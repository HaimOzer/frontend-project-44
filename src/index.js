
//функция, проверяющая правильный ответ

export function isCorrectAnswer(userAnswer, expectedAnswer, correctAnswersCount) {
  if (parseInt(userAnswer, 10) === expectedAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is the wrong answer. Correct answer was '${expectedAnswer}'.`);
  }
  return correctAnswersCount;
}
