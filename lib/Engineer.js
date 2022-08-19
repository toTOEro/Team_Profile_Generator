// The Engineer class is a sub-class of Employee.
// It includes the GitHub username, as well as manages the getGithub and getRole method

const Employee = require("./employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = this.constructor.name;
    };

    getGithub() {
        return `https://github.com/${this.github}`
    }
};

module.exports = Engineer;