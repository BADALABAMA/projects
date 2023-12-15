import { king, queen, bishop, knight, pawn, rook } from './svg/piece';
import { createElement, createBoard } from './functions';

import './style.css';
let gameboardExist = false;
const app = document.getElementById('app') as HTMLElement;
const gameboard = createElement(
  app,
  'div',
  'gameboard',
  'gameboard'
) as HTMLElement;
const paragraphPlayer = createElement(
  app,
  'p',
  'paragraph',
  'paragraph',

  'It is'
) as HTMLElement;

const startPieces = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

const emailInput: HTMLInputElement = document.createElement('input');
const passwordInput: HTMLInputElement = document.createElement('input');
const registerBtn: HTMLButtonElement = document.createElement('button');
const loginBtn: HTMLButtonElement = document.createElement('button');
registerBtn.textContent = 'register';
loginBtn.textContent = 'login';
registerBtn?.addEventListener('click', async () => {
  try {
    const serverData = await fetch('http://localhost:3000/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });
    const parsedData = await serverData.json();

    console.log(parsedData);
  } catch (error) {
    console.error('Error when executing a POST request:', error);
  }
});

loginBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'GET',
    });

    const data = await response.json();

    const foundUser: {} = data.users.find((user: {}) => {
      return (
        user.email === emailInput.value && user.password === passwordInput.value
      );
    });
    if (foundUser) {
      if (!gameboardExist) {
        createBoard(startPieces, gameboard);
        gameboardExist = true;
        console.log(foundUser);
      }
    }

    console.log('data', data);
  } catch (error) {
    console.error('Error:', error);
  }
});

app.append(emailInput, passwordInput, registerBtn, loginBtn);
