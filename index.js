// This code requires the inquirer, inquirer-loop, and FS packages in order to properly funcion.

const inquirer = require('inquirer');
const fs = require('fs');

// Registering inquirer-loop prompt to the inquirer module
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

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
        validate: input => input ? true : console.warn('\nPlease provide a value'),
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'managerEmail',
        validate: input => input ? true : console.warn('\nPlease provide a value'),

    },
    {
        type: 'input',
        message: 'What is their office number? (XXXXXXXXX)',
        name: 'managerNumber',
        validate: input => input.length == 9 ? true : console.warn('\nPlease provide a 9 digit phone number'),

    },

    {
        type: 'loop',
        message: 'Would you like to add another employee? (y/n)',
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
                validate: input => input ? true : console.warn('\nPlease provide a value'),
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'employeeEmail',
                validate: input => input ? true : console.warn('\nPlease provide a value'),
            },
            {
                type: 'input',
                message: 'What is their GitHub username?',
                name: 'engGithub',
                when: employee => employee.employeeRole === 'Engineer',
            },
            {
                type: 'input',
                message: 'What is their school?',
                name: 'internSchool',
                when: employee => employee.employeeRole === 'Intern',
            }


        ],
    },
    // {
    //     type: 'input',
    //     message: 'Contribution Guidelines?',
    //     name: 'contribution',
    //     default: 'None'
    // },
    // {
    //     type: 'input',
    //     message: 'Test instructions?',
    //     name: 'tests',
    //     default: 'None'
    // },
    // {
    //     type: 'input',
    //     message: 'Email Address?',
    //     name: 'email',
    //     validate: input => input ? true : console.warn('\nPlease provide a value'),

    // },
];


// // The writeToFile function generates the readme file.
// function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error('Error in writing File!') : console.log('ReadMe successfully generated!')
//     );
// };

// This function initializes the app to begin asking questions.
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            console.log(response)
        )

}

// Function call to initialize app
init();
