/// <reference types="Cypress" />
describe('My First Test Suite', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
  })