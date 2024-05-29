#! /usr/bin/env node
import inquirer from "inquirer";
// crate a class of person with access modifier
class Person {
    personality;
    constructor() {
        this.personality = "mystrey";
    }
    //this method set person's personality ,this method take 2 args first is answer from user and second list which given to user as an option
    askquestion(answer, options) {
        if (answer === options[0]) {
            this.personality = 'Extravert';
        }
        else if (answer === options[1]) {
            this.personality = 'Introvert';
        }
    }
    //this method return value of personality
    get_personality() {
        return this.personality;
    }
}
//there we use inheritance of class , student class inherit person class
class Student extends Person {
    _name = '';
    student_data = [];
    // there we use get and set 
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
while (true) {
    let options = ["(1) do you like to talk to others?", "(2) or you rather keep to yourself.", "exit"];
    let answer = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "let guess your personality type!!!\nI will give you few options and you pick any of them\n\tso your are ready?\n ",
            default: true
        }
    ]);
    if (answer.confirm === true) {
        answer = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "select an option from list ",
            choices: options
        });
        if (answer.select === "exit") {
            console.log(`exited...`);
            process.exit();
        }
        else {
            let person = new Person();
            person.askquestion(answer.select, options);
            console.log(`\n\t\tyour personailty type is ${person.get_personality()}\n`);
            answer = await inquirer.prompt([
                {
                    name: "select",
                    type: "input",
                    message: "What is your name",
                }
            ]);
            let name = answer.select;
            let student = new Student();
            student.name = name;
            if (name !== '') {
                console.log(`\n\tyour name is ${student.name} and your personality type is ${student.get_personality()}\n\n`);
            }
            else {
                console.log(`enter a vaild name`);
            }
        }
    }
    else if (answer.confirm === false) {
        console.log(`thank you...`);
        process.exit();
    }
}
