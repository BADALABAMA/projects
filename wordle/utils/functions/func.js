export function getAccount(accounts, { email, password }) {
  const userEmail = email.value;
  const userPassword = password.value;
  return accounts.find(
    (account) =>
      account.email === userEmail && account.password === userPassword
  );
}

export function clearInputs(...inputs) {
  for (const input of inputs) {
    input.value = '';
  }
}

export function toLowerCase(str) {
  return str.toLowerCase();
}

export function createUser(userEmail, userPassword, hasAccount, accounts) {
  userEmail = document.querySelector('.input__email');
  userPassword = document.querySelector('.input__password');

  if (userEmail.value.length && userPassword.value.length >= 8) {
    const email = userEmail.value;
    const password = userPassword.value;
    hasAccount = true;
    const newUser = { email, password, hasAccount };
    accounts.push(newUser);
  } else {
    console.log('wrong value');
  }
}
