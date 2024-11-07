beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/iframe/')
  });

// finds the first layer of iframe
const getIframeDocument = () => {
    return cy
    .get('iframe[name=frame1]')
    .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
}

//finds the second layer of iframe
const getIframeDocument2 = () => {
    return cy
    .get('iframe[name=frame2]')
    .its('0.contentDocument').should('exist')
}

const getIframeBody2nd = () => {
    return getIframeDocument2()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
}

describe('Click in nested iframe', () => {
    it('Click on the nested button', () => { 
        cy.enter('#iframe1').then(getBody => {
            getBody().find('#iframe2')
              .its('0.contentDocument')
              .its('body').within(() => {
                // working inside nested iframe
                cy.get('.btn.btn-green-outline').click()
              })
          })
        //getIframeBody().getIframeBody2nd().find('.btn.btn-green-outline').click()
        //cy.get('.btn.btn-green-outline').click()
        //cy.get('[id=msg]').contains('Button Clicked').should('exist')
    })
})