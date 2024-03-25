/// <reference types="cypress"/>

import LoginPageElements from "../../support/elements_page/login-page_elements";

const loginPageElements = new LoginPageElements

class LoginPage{
    digitarEmail(email) {
        cy.get(loginPageElements.emailField()).type(email)
    }
    digitarSenha(senha){
        cy.get(loginPageElements.passwordField()).type(senha)
    }
    clicarBtnEntrar(){
        cy.get(loginPageElements.entrarBtn()).click()
    }
    validarMessageBemVindo(message){
        cy.get(loginPageElements.bemVindoMessage(), {timeout:10000})
        .should('contain', message)
    }
}

export default LoginPage;
