
import locators from "./locators_elements/locators"

Cypress.Commands.add('clicarMenuContas', () => {

    cy.get(locators.MENU.ENGRENAGEM).click()
    cy.get(locators.MENU.OPCAO_CONTAS).click()

})

Cypress.Commands.add('preencherNomeConta', (nomeConta) => {
    cy.get(locators.CONTAS.NAME_CONTA_FIELD).type(nomeConta, { delay: 0 })
})

Cypress.Commands.add('salvarConta', () => {
    cy.get(locators.CONTAS.BTN_SAVE_CONTA).click({ timeout: 30000 })
})

Cypress.Commands.add('validarCriacaoConta', (mensagem) => {
    cy.get(locators.MESSAGE_CONTA).should('contain.text', mensagem)
})


Cypress.Commands.add('retornarContaEdeletar', (nome_conta,mensagem_confirmacao) => {


    cy.get(locators.CONTAS.TABELA_CONTAS).then($retorno=> {

        var textoElementsTable = $retorno.text();
        cy.wrap(textoElementsTable)
            .should('exist', nome_conta);

        if ((textoElementsTable.includes(nome_conta))) {
            cy.get(locators.CONTAS.DELETE_CONTAS(nome_conta)).click()
            cy.get(locators.MESSAGE_CONTA).should('contain', mensagem_confirmacao)


        } else {
            
            cy.log('=====CONTA NÃO EXISTENTE! REALIZE CADASTRO DE UMA NOVA CONTA SE DESEJAR!=====')

        }
    })


})