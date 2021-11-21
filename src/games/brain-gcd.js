import { gameLogic } from '../index.js';
import { getRandomNumber, getGCD } from '../utils.js';

let a;
let b;

const getQuestion = () => {
  a = getRandomNumber();
  b = getRandomNumber();

  return `${a} ${b}`;
};

const getCorrectAnswer = () => String(getGCD(a, b));

const brainGCDGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainGCDGame;
