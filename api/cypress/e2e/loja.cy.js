describe('Teste E2E da Lojinha', () => {
  it('deve carregar os três produtos corretamente', () => {
    cy.visit('/');

    cy.get('#products-list', { timeout: 10000 }).should('be.visible');
    cy.get('#products-list li').should('have.length', 3);
    // Valida se os dados estão dentro da lista
    // Usar 'within' garante que estamos procurando apenas dentro da lista
    cy.get('#products-list').within(() => {
      cy.contains('Caderno').should('be.visible');
      cy.contains('R$ 19,90').should('be.visible');

      cy.contains('Caneta').should('be.visible');
      cy.contains('R$ 4,50').should('be.visible');

      cy.contains('Mochila').should('be.visible');
      cy.contains('R$ 89,90').should('be.visible');
    });
  });

  it('deve exibir mensagem de erro caso a API falhe', () => {
    // Exemplo de teste de falha
    cy.intercept('GET', '**/produtos', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('getProdutos');

    cy.visit('/');
    cy.wait('@getProdutos');

    // Verifica se a mensagem de erro aparece
    cy.get('#error-message').should('be.visible').and('not.be.hidden');
  });
});
