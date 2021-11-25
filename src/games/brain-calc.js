import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getQuestionAndAnswer = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const randomOperator = ['+', '-', '*'][getRandomNumber(0, 2)];
  const question = `${randomA} ${randomOperator} ${randomB}`;

  let answer;

  if (randomOperator === '+') {
    answer = randomA + randomB;
  }
  if (randomOperator === '-') {
    answer = randomA - randomB;
  }
  if (randomOperator === '*') {
    answer = randomA * randomB;
  }

  return [question, String(answer)];
};

const brainCalcGame = () => {
  const gameRules = 'What is the result of the expression?';
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainCalcGame;
