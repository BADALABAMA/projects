import { Input } from '../../components';

export const inputs = [
  {
    type: 'text',
    className: 'word-input',
    id: 'word-input-1',
    maxlength: '1',
  },
  {
    type: 'text',
    className: 'word-input',
    id: 'word-input-2',
    maxlength: '1',
    disabled: 'disabled',
  },
  {
    type: 'text',
    className: 'word-input',
    id: 'word-input-3',
    maxlength: '1',
    disabled: 'disabled',
  },
  {
    type: 'text',
    className: 'word-input',
    id: 'word-input-4',
    maxlength: '1',
    disabled: 'disabled',
  },
  {
    type: 'text',
    className: 'word-input',
    id: 'word-input-5',
    maxlength: '1',
    disabled: 'disabled',
  },
].map((input) => {
  return new Input({
    type: input.type,
    className: input.className,
    id: input.id,
    maxlength: input.maxlength,
  }).toHTML();
});
export const existingInputs = document.querySelector('.input');
export const existingSendBtn = document.querySelector('.sendBtn');
export let hasAccount = false;
export let authorised = false;
export let account = {};

export const accounts = [];
