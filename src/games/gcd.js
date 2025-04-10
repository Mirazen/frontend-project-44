import gameEngine from '../index.js';
import { getRandomNumber } from '../utils.js';

const calculateGCD = (a, b) => {
  if (!b) return a;
  return calculateGCD(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGCD(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameEngine(description, generateRound);
};