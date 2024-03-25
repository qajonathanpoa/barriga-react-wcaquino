const locators = {
    LOGIN: {
        USER: '.input-group [data-test=email]',
        PASSWORD: '.form-group [data-test=passwd]',
        ENTRAR_BTN: '.btn'


    },
    MESSAGE_LOGIN: '.toast-message',
    MENU: {
        ENGRENAGEM: '[data-test=menu-settings]',
        OPCAO_CONTAS:"[href='/contas']",
       
    },
    CONTAS:{
        NAME_CONTA_FIELD:'[data-test="nome"]',
        TABELA_CONTAS: '.table tbody tr',
        DELETE_CONTAS:  '.table tbody :contains("Conta goianinho 1")tr td .fa-trash-alt',
        BTN_SAVE_CONTA: '.btn'
    },
    MESSAGE_CONTA:'.toast-success > .toast-message'
}


export default locators;