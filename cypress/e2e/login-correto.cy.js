/// <reference types="cypress" />
describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click()
    })
   
    it('Deve preencher os campos de login corretamente e autentificar o usuário na página', () =>{
      cy.login('jorge@teste.com', 'Test22@')

    })
       
 });