class ContasPageElements{
    acessarMenu = () =>{return "[data-test=menu-settings]"}
    opcaoMenuContas =() =>{return "[href='/contas']"}
    nameContaField = () =>{return '[data-test="nome"]' }
    btnSaveConta = () =>{return '.btn'}
    toastMessageConta = () =>{return '.toast-success > .toast-message'}
    editarContas = (nomeconta) =>{return `.table tbody :contains("${nomeconta}")tr td .fa-edit` }
    deletarContas = (nomeconta) =>{return `.table tbody :contains("${nomeconta}")tr td .fa-trash-alt` }

}
export default ContasPageElements;