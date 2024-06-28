const { each } = require("lodash");
//  import { ee } from 'cypress/support/commands';



describe    ('subscribe spec', () => {
  beforeEach (() => {
    cy.visit("/");
  });

  context("valid email and invalid subscribe specs test cases", () => {

  it('subscribe to the newsletter', () => {
    //cy.get("[data-test='email-input']").type("puneetness@gmail.com");
    cy.EMAIL().type("zzz@gmail.com");
    cy.SUBSCRIBE().contains('Subscribe').click();
    cy.SUCCESS().contains("zzz@gmail.com");

});



   it('invalid email', () => {
    cy.get("[data-test='email-input']").type("sss");
    cy.get('[data-test="submit-button"]').click()
    //cy.contains  ("please include @....")
    cy.get('[data-test="success-message"]').should('not.exist');
    //cy.get('div[role="alert"]').contains("Please include an '@' in the email address. 'sss' is missing an '@'.");


    });
  

    it('dont allow alread subscribe user', () => {
        cy.get("[data-test='email-input']").type("john@example.com");
        cy.get("[data-test=submit-button]").contains("Subscribe").click();
        cy.get ("[data-test='server-error-message']").contains("Error: john@example.com already exists. Please use a different email address");

    })

})
});

        // data-test="server-error-message" xpath="1">

