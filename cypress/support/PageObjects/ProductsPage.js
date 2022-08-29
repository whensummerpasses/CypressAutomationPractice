class ProductsPage {
    goToCheckout() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getCheckoutButton() {
        return cy.get('button.btn.btn-success')
    }

    getCountry() {
        return cy.get('#country')
    }

    getSuggestion() {
        return cy.get('.suggestions > ul > li > a')
    }

    checkBox() {
        return cy.get('.checkbox > label')
    }

}

export default ProductsPage