console.log("Hello World")

//User and AI will choose three choices 
// array = ["Paper","Scissors","Rock"]
//Write rule to win or lose depend the result
//Display result for each rule

function getComputerChoice(){
    const max=3;
    let chance = Math.floor(Math.random()*max)
    if (chance == 0){
        return "Scissors"
    } else if (chance == 1){
        return "Paper"
    } else {
        return "Rock"
    }
        
}

function getHumanChoice(){
    let choice = prompt("Pick Your Choice : ")
    let cap_choice = choice.trim()
    cap_choice = cap_choice[0].toUpperCase() + cap_choice.slice(1).toLowerCase()
    
    if (cap_choice === "Scissors" || cap_choice === "Rock" || cap_choice === "Paper"){
        return cap_choice
    } else{
        alert("Please input suitable choices")
    }
}

function playGame(){
    const round = 5;
    let humanScore = 0;
    let computerScore = 0;
    let result;
    
    function playRound(humanChoice, computerChoice){
        let winResult = "You win!" + ` ${humanChoice} beats ${computerChoice}`;
        let loseResult = "You lose!" + ` ${computerChoice} beats ${humanChoice}`;
        if (humanChoice === computerChoice){
            result = "Tied! Same choices are given!"
        }
        else if (humanChoice === "Paper"){
            if (computerChoice === "Scissors"){
                result = loseResult;
                computerScore++;
            
            }
            else if (computerChoice === "Rock"){
                result = winResult;
                humanScore++;
            }
        } else if (humanChoice === "Rock"){
            if (computerChoice === "Paper"){
                result = loseResult ;
                computerScore++;
            }
            else if (computerChoice === "Scissors"){
                result = winResult;
                humanScore++;
            }
        } else if (humanChoice === "Scissors"){
            if (computerChoice === "Rock"){
                result = loseResult;
                computerScore++;
            }
            else if (computerChoice === "Paper"){
                result = winResult
                humanScore++;
            }
        }
    return result;
    }
    for (let i=0;i<round;i++){
        let score_result;
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(humanSelection,computerSelection))
    }
    const result_string =  `Results => Human : ${humanScore} | Computer : ${computerScore}`
    console.log(result_string)
    if(humanScore>computerScore){
        score_result =  "Congratulations! You win the game!"
    } else if (humanScore<computerScore){
        score_result =  "Computer beats you! Try next time..."
    } else{
        score_result = "You tied with Computer! Not bad!"
    }
    return score_result
}

console.log(playGame())
//Will get result between 0-2
// console.log(getComputerChoice())
// console.log(getHumanChoice())


