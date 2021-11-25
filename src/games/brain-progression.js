import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getArithmeticProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const arr = [start];

  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + step);
  }

  return arr;
};

const getQuestionAndAnswer = () => {
  const prog = getArithmeticProgression();
  const progWithHidden = prog.slice();
  progWithHidden[getRandomNumber(0, 9)] = '..';

  const question = progWithHidden.join(' ');
  const hiddenIndex = progWithHidden.indexOf('..');
  const answer = String(prog[hiddenIndex]);

  return [question, answer];
};

const brainProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainProgressionGame;
