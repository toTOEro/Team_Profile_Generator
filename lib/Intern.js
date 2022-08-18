// The intern class is a sub-class of Employee.
// It includes the school, as well as manages the getSchool method

const Employee = require("./employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = this.constructor.name;
    };

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;