const Employee = require('../lib/Employee')

describe ('Employee Class', () => {
    describe('Properties', () => {
        it('has a name',() => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.name).toBe('Employee');
        })
        it('has an ID',() => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.ID).toBe(120);
        })
        it('has an email',() => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.email).toBe('employee@company.com');
        })

    })

    describe('getName method', () => {
        it('returns the name of the employee', () => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.getName()).toBe('Employee')
        })
    })

    describe('getID method', () => {
        it('returns the ID of the employee', () => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.getID()).toBe(120)
        })
    })
    describe('getEmail method', () => {
        it('returns the email of the employee', () => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.getEmail()).toBe('employee@company.com')
        })
    })
    describe('getRole method', () => {
        it('returns the Employee class', () => {
            const employee = new Employee('Employee', 120, 'employee@company.com');
            expect(employee.getRole()).toBeInstanceOf(Employee)
        })
    })


})
