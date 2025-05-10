/// <reference types="cypress" />

describe('Pagina de usuário', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar o usuário ', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.cadastrar('jorge', 'jorge3@teste.com', 'Test22@')
  })
})