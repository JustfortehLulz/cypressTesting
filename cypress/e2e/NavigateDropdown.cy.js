beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/multi-level-dropdown/')
});

describe('Navigate to Settings Dropdown', () => {

    it('Assert Settings Dropdown exists', () => {
        cy.get('a[href*=home]').eq(3).click()
        cy.get('a[href*=settings]').should('exist')
    })
})