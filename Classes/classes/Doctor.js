import { Human } from './Human';

export class Doctor extends Human {
  constructor(firstName, surname) {
    super(firstName, surname, 499);
  }
  work() {}
}
