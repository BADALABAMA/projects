import { Human } from './Human';

export class Doctor extends Human {
  constructor(firstName, surname, age) {
    super(firstName, surname, 499, age);
  }
  work() {}
}
