import gameEngine from '../index.js';

const getRandomNumber = (min, max) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const a = getRandomNumber(1, 20);
  const b = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return [question, correctAnswer];
};

export default () => {
  const description = 'What is the result of the expression?';
  gameEngine(description, generateRound);
};