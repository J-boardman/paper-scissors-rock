//V2
    if(playerSelection=="Paper" && computerSelection=="Rock" || playerSelection=="Scissors" && computerSelection=="Paper" || playerSelection=="Rock" && computerSelection=="Scissors"){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
    } else if (playerSelection==computerSelection){
        return 'Draw! You both chose ' + playerSelection +'!'
    } else return 'You lose! ' + computerSelection + ' beats ' + playerSelection +'!'

    
}


//V1
if(answer[0]=="Paper"){
    if(answer[1]=="Rock"){
        return 'You win! ' + answer[0] + ' beats ' + answer[1];   
    } else if(answer[1]=="Paper"){
        return 'Draw! You both picked ' + answer[0]
    } else {
        return 'You Lose! ' + answer[1] + ' beats ' + answer[0];
    }
} else if(answer[0]=="Scissors"){
    if(answer[1]=="Paper"){
        return 'You win! ' + answer[0] + ' beats ' + answer[1];   
    } else if(answer[1]=="Scissors"){
        return 'Draw! You both picked ' + answer[0]
    } else {
        return 'You Lose! ' + answer[1] + ' beats ' + answer[0];
    }
} else if(answer[0]=="Rock"){
    if(answer[1]=="Scissors"){
        return 'You win! ' + answer[0] + ' beats ' + answer[1];   
    } else if(answer[1]=="Rock"){
        return 'Draw! You both picked ' + answer[0]
    } else {
        return 'You Lose! ' + answer[1] + ' beats ' + answer[0];
    }
}
