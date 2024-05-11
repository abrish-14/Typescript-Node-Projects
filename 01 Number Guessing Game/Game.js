#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number beetween 1-5: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
