import { Human } from './Human';

export class Admin extends Human {
  constructor(firstName, surname) {
    super(firstName, surname, 499);
  }
  work() {}
}
