const Employee = require('./lid/Employee');
const Manager = require('./lid/Manager');
const Engineer = require('./lid/Engineer');
const Intern = require('./lid/Intern');

const fs = require('fs');
const generatePage = require("./src/page-template.js")
const inquirer = require('inquirer');
const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the management of this team?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID")
                    return true;
                } else {
                    console.log("Please enter a manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid work ID')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email')
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);

        })
};

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employees role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employees name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employees ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter a valid employee's ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employees email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employees github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the interns school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the interns school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },
    ])
        .then(teamData => {
            if (teamData.role === "Engineer") {
                const { name, id, email, github } = teamData;
                const engineer = new Engineer(name, id, email, github);

                teamArray.push(engineer);
                console.log(engineer);

            } else {
                const { name, id, email, school } = teamData;
                const intern = new Intern(name, id, email, school);

                teamArray.push(intern);
                console.log(intern);

            }
            if (teamData.confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
};
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generatePage(teamArray);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });
