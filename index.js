console.log('HI')

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else{
        return "computer";
    }
}

function playRound(playerSelection, computerSelection){
 const result = checkWinner(playerSelection, computerSelection);
 if(result == "Tie"){
    return "It's a Tie!"
 } 
 else if(result == "player"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
 }
 else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`
 }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock || Paper || Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}
 
function game(){
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "player"){
            scorePlayer++;
        }
        else if(playRound(playerSelection,computerSelection) == "computer"){
            scoreComputer++;
        }
  }
  console.log("Game Over")
  if(scorePlayer > scoreComputer){
    alert("Winner winner chicken dinner")
  }
  else if(scoreComputer > scorePlayer){
    alert("Damn, you can't even beat a computer")
  }
  else{
    alert("It's a tie!!!")
  }
}

game()

