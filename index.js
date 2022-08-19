// This code requires the inquirer, inquirer-loop, and FS packages in order to properly funcion.

const inquirer = require('inquirer');
const fs = require('fs');
const generateWebpage = require('./src/generateWebpage.js');

// Registering inquirer-loop prompt to the inquirer module
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

// Questions to ask the user within the terminal
const questions = [

    {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'managerName',
        validate: input => input ? true : console.warn('\nPlease provide a value'),
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'managerID',
        validate: input => isNaN(input) ? console.warn('\nPlease provide a proper value') : true,
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'managerEmail',
        // RegEx mail check utilized from https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm and https://regexr.com/3e48o
        validate: managerEmail => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(managerEmail) ? true : console.warn('\nPlease provide a valid email')

    },
    {
        type: 'input',
        message: 'What is their office number? (XXXXXXXXX)',
        name: 'managerNumber',
        validate: input => input.length == 9 && !isNaN(input) ? true : console.warn('\nPlease provide a 9 digit phone number'),

    },
    {
        type: 'loop',
        message: 'Would you like to add another employee?',
        name: 'employees',
        questions: [
            {
                type: 'list',
                message: 'Engineer or Intern?',
                name: 'employeeRole',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: 'What is the name of the employee?',
                name: 'employeeName',
                validate: input => input ? true : console.warn('\nPlease provide a value'),
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'employeeID',
                validate: input => isNaN(input) ? console.warn('\nPlease provide a proper value') : true,
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'employeeEmail',
                // RegEx mail check utilized from https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm and https://regexr.com/3e48o
                validate: managerEmail => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(managerEmail) ? true : console.warn('\nPlease provide a valid email')
            },
            {
                type: 'input',
                message: 'What is their GitHub username?',
                name: 'engGithub',
                // Enables question only if user answered engineer
                when: employee => employee.employeeRole === 'Engineer',
            },
            {
                type: 'input',
                message: 'What is their school?',
                name: 'internSchool',
                // Enables question only if user answered intern
                when: employee => employee.employeeRole === 'Intern',
            }


        ],
    },
];


// The writeToFile function generates the webpage.
function writeToFile(data) {
    const file = './dist/teamWebpage.html'
    fs.writeFile(file, data, (err) =>
        err ? console.error('Error in writing File!') : console.log('ReadMe successfully generated!')
    );
};

// This function initializes the app to begin asking questions.
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(generateWebpage(response))
        )

}

// Function call to initialize app
init();
