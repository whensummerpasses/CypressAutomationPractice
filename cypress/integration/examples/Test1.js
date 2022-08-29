/// <reference types="Cypress" />
describe('My First Test Suite', () => {
    it('Does not do much!', () => {
        
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.products').as('productLicense')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length' , 4)
      cy.get('@productLicense').find('.product').should('have.length',4)
      cy.get('@productLicense').find('.product').eq(2).contains('ADD TO CART').click()

      cy.get('@productLicense').find('.product').each(($el, index, $list) => {
        const iterateArray = $el.find('h4.product-name').text()
        if (iterateArray.includes('Cashews')) {
            cy.wrap($el).find('button').click()
        }
      })
      cy.get('.brand').then(showText => {
        cy.log(showText.text())
      })
    })
  })