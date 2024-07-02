import { log } from "console";
import inquirer from "inquirer"

let myBalance = 0;
let isContinue = true;
const pinCode = 12345;

const message = "Welcome to ATM";
console.log(message);

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "please enter pin code:"
})




if(pin_ans.ans === 12345){
    do {
        let ans = await inquirer.prompt({
            type : "list",
            name : "list",
            message : "select any option",
            choices : ["Deposite","Withdraw","Fast cash","Balance check"]
    
        })
    //...................................Deposite.................//
        if (ans.list === "Deposite"){
            
            let ans = await inquirer.prompt ({
                type : "number",
                name : "Deposite_Amount",
                message : "please Enter you amount: "
            })
            if(ans.Deposite_Amount > 0){
                myBalance = myBalance + ans.Deposite_Amount
                console.log(myBalance);
                
                
            }
        }
    //..................................Withdraw................//
         else if (ans.list === "Withdraw"){
            let ans = await inquirer.prompt ({
                type : "number",
                name : "Withdraw_Amount",
                message : "please Enter you amount: "
            })
            if(ans.Withdraw_Amount <= myBalance){
                myBalance = myBalance - ans.Withdraw_Amount
                console.log(myBalance);
            }else{
                console.log("Non enough money");
                
            }
    
         }
         //................................fast cash..............//
         else if (ans.list === "Fast cash"){
            let ans = await inquirer.prompt({
                type : "list",
                name : "Fast_cash",
                message : "Please select one",
                choices : ["500","1000","2000"]
                
    
            })
            if(ans.Fast_cash <= myBalance){
                if(ans.Fast_cash === "500"){
                    myBalance -= ans.Fast_cash
                    console.log(myBalance);
                    
                }else if(ans.Fast_cash === "1000"){
                    myBalance -= ans.Fast_cash
                    console.log(myBalance);
                    
                }else if(ans.Fast_cash === "2000"){
                    myBalance -= ans.Fast_cash
                    console.log(myBalance);
                    
                }
            }
         }    
         //................................check balance...............//
         else if (ans.list=== "Balance check"){
            console.log(`Your balance is ${myBalance}`);
            
         }
    
         let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue:"
         })
    
         if (while_ans.condition === false){
            isContinue = false
         }
    } while (isContinue);
}

else{
    console.log('Invalid pincode');
    
}
