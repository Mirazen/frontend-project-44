import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  gameEngine(description, generateRound);
};
