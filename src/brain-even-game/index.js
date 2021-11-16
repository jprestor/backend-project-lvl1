import greetUser from './greet-user.js';
import askQuestion from './ask-question.js';
import getRandomNumber from './get-random-number.js';

const brainEvenGame = () => {
  let step = 1;
  let isGameOver = false;
  const userName = greetUser();

  for (; step <= 3; step += 1) {
    const num = getRandomNumber();
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = askQuestion(num, correctAnswer);

    isGameOver = answer !== correctAnswer;

    if (isGameOver) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}`);
};

export default brainEvenGame;
