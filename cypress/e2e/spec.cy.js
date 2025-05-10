/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('jorge')
    cy.get('input[name="email"]').type('jorge@teste.com')
    cy.get('input[name="password"]').type('Test22@')
    cy.get('input[name="confirm_password"]').type('Test22@')
    cy.contains('button', 'Cadastrar').click();
  })
})