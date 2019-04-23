const textSizePassword = document.getElementById('textSizePassword');
const inputSizePassword = document.getElementById('inputSizePassword');
const textPassword = document.getElementById('textPassword');
const btnGeneratePassword = document.getElementById('btnGeneratePassword');

window.onload = onLoadWindow;
inputSizePassword.oninput = onInputSizePassword;
textPassword.onmouseover = onMouseOverTextPassword;
textPassword.onclick = onClickTextPassword;
textPassword.onmouseleave = onMouseLeaveTextPassword;
btnGeneratePassword.onclick = generatePassword;

function onLoadWindow() {
  setTextSizePassword();
  generatePassword();
}

function onMouseOverTextPassword() {
  selectedTextPassword();
}

function onClickTextPassword() {
  selectedTextPassword();
}

function onMouseLeaveTextPassword() {
  removeAllSelections();
}

function onInputSizePassword() {
  setTextSizePassword();
  generatePassword();
}

function removeAllSelections() {
  document.getSelection().removeAllRanges();
}

function selectedTextPassword() {
  removeAllSelections();
  const rangeTextPassword = document.createRange();
  rangeTextPassword.selectNode(textPassword);
  document.getSelection().addRange(rangeTextPassword);
}

function setTextSizePassword() {
  textSizePassword.innerHTML = `Size - ${inputSizePassword.value}`
}

function generatePassword() {
  let password = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=+-*/\\.,!?(){}[]~`@#$%^&_|\'";:';

  for (let x = 0; x < inputSizePassword.value; x++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  textPassword.innerHTML = password;
}