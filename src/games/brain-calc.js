import { gameLogic } from '../index.js';
import { getRandomNumber, getRandomOperator } from '../utils.js';

let a;
let b;
let randomOperator;

const getQuestion = () => {
  a = getRandomNumber();
  b = getRandomNumber();
  randomOperator = getRandomOperator();

  return `${a} ${randomOperator} ${b}`;
};

const getCorrectAnswer = () => {
  let answer;

  if (randomOperator === '+') {
    answer = a + b;
  }
  if (randomOperator === '-') {
    answer = a - b;
  }
  if (randomOperator === '*') {
    answer = a * b;
  }

  return String(answer);
};

const brainCalcGame = () => {
  const gameRules = 'What is the result of the expression?';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainCalcGame;
