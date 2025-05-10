/// <reference types="cypress" />

describe('Pagina de usuário', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar o usuário ', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('jorge')
    cy.get('[data-test="input-email"]').type('jorge@teste.com')
    cy.get('[data-test="input-password"]').type('Test22@')
    cy.get('[data-test="input-confirm-password"]').type('Test22@')
   cy.get('[data-test="submit-button"]').click();
  })
})