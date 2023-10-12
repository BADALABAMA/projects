import { Human } from './Human';

export class Clerk extends Human {
  constructor(firstName, surname) {
    super(firstName, surname, 499);
  }
  work() {}
}
