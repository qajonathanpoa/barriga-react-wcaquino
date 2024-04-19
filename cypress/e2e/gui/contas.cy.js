/// <reference types="cypress" />

import ContasPage from "../pages/contas_page"
import LoginPage from "../pages/login_page"
import locators from "../../support/locators_elements/locators"


const contasPage = new ContasPage()


describe('Realizar teste funcional do cadastro e manipulação de contas', () => {

  beforeEach(() => {
    cy.realizarLogin('Bem vindo, Jonathan cavalcanti!')

  })


  it.only('Validar inserir conta com sucesso', () => {

    cy.clicarMenuContas()
    cy.retornarContaEdeletar('Conta goianinho movimentação','Conta excluída com sucesso!')
    cy.clicarMenuContas()  
    cy.preencherNomeConta('Conta goianinho movimentação') 
    cy.salvarConta()
    cy.validarCriacaoConta('Conta inserida com sucesso!')

    })

    it('Validar exclusão de conta', ()=>{
  
      cy.clicarMenuContas()
      cy.retornarContaEdeletar('Conta goiano 2', 'Conta excluída com sucesso!')
      cy.preencherNomeConta('Conta goiano 2') 
      cy.salvarConta()
      cy.validarCriacaoConta('Conta inserida com sucesso!')
      cy.clicarMenuContas()
      cy.retornarContaEdeletar('Conta goiano 2', 'Conta excluída com sucesso!')
      
   
   
  })

  it('Validar editar conta com sucesso', () => {

    contasPage.clicarMenu()
    contasPage.clicarMenuContas()
    contasPage.buscareDeletarContas('Conta goianinho 12','Conta excluída com sucesso!')
    contasPage.digitarNomeConta('Conta goianinho 12')
    contasPage.clicarSaveContaButton()
    contasPage.validarMessageConta('Conta inserida com sucesso!')
    contasPage.buscareEditarContas('Conta goianinho 12')
    contasPage.digitarNomeConta('Conta goianinho 12')
    contasPage.clicarSaveContaButton()
    contasPage.validarMessageConta('Conta atualizada com sucesso!')
    contasPage.buscareDeletarContas('Conta goianinho 12','Conta excluída com sucesso!')
    contasPage.validarMessageConta('Conta excluída com sucesso!')
  })
  it('Não deve criar conta com mesmo nome', () => {
    contasPage.clicarMenu()
    contasPage.clicarMenuContas()
    contasPage.digitarNomeConta('Conta para alterar')
    contasPage.clicarSaveContaButton()
    contasPage.validarMessageContaDuplicada('code 400')
    

  })

  })


