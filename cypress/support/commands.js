
Cypress.Commands.add("Navigate", () => {
    cy.visit('/test/basic-select-dropdown-demo.html')
    cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
})