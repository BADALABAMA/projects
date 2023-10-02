export function getAccount(accounts, { userName, userPassword, date }) {
  return accounts.find(
    (account) =>
      account.nickname === userName.value &&
      account.password === userPassword.value
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
