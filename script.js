//Create function named computerPlay that *randomly* returns rock paper or scissors.

function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice
}
//Had to look up random component.

//function to get a choice from a player. Originally part of round function, but that function was getting too messy for my liking.

function playerPlay(){
    choice = prompt("Pick paper, scissors, or rock!"); 
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    
    if(choice=="Paper" || choice=="Scissors" || choice=="Rock"){
        return choice
    } else alert ("That wasn't an option... Please reload and try again...");
}

//Initially these were function variables, probably makes my life easier if they're on a global scope, right???
playerSelection = playerPlay();
computerSelection = computerPlay();

//Create function that plays a single round of PSR. Two parameters: playerSelection & computerSelection which then return a string that declares the winner. Make playerSelection case-insensitive!


function round(){
    
    console.log("You = " + playerSelection)
    console.log("Computer = " + computerSelection);

//Initial drafts for this code can be found in whack.md, I'm not really sure why I thought an array was necessary...
    if(playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper" || playerSelection=="Rock" && computerSelection=="Scissors"){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
    } else if (playerSelection==computerSelection){
        return 'Draw! You both chose ' + playerSelection +'!'
    } else return 'You lose! ' + computerSelection + ' beats ' + playerSelection +'!'

    
}
console.log(round())
computerPlay();
let newChoice = computerPlay();
console.log(newChoice);

//Write a new function called game(). Use the previous function inside this one to play a 5 round game that keeps score and reports a winner or loser at the end.
