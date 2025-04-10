import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(description, generateRound);
};
