it('titles are correct', () => {
    const page = cy.visit('http://localhost:4321', {timeout: 10000 });
  
    page.get('title').should('have.text', 'Ray')
    page.get('h1').should('have.text', "\nHello, I'm Ray.\n");
  });