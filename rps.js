'use strict';
const rps = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const humanColumn = document.getElementById('human');
const computerColumn = document.getElementById('computer');
const h3 = document.querySelector('h3');

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
    // return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    computerScore++;
    // return 'lost';
  } else {
    playerScore++;
    // return 'win';
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

  //   imgComp.classList.add('lost');

  playRound(playerSelection, computerSelection);
  //   if ((playRound = 'win')) {
  //     imgComp.classList.add('lost');
  //   } else if ((playRound = 'lost')) {
  //     imgHuman.classList.add('lost');
  //   }

  const scoreBoard = `Human ${playerScore} : ${computerScore} Computer`;
  h3.textContent = scoreBoard;

  if (playerScore === 5) {
    console.log('WIN');
  }

  if (computerScore === 5) {
    console.log('LOST');
  }
}
