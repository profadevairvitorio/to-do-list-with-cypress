describe('Simple To-Do App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should add a new task', () => {
        cy.get('#new-task').type('New Task');
        cy.get('#add-task').click();

        cy.get('#task-list').should('contain', 'New Task');
    });

    it('should mark a task as completed', () => {
        cy.get('#new-task').type('Task to be completed');
        cy.get('#add-task').click();

        cy.get('#task-list li').first().click();

        cy.get('#task-list li').first().should('have.class', 'completed');
    });

    it('should clear the input field after adding a task', () => {
        cy.get('#new-task').type('Task with cleared input');
        cy.get('#add-task').click();

        cy.get('#new-task').should('have.value', '');
    });

    it('should allow adding a task by pressing Enter', () => {
        cy.get('#new-task').type('Task added with Enter{enter}');

        cy.get('#task-list').should('contain', 'Task added with Enter');
    });
});
