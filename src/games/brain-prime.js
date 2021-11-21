import { gameLogic } from '../index.js';
import { getRandomNumber, isPrime } from '../utils.js';

let num;

const getQuestion = () => {
  num = getRandomNumber(1, 10);
  return num;
};

const getCorrectAnswer = () => (isPrime(num) ? 'yes' : 'no');

const brainPrimeGame = () => {
  const gameRules =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainPrimeGame;
