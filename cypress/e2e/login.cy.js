const email = "twix@noroff.no";
const password = "twixtwix";

describe('Login test', () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it('User can log in', () => {
    cy.visit('/index.html');
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(2000);
    cy.location("href").should("include", "view=profile&name");
  });
});



