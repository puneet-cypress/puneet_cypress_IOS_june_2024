describe("courses section", () => {

    beforeEach(() => {
        cy.visit("/")

    });
              context("courses selection", () => {
                it("select the first course", () => {
                cy.get("[data-test='course-0']").find("a").contains("Get started").click();
                cy.location("pathname").should("eq", "/testing-your-first-application")
                cy.location("href").should("eq", "http://localhost:3000/testing-your-first-application")

               
            });

            it("2nd course", () => {
                cy.get("[data-test='course-1']").find("a").contains("Get started").click();
                cy.location("pathname").should("eq", "/testing-foundations")
                cy.location("host").should("eq", 'localhost:3000');

            });

            it("3rd course", () => {

                cy.get("[data-test='course-2']").find("a").contains("Get started").click();
                cy.location("pathname").should("eq", "/cypress-fundamentals")
                cy.location("port").should("eq", "3000");
            })
        })



        });

