beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/multi-level-dropdown/')
});

describe('Navigate to Settings Dropdown', () => {

    it('Assert Settings Dropdown exists', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').should('exist')
    })

    it('Assert Animals Dropdown exists', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').should('exist')
    })
})

describe('Check all of the dropdown of Settings', () => {

    it('Back button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').click()
        cy.get('a[href*=main]').contains('My Tutorial').should('exist')
    })

    it('HTML button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').click()
        cy.get('a[href*=HTML]').contains('HTML').should('exist')
    })

    it('CSS button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').click()
        cy.get('a[href*=CSS]').contains('CSS').should('exist')
    })

    it('JavaScript button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').click()
        cy.get('a[href*=JavaScript]').contains('JavaScript').should('exist')
    })

    it('Awesome! button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').click()
        cy.get('a[href*=Awesome]').contains('Awesome!').should('exist')
    })

})

describe('Check all of the dropdown of Animals',() => {

    it('Back button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').click()
        cy.get('a[href*=main]').contains('Animals').should('exist')
    })

    it('Kangaroo button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').click()
        cy.get('a[href*=Kangaroo]').contains('Kangaroo').should('exist')
    })

    it('Frog button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').click()
        cy.get('a[href*=Frog]').contains('Frog').should('exist')
    })

    it('Horse button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').click()
        cy.get('a[href*=Horse]').contains('Horse').should('exist')
    })

    it('Hedgehog button is present', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=animals]').click()
        cy.get('a[href*=Hedgehog]').contains('Hedgehog').should('exist')
    })
})