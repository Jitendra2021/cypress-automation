class TableFilter {

    getAllButton() {
        return cy.get('[data-target=all]');
    }

    getRedButton() {
        return cy.get('[data-target=cancelado]');
    }

    getOrangeButton() {
        return cy.get('[data-target=pendiente]');
    }

    getGreenButton() {
        return cy.get('[data-target=pagado]');
    }
}

export default new TableFilter()