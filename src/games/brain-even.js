import { gameLogic } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getExpression = () => getRandomNumber();

const getCorrectAnswer = (expression) => (expression % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = () => {
  const gameRules =
    'Answer "yes" if the number is even, otherwise answer "no".';

  gameLogic(gameRules, getExpression, getCorrectAnswer);
};

export default brainEvenGame;
