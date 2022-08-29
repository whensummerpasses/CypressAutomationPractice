/// <reference types="Cypress" />





describe('Alerts handling', () => {


    it('Alert&Confirm buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert', str => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', str => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const textValue= $el.text()
            if(textValue.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(price =>{
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        })






    })





})