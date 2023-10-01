describe("template spec", () => {
  it("passes", async () => {
    cy.visit("http://127.0.0.1:3000");
    cy.contains("Hello Koa");
  });
});
