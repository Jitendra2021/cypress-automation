class LoginPage {
    getUsername () {
        return cy.get('#txtUsername')
    }

    getPassword () {
        return cy.get('#txtPassword')
    }

    getLoginButton () {
        return cy.get('#btnLogin')
    }

    getErrorMessage () {
        return cy.get('#spanMessage')
    }
}

export default new LoginPage()