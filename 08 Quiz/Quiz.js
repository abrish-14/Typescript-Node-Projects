#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.yellow("Q1. Who inaugurated the State Bank of Pakistan?"),
        choices: ["A. Quaid-e-Azam", "B. Malik Ghulam Muhammad", "C. Liaquat Ali Khan"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.yellow("Q2. National code of Pakistan is?"),
        choices: ["A. PAK", "B. PK", "C. None of them"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.yellow("Q3. The common value among the people of Pakistan is?"),
        choices: ["A. Dress", "B. Language", "C. Islam"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.yellow("Q4. Who was the first governor general of Pakistan?"),
        choices: ["A. Khawaja Nazimuddin", "B. Iskander Mirza", "C. Quaid e Azam Muhammad Ali Jinnah"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.yellow("Q5. Longest serving prime minister of Pakistan?"),
        choices: ["A. Liaquat Ali Khan", "B. Muhammad Ali", "C. Yousuf Raza"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A. Quaid-e-Azam":
        console.log(chalk.green("1. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "B. PK":
        console.log(chalk.green("2. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red("2. Incorrect!"));
}
;
switch (quiz.question_3) {
    case "C. Islam":
        console.log(chalk.green("3. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red("3. Incorrect!"));
}
;
switch (quiz.question_4) {
    case "C. Quaid e Azam Muhammad Ali Jinnah":
        console.log(chalk.green("4. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red("4. Incorrect!"));
}
;
switch (quiz.question_5) {
    case "A. Liaquat Ali Khan":
        console.log(chalk.green("5. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red("5. Incorrect!"));
}
console.log(`Score ${score}`);
