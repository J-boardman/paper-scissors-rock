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
    
    //if (sign.toLowerCase() == "scorpio") {
    //Try removing choice== on 2nd and 3rd option
    if(choice=="Paper" || choice=="Scissors" || choice=="Rock"){
        return choice
    } else alert ("That wasn't an option... Please reload and try again...");
}

//Initially these were function variables, probably makes my life easier if they're on a global scope, right???
let playerSelection = playerPlay();
let computerSelection = computerPlay();
let pWins = 0;
let pcWins = 0;
//Create function that plays a single round of PSR. Two parameters: playerSelection & computerSelection which then return a string that declares the winner. Make playerSelection case-insensitive!

function round(){
    
    console.log("You = " + playerSelection)
    console.log("Computer = " + computerSelection);

//Drafts for this code can be found in whack.md
    if(playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper" || playerSelection=="Rock" && computerSelection=="Scissors"){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
    } else if (playerSelection==computerSelection){
        return 'Draw! You both chose ' + playerSelection +'!'
    } else return 'You lose! ' + computerSelection + ' beats ' + playerSelection +'!'

}

//Write a new function called game(). Use the previous function inside this one to play a 5 round game that keeps score and reports a winner or loser at the end.

let win = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelection +'!'
let draw = 'Draw! You both chose ' + playerSelection +'!'

function round(){
    
    console.log("You = " + playerSelection)
    console.log("Computer = " + computerSelection);

    if(playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper" || playerSelection=="Rock" && computerSelection=="Scissors"){
        return win, pWins++;
    } else if (playerSelection==computerSelection){
        return draw
    } else pcWins++; return lose,

function game(){
    round();
    if (round()==win){
        return pWin++;
    } else if(round()==lose){
        return pcWin++;
    }
}
}
console.log(round()) 
console.log(pWins,pcWins);

//For function game(): try returning a variable (win/lose/draw) for each round. Then use that variable in the game function to keep score and whatnot.