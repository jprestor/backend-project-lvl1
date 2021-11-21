import { gameLogic } from '../index.js';
import { getRandomNumber, getArithmeticProgression } from '../utils.js';

let prog;
let progWithHidden;

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
