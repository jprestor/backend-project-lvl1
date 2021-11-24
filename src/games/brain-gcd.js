import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getGCD = (a, b) => {
  let divisor = 1;

  for (let i = Math.min(a, b); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
      break;
    }
  }

  return divisor;
};

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
