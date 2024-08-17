describe('Todo List', () => {
    beforeEach(() => {
        cy.visit('src/index.html');
    });

    it('Should add a new task', () => {
        const task = 'Study Cypress';
        cy.get('#new-task').type(task);
        cy.get('#add-task-btn').click();
        cy.get('#task-list li').should('have.length', 1).and('contain', task);
    });

    it('Should mark a task as completed', () => {
        const task = 'Complete the project';
        cy.get('#new-task').type(task);
        cy.get('#add-task-btn').click();
        cy.get('#task-list li').click();
        cy.get('#task-list li').should('have.class', 'completed');
    });

    it('Should remove a task', () => {
        const task = 'Clean the house';
        cy.get('#new-task').type(task);
        cy.get('#add-task-btn').click();
        cy.get('.delete-btn').click();
        cy.get('#task-list li').should('not.exist');
    });
});
