let playerChoiceIndex = 0;

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