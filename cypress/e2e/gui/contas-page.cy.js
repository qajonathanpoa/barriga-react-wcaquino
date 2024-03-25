/// <reference types="cypress" />

import ContasPage from "../pages/contas_page"
import LoginPage from "../pages/login_page"
import locators from "../../support/locators_elements/locators"

const url = Cypress.config("baseUrl")
const email = Cypress.env('USERNAME')
const senha = Cypress.env('PASSWORD')

const loginPage = new LoginPage()
const contasPage = new ContasPage()


describe('Realizar teste funcional do cadastro e manipulação de contas', () => {

  beforeEach(() => {
      cy.visit({
      url: url,
      method: 'GET',
      failOnStatusCode: false
    })
    cy.get(locators.LOGIN.USER).type(email)
    cy.get(locators.LOGIN.PASSWORD).type(senha)
    cy.get(locators.LOGIN.ENTRAR_BTN).click()
    loginPage.validarMessageBemVindo('Bem vindo')

  })

  it.only('Validar inserir conta com sucesso', () => {

    
     cy.get(locators.MENU.ENGRENAGEM).invoke('show').click()
     cy.get(locators.MENU.OPCAO_CONTAS).click()
    
    cy.get(locators.CONTAS.TABELA_CONTAS).then($retorno => {
     
      const retorno_tabela = $retorno;
     cy.log(retorno_tabela)
      cy.wrap(retorno_tabela).should('contain', 'Conta goianinho 1')

      if (retorno_tabela != null) {
        cy.get(locators.CONTAS.DELETE_CONTAS).click()

      } else


        // cy.get(locators.MENU.ENGRENAGEM).click()
        // cy.get(locators.MENU.OPCAO_CONTAS).invoke('show').click()
      cy.get(locators.CONTAS.NAME_CONTA_FIELD).type('Conta goianinho 1')
      cy.get(locators.CONTAS.BTN_SAVE_CONTA).click()
      cy.get(locators.MESSAGE_CONTA).should('contain.text', 'Conta inserida com sucesso!')
    })

  })

  it('Validar editar conta com sucesso', () => {
    contasPage.clicarMenu()
    contasPage.clicarMenuContas()
    contasPage.digitarNomeConta('Conta goianinho 1')
    contasPage.clicarSaveContaButton()
    contasPage.validarMessageConta('Conta inserida com sucesso!')
    contasPage.buscareEditarContas('Conta goianinho 1')
    contasPage.digitarNomeConta('Conta goianinho 2')
    contasPage.clicarSaveContaButton()
    contasPage.validarMessageConta('Conta atualizada com sucesso!')
    contasPage.buscareDeletarContas('Conta goianinho 2')
    contasPage.validarMessageConta('Conta excluída com sucesso!')
  })

})
