import locators from "./locators_elements/locators"

Cypress.Commands.add('clicarMenuExtrato', ()=>{
    cy.get(locators.MENU.EXTRATO).click()
})
Cypress.Commands.add('buscarMovimentacaoTabelaExtrato', (movimentacaoInserida,valor)=>{
    cy.get(locators.EXTRATO.TABLE_EXTRATO(movimentacaoInserida)).then($retorno=> {

        var textoElementsTable = $retorno.text();
        cy.wrap(textoElementsTable)
            .should('contain',movimentacaoInserida)
            expect(textoElementsTable).contains(valor)
            
})
})
Cypress.Commands.add('removerMovimentacao', (movimentacaoInserida,mensagem_confirmacao)=>{

    cy.get(locators.EXTRATO.TABLE_EXTRATO(movimentacaoInserida)).then($retorno=> {
        var textoElementsTable = $retorno.text();
        
    if ((textoElementsTable.includes(movimentacaoInserida))) {
        cy.get(locators.EXTRATO.REMOVER_MOVIMENTACAO(movimentacaoInserida)).click({multiple: true})
        cy.get(locators.MESSAGE_CONTA).should('contain', mensagem_confirmacao)


    } else {
        cy.log('=====MOVIMENTAÇÃO NÃO EXISTENTE! REALIZE CADASTRO DE UMA NOVA MOVIMENTAÇÃO SE DESEJAR!=====')
    
    }
})

})


