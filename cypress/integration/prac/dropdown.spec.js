/// <reference types="Cypress" />

let days;

describe('test dropdown', () => {

    before('load data', () => {
    cy.fixture('example.json').then((data)=>{
        days = data;
        })
    })

    beforeEach('Navigate to the site', () => {
        cy.visit('/test/basic-select-dropdown-demo.html')
    })


    it('TC001: Select a value from the drop down', ()=>{
        cy.get('.form-control[id=select-demo]').select('Tuesday')
        cy.get('.selected-value').should('contain.text','Tuesday')
        })


    it('TC002: Loop throught the dropdown using fixtures', () => {
        // cy.get('#select-demo')
        for (const day in days) {
            cy.get('.form-control[id=select-demo]').select(days[day])
            cy.get('.selected-value').should('contain.text',days[day])
        }
    });



})

