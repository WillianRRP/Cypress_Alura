/// <reference types="cypress" />

describe('exercicio 1', () => {
    
  it('deve carregar a página corretamente e clicar no botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click()
  })
  it('Visita a página de principal do AdoPet e testa os botão de home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click()
  })
  it('Visita a página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })
    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
    it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
})

describe('exercicio 2', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
 
    })
        it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
          cy.get('[data-test="input-loginEmail"]').type('marco22@');
          cy.get('[data-test="input-loginPassword"]').type('123');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Por favor, verifique o email digitado').should('be.visible')
          cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
         
        })
  })

  describe('exercicio 3', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()     
       
    });

    it("deve testar os botão de home", ()=>{
       cy.get('.header__home').click()  

    })

    it("Deve testar os botão de mensagens", ()=>{
        cy.get('.header__message').click()  
    })

    it("Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

    it("Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
    
});
