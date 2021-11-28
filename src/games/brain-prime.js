import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getQuestionAndAnswer = () => {
  const random = getRandomNumber(1, 10);
  const answer = isPrime(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainPrimeGame = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainPrimeGame;
