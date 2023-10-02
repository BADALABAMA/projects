import { App as Application } from './App/app';
import { Footer, Main, Button, Header, Card, Input } from './components/index';
import { inputs } from './core/constants/inputs';
import { append, appendMany, prepend } from './utils/append';
import { render } from './core/render';

const buttons = [
  {
    textContent: 'Login',
    events: [
      {
        click: (e) => {
          if (!exestingInputs) {
            appendMany(app, inputs);
          }
        },
      },
    ],
  },
  {
    textContent: 'Register',
    events: [
      {
        click: (e) => {
          if (!exestingInputs) {
            appendMany(app, inputs);
          }
        },
      },
    ],
  },
  {
    textContent: 'Start Game',
    events: [
      {
        click: (e) => {
          console.log('Start was clicked');
        },
      },
    ],
  },
].map((btn) => {
  return new Button({
    tagName: 'button',
    className: 'btn',
    textContent: btn.textContent,
    events: btn.events,
  }).toHTML();
});

const main = new Main({
  tagName: 'main',
  className: 'main',
  id: 'main',
  children: {},
});

const app = document.querySelector('body');
const exestingInputs = document.querySelector('.input');
const App = new Application({
  tagName: 'div',
  className: 'app',
  children: [...buttons],
}).toHTML();

prepend(app, App);
