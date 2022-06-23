const Employee = require('./lid/Employee');
const Manager = require('./lid/Manager');
const Engineer = require('./lid/Engineer');
const Intern = require('./lid/Intern');

const fs = require('fs');
const generatePage = require
const inquirer = require('inquirer');

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the management of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a manager's name?");
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
                    console.log('Please enter a valid work ID?')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter an email')
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter the manager's office number?.",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter a valid office number')
                }
            }
        },


    ]);
}
promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//     console.log(err);
//   });