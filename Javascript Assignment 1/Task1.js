
const prompt = require('prompt-sync')();

console.log("Welcome to Rock paper and Scissor Game!!\n");
let userChoice,userWon=0,compWon=0;
while(true){
    
    
    console.log("You won: "+userWon+ " matches.");
    console.log("Opponent won: "+compWon+ " matches.");
    console.log("Please Choose one from the following:");
    console.log("1. Rock");
    console.log("2. Paper");
    console.log("3. Scissors");
    console.log("4. Quit");
    userChoice = Number(prompt("Enter Number of your Choice: "));
    
    switch(userChoice){
        case 1:
            console.log("You chose Rock");
            break;
        case 2:
            console.log("You chose Paper");
            break;
        case 3:
            console.log("You chose Scissors");
            break;
        case 4:
            process.exit(0);
        default:
            console.log("Invalid Choice, Try Again");
    }
    
    let compChoice = Math.floor(Math.random()*3)+1;
    switch(compChoice){
        case 1:
            console.log("Computer chose Rock");
            break;
        case 2:
            console.log("Computer chose Paper");
            break;
        case 3:
            console.log("Computer chose Scissors");
            break;
        default:
            console.log("error in choosing");
    }
    if(compChoice === userChoice) {
        console.log("It's a tie. Try Again!");
        continue;
    }
    if(userChoice==1){
        if(compChoice === 2){
            console.log("Computer Won!");
            compWon++;
        }
        else if(compChoice === 3){
            console.log("You Won!");
            userWon++;
        }
    }
    else if(userChoice === 2){
        if(compChoice === 1){
            console.log("You Won!");
            userWon++;
        }
        else if(compChoice === 3){
            console.log("Computer Won!");
            compWon++;
        }
    }
    else {
        if(compChoice === 1){
            console.log("Computer Won!");
            compWon++;
        }
        else if(compChoice === 2){
            console.log("You Won!");
            userWon++;
        }
    }
    console.log();
    if(compWon===5) {
        console.log("Computer won this match, better luck next time.");
    }
    else if(userWon===5){
        console.log("You won this match, Congratulations.");
    }
    
    if(compWon===5 || userWon ===5){
        
        while(true){
        console.log("Wanna retry?");
        console.log("1. Yes \n2. No");
            let input = Number(prompt());
        if(input === 1) {
            compWon=0;
            userWon=0;
            break;
        }
        else if(input === 2){
            process.exit(0);
        }
        else {
            console.log("Invalid Option");
            continue;
        }
        }
    }
    
    
    
}