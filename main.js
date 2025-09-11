let playerChoiceIndex = 0;

while(playerChoiceIndex === 0){
    let playerChoice = prompt("Input your choice (Rock, Paper or Scissors) [Case Sensitive]");

    switch(playerChoice){
        case "Rock":
            playerChoiceIndex = 1;
            break;
        case "Paper":
            playerChoiceIndex = 2;
            break;
        case "Scissors":
            playerChoiceIndex = 3;
            break;
        default:
            playerChoiceIndex = 0;
            alert("Please input Rock, Paper or Scissors");
            break;
    }
}

console.log(playerChoiceIndex);
