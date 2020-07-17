/// <reference types="Cypress" />

import DropdownPage from '../../pages/dropdown';

describe('test dropdown - pom', () => {

    beforeEach('Navigate to the site', () => {
        cy.visit('/test/basic-select-dropdown-demo.html')
    })


    it('TC001: Select a value from the drop down', ()=>{
        DropdownPage.getDropdown().select('Tuesday')
        DropdownPage.getSelectedDay().should('contain.text','Tuesday')
        })


    it('TC002: Loop throught the dropdown using fixtures', () => {
        // cy.get('#select-demo')
        // data from the fixture file cannot be used outside this test case
        cy.fixture('example.json').then((days) => {
            for (const day in days) {
                DropdownPage.getDropdown().select(days[day])
                DropdownPage.getSelectedDay().should('contain.text', days[day])
            }
        })
    });



})

