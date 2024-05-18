const url = Cypress.env('URL_API')

Cypress.Commands.add('getToken', () => {

    cy.api({
        method: 'POST',
        url: `${url}/signin`,
        body: { email: Cypress.env('USERNAME'), senha: Cypress.env('PASSWORD'), redirecionar: false }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token


        })
})

Cypress.Commands.add('resetContas', () => {
    cy.getToken().then(token => {
        cy.api({
            method: 'GET',
            url: `${url}/reset`,
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200)
    })
})