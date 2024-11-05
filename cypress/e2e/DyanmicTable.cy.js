
beforeEach(function(){
  cy.visit('https://qaplayground.dev/apps/dynamic-table/')
});


describe('Find Spiderman', () => {
  
  Cypress._.times(5, () => {
    it('Get Him', () => {
      // first finds Spider-Man then goes up to the row
      cy.contains('Spider-Man').parents('tr')
      .then(row => {
        const tableRow = row; 
        cy.wrap(tableRow).as('tableRow');
      })
      // find his real name
      cy.get('@tableRow').contains('Peter Parker').should('exist')
    });

  });
})

afterEach(function() {
  cy.reload()
})