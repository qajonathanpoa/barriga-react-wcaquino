/// <reference types="cypress"/>

import ContasPageElements from "../../support/elements_page/contas-page_elements";

const contasPageElements = new ContasPageElements()

class ContasPage {
    clicarMenu() {
        cy.get(contasPageElements.acessarMenu()).click()
    }
    clicarMenuContas() {
        cy.get(contasPageElements.opcaoMenuContas({timeout:30000}))
            .invoke('show').click()
    }
    digitarNomeConta(name) {
        cy.get(contasPageElements.nameContaField({timeout:40000})).clear().type(name)
    }
    clicarSaveContaButton() {
        cy.get(contasPageElements.btnSaveConta({timeout:30000})).click()
    }
    validarMessageConta(message) {
        cy.get(contasPageElements.toastMessageConta()).should('contain.text', message)
    }
    validarMessageContaDuplicada(message) {
        cy.get(contasPageElements.toastContaError()).should('contain.text', message)
    }
    buscareEditarContas(nomeconta) {
        cy.get(contasPageElements.editarContas(nomeconta)).click()
    }
    buscareDeletarContas(nome_conta, mensagem_confirmacao) {
        cy.get(contasPageElements.tabelaContas()).then($retorno=> {

            var textoElementsTable = $retorno.text();
            cy.wrap(textoElementsTable)
                .should('exist', nome_conta);
    
            if ((textoElementsTable.includes(nome_conta))) {
                cy.get(contasPageElements.deletarContas(nome_conta)).click()
                cy.get(contasPageElements.toastMessageConta()).should('contain', mensagem_confirmacao)
    
    
            } else {
                
                cy.log('=====CONTA NÃO EXISTENTE! REALIZE CADASTRO DE UMA NOVA CONTA SE DESEJAR!=====')
    
            }
        })
    }
    
     
    
}

  

 export default ContasPage;
