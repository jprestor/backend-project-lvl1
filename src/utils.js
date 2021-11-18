export const getRandomNumber = (max = 100) => Math.round(Math.random() * max);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[getRandomNumber(2)];
};
