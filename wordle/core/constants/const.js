import { Input } from '../../components';

export const inputs = [
  {
    className: 'input__email',
    placeholder: 'Email',
  },
  {
    className: 'input__password',
    placeholder: 'password',
  },
].map((input) => {
  return new Input({
    tagName: 'input',
    className: input.className,
    placeholder: input.placeholder,
    events: input.events,
  }).toHTML();
});
export const existingInputs = document.querySelector('.input');
export const existingSendBtn = document.querySelector('.sendBtn');
export let hasAccount = false;
export let authorised = false;
export let account = {};
export const accounts = [];
