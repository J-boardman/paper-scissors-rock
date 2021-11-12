//Ask computer to return a value of rock, paper, or scissors, chosen at random.
playerSelection = "";
computerSelection = "";
function computerPlay(){
    const choices = ["Rock","Paper","Scissors"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)]

    console.log("Computer" + " = " + randomChoice);
    return computerSelection = randomChoice 
}
//Ask for input from user. User should type either rock, paper or scissors, with case insensitivity
function playerPlay(){
    choice = prompt("Pick paper, scissors, or rock!"); 
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    
    if(choice=="Paper" || choice=="Scissors" || choice=="Rock"){
        console.log("You" + " = " + choice);
        return playerSelection = choice
    } else alert("That wasn't an option... You lose this round...");
}
//Play a round of paper,scissors,rock using the computer and user inputs as parameters. Return the result of the round

wins = 0;
loses = 0;

function round(){
    playerPlay();
    computerPlay();
    if(playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper" || playerSelection=="Rock" && computerSelection=="Scissors"){
        console.log ( 'You win! ' + playerSelection + ' beats ' + computerSelection + '!');
        console.log("------------------------------")
        return wins+=1;
    } else if (playerSelection===computerSelection){
        console.log( 'Draw! You both chose ' + playerSelection +'!');
        console.log("------------------------------")
        return wins+=0;
    } else console.log( 'You lose! ' + computerSelection + ' beats ' + playerSelection +'!');
        console.log("------------------------------")
        return loses+=1;

}

round(); 
round();
round();
round();
round();

console.log("You = " + wins + "  ||  " + "Computer = " + loses);
console.log("------------------------------")

//End the game after 5 rounds, declare a winner.

function game(){
    if (wins>loses){
        console.log("Wow! Over 5 rounds you came out on top with " + wins + " rounds won! Congrats!");
        return "Winner!";
    } else if (wins<loses){
        console.log("Oof! Over 5 rounds you came up short... The computer beat you with " + loses + " rounds won...")
        return "Loser!";
    } else
        console.log("Wow! A tie!");
        return "Draw!"
}
game();