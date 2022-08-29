class HomePage {
getNameField() {
    return cy.get('input[name="name"]:nth-child(2)')
}

getGender() {
    return cy.get('select')
}

getReflectedWithNameField() {
    return cy.get(':nth-child(4) > .ng-untouched')
}

getDisabledButton() {
    return cy.get('#inlineRadio3')
}
getNavigatedToShop() {
    return cy.get(':nth-child(2) > .nav-link')
}


}
export default HomePage