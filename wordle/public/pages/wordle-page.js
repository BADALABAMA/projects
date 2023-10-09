import { App as Application } from '../../App/app';
import { Div, Button } from '../../components/index';
import { inputs } from '../../core/constants/const';
import { updateTriesLeft } from '../../utils/functions/func';
import { append, appendMany, prepend } from '../../utils/append';
import './wordle.scss';

document.addEventListener('DOMContentLoaded', function () {
  const targetWord = 'apple';
  let currentGuess = '';
  let triesLeft = 6;

  const wordleContainer = new Div(
    'wordle-container',
    'wordle-container'
  ).toHTML();
  let wordInputs = document.getElementsByTagName('input');
  const wordDisplay = new Div('word-display', 'word-display').toHTML();
  const displayTriesLeft = document.createElement('h1');
  displayTriesLeft.id = 'tries-left';

  updateTriesLeft(displayTriesLeft, triesLeft);

  const checkBtn = new Button({
    textContent: 'Check',
    className: 'check-btn',
    events: [
      {
        type: 'click',
        listener: (e) => {
          let isInputValid = true;
          wordInputs = Array.from(wordInputs);
          wordInputs.forEach((input) => {
            if (input.value.length !== 1) {
              return (isInputValid = false);
            } else {
              isInputValid = true;
            }
          });

          if (currentGuess === targetWord) {
            alert('You right, congrats!');
            return;
          }

          let correctPositions = 0;
          let correctLetters = 0;

          for (let i = 0; i < 5; i++) {
            const letter = currentGuess[i];
            const targetLetter = targetWord[i];

            if (letter === targetLetter) {
              wordInputs[i].classList.add('green');
              correctPositions++;
            } else if (targetWord.includes(letter)) {
              wordInputs[i].classList.add('yellow');
              correctLetters++;
            }
          }

          if (correctPositions === 5) {
            alert('You right, congrats!');
          }
          if (isInputValid === true) {
            triesLeft--;
            updateTriesLeft(displayTriesLeft, triesLeft);

            if (triesLeft === 0) {
              alert(`Game is over. The word is: "${targetWord}".`);
              triesLeft = 7;
            }
          }

          wordInputs.forEach((input) => {
            input.addEventListener('input', () => {
              input.value = input.value.toLowerCase();
              currentGuess = '';
              wordInputs.forEach((input) => {
                currentGuess += input.value;
                input.classList.remove('green', 'yellow');
              });
            });
          });
        },
      },
    ],
  }).toHTML();

  const app = document.querySelector('body');
  const App = new Application({
    tagName: 'div',
    className: 'app',
  }).toHTML();
  prepend(app, App);
  append(App, wordleContainer);
  append(wordleContainer, wordDisplay);
  append(wordleContainer, checkBtn);
  append(wordleContainer, displayTriesLeft);
  appendMany(wordDisplay, inputs);
});
