"use strict";

function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);
    console.log(random);
    if (random == 0) {
        return getComputerChoice();
    }
    if (random <= 32) {
        return "rock";
    }
    if (random > 32 && random < 67) {
        return "paper";
    }
    if (random >= 67) {
        return "scissors"
    } 
}

function getPlayerChoice() {
    let choice = prompt("What will you pick?")
    if (choice == null) { //fix player pressing cancel
        alert("No good! Only 'Rock', 'Paper' and 'Scissors' allowed!");
        return getPlayerChoice();
    } else {
        choice = choice.toLowerCase();
    }
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("No good! Only 'Rock', 'Paper' and 'Scissors' allowed!");
        return getPlayerChoice();
    } return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    } if (playerSelection == "rock") {
        return computerSelection == "paper" ? false
        : true;
    } if (playerSelection == "paper") {
        return computerSelection == "scissors" ? false
        : true
    } if (playerSelection == "scissors") {
        return computerSelection == "rock" ? false
        : true
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(`You picked ${playerSelection}. The computer picked ${computerSelection}.`);
        if (playRound(playerSelection, computerSelection) == 0) {
            console.log(`You both picked ${playerSelection}! No winner!`)
        } else if (playRound(playerSelection, computerSelection) == true) {
            console.log("You win!");
            playerScore++;
        } else {
            console.log("You lose!");
            computerScore++;
        }
    }
    console.log(`You won ${playerScore} rounds. The computer won ${computerScore} rounds.`);
}



game();