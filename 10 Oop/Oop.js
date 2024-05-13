#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.magenta.overline("Welcome!"));
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.yellow("Whom would you like to interact with? "),
                choices: ["Staff", "Student", "Exit"]
            }
        ]);
        if (ans.select === "Staff") {
            console.log(chalk.blue("You approach the staff room. Please feel free to ask any question."));
        }
        else if (ans.select === "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: chalk.yellow("Enter the student's name you wish to engagewith:")
                }
            ]);
            const student = persons.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.blue(`Hello i am ${name.name}. Nice to meet you!`));
                console.log(chalk.green("New student added"));
                console.log(chalk.blue("Current student list: "));
                console.log(persons.students);
            }
            else {
                console.log(chalk.blue(`Hello i am ${student.name}. Nice to see you again!`));
                console.log(chalk.red("Existing student list"));
                console.log(persons.students);
            }
        }
        else if (ans.select === "Exit") {
            console.log(chalk.red("Exiting the program"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
