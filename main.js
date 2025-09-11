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

console.log(playerChoiceIndex);
