/// <reference types="cypress" />
const url = Cypress.env('URL_API')

describe('Testes de api da funcionalidade LOGIN', () => {
    let token;

    beforeEach(() => {

        cy.getToken().then(tkn => {
            token = tkn;
        });
        //cy.resetContas()
    });

    it('Validar login com sucesso', () => {

        cy.api({
            method: 'POST',
            url: `${url}/contas`,
            headers: { Authorization: `JWT ${token}` },
            body: { nome: "Conta goianinho 556" }
        }).as('response');


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201);
            expect(res.body).to.have.property('id');
        });
    });

    it.only('Validar alteração de contas', () => {
        cy.api({
            method: 'GET',
            url: `${url}/contas`,
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: 'Conta para alterar'
            }

        }).then(res => console.log(res))
            
            
        
    });
    
});








