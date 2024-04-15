

import locators from "./locators_elements/locators"

Cypress.Commands.add('clicarMenuHome', ()=>{
    cy.get(locators.MENU.HOME).click()
})
Cypress.Commands.add('verificarSaldoConta', (nome_conta)=>{
    cy.get(locators.HOME.TABELA_SALDO(nome_conta)).should('contain', "534,00")
})