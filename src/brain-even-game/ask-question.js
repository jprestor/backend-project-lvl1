import readlineSync from 'readline-sync';

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export default askQuestion;
