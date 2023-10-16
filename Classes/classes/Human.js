import {
  AGE_BY_DEFAULT,
  BALANCE_BY_DEFAULT,
  SALARY_BY_DEFAULT,
} from '../constants';

export class Human {
  constructor(
    firstName,
    surname,
    age = AGE_BY_DEFAULT,
    salary = SALARY_BY_DEFAULT,
    gender,
    balance = BALANCE_BY_DEFAULT
  ) {
    (this.firstName = firstName),
      (this.surname = surname),
      (this.age = age),
      (this.gender = gender),
      (this.salary = salary);
    this.balance = balance;
  }
}
