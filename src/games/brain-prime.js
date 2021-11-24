import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

let num;

const getQuestion = () => {
  num = getRandomNumber(1, 10);
  return num;
};

const getCorrectAnswer = () => (isPrime(num) ? 'yes' : 'no');

const brainPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainPrimeGame;
