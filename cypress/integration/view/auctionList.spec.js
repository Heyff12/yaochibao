describe("Auction list test", () => {
  it("show 3 item when auctionList's length is 3", () => {
    cy.visit("/");
    cy.get(".auction-item").its("length").should("be.eq", 3);
  });
});
