/// <reference types="Cypress" />
describe('My First Test Suite', () => {
    it('Does not do much!', () => {
        
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const iterateArray = $el.find('h4.product-name').text()
        if (iterateArray.includes('Cashews')) {
            cy.wrap($el).find('button').click()
        }
      })
      cy.get('.brand').then(showText => {
        cy.log(showText.text())
      })

      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
    })
  })