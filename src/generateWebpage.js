// This module is utilized to generate all the HTML web elements to display the team information

// The renderEmployees function generates the HTML code for the employees reporting to the manager 
function renderEmployees(data) {
    const { employees } = data;

    if (employees.length !== 0) {
        let employeeSection

        for (let i = 0; i < employees.length; i++) {
            let { employeeRole, employeeName, employeeID, employeeEmail, engGithub, internSchool } = employees[i];

            let uniqueEmployeeInfo = employeeRole = 'Engineer' ? `GitHub: <a href=https://www.github.com/${engGithub}>${engGithub}</a>` : `School: ${internSchool}`
            

            employeeHTML = `
                <div class="card" style="width: 18rem;">
                <div class="card-title">
                    <h5>${employeeName}</h5>
                    <h4>${employeeRole}</h4>
                </div>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Employee Information:</h6>
                    <ul>
                        <li class="card-text">ID: ${employeeID}</li>
                        <li class="card-text">Email: ${employeeEmail}</li>
                        <li class="card-text">${uniqueEmployeeInfo}</li>
                    </ul>
                </div>
                </div>`
            employeeSection += employeeHTML
        };
        console.log(employeeSection)
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
        
    </body>
    </html>
    `
}




module.exports = renderEmployees;