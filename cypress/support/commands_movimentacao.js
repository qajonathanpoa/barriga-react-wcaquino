import locators from "./locators_elements/locators"

Cypress.Commands.add('clicarMenuMovimentacao',()=>{
    cy.get(locators.MENU.MOVIMENTACAO).click()
})

Cypress.Commands.add('preencherDescricao', (descricao) => {
    cy.get(locators.MOVIMENTACAO.DESCRICAO).type(descricao, {delay:0})
})

Cypress.Commands.add('preencherValor',(valor)=>{
    cy.get(locators.MOVIMENTACAO.VALOR_FIELD).type(valor,{delay:0})
})

Cypress.Commands.add('preencherInteressado', (interessado)=>{
    cy.get(locators.MOVIMENTACAO.INTERESSADO_FIELD).type(interessado,{delay:0})
})

Cypress.Commands.add('selecionarConta', (conta)=>{
    cy.get(locators.MOVIMENTACAO.COMBO_CONTA).select(conta)

})
Cypress.Commands.add('setarStatusMovimentacao',()=>{
    cy.get(locators.MOVIMENTACAO.STATUS_MOVIMENTACAO).click()
})

Cypress.Commands.add('clicarBtnSalvar', ()=>{
    cy.get(locators.MOVIMENTACAO.BTN_SALVAR).click()
})
Cypress.Commands.add('validarMessageSucesso', (message)=>{
    cy.get(locators.MOVIMENTACAO.TOAST_SUCESSO).should('contain', message)
})