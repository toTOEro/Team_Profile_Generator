// The employee class is the parent class of Engineer, Intern, and Manager
// It is responsible for containing and returning the name, ID, and email of the employee
// as well as managing the getName, getID, getEmail, and getRole methods.

class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = this.constructor.name;
    };

    getName() {
        return this.name;
    }

    getID() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role
    }

};

module.exports = Employee;