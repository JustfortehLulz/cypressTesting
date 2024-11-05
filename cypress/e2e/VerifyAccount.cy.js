
beforeEach(function(){
    cy.visit('https://qaplayground.dev/apps/verify-account/')
});

describe('Verify Account', () => {
    it('Attempt to Verify Account', () =>{
        cy.get('[class=code]')
        cy.get('[class=info]').then(info => {
            var line = info.text();
            var pattern = /[0-9]+/g;
            var code = line.match(pattern);
            //var indexCode = 0;
            for(let indexAcc = 0; indexAcc < 6;indexAcc++){
                // iterates through each of the boxes
                cy.get('[class=code]').eq(indexAcc).click();

                // solution 1
                cy.get('[class=code]').eq(indexAcc).type(code[indexAcc]);

                // solution 2
                //indexCode = 0;
                // while(indexCode < code[indexAcc]){
                //     //clicks the up arrow the amount of times needed
                //     cy.get('[class=code]').eq(indexAcc).type('{uparrow}');
                //     indexCode++;
                // }              
            }
        })
        //checks if the success screen exists
        cy.get('.info.success').should('exist')
    })
});