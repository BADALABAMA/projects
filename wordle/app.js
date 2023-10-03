import { App as Application } from './App/app';
import { Footer, Main, Button, Header, Card, Input } from './components/index';
import { getAccount, createUser, clearInputs } from './utils/functions/func';
import { append, appendMany, prepend } from './utils/append';
import {
  existingInputs,
  existingSendBtn,
  inputs,
  accounts,
  hasAccount,
  authorised,
  account,
} from './core/constants/const';
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('body');
  const email = document.querySelector('.input__email');
  const password = document.querySelector('.input__password');
  let account; // Объявите account в глобальной области видимости
  let authorised = false; // Инициализируй

  const buttons = [
    {
      textContent: 'Login',
      events: [
        {
          click: (e) => {
            if (email && password !== null) {
              account = getAccount(accounts, {
                email: email.value,
                password: password.value,
              });
              if (!account) return console.log('There is no valid data');

              clearInputs(email, password);

              console.log(`hello ${account.email}`);
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
            {
              createUser(email, password, hasAccount, accounts);
              clearInputs(...inputs);
              console.log(accounts);
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
      attrs: btn.attrs,
    }).toHTML();
  });

  const main = new Main({
    tagName: 'main',
    className: 'main',
    id: 'main',
  }).toHTML();

  const card = new Card({
    tagName: 'div',
    className: 'card',
    id: 'card',
  }).toHTML();
  const header = new Header({
    tagName: 'header',
    className: 'header',
    id: 'header',
    children: [...buttons],
  }).toHTML();
  const sendBtn = new Button({
    tagName: 'button',
    className: 'sendBtn',
    textContent: 'Send',
  }).toHTML();

  const App = new Application({
    tagName: 'div',
    className: 'app',
  }).toHTML();

  prepend(app, App);
  append(App, header);
  append(App, main);
  append(main, card);
  appendMany(card, inputs);
  append(app, main);
  append(card, sendBtn);
});
