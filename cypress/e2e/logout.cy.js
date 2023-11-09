describe('Logout test', () => {
    it("User can log out", () => {
      cy.visit('/index.html');
      cy.wait(1000);
      cy.get("header button[type=button]").contains("Logout").click;
      cy.wait(1000);
      cy.getAllLocalStorage().should("be.empty");
    });
  })