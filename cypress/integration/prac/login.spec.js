/// <reference types="Cypress" />

import Login from '../../pages/login.js'

describe('Login - orange hrm', () => {
    it('TC001 Login - positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        Login.getUsername().type('Admin')
        Login.getPassword().type('admin123')
        Login.getLoginButton().click()
        cy.title().should('eq','OrangeHRM')
    })


    it('TC002 Login - positive', () => {
        cy.fixture('creds.json').then((creds) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
//             cy.log(creds)
//             cy.log(creds.user1.username + ' ' + creds.user1.password)
            Login.getUsername().type(creds.user1.username)
            Login.getPassword().type(creds.user1.password)
            Login.getLoginButton().click()
            Login.getErrorMessage().should('be.visible')
        })
    })
})