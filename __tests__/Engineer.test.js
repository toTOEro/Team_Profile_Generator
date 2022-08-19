const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('Properties', () => {
        it('has a GitHub username', () => {
            const engineer = new Engineer('Engineer', 120, 'Engineer@company.com', 'userName');
            expect(engineer.github).toBe('userName');
        });
    });

    describe('getGithub method', () => {
        it('returns the GitHub URL', () => {
            const engineer = new Engineer('Engineer', 120, 'Engineer@company.com', 'userName');
            expect(engineer.getGithub()).toBe('https://github.com/userName')
        });
    });

    describe('getRole method', () => {
        it('returns Engineer', () => {
            const engineer = new Engineer('Engineer', 120, 'Engineer@company.com', 'userName');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});