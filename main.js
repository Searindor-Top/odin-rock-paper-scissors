let playerChoiceIndex = 0;
let playerChoiceProcessed = "";

while(playerChoiceIndex === 0){
    let playerChoice = prompt("Input your choice (Rock, Paper or Scissors)");
    playerChoiceProcessed = playerChoice.toLowerCase();

    switch(playerChoiceProcessed){
        case "rock":
            playerChoiceIndex = 1;
            break;
        case "paper":
            playerChoiceIndex = 2;
            break;
        case "scissors":
            playerChoiceIndex = 3;
            break;
        default:
            playerChoiceIndex = 0;
            alert("Please input Rock, Paper or Scissors");
            break;
    }
}

console.log("Your choice is: " + playerChoiceProcessed);

let computerChoice = "";
let computerChoiceIndex = Math.ceil(Math.random() * 3);

switch(computerChoiceIndex){
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "paper";
        break;
    case 3:
        computerChoice = "scissors";
        break;
}

console.log("Computer choice is: " + computerChoice);

let playerScore = 0;
let computerScore = 0;

let scoreArray = [playerScore, computerScore];

scoreArray = playRound(playerChoiceIndex, computerChoiceIndex, scoreArray[0], scoreArray[1]);

function playRound(playerChoiceIndex, computerChoiceIndex, playerScore, computerScore){
    if(playerChoiceIndex === computerChoiceIndex){
        console.log("You ended in a draw");
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 1 && computerChoiceIndex === 2){ // rock vs paper
        console.log("Computer won this round");
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 1 && computerChoiceIndex === 3){ // rock vs scissors
        console.log("You won this round");
        playerScore = playerScore + 1;
    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 1){ // paper vs rock
        console.log("You won this round");
        playerScore = playerScore + 1;
    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 3){ // paper vs scissors
        console.log("Computer won this round");
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 3 && computerChoiceIndex === 1){ // scissors vs rock
        console.log("Computer won this round");
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 3 && computerChoiceIndex === 2){ // scissors vs paper
        console.log("You won this round");
        playerScore = playerScore + 1;
    }
    return [playerScore, computerScore];
}

console.log("Your score is : " + scoreArray[0]);
console.log("Computer score is : " + scoreArray[1]);