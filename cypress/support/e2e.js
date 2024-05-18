// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@bahmutov/cy-api'
import './commands'
import './commands_api'
import './commands_contas'
import './commands_movimentacao'
import './commands_home'
import './commands_extrato'

// Alternatively you can use CommonJS syntax:
// require('./commands')