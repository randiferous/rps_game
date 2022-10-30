// initialize array of 'choices': rock, paper, scissor
const choices = ["rock", "paper", "scissors"];

let wins = 0;
let losses = 0;
let ties = 0;
// use a prompt so user can enter "rock", "paper", or "scissor"
for (let i = 0; i < 10; i++) {
    // computer chooses a random value from the array of 'choices
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let userChoice = prompt("Enter 'rock', 'paper', or 'scissors' to play!");

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        alert("The computer chose " + computerChoice);

        if (userChoice === "rock" && computerChoice === "scissors") {
            wins++;
            alert("You've won " + wins + " time(s)!");
        }
    }
}

// in order to determine if the user wins or not:
// initialize "wins", "losses", "ties" variables
// the following will be created using a combination of if/else, switch cases, or for loops:
// if user picks rock and computer picks scissors, then user wins
// if user picks rock and computer picks paper, then user losses
// if user picks scissor and computer picks paper, then user wins
// if user picks scissor and computer picks rock, then user losses
// if user picks paper and computer picks rock, then user wins
// if user picks paper and computer picks scissor, then user losses
// if user and computer pick same thing, then it is a tie
// prompt user to play again