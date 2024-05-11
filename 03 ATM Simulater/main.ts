#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; //Dollar
let myPin = 1729;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.blueBright("Enter your pin code:"),
    type: "number"
  }
])

if (pinAns.pin === myPin) {
  console.log(chalk.green("\n\tCorrect pin code\t\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance"]
    }
  ])

  if (operationAns.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdraw method",
        choices: ["Fast cash", "Enter Amount"]
      }
    ])
    if (withdrawAns.withdrawMethod === "Fast cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: "Select Amount",
          choices: [1000, 2000, 5000, 10000, 20000, 50000]
        }
      ])
      if (fastCashAns.fastCash > myBalance) {
        console.log(chalk.red("\n\tinsufficient Balance\t"));
      } else {
        myBalance -= fastCashAns.fastCash;
        console.log(chalk.magenta(`${fastCashAns.fastCash} Withdraw successfully`));
        console.log(`Your remaining balance is: ${myBalance}`);
      }
    } else if (withdrawAns.withdrawMethod === "Enter Amount") {
     let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: ("enter your amount"),
          type: "number"
        }
      ])
      if (amountAns.amount > myBalance) {
        console.log(chalk.red("\n\tInsufficient Balance\t"));
      } else {
        myBalance -= amountAns.amount;
        console.log(chalk.magenta(`${amountAns.amount} Withdraw successfully`));
        console.log(`Your remaining balance is: ${myBalance}`);
      }
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your balance is: ${myBalance}`);
  }
} else {
  console.log(chalk.red("\n\tincorrect pin code\t"));
}