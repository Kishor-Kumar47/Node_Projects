#! /user/bin/env node
import inquirer from "inquirer";

// describes currency value//
let c_value : {[key: string]: number} = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
} //....................................currency converter...........................................//
// convert from///                         ///Kishor Kumar///
let ans = await inquirer.prompt([{

    type : "list",
    name : "from",
    message : "converting from",
    choices : ['PKR','UAE','USD']
},
{
//   convert to//
    type : "list",
    name : "to",
    message : "converting to",
    choices : ['PKR','UAE','USD']
},
{
    type : "number",
    name : "amount",
    message : "Your amount to convert"
}
])

console.log(c_value[ans.to] / c_value[ans.from]* ans.amount);