import greetUser from './greet-user.js';
import askQuestion from './ask-question.js';

export const gameLogic = (gameRules, getExpression, getCorrectAnswer) => {
  let step = 1;
  const rounds = 3;
  let isGameOver = false;
  const userName = greetUser();

  console.log(gameRules);

  for (; step <= rounds; step += 1) {
    const expression = getExpression();
    const correctAnswer = getCorrectAnswer(expression);
    const answer = askQuestion(expression);

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

export default gameLogic;
