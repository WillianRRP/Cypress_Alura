/// <reference types="cypress" />

describe("Api Adopet", () => {
  it("Mensagens de api", () => {
    cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/mensagem/d070ee25-685c-4a4c-b7ef-504a5ad0cc32',
        headers: Cypress.env()
    }).then((res) =>{
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
      })
  });
});
