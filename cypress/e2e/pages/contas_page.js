/// <reference types="cypress"/>

import ContasPageElements from "../../support/elements_page/contas-page_elements";

const contasPageElements = new ContasPageElements

class ContasPage {
    clicarMenu() {
        cy.get(contasPageElements.acessarMenu()).click()
    }
    clicarMenuContas() {
        cy.get(contasPageElements.opcaoMenuContas())
            .invoke('show').click()
    }
    digitarNomeConta(name) {
        cy.get(contasPageElements.nameContaField()).clear().type(name)
    }
    clicarSaveContaButton() {
        cy.get(contasPageElements.btnSaveConta()).click()
    }
    validarMessageConta(message) {
        cy.get(contasPageElements.toastMessageConta()).should('contain.text', message)
    }
    buscareEditarContas(nomeconta) {
        cy.get(contasPageElements.editarContas(nomeconta)).click()
    }
    buscareDeletarContas(nomeconta){
        cy.get(contasPageElements.deletarContas(nomeconta)).click()
    }




    }
 export default ContasPage;
