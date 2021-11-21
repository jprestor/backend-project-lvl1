export const getRandomNumber = (max = 100) => Math.round(Math.random() * max);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[getRandomNumber(2)];
};

export const getGCD = (a, b) => {
  let divisor = 1;

  for (let i = Math.min(a, b); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
      break;
    }
  }

  return divisor;
};
