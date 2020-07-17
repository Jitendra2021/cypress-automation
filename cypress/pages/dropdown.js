class DropdownPage {

    getDropdown() {
        return cy.get('.form-control[id=select-demo]');
    }

    getSelectedDay() {
        return cy.get('.selected-value');
    }
}

export default new DropdownPage();