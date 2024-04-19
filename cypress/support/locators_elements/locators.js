const locators = {
    LOGIN: {
        USER: '.input-group [data-test=email]',
        PASSWORD: '.form-group [data-test=passwd]',
        ENTRAR_BTN: '.btn'


    },
    MESSAGE_LOGIN: '.toast-message',
    MENU: {
        HOME:"[data-test='menu-home']",
        ENGRENAGEM: '[data-test=menu-settings]',
        OPCAO_CONTAS:"[href='/contas']",
        MOVIMENTACAO:'[data-test=menu-movimentacao]',
        EXTRATO: '[data-test="menu-extrato"]'
       
    },
    CONTAS:{
        NAME_CONTA_FIELD:'[data-test="nome"]',
        TABELA_CONTAS: '.table tbody tr',
        DELETE_CONTAS:  (nomeconta) =>{return `.table tbody :contains("${nomeconta}")tr td .fa-trash-alt` },
        BTN_SAVE_CONTA: '.btn'
    },
    MESSAGE_CONTA:'.toast-success > .toast-message',
    MESSAGE_DELETE:'.toast-success',
    MOVIMENTACAO:{
        DESCRICAO:'#descricao',
        VALOR_FIELD: '.container [placeholder*="Valor"]',
        INTERESSADO_FIELD:'.container [placeholder*="Interessado..."]',
        BTN_SALVAR:".container [alt*='Salvar']",
        COMBO_CONTA:'[data-test="conta"]',
        STATUS_MOVIMENTACAO:'[data-test="status"]',
        TOAST_SUCESSO: '.toast-success'

    },
    HOME:{
        TABELA_SALDO:(nomeConta) =>{return `.table-bordered tbody :contains('${nomeConta}')` }

    },
    EXTRATO:{
        TABLE_EXTRATO:(nomeMovimentacao) =>{return `.list-group li:contains('${nomeMovimentacao}')` },
        REMOVER_MOVIMENTACAO:(nomeMovimentacao)=>{return `.list-group li :contains('${nomeMovimentacao}') .fa-trash-alt`}
    },
}


export default locators;
