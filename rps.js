'use strict';
const rps = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const humanColumn = document.getElementById('human');
const computerColumn = document.getElementById('computer');
const h3 = document.querySelector('h3');

const modalText = document.getElementById('new-game-text');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnNewGame = document.getElementById('new-game-btn');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
  game('rock');
});

paper.addEventListener('click', () => {
  game('paper');
});

scissors.addEventListener('click', () => {
  game('scissors');
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  playerScore = 0;
  computerScore = 0;
  h3.textContent = 'first to 5 points wins';

  while (computerColumn.firstChild) {
    computerColumn.removeChild(computerColumn.lastChild);
  }

  while (humanColumn.firstChild) {
    humanColumn.removeChild(humanColumn.lastChild);
  }
};

function pasteImgComputer(computerSelection) {
  const imgComp = document.createElement('img');
  imgComp.src = `./images/rps-images/${computerSelection}-small.png`;
  computerColumn.prepend(imgComp);
}

function pasteImgHuman(playerSelection) {
  const imgHuman = document.createElement('img');
  imgHuman.src = `./images/rps-images/${playerSelection}-small.png`;
  humanColumn.prepend(imgHuman);
}

// function for random value to be taken from rps array
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * rps.length);
  const item = rps[randomIndex];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    computerColumn.firstChild.classList.add('lost');
    humanColumn.firstChild.classList.add('lost');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    computerScore++;
    humanColumn.firstChild.classList.add('lost');
  } else {
    playerScore++;
    computerColumn.firstChild.classList.add('lost');
  }
}

function game(playerSelection) {
  const computerSelection = computerPlay();

  if (computerSelection === 'rock') {
    pasteImgComputer('rock');
  } else if (computerSelection === 'paper') {
    pasteImgComputer('paper');
  } else {
    pasteImgComputer('scissors');
  }

  if (playerSelection === 'rock') {
    pasteImgHuman('rock');
  } else if (playerSelection === 'paper') {
    pasteImgHuman('paper');
  } else {
    pasteImgHuman('scissors');
  }

  playRound(playerSelection, computerSelection);

  h3.textContent = `Human ${playerScore} : ${computerScore} Computer`;

  if (playerScore === 5 || computerScore === 5) {
    openModal();
    btnNewGame.addEventListener('click', closeModal);
    playerScore === 5
      ? (modalText.textContent = 'You won!')
      : (modalText.textContent = 'You lost!');
  }
}
