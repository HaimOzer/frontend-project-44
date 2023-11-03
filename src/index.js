import greetAndGetName from './cli.js';

//  имя пользователя
export const name = greetAndGetName();

//  функция, проверяющая правильный ответ
//  не получается остановить цикл при неправильном ответе. оставлю пока так

export function isCorrectAnswer(userAnswer, expectedAnswer, correctAnswersCount) {
  if (parseInt(userAnswer, 10) === expectedAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is the wrong answer. Correct answer was '${expectedAnswer}'.`);
  }
  return correctAnswersCount;
}
