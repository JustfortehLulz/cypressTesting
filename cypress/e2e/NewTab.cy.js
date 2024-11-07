beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/new-tab/')
  });

describe('Clicking on the New Tab button', () => {
    
    it('Click on New Tab button', () => {
        cy.get('[id=open]').invoke('removeAttr','target').click()
        cy.get('[id=wrapper]').contains('Welcome to the new page!').should('exist')
    }) 
    
})