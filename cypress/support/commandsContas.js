
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
Cypress.Commands.add('clicarMenuMovimentacao',()=>{
    cy.get(locators.MENU.MOVIMENTACAO).click()
})


Cypress.Commands.add('retornarContaEdeletar', (nomeConta,mensagemConfirmacao) => {


    cy.get(locators.CONTAS.TABELA_CONTAS).then($retorno => {

        const textoElementsTable = $retorno.text();
        cy.wrap(textoElementsTable)
            .should('exist', nomeConta);

        if ((textoElementsTable.includes(nomeConta))) {
            cy.get(locators.CONTAS.DELETE_CONTAS(nomeConta)).click()
            cy.get(locators.MESSSAGE_DELETE).should('contain', mensagemConfirmacao)


        } else {
            
            cy.log('=====CONTA NÃO EXISTENTE! REALIZE CADASTRO DE UMA NOVA CONTA SE DESEJAR!=====')

        }
    })


})