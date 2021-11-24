import { gameLogic } from '../index.js';
import getRandomNumber from '../get-random-number.js';

let prog;
let progWithHidden;

const getArithmeticProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const arr = [start];

  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + step);
  }

  return arr;
};

const getQuestion = () => {
  prog = getArithmeticProgression();
  progWithHidden = prog.slice();
  progWithHidden[getRandomNumber(0, 9)] = '..';

  return progWithHidden.join(' ');
};

const getCorrectAnswer = () => {
  const hiddenIndex = progWithHidden.indexOf('..');
  return String(prog[hiddenIndex]);
};

const brainProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';

  gameLogic(gameRules, getQuestion, getCorrectAnswer);
};

export default brainProgressionGame;
