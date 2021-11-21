export const getRandomNumber = (min = 1, max = 100) =>
  Math.round(Math.random() * (max - min)) + min;

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

export const getArithmeticProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const arr = [start];

  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + step);
  }

  return arr;
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
