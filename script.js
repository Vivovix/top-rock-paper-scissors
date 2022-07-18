"use strict";

let computerSelection;
let playerSelection;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 100);
    if (x == 0) {
        return getComputerChoice();
    }
    if (x < 33) {
        return "Rock";
    } if (x > 32 && x < 67) {
        return "Paper";
    } if (x > 67) {
        return "Scissors"
    } 
}

getComputerChoice();