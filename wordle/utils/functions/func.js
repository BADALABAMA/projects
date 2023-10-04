export function getAccount(accounts, { email, password }) {
  return accounts.find(
    (account) =>
      account.email === email.value && account.password === password.value
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
