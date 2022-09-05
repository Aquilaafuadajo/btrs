describe('chat functionality', () => {
  it('user can login', () => {
    cy.visit('localhost:3001/');
    // login
    cy.findByRole('textbox', { name: /username/i }).type('Emmanuel');
    cy.findByRole('button', { name: /enter room 🚀/i }).click();

    // chat
    cy.findByRole('textbox', { name: /enter message\.\.\./i }).type(
      'hello world',
    );
    cy.get('[data-testid="send"]').click();
    cy.findByText('hello world').should('have.text', 'hello world');

    // logout
    cy.findByRole('button', { name: /exit 👋/i }).click();
  });
});
