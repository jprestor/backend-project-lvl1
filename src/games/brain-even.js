import { gameLogic } from '../index.js';
import { getRandomNumber } from '../utils.js';

let a;

const getQuestion = () => {
  a = getRandomNumber();
  return a;
};

const getCorrectAnswer = () => (a % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = () => {
  const gameRules =
    'Answer "yes" if the number is even, otherwise answer "no".';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainEvenGame;
