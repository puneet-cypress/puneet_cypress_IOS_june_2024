it("user journe test cases", () =>{
    cy.visit("/");
    cy.get("[data-test='course-0']").find("a").contains("Get started").click();
    cy.location("pathname").should("eq", "/testing-your-first-application");
    cy.get("[data-test=next-lesson-button]").click();
    cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview" )
    cy.get("[data-test=challenge-answer-0]").click();
    cy.get("[data-test=next-lesson-button]").click();
    cy.location("pathname").should("eq" ,"/testing-your-first-application/installing-cypress-and-writing-our-first-test" )
    cy.get("[data-test=challenge-answer-0]").click();
    cy.get("[data-test=next-lesson-button]").click();
    
    cy.location("pathname").should("eq" ,"/testing-your-first-application/setting-up-data-before-each-test" )
    cy.get("[data-test=challenge-answer-0]").click();
    cy.get("[data-test=next-lesson-button]").should("exist").click();
    cy.location("pathname").should("eq" , "/");










})