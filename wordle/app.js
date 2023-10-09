import { App as Application } from './App/app';
import { Main, Card, Input, Button } from './components/index';
import { getAccount, createUser, clearInputs } from './utils/functions/func';
import { append, prepend } from './utils/append';
import { accounts, hasAccount, authorised } from './core/constants/const';
import '../wordle/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('body');
  let account = {};
  const emailInput = new Input({
    type: 'text',
    placeholder: 'Email',
    id: 'email-input',
    className: 'email-input',
    maxlength: '20',
  }).toHTML();

  const passwordInput = new Input({
    type: 'password',
    placeholder: 'Password',
    id: 'password-input',
    className: 'password-input',
    maxlength: '20',
  }).toHTML();

  const loginButton = new Button({
    textContent: 'Login',
    className: 'login-btn',
    events: [
      {
        type: 'click',
        listener: () => {
          account = getAccount(accounts, {
            email: emailInput.value,
            password: passwordInput.value,
          });
          account.authorised = true;
          if (!account) {
            return alert('There is no valid data');
          }
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
  const startBtn = new Button({
    textContent: 'Start',
    className: 'start-btn',
    events: [
      {
        type: 'click',
        listener: (e) => {
          if (account.authorised === true) {
            window.location.href = '/public/pages/index.html';
          } else {
            alert('You shoud login to start');
          }
        },
      },
    ],
  }).toHTML();
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
  append(card, startBtn);
});
