import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

// Get greatest common divisor
const getGCD = (a, b) => {
  for (let i = Math.min(a, b); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
};

const getQuestionAndAnswer = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const question = `${randomA} ${randomB}`;
  const answer = String(getGCD(randomA, randomB));

  return [question, answer];
};

const brainGCDGame = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainGCDGame;
