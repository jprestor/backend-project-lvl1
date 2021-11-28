import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const random = getRandomNumber();
  const answer = isEven(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainEvenGame = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainEvenGame;
