import { Human } from './Human';

export class Developer extends Human {
  constructor(firstName, surname) {
    super(firstName, surname, 499);
  }
  work() {}
}
