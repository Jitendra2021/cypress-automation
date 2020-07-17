/// <reference types="Cypress" />

import TableFilter from '../../pages/table-filter';
import Homepage from '../../pages/homepage'

describe('test table filter - pom', () => {

    beforeEach('Navigate to the site', () => {
        cy.Navigate()
    });


    it('TC001: Select a value from the drop down', ()=>{

        Homepage.getTableDropdown().click()
        Homepage.getTableFilterDropdownValue().click()
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        TableFilter.getRedButton().click()
        cy.get()

    })



    it('TC002: Loop throught the dropdown using fixtures', () => {

    });



})
