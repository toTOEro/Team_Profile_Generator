// This module is utilized to generate all the HTML web elements to display the team information

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

// Temporary data setup to ease troubleshooting and code development
const data = {
    managerName: 'Manager',
    managerID: '1234',
    managerEmail: 'manager@manager.com',
    managerNumber: '123456789',
    employees: [
        {
            employeeRole: 'Engineer',
            employeeName: 'Engineer',
            employeeID: '123',
            employeeEmail: 'eng@eng.com',
            engGithub: 'Engineer'
        },
        {
            employeeRole: 'Intern',
            employeeName: 'Intern',
            employeeID: '1',
            employeeEmail: 'int@int.com',
            internSchool: 'internUniversity'
        },
        {
            employeeRole: 'Intern',
            employeeName: 'Intern',
            employeeID: '1',
            employeeEmail: 'int@int.com',
            internSchool: 'internUniversity'
        },
        {
            employeeRole: 'Engineer',
            employeeName: 'Engineer',
            employeeID: '123',
            employeeEmail: 'eng@eng.com',
            engGithub: 'Engineer'
        },
    ]
}

renderEmployees(data)

// The renderEmployees function generates the HTML code for the employees reporting to the manager 
function renderEmployees(data) {
    const staff = data.employees;
    for (let i = 0; i < staff.length; i++) {

        const currentStaff = staff[i];
        if (currentStaff.employeeRole == 'Engineer') {
            staff[i] = new Engineer(currentStaff.employeeName, currentStaff.employeeID, currentStaff.employeeEmail, currentStaff.engGithub);
        } else {
            staff[i] = new Intern(currentStaff.employeeName, currentStaff.employeeID, currentStaff.employeeEmail, currentStaff.internSchool)
        }
    }

    if (staff.length !== 0) {
        let employeeSection = '';
        let uniqueEmployeeInfo = '';

        staff.forEach((item) => {
            uniqueEmployeeInfo = item.getRole() == 'Engineer' ? `GitHub: <a href=https://www.github.com/${item.getGithub()}>${item.getGithub()}</a>` : `School: ${item.getSchool()}`

            let employeeHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-title">
                    <h5>${item.name}</h5>
                    <h4>${item.role}</h4>
                </div>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Employee Information:</h6>
                    <ul>
                        <li class="card-text">ID: ${item.ID}</li>
                        <li class="card-text">Email: ${item.email}</li>
                        <li class="card-text">${uniqueEmployeeInfo}</li>
                    </ul>
                </div>
                </div>`
            employeeSection += employeeHTML
        })


        return employeeSection
    } else {
        return ''
    };
};


// The renderManager function generates the HTML code for the manager 
function renderManager(data) {
    const { managerName, managerID, managerEmail, managerNumber } = data;

}

// The generateWebpage function utilizes the code from the renderEmployes and renderManager functions to generate the finalized webpage
function generateWebpage(data) {
    const managerSection = renderManager(data);
    const employeeSection = renderEmployees(data);


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Dream Team</title>
    </head>
    <body>


    <div class="jumbotron">
        <h1 class="display-4">Hello, meet the dream team!</h1>
        <p class="lead">This is the team introduction page for the best team in the world.</p>
        <hr class="my-4">
        <p>We're united by our love for coding!</p>
    </div>

    ${employeeHTML}
    ${managerHTML}
        
    </body>
    </html>
    `
}




module.exports = renderEmployees;