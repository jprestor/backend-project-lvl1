import { gameLogic } from '../index.js';
import { getRandomNumber } from '../utils.js';

let num;

const getQuestion = () => {
  num = getRandomNumber();
  return num;
};

const getCorrectAnswer = () => (num % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = () => {
  const gameRules =
    'Answer "yes" if the number is even, otherwise answer "no".';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainEvenGame;
