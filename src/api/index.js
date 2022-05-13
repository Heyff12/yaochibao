const auctionList = [
  { name: "星空", type: "picture", price: "10000" },
  { name: "茅台", type: "wine", price: "9999" },
  { name: "海洋之心", type: "jewel", price: "100000" },
];

export default {
  async getAuctionList() {
    await wait(100);
    return auctionList;
  },
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
