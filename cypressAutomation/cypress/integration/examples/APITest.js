describe('My First Test Suite', function() 
{

    it ('Post methode', function() {
        cy.request('POST','http://216.10.245.166',{

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdzz",
            "aisle":"22447",
            "author":"John foe"
            }).then(function(response) {

                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
            })

    })


})