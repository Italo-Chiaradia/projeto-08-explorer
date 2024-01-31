// Variáveis
const tryButton = document.querySelector('#btnTry');
const againButton = document.querySelector('#btnAgain');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let randomNum = Math.floor(Math.random() * 10);
let attempts = 1;

// Eventos
tryButton.addEventListener('click', handleTryClick);
againButton.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleKeyDown);

// Funções 
function handleTryClick(event) {
  event.preventDefault();

  let inputNumber = document.querySelector('#inputNumber');

  if (inputNumber.value == '') {
    alert('Digite um número!');
  } else {
    if (Number(inputNumber.value) == randomNum) {
      toggleScreen();
  
      screen2
        .querySelector("h2")
        .innerText = `Acertou em ${attempts} tentativas!`;
    }
    inputNumber.value = '';
    attempts++;
  }
}

function handleResetClick() {
  toggleScreen();

  randomNum = Math.floor(Math.random() * 10);
  attempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function handleKeyDown(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();      
  }
}