import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const random = getRandomNumber();
  const answer = random % 2 === 0 ? 'yes' : 'no';

  return [random, answer];
};

const brainEvenGame = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainEvenGame;
