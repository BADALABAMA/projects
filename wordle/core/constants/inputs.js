import { Input } from '../../components';

export const inputs = [
  {
    placeholder: 'Email',
    events: [
      {
        keydown: (e) => {
          const value = e.target.value;
          console.log('[name value]', value);
        },
      },
    ],
  },
  {
    placeholder: 'password',
    events: [
      {
        keydown: (e) => {
          const value = e.target.value;
          console.log('[surname value]', value);
        },
      },
    ],
  },
].map((input) => {
  return new Input({
    tagName: 'input',
    className: 'input',
    placeholder: input.placeholder,
    events: input.events,
  }).toHTML();
});
