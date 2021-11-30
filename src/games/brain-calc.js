import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;

    default:
      throw new Error(`operation ${a} ${operator} ${b} is not supported`);
  }
};

const getQuestionAndAnswer = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomA} ${randomOperator} ${randomB}`;
  const answer = calculate(randomA, randomB, randomOperator);

  return [question, String(answer)];
};

const brainCalcGame = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainCalcGame;
