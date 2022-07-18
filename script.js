"use strict";

function getComputerChoice() {
    let x = Math.floor(Math.random() * 100);
    if (x == 0) {
        return getComputerChoice();
    }
    if (x < 33) {
        return "rock";
    }
    if (x > 32 && x < 67) {
        return "paper";
    }
    if (x > 67) {
        return "scissors"
    } 
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        return `It's a draw, you both picked ${playerSelection}. Try again!`;
    } if (playerSelection == "rock") {
        return computerSelection == "paper" ? "Paper beats rock. You lose! :("
        : "Rock beats scissors. You win! :)";
    } if (playerSelection == "paper") {
        return computerSelection == "scissors" ? "Scissors beat paper. You lose! :("
        : "Paper beats rock. You win! :)"
    } if (playerSelection == "scissors") {
        return computerSelection == "rock" ? "Rock beats scissors. You lose! :("
        : "Scissors beat paper. You win! :)"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));