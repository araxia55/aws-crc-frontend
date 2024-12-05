it('titles are correct', () => {
    const page = cy.visit('http://localhost:4321', {retry: 3});
  
    page.get('title').should('have.text', 'Ray')
    page.get('h1').should('have.text', "\nHello, I'm Ray.\n");
  });