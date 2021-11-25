import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Get greatest common divisor
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

const getQuestionAndAnswer = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const question = `${randomA} ${randomB}`;
  const answer = String(getGCD(randomA, randomB));

  return [question, answer];
};

const brainGCDGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainGCDGame;
