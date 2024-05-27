#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Bank Account interface 
interface bankAccount{
    accountNumber: number;
    balance: number;
    withdraw(amount: number):void
    deposit(amount: number):void
    checkBalance():void
}

class BankAccount implements bankAccount{
    accountNumber: number;
    balance: number;
    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance ;
    }

//Debit money
withdraw(amount: number): void {
    if(this.balance >= amount){
        this.balance -= amount;
        console.log(chalk.green(`Withdrawal of $${amount} Successful. Remaining balance $${this.balance}.`))
    }else{
        console.log(chalk.red("Incufficient balance"));
    }
}
//Credit money
deposit(amount: number): void {
    if(amount > 100){
        amount -= 1; // $1 fee charged if more than $100 is deposited
    }this.balance += amount;
     console.log(chalk.green(`Deposit of $${amount} Successful. Remaining balance $${this.balance}`));
}
//Check balance 
checkBalance(): void {
    console.log(chalk.green(`Current balance: $${this.balance}`))
}
}
//Customer class 
class Customer{
    firstName: string;
    lastName :string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccount;
    constructor(firstName: string, lastName :string, gender: string, age: number, mobileNumber: number,account: BankAccount){
          this.firstName = firstName;
          this.lastName = lastName;
          this.gender = gender;
          this.age = age;
          this.mobileNumber = mobileNumber;
          this.account = account;
    }
}

//Create bank account
const accounts: BankAccount[] = [
    new BankAccount (1001,500),
    new BankAccount (1002,1000),
    new BankAccount (1003,2000)
];

// Create customers
const customers: Customer[] = [
    new Customer ("Madiha", "Ali", "Female", 19, 3191234567, accounts[0]),
    new Customer ("Abrish", "Kamran", "Female", 20, 3193456865, accounts[1]),
    new Customer ("Ahmed", "Ali", "Male", 22, 3161234567, accounts[2])
]

//Function to interact with bank account
async function service(){
    do{
    const accountNumberInput = await inquirer.prompt({
        name: "accountNumber",
        type: "number",
        message: "Enter your account number:"
    })
    const customer = customers.find(costomer => costomer.account.accountNumber === accountNumberInput.accountNumber);
    if(customer){
        console.log(chalk.blue(`\nWelcome, ${customer.firstName} ${customer.lastName}!\n`));
        const ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "Select an opeartion",
            choices: ["Deposit", "Withdraw", "Check balance", "Exit"]

        }]);
        switch(ans.select){
            case "Deposit":
                const depositAmount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to deposit:"
                })
                customer.account.deposit(depositAmount.amount);
                break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to Withdraw:"
                    })
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                    case "Check balance":
                        customer.account.checkBalance();
                        break;
                        case "Exit":
                            console.log(chalk.red("Exiting bank program"));
                            return;
        }
    }
    else{
        console.log(chalk.red("invalid Account number. Please try again."));
    }
    }
    while(true);
}
    service()
