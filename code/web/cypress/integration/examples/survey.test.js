describe("Style Survey", () => {
  it("should be able to log in and take a style survey only once", () => {
    const userID = Date.now();
    cy.visit("http://localhost:3000/user/signup");
    cy.get('input[type="text"]')
      .type("test name")
      .get('input[type="email"]')
      .type(`${userID}@email.com`)
      .should("have.value", `${userID}@email.com`)
      .get('input[type="password"]')
      .type("123456")
      .should("have.value", "123456");

    cy.get(".jsx-2258186958").click();
    cy.url().should("include", "/user/login");

    cy.get('input[type="email"]')
      .type(`${userID}@email.com`)
      .should("have.value", `${userID}@email.com`)
      .get('input[type="password"]')
      .type("123456")
      .should("have.value", "123456");
    cy.get(".jsx-2258186958").click();

    cy.url()
      .should("include", "/crates")
      .get("button:last")
      .contains("Subscribe")
      .click();

    cy.visit("http://localhost:3000/user/style-preferences")
      .get('[alt="/images/stock/survey/mountains-A.jpg"]')
      .eq(0)
      .click()
      .get('[alt="/images/stock/survey/popcorn-B.jpg"]')
      .eq(0)
      .click()
      .get('[alt="/images/stock/survey/burger-C.jpg"]')
      .eq(0)
      .click()
      .get('[alt="/images/stock/survey/house-D.jpg"]')
      .eq(0)
      .click()
      .get("button:last")
      .contains("Submit Survey")
      .click();

    cy.get(".results")
      .find(".style-summary")
      .should("have.text", "Your style is casual!");

    cy.get("button:last")
      .contains("See Subscriptions")
      .click();
  });
});
