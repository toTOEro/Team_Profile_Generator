// This module is utilized to generate all the HTML web elements to display the team information

const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');


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
            uniqueEmployeeInfo = item.getRole() == 'Engineer' ? `GitHub: <a href="${item.getGithub()}" target="_blank">${item.github}</a>` : `School: ${item.getSchool()}`

            let employeeHTML = `
                <div class="card m-3" style="width: 18rem;">
                   <div class="card-title bg-primary pl-1">
                        <h4>${item.name}</h4>
                        <h5 class="font-italic">${item.role}</h5>
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">Employee Information:</h6>
                        <ul class="pl-1">
                            <li class="card-text">ID: ${item.ID}</li>
                            <li class="card-text">Email: <a href="mailto: ${item.email}"> ${item.email} </a></li>
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
    const manager = new Manager(managerName, managerID, managerEmail, managerNumber);
    return `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-title bg-primary pl-1">
                <h4>${manager.name}</h4>
                <h5 class="font-italic">${manager.role}</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Employee Information:</h6>
                <ul class="pl-1">
                    <li class="card-text">ID: ${manager.ID}</li>
                    <li class="card-text">Email: <a href="mailto: ${manager.email}"> ${manager.email} </a></li>
                    <li class="card-text">Phone: ${managerNumber}</li>
                </ul>
            </div>
        </div>`
}


// The generateWebpage function utilizes the code from the renderEmployes and renderManager functions to generate the finalized webpage
function generateWebpage(data) {
    const managerSection = renderManager(data);
    const employeeSection = renderEmployees(data);

    const dreamTeam = managerSection + employeeSection;

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

    <div class="d-flex justify-content-center">
    ${dreamTeam}
    </div>
        
    </body>
    </html>
    `
}




module.exports = generateWebpage;