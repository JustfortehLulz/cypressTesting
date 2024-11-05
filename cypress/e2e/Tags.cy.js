function formatString(text){
    return text.replace('kr', '').replace('\u00A0','').trim();
}


Cypress.Commands.add('typeAndCheck', (text,pos) => {
    var realText = text + '{enter}';

    var originalText = text.replace(/^\s+|\s+$/g, '');

    cy.get('[type=text]').type(realText);

    // have to change the eq value
    cy.get('li').eq(pos)
    //removes whitespace
    .invoke('text')
    .then(formatString)
    .should('eq',originalText);
})

Cypress.Commands.add('removeTagPosition',(pos) => {
    cy.get('.uit.uit-multiply').eq(pos).click();
    if(pos>0){
        cy.get('li').eq(pos).should('not.exist');
    }
    else{
        cy.get('li').should('not.exist');
    }
})


beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/tags-input-box/')

    cy.wrap(['bruh',
        'very coolXD',
        '87656789',
        '4*##($',
        'дд',
        'Δδ',
        '       ok',
        'ok         ',
        'EDTR5dcfvg',
        'ESWRDTFYT',
        'ok ok4f']).as('testValues');
});


// this character \ cannot be deleted

describe('Add Tag', () => {

    it('Add a single character as tag', () => {
        cy.typeAndCheck('a',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add using Enter', () => {
        cy.typeAndCheck('testingword',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add Tag that contains numbers', () => {
        cy.typeAndCheck('123456789',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add Tag that contains special characters', () => {
        cy.typeAndCheck('*&*$#&$*#&($@($(@&',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add French Characters', () => {
        cy.typeAndCheck('ÇÇ',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add Russian Characters', () => {
        cy.typeAndCheck('дд',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add Greek Characters', () => {
        cy.typeAndCheck('Δδ',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Attempt to Add Tag that is only space', () => {
        cy.get('[type=text]').type(' {enter}')

        cy.get('[class=details]').children('p').children('span').should('have.text', '8')
    })

    it('Tag Removes beginning whitespace', () => {
        cy.get('[type=text]').type('             OK{enter}')

        cy.get('li').eq(2)
        //removes whitespace
        .invoke('text')
        .then(formatString)
        .should('eq','OK')
        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Can not enter the same tag twice', () => {
        cy.typeAndCheck('nice',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')

        cy.typeAndCheck('nice',2)

        cy.get('[class=details]').children('p').children('span').should('have.text', '7')
    })

    it('Add 2 tags', function() {

        let testValues = this.testValues
        for(let i = 2; i < 4;i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

    })

    it('Add 3 tags', function() {

        let testValues = this.testValues

        for(let i = 2; i < 5; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

    })

    it('Add 4 tags', function() {

        let testValues = this.testValues

        for(let i = 2; i < 6; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

    })

    it('Add 5 tags', function() {

        let testValues = this.testValues

        for(let i = 2; i < 7; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }
       
    })

    it('Add 6 tags', function() {
        
        let testValues = this.testValues

        for(let i = 2; i < 8; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

    })

    it('Add 7 tags', function() {

        let testValues = this.testValues

        for(let i = 2; i < 8; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        } 
       
    })

    it('Add 8 tags', function() {
      
        let testValues = this.testValues

        for(let i = 2; i < 9; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

    })

    it('Add 9 tags', function() {

        let testValues = this.testValues

        for(let i = 2; i < 10; i++){
            cy.typeAndCheck(testValues[i-2], i)

            cy.get('[class=details]').children('p').children('span').should('have.text', String(9-i))
        }

        cy.get('li').eq(10)
        .should('not.exist')
    })
    
})

describe('Remove Tag', () => {

    it('Remove the default Tag', () => {
        cy.removeTagPosition(1)
    })

    it('Remove both of the default Tags', () => {
        cy.removeTagPosition(1)

        cy.removeTagPosition(0)
    })

    it('Remove a Tag with a single letter', () => {
        cy.typeAndCheck('a',2)

        cy.removeTagPosition(2)
    })

    it('Remove a Tag that has Numbers', () => {
        cy.typeAndCheck('3829424',2)

        cy.removeTagPosition(2)
    })

    it('Remove a Tag that has Special Characters', () => {
        cy.typeAndCheck('#(*&$(',2)

        cy.removeTagPosition(2)
    })

    it('Remove a \\', () => {
        cy.typeAndCheck('rgibtin\\',2)

        cy.removeTagPosition(2)
    })

    


})