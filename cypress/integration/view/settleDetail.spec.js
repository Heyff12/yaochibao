describe("Auction list test", () => {
  it("show 3 item when settleDetail's length is 3", () => {
    cy.visit("/#/settle-detail/12345");
    cy.get(".bill-item").its("length").should("be.eq", 3);
  });
});
