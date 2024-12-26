//User and AI will choose three choices 
// array = ["Paper","Scissors","Rock"]
//Write rule to win or lose depend the result
//Display result for each rule

// Create Buttons for every choice (Rock,Paper,Scissors)
option = ["Rock", "Paper", "Scissors"]

const rockButton = document.createElement("button")
const paperButton = document.createElement("button")
const scissorsButton = document.createElement("button")

rockButton.toggleAttribute("rock") //Create new class attributes
paperButton.toggleAttribute("paper")
scissorsButton.toggleAttribute("scissors")

rockButton.textContent = option[0] //Add Text Content for readability
paperButton.textContent = option[1]
scissorsButton.textContent = option[2]

rockButton.value = option[0]
paperButton.value = option[1]
scissorsButton.value = option[2]

const buttonSection = document.querySelector("#button-select")
buttonSection.appendChild(rockButton)
buttonSection.appendChild(paperButton)
buttonSection.appendChild(scissorsButton)

const choiceSection = document.querySelector("#human-choice")

// Get computer choice with random value between 0-2
function getComputerChoice() {
    option = ["Rock", "Paper", "Scissors"]
    const max = 3;
    let chance = Math.floor(Math.random() * max)
    if (chance == 0) {
        return option[0]
    } else if (chance == 1) {
        return option[1]
    } else {
        return option[2]
    }
}

//Declare user and computer score variable
let humanScore = 0;
let computerScore = 0;
const scoreSection = document.querySelector("#score-section")
const pickResult = document.querySelector("#pick-result")
const humanResult = document.createElement("div")
const computerResult = document.createElement("div")
humanResult.textContent = `Your Score : ${humanScore}`
computerResult.textContent = `Computer Score : ${computerScore}`
scoreSection.appendChild(humanResult)
scoreSection.appendChild(computerResult)

// Judge the choices to print the results based on rules
function playRound(humanChoice, computerChoice) {
    let result;
    let winResult = "You win!" + ` ${humanChoice} beats ${computerChoice}`;
    let loseResult = "You lose!" + ` ${computerChoice} beats ${humanChoice}`;
    if (humanChoice === computerChoice) {
        result = "Tied! Same choices are given!"
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            result = loseResult;
            computerScore++;

        }
        else if (computerChoice === "Rock") {
            result = winResult;
            humanScore++;
        }
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            result = loseResult;
            computerScore++;
        }
        else if (computerChoice === "Scissors") {
            result = winResult;
            humanScore++;
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            result = loseResult;
            computerScore++;
        }
        else if (computerChoice === "Paper") {
            result = winResult
            humanScore++;
        }
    }
    // Return the conditional result to console log
    humanResult.textContent = `Your Score : ${humanScore}`
    computerResult.textContent = `Computer Score : ${computerScore}`
    return result;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanResult.textContent = `Your Score : ${humanScore}`
    computerResult.textContent = `Computer Score : ${computerScore}`
    buttonSection.style.display = "block"
    choiceSection.innerHTML = ""
    pickResult.innerHTML = ""
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        choiceSection.innerHTML = "<p>Picked Choice : </p>"
        choiceSection.append(button.value)
        const humanChoice = button.value
        const oneResult = playRound(humanChoice,getComputerChoice())
        pickResult.innerHTML = `<p>${oneResult}</p>`
        const maxScore = 5 //Declare score to decide winner
        if (humanScore===maxScore | computerScore ===maxScore){
            buttonSection.style.display = "none"
            const winner = (humanScore===maxScore? "You":"Computer")
            pickResult.innerHTML+=`Congrats! ${winner} win the game!`
            const resetButton = document.createElement("button")
            resetButton.textContent = "Restart?"
            resetButton.style.display = "block"
            pickResult.appendChild(resetButton)
            resetButton.addEventListener("click",()=>resetGame())
        }
    })
})







