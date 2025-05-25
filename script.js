let computerScore = 0;
let humanScore = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let n = getRandomInt(3);
    if (n === 0) return "Rock";
    else if (n === 1) return "Paper";
    else return "Scissors";
}

const rock = document.createElement("button");
rock.classList.add("btn");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.classList.add("btn");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.classList.add("btn");
scissors.textContent = "Scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

const buttons = document.querySelectorAll(".btn");

const results = document.createElement("div");
results.textContent = "Results";
document.body.appendChild(results);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        results.innerHTML+= `<br>It's a Draw! ${humanChoice} is the same as ${computerChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        results.innerHTML+= `<br>>You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        results.innerHTML+= `<br>>You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    results.innerHTML+= `<br>>Score:- Human: ${humanScore} Computer: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        let winner = humanScore === 5 ? "You have won the game!":"Computer has won the game!";
        results.innerHTML+=`<br>Winner:${winner}`;
        disableFunctions();
    }
}

function disableFunctions(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

rock.addEventListener("click",() => playRound("Rock", getComputerChoice()));
paper.addEventListener("click",() => playRound("Paper", getComputerChoice()));
scissors.addEventListener("click",() => playRound("Scissors", getComputerChoice()));






