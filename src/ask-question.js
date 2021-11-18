import readlineSync from 'readline-sync';

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export default askQuestion;
