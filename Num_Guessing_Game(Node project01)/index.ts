import inquirer from "inquirer";   
//...................................Number Guessing Game..........................//
let roundNum : number =Math.floor((Math.random() *4) +1);
 //                                                                ///Kishor Kumar///
let userInput = await inquirer.prompt({
    type : "number",
    name : "guessedNumber",
    message : "Guess a number between 1 -4"
})

if (userInput.guessedNumber === roundNum){
    console.log('congratulations!, you guessed correctly!');
    
}else{
    console.log(`sorry! try next time. correct answer is ${roundNum}.`);
    
}




