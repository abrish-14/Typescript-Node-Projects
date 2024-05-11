#!/usr/bin/env node
import inquirer from "inquirer";
//Printing a welcome messege:
console.log("/n/twelcome to/'codewithabrish/'-CLT simple calculater /n ");
//Asking Questions From User Thought Inquirer:
let answers = await inquirer.prompt([
    { messege: "Enter first numbwer", type: "number", name: "firstNumber" },  
    { messege: "Enter second number", type: "number", name: "secondNumber" },
    {
        messege: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Dvision"]
    },
]);
console.log(answers);
// conditional statements IF-ELSE:
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
