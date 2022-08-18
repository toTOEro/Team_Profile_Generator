const Employee = require('../lib/Employee');
const Engineer = require('../lib/Intern');


describe('Intern class', () => {
    describe('Properties', () => {
        it('has a school', () => {
            const intern = new Intern('Intern', 120, 'Intern@company.com', 'cool school');
            expect(intern.school).toBe('cool school');
        });
    });

    describe('getSchool method', () => {
        it('Returns the school the intern is attending', () => {
            const intern = new Intern('Intern', 120, 'Intern@company.com', 'cool school');
            expect(intern.getSchool()).toBe('cool school');
        });
    });

    describe('getRole method', () => {
        it('Returns intern', () => {
            const intern = new Intern('Intern', 120, 'Intern@company.com', 'cool school');
            expect(intern.getRole()).toBe('Intern');
        });
    });});