/// <reference types="cypress" />

import LoginPage from "../pages/login_page"
import loc from "../../support/locators_elements/locators"
const loginPage = new LoginPage()

describe('Realizar teste funcional do login', function() {

  // beforeEach(() => {
  //   cy.visit('https://barrigareact.wcaquino.me/')

  //   loginPage.digitarEmail('kline16@gmail.com')
  //   loginPage.digitarSenha('cwi@22022021', { log: false })
  //   loginPage.clicarBtnEntrar()
  //   loginPage.validarMessageBemVindo('Bem vindo')

  // })
//Before each utilizando locators mais amarrado ao app actions ao invés do page objects
  beforeEach(() => {
    
    cy.visit({
      url: '/login',
      method: 'GET',
      failOnStatusCode: true
    })

    
  })
  //Exemplo de testes usando o modelo de locators encapsulados atraves de variaveis
  it('Validar login com sucesso', function () {
   cy.get(loc.LOGIN.USER).type('kline16@gmail.com')
   cy.get(loc.LOGIN.PASSWORD).type('cwi@22022021', { log: false })
   cy.get(loc.LOGIN.ENTRAR_BTN).click()
   cy.get(loc.MESSAGE_LOGIN).should('contain', 'Bem vindo, Jonathan cavalcanti!')

  })

})
