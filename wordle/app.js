import { App as Application } from './App/app';
import { Footer, Main, Header, Card, Input, Button } from './components/index';
import { getAccount, createUser, clearInputs } from './utils/functions/func';
import { append, appendMany, prepend } from './utils/append';
import {
  existingInputs,
  existingSendBtn,
  inputs,
  accounts,
  hasAccount,
  authorised,
} from './core/constants/const';
import '../wordle/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('body');

  const emailInput = new Input({
    type: 'text',
    placeholder: 'Email',
    id: 'email-input',
  }).toHTML();

  const passwordInput = new Input({
    type: 'password',
    placeholder: 'Password',
    id: 'password-input',
  }).toHTML();

  const loginButton = new Button({
    textContent: 'Login',
    className: 'login-btn',
    events: [
      {
        type: 'click',
        listener: () => {
          let account = getAccount(accounts, {
            email: emailInput.value,
            password: passwordInput.value,
          });
          if (!account) return console.log('There is no valid data');
          clearInputs(emailInput, passwordInput);
          console.log(account);
          console.log(`hello ${account.email}`);
        },
      },
    ],
  }).toHTML();

  const registerButton = new Button({
    textContent: 'Register',
    className: 'register-btn',
    events: [
      {
        type: 'click',
        listener: (e) => {
          createUser(emailInput, passwordInput, hasAccount, accounts);
          clearInputs(emailInput, passwordInput);
          console.log(accounts);
        },
      },
    ],
  }).toHTML();

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
  const h1 = new Main({ tagName: 'h1', textContent: 'WORDLE' }).toHTML();
  const App = new Application({
    tagName: 'div',
    className: 'app',
  }).toHTML();

  prepend(app, App);

  append(App, main);
  append(main, h1);
  append(main, card);

  append(card, emailInput);
  append(card, passwordInput);
  append(card, registerButton);
  append(card, loginButton);
});
