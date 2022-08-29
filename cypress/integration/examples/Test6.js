/// <reference types ="Cypress" />


import HomePage from '../../support/PageObjects/HomePage'
import ProductsPage from '../../support/PageObjects/ProductsPage'
describe('Framework set-up', () => {

before(function()  {
    cy.fixture('example').then(function(data) {
        this.data = data
    })
})
   
    it('First TC', function() {
        cy.visit(Cypress.env('url')+'/angularpractice/')
        const homePage = new HomePage
        homePage.getNameField().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getReflectedWithNameField().should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        homePage.getDisabledButton().should('be.disabled')
        
        homePage.getNavigatedToShop().click()
        cy.get('h4.card-title').each((el, index, $list) => {
            if(el.text().includes('Blackberry')) {
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })
        const productsPage = new ProductsPage
        productsPage.goToCheckout().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each((el, index, $list) => {
            const amount = el.text()
            
            var res = amount.split(' ')
            res = res[1].trim()
            
            sum = Number(sum) + Number(res)

        
        }).then(function() {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element) {
            const amount = element.text()
            
            var total = amount.split(' ')
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        
        productsPage.getCheckoutButton().click()
        productsPage.getCountry().type('India')
        productsPage.getSuggestion().click()
        productsPage.checkBox().click({force: true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(element => {
            const textElement = element.text()
            expect(textElement.includes('Success'))
        })

        
       




    })





})