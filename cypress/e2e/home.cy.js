describe('template spec', () => {
beforeEach (() => {
  //cy.visit("http://localhost:3000");
  cy.visit("/");
});



  it('home page courses verification', () => {
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress");
  })

  it('verif courses on the home page', () => {
  cy.get('dt').eq(0).contains("4 Courses")
  cy.get('dt').eq(1).contains("25+ Lessons")
  cy.get('dt').eq(2).contains("Free and Open Source")
    
})

it('verif courses on the home page', () => {
  cy.get('dt').eq(0).contains("4 Courses")

});

});
