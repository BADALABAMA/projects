import { App as Application } from '../../App/app';
import { Div, Button } from '../../components/index';
import { inputs } from '../../core/constants/const';
import { updateTriesLeft, getRandomWord } from '../../utils/functions/func';
import { fiveCharWords } from '../../utils/word-list';
import { append, appendMany, prepend } from '../../utils/append';
import './wordle.scss';

document.addEventListener('DOMContentLoaded', function () {
  let triesLeft = 6;
  const targetWord = getRandomWord(fiveCharWords);
  let currentGuess = '';
  let gameOver = false;
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
    textContent: 'start',
    className: 'check-btn',
    events: [
      {
        type: 'click',
        listener: (e) => {
          e.preventDefault();

          console.log('[RANDOM_WORD]', targetWord);
          checkBtn.textContent = 'check';
          let isInputValid = true;

          wordInputs = Array.from(wordInputs);
          wordInputs.forEach((input) => {
            input.removeAttribute('disabled');
          });
          wordInputs.forEach((input) => {
            if (input.value.length !== 1) {
              isInputValid = false;
            }
          });

          if (gameOver) {
            return;
          }

          let correctPositions = 0;
          let correctLetters = 0;

          for (let i = 0; i < 5; i++) {
            const letter = currentGuess[i];
            const targetLetter = targetWord[i];

            if (letter === targetLetter) {
              wordInputs[i].classList.add('green');
              anime({
                targets: wordInputs[i],
                rotateY: '+=720deg',
                duration: 1000,
                easing: 'easeInOutQuad',
                loop: false,
              });
              correctPositions++;
            } else if (targetWord.includes(letter)) {
              wordInputs[i].classList.add('yellow');
              anime({
                targets: wordInputs[i],
                rotateY: '+=360deg',
                duration: 1000,
                easing: 'easeInOutQuad',
                loop: false,
              });
              correctLetters++;
            }
          }

          if (isInputValid === true) {
            triesLeft--;
            updateTriesLeft(displayTriesLeft, triesLeft);

            if (triesLeft === 0) {
              alert(`Game is over. The word is: "${targetWord}".`);
              gameOver = true;
            }
          }
          if (correctPositions === 5 || currentGuess === targetWord) {
            anime({
              targets: '.word-input',
              rotateY: '+=720deg',
              duration: 1500,
              easing: 'easeInOutQuad',
              loop: false,
            });

            setTimeout(() => {
              alert('You are right, congrats!');
              gameOver = true;
            }, 1000);
          }
          for (let i = 0; i < wordInputs.length; i++) {
            const input = wordInputs[i];

            input.addEventListener('input', () => {
              input.value = input.value.toLowerCase();
              currentGuess = '';
              wordInputs = Array.from(wordInputs);
              wordInputs.forEach((input) => {
                currentGuess += input.value;
                input.classList.remove('green', 'yellow', 'red');
              });

              if (input.value.length > 0 && i < wordInputs.length - 1) {
                wordInputs[i + 1].focus();
              }
            });
          }
        },
      },
    ],
  }).toHTML();

  const restartBtn = new Button({
    textContent: 'restart',
    className: 'restart-btn',
    events: [
      {
        type: 'click',
        listener: () => {
          location.reload();
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
  append(wordleContainer, restartBtn);
  append(wordleContainer, displayTriesLeft);
  appendMany(wordDisplay, inputs);
});
