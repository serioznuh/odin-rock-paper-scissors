'use strict';
// array of possible choices
const rps = ['Rock', 'Paper', 'Scissors'];

// get string and make first letter captitalized, others make lowercase
function capitalize(str) {
	return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

// function for random value to be taken from rps array
function computerPlay() {
	const randomIndex = Math.floor(Math.random() * rps.length);
	const item = rps[randomIndex];
	return item;
}

function playRound(playerSelection, computerSelection) {
	const win = `You Won! ${playerSelection} beats ${computerSelection}`;
	const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
	const tie = `It's a tie! You both choose ${playerSelection}`;

	if (playerSelection === computerSelection) {
		return tie;
	} else if (
		(playerSelection === 'Rock' && computerSelection === 'Paper') ||
		(playerSelection === 'Scissors' && computerSelection === 'Rock') ||
		(playerSelection === 'Paper' && computerSelection === 'Scissors')
	) {
		// computerScore++;
		return lose;
	} else {
		// playerScore++;
		return win;
	}
}

let playerScore = 0;
let computerScore = 0;
let roundScore = 0;

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = capitalize(
			prompt("Start the game by picking among 'Rock, Paper, Scissors':")
		);
		const computerSelection = computerPlay();

		const win = `You Won! ${playerSelection} beats ${computerSelection}`;
		const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
		const tie = `It's a tie! You both choose ${playerSelection}`;

		if (playerSelection != null) {
			alert(playRound(playerSelection, computerSelection));
		}
		if (playRound(playerSelection, computerSelection) === win) {
			roundScore++;
			playerScore++;
			console.log(`Round ${roundScore}\n${win}`);
		} else if (playRound(playerSelection, computerSelection) === lose) {
			roundScore++;
			computerScore++;
			console.log(`Round ${roundScore}\n${lose}`);
		} else {
			roundScore++;
			console.log(`Round ${roundScore}\n${tie}`);
		}
	}

	const scoreBoard = `Human ${playerScore} : ${computerScore} Computer`;
	if (playerScore > computerScore) {
		console.log('------------------\nYou won this game!\n------------------');
		console.log(scoreBoard);
	} else if (playerScore === computerScore) {
		console.log('------------------\nThis game is a tie!\n------------------');
		console.log(scoreBoard);
	} else {
		console.log('------------------\nYou lost this game!\n------------------');
		console.log(scoreBoard);
	}
}

// game();

/* //ALTERNATIVE SOLUTION
//
function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = capitalize(prompt("Start the game by picking among 'Rock, Paper, Scissors':"));
    const computerSelection = computerPlay();
    // If I have scoreBoard displayed after each round the count starts from 0 instead of 1. Why?
    // const scoreBoard = `Human ${playerScore} : ${computerScore} Computer`;

    const win = `You Won! ${playerSelection} beats ${computerSelection}`;
    const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tie = `It's a tie! You both choose ${playerSelection}`;

    if (playerSelection != null) {
        alert(playRound(playerSelection, computerSelection));
        } if (playRound(playerSelection, computerSelection) === win) {
                roundScore++;
                playerScore++;
                console.log(`Round ${roundScore}\n${win}\nHuman ${playerScore} : ${computerScore} Computer`); // comment
                // console.log(`Round ${roundScore}\n${win}\n${scoreBoard}`)
            } else if (playRound(playerSelection, computerSelection) === lose) {                
                roundScore++;
                computerScore++;
                console.log(`Round ${roundScore}\n${lose}\nHuman ${playerScore} : ${computerScore} Computer`); // comment
                // console.log(`Round ${roundScore}\n${win}\n${scoreBoard}`)
            } else {
                roundScore++;
                console.log(`Round ${roundScore}\n${tie}\nHuman ${playerScore} : ${computerScore} Computer`); // comment
                // console.log(`Round ${roundScore}\n${win}\n${scoreBoard}`)
            }
    } 
     
    if (playerScore > computerScore){
        console.log("------------------\nYou won this game!\n------------------"); 
        // console.log(scoreBoard); //scoreBoard is not defined
    } else if (playerScore === computerScore){
          console.log("------------------\nThis game is a tie!\n------------------"); 
        //   console.log(scoreBoard); //scoreBoard is not defined
    } else {
        console.log("------------------\nYou lost this game!\n------------------");
        // console.log(scoreBoard); //scoreBoard is not defined
    }
}

game(); */
