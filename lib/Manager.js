// The Manager class is a sub-class of Employee.
// It includes the manager's officeNumber

const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = this.constructor.name;
    };

};

module.exports = Manager;