// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Puneet


// cypress/support/commands.js
//cy.get("[data-test='email-input']")

Cypress.Commands.add('EMAIL', (email) => {
    cy.get("[data-test='email-input']"); // Adjust the selector as necessary
  });

  Cypress.Commands.add('SUBSCRIBE', (Subscribe) => {
    cy.get("[data-test='submit-button']");
  });

  Cypress.Commands.add('SUCCESS', (success) => {
    cy.get("[data-test='success-message']");

  });



//   (cy.get('[data-test="submit-button"]').contains('Subscribe').click());
    // cy.get('[data-test="success-message"]').contains("puneetness@gmail.com");
  
  
