
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let n = getRandomInt(3);
    if (n === 0) return "Rock";
    else if (n === 1) return "Paper";
    else return "Scissors";
}


function getHumanChoice(){
    let ch = prompt("*Your Turn* Choose your move: Rock, Paper, or Scissors");
    return ch;
}


function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if(humanChoice === computerChoice){
            console.log(`It's a Draw! ${humanChoice} is the same as ${computerChoice}`);
        }
        else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Score:- Human: ${humanScore} Computer: ${computerScore}`);
    }

    let count = 5;
    while(count > 0){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        count--;
    }

    if(humanScore > computerScore){
        console.log("🏆 You won the game!");
    } else if(computerScore > humanScore){
        console.log("💻 The computer won the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();
