/// <reference types="cypress" />

describe('Realizar teste funcional do cadastro de movimentações', () => {

    beforeEach(() => {
    
        cy.realizarLogin('kline16@gmail.com', 'cwi@22022021', 'Bem vindo, Jonathan cavalcanti!')
    })
    it('Validar inserir movimentação com sucesso', () => {

        
        cy.clicarMenuContas()
        cy.retornarContaEdeletar('Conta goianinho 1','Conta excluída com sucesso!')
        cy.preencherNomeConta('Conta goianinho 1')
        cy.salvarConta()
        cy.validarCriacaoConta('Conta inserida com sucesso!')
        cy.clicarMenuMovimentacao();
        cy.preencherDescricao('Aluguel goianinho');
        cy.preencherValor('200.00');
        cy.preencherInteressado('Orientta Imoveis');
        cy.selecionarConta('Conta goianinho 1')
        cy.setarStatusMovimentacao();
        cy.clicarBtnSalvar();
        cy.validarMessageSucesso('Movimentação inserida com sucesso!')

    })

    it('Validar o saldo de uma determinada conta' , () => {
        cy.clicarMenuHome();
        cy.verificarSaldoConta('Conta para saldo');

    })
})