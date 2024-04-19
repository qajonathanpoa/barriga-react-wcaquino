/// <reference types="cypress" />

const payload1 = {

    descrição:'Aluguel goianinho 16-04',
    valor:"200",
    interessado:'Orientta',
    conta:'Conta goianinho movimentação',
    validarMensagemSucessoMovimentacao:'Movimentação inserida com sucesso!',
    validarDescricaoMovimentacao:'Aluguel goianinho 16-04',   
    valorMovimentacao:'200', 
    messageExclusao:'Movimentação removida com sucesso!'         
}

describe('Realizar teste funcional do login', function() {

    beforeEach(() => {
        cy.realizarLogin('Bem vindo, Jonathan cavalcanti!')
    
      })

    it('Validar lançamento de movimentação no extrato da conta', ()=>{

        cy.clicarMenuMovimentacao();
        cy.preencherDescricao(payload1.descrição);
        cy.preencherValor(payload1.valor);
        cy.preencherInteressado(payload1.interessado);
        cy.selecionarConta(payload1.conta)
        cy.setarStatusMovimentacao();
        cy.clicarBtnSalvar();
        cy.validarMessageSucesso(payload1.validarMensagemSucessoMovimentacao)
        cy.clicarMenuExtrato()
        cy.buscarMovimentacaoTabelaExtrato(payload1.validarDescricaoMovimentacao,payload1.valorMovimentacao)
        cy.removerMovimentacao(payload1.descrição,payload1.messageExclusao)
    })    

})