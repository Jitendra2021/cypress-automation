class HomePage {

    getTableDropdown() {
        return cy.get('a[data-toggle="dropdown"]').contains('Table')
    }
    getTableFilterDropdownValue(){
        return cy.get('a[href="./table-records-filter-demo.html"]').contains('Table Filter')
    }
}