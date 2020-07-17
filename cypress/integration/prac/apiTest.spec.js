describe('API test  get, post, put, delete', () => {

    // set base url specific to this file only
    Cypress.config('baseUrl','http://dummy.restapiexample.com')

    let id;
    it('Test GET API', () => {
        cy.request('/api/v1/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('Test POST API ', () => {
        const item = {"name":"test jit","salary":"12300","age":"23"}
        cy.request('POST', '/api/v1/create', item).then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body.data).to.have.property('name','test jit')
            id = response.body.data.id
            cy.log(id)
        })
    })

    it('Test PUT API - update record created previously', () => {
        const item = {"name":"test1"}
        // cy.log(id)
        cy.request({method:'PUT', url:'api/v1/update/' + id, body:item})
            .then((response)=>{
                expect(response).to.have.property('status',200)
                expect(response.body.data).to.have.property('employee_name','test1')
        })
    })

    it('Test DELETE API', () =>{
    cy.request({method:'DELETE', url:'api/v1/delete/' + id})
        .then((response)=>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.have.property('message','successfully! deleted Records')
        })
        })

})