const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


describe('Manager class', () => {
    describe('Properties', () => {
        it('has an office number', () => {
            const manager = new Manager('Manager', 120, 'Manager@company.com', 123456789);
            expect(manager.officeNumber).toBe(123456789);
        });
    });

    describe('getRole method', () => {
        it('Returns Manager', () => {
            const manager = new Manager('Manager', 120, 'Manager@company.com', 123456789);
            expect(manager.getRole()).toBe('Manager');
        });
    });
});