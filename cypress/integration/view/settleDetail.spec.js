describe("Auction list test", () => {
  it("show 3 item when settleDetail's length is 3", () => {
    cy.visit("/");
    cy.get(".bill-item").its("length").should("be.eq", 3);
  });
});
