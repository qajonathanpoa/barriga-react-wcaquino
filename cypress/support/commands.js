// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import locators from "./locators_elements/locators"
const url = Cypress.config('baseUrl')
const email = Cypress.env('USERNAME')
const senha = Cypress.env('PASSWORD')

Cypress.Commands.add('realizarLogin', (mensagem) =>{
    cy.visit({
        url: url,
        method: 'GET',
        failOnStatusCode: true
      })
  
    cy.get(locators.LOGIN.USER).type(email)
    cy.get(locators.LOGIN.PASSWORD).type(senha, { log: false })
    cy.get(locators.LOGIN.ENTRAR_BTN).click()
    cy.get(locators.MESSAGE_LOGIN).should('contain', mensagem)
})