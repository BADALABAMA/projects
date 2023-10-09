export function getAccount(accounts, { email, password }) {
  return accounts.find(
    (account) => account.email === email && account.password === password
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
  if (validateEmail(userEmail) && validatePassword(userPassword)) {
    const email = userEmail.value;
    const password = userPassword.value;
    hasAccount = true;
    const newUser = { email, password, hasAccount };
    accounts.push(newUser);
  } else {
    console.log(
      'Email shoud contain "@"".". Password shoud contain numbers and srting'
    );
  }
}

function validateEmail(email) {
  if (
    email.value.includes('@') &&
    email.value.indexOf('.') > email.value.indexOf('@') &&
    email.value.length >= 4
  ) {
    return true;
  } else {
    return false;
  }
}

function validatePassword(password) {
  if (
    password.value.length >= 5 &&
    /\d/.test(password.value) &&
    /[a-zA-Z]/.test(password.value)
  ) {
    return true;
  } else {
    return false;
  }
}
export function updateTriesLeft(tag, triesLeft) {
  tag.textContent = `Tries left: ${triesLeft}`;
}
