import readlineSync from 'readline-sync';

export const gameLogic = (gameRules, getQuestion, getCorrectAnswer) => {
  let step = 1;
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (; step <= rounds; step += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
