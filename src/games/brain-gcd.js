import { gameLogic } from '../index.js';
import { getRandomNumber, getGCD } from '../utils.js';

let a;
let b;

const getExpression = () => {
  a = getRandomNumber();
  b = getRandomNumber();

  return `${a} ${b}`;
};

const getCorrectAnswer = () => String(getGCD(a, b));

const brainGCDGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLogic(gameRules, getExpression, getCorrectAnswer);
};

export default brainGCDGame;
