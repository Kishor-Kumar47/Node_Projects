import inquirer from "inquirer";
let todoList = [];
let varCon = true;
while (varCon === true) {
    let options = await inquirer.prompt([{
            type: 'list',
            name: 'user_option',
            message: 'Select an option',
            choices: ['Add', 'Remove']
        }]);
    // .......................Add...........................................///
    if (options.user_option === 'Add') {
        let answer = await inquirer.prompt([{
                type: 'input',
                name: 'user_answer',
                message: 'Write something to add in the list.'
            }]);
        if (answer.user_answer !== '') {
            todoList.push(answer.user_answer);
            console.log(todoList);
        }
        else {
            console.log('Please write something to add in the todo list.');
        }
        // .......................Remove...........................................///
    }
    else if (options.user_option === 'Remove') {
        let removeAns = await inquirer.prompt([{
                type: 'list',
                name: 'remove_item',
                message: 'Select item to remove',
                choices: todoList
            }]);
        let indexRomove = todoList.indexOf(removeAns.remove_item);
        if (indexRomove >= 0) {
            todoList.splice(indexRomove, 1);
            console.log('You remove : ', removeAns.remove_item);
            console.log(todoList);
        }
    }
    // .......................comfirmation...........................................///
    let user_answer = await inquirer.prompt([{
            type: 'confirm',
            name: 'selection',
            message: 'Do you want to continue?',
            default: true
        }]);
    if (user_answer.selection === false) {
        varCon = false;
    }
}
console.log('Thank you for using');
