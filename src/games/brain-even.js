import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getQuestionAndAnswer = () => {
  const random = getRandomNumber();
  const answer = random % 2 === 0 ? 'yes' : 'no';

  return [random, answer];
};

const brainEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainEvenGame;
