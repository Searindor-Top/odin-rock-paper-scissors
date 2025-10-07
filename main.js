buttonRock = document.querySelector("#button-rock");
buttonPaper = document.querySelector("#button-paper");
buttonScissors = document.querySelector("#button-scissors");

let playerChoiceIndex = 0;
let gameRound = 1;

buttonRock.addEventListener("click", function(){
    playerChoiceIndex = 1;
    mainGame(playerChoiceIndex);
});
buttonPaper.addEventListener("click", function(){

    playerChoiceIndex = 2;
    mainGame(playerChoiceIndex);
});
buttonScissors.addEventListener("click", function(){
    playerChoiceIndex = 3;
    mainGame(playerChoiceIndex);
});

let playerScore = 0;
let computerScore = 0;

let scoreArray = [playerScore, computerScore];


function mainGame(playerChoiceIndex){
    if(gameRound <= 5){
        resultDiv = document.querySelector("#game-result");
        roundContentDiv = document.createElement("div");
        roundContentDiv.classList.add("round-content");
        roundContentDiv.classList.add("flex");
        roundContentDiv.classList.add("m-col");


        if(gameRound == 1){
            //document.querySelector("#choose").style.display = "none";
            gameResultH3 = document.querySelectorAll("#game-result>div:not(#choose), #game-result>h3:not(#choose)");
            gameResultH3.forEach(element => {
                element.classList.toggle("m-hidden");
            });
                    
        }
        //roundContentDiv.innerHTML += "<h2>Round number: " + gameRound + "</h2>";
        document.querySelector("#game-round").innerText = "Round: " + gameRound;
        let choiceArray = getChoices(playerChoiceIndex, roundContentDiv); // choiceArray[0] = playerChoice, choiceArray[1] = computerchoice
        scoreArray = gameLogic(choiceArray[0], choiceArray[1], scoreArray[0], scoreArray[1]);


        document.querySelector("#choose").innerText = scoreArray[2];
        document.querySelector("#player-score").innerText = scoreArray[0];
        document.querySelector("#computer-score").innerText = scoreArray[1];

        if(gameRound == 5){
            document.querySelector("#choose").style.display = "block";

            if(scoreArray[0] > scoreArray[1]){
                document.querySelector("#choose").innerText = "You won the game!";
                document.querySelector("#choose").style.color = "lightgreen";
            } else if(scoreArray[0] < scoreArray[1]){
                document.querySelector("#choose").innerText = "Computer won the game!";
                document.querySelector("#choose").style.color = "rgb(255, 125, 125)";
            } else {
                document.querySelector("#choose").innerText = "This game is a tie!";
                document.querySelector("#choose").style.color = "rgb(255, 255, 125)";
            }
            gameResultH3 = document.querySelectorAll("#game-result>*:not(#choose)");
            gameResultH3.forEach(element => {
                element.classList.toggle("m-hidden");
            });
            document.querySelector(".game-scores").classList.toggle("m-hidden");
        }
        gameRound++;
    }
}

function getChoices(playerChoiceIndex){
    let resultDiv = document.querySelector("#game-result");
    switch(playerChoiceIndex){
        case 1:
            playerChoiceMeaning = "rock";
            break;
        case 2:
            playerChoiceMeaning = "paper";
            break;
        case 3:
            playerChoiceMeaning = "scissors";
            break;
        default:
            playerChoiceMeaning = "error";
            break;
    }

    //roundContentDiv.innerHTML += "<h2>Your choice is: " + playerChoiceMeaning + "</h2>";
    document.querySelector("#player-choice").innerText = playerChoiceMeaning;
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

    //roundContentDiv.innerHTML += "<h2>Computer choice is: " + computerChoice +"</h2>";
    document.querySelector("#computer-choice").innerText = computerChoice;
    return [playerChoiceIndex, computerChoiceIndex]
}


function gameLogic(playerChoiceIndex, computerChoiceIndex, playerScore, computerScore){
    roundContentDiv = document.querySelector("#round-result");
    if(playerChoiceIndex === computerChoiceIndex){
        resultText = "You ended in a draw";
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 1 && computerChoiceIndex === 2){ // rock vs paper
        resultText = "Computer won this round";
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 1 && computerChoiceIndex === 3){ // rock vs scissors
        resultText = "You won this round";
        playerScore = playerScore + 1;
    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 1){ // paper vs rock
        resultText = "You won this round";
        playerScore = playerScore + 1;
    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 3){ // paper vs scissors
        resultText = "Computer won this round";
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 3 && computerChoiceIndex === 1){ // scissors vs rock
        resultText = "Computer won this round";
        computerScore = computerScore + 1;
    } else if (playerChoiceIndex === 3 && computerChoiceIndex === 2){ // scissors vs paper
        resultText = "You won this round";
        playerScore = playerScore + 1;
    }
    return [playerScore, computerScore, resultText];
}
