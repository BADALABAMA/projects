import seedrandom from 'seedrandom';
import { five_char_words } from './word-list';

let cashedDate = new Date();
let cashedId = -1;

const getDayDiff = (date) => {
  return Math.floor(
    (date.valueOf() - new Date(2000, 0, 0).valueOf()) / (1000 * 60 * 60 * 24)
  );
};

const isSameDate = (date) => {
  return (
    date.getDay() === cashedDate.getDay() &&
    date.getMonth() === cashedDate.getMonth() &&
    date.getFullYear() === cashedDate.getFullYear()
  );
};

const isCharInWord = (gues, answer) => {
  for (let i = 0; i < answer.length; i++) {
    if (gues === answer(i)) {
      return true;
    }
  }
  return false;
};

const getWordOfTheDay = () => {
  const date = new Date();

  if (isSameDate(date) && cashedDate !== -1) {
    return five_char_words[cashedId];
  }

  cashedDate = date;
  const rng = seedrandom(getDayDiff(date).toString());
  let id = Math.floor(rng() * five_char_words.length);
  cashedId = id;
  return five_char_words[id];
};

export { getWordOfTheDay, getDayDiff as getDayOfYear, isCharInWord };
