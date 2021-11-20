//Determine the name of opponent
let computersName = '';
const names = ["Ash Ketchum","Brock","Misty","Jessie", "James","Professor Oak", "Giovanni", "May", "Joe"];

function computerName(){
    computersName = names[Math.floor(Math.random()*names.length)];
    console.log('Your opponent is ' + computersName);
}
computerName();

//Display that name in the HTML
document.querySelector('.opponents-name').textContent= computersName + ' wants to battle!';

document.querySelector('.computerName').textContent= computersName;
//Showing/hiding the secret option: Mew

const button = document.querySelector('.secret');
const body = document.querySelector('body');
const psychic = document.querySelector('#psychic');

button.addEventListener('click', () => {
    body.classList.toggle('new');
    psychic.classList.toggle('hide');
    psychic.classList.toggle('psychic');
});

//Player selection 

const fire = document.querySelector('.fire');
const water = document.querySelector('.water');
const grass = document.querySelector('.grass');
let computerSelection = "";
let playerSelection = ''
let playerMove = ''

psychic.addEventListener('click', () => {
    playerSelection =  'Mew';
    playerMove = 'psywave'
    console.log('You chose ' + playerSelection);
    computerPlay();
    round();

});
fire.addEventListener('click', () => {
    playerSelection =  'Charmander';
    playerMove = 'ember'
    console.log('You chose ' + playerSelection);
    computerPlay();
    round();
});
water.addEventListener('click', () => {
    playerSelection =  'Squirtle';
    playerMove = 'bubble';
    console.log('You chose ' + playerSelection);
    computerPlay();
    round();
});
grass.addEventListener('click', () => {
    playerSelection =  'Bulbasaur';
    playerMove = 'leech seed'
    console.log('You chose ' + playerSelection);
    computerPlay();
    round();

});

//Ask computer to return a value of rock, paper, or scissors, chosen at random.
function computerPlay(){
    const choices = ["Fire","Water","Grass"];
    computerSelection = choices[Math.floor(Math.random()*choices.length)]

    console.log(computersName + " chose a " + computerSelection + " type pokemon");
}
//Play a round of paper,scissors,rock using the computer and user inputs as parameters. Return the result of the round

wins = 0;
loses = 0;
let battleLog = '';

function round(){
    //Messages for rounds won/lost

    let roundWon =  
    'You win! ' + playerSelection + "'s " + playerMove + ' attack was super effective against ' + computersName + "'s " + computerSelection + " type pokemon!";

    let roundLost = 
    'You lose! ' + computersName + "'s " + computerSelection + ' type pokemon beats your ' + playerSelection +'!'

    let roundDraw =  'Draw! You and ' + computersName + ' both chose a ' + computerSelection +' type pokemon!'

    //Actual function, im not sure why those variables didnt work on the global scope..
    if(
    playerSelection=="Charmander" && computerSelection=="Grass" 
    || playerSelection=="Squirtle" && computerSelection=="Fire" 
    || playerSelection=="Bulbasaur" && computerSelection=="Water" || playerSelection=="Mew"){
        document.querySelector('.results').textContent = roundWon
        return result('win');
        
    } else if (
    playerSelection=="Charmander" && computerSelection=="Fire" 
    ||playerSelection=="Squirtle" && computerSelection=="Water" 
    ||playerSelection=="Bulbasaur" && computerSelection=="Grass"){
        document.querySelector('.results').textContent = roundDraw
        return;

    } else
        document.querySelector('.results').textContent = roundLost;
        return result('loss');   
}

//Function for the result
let playerHP = 100;
let computerHP = 100;
document.querySelector('.pHP').textContent = playerHP;
document.querySelector('.oHP').textContent = computerHP;

function result(str){
//Messages for the results
let winner = 'You defeated ' + computersName + '!\n' + 'Press OK to face another opponent!';

let loser = 'You were defeated by ' + computersName + ' and blacked out! \n Press OK for another opponent!'

    if(str==='win'){
        computerHP -= 20;
    } else if(str==='loss'){
        playerHP -= 20;
    } else return
    document.querySelector('.pHP').textContent = playerHP;
    document.querySelector('.oHP').textContent = computerHP;

    if(playerHP==0){
        alert(loser);
        location.reload(); 
    } else if (computerHP==0){
        alert(winner);
        location.reload(); 
    }
}