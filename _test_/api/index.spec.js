import api from "../../src/api";

describe("Api test", () => {
  describe("getAuctionList", () => {
    test("return 3 auction items", async () => {
      const data = await api.getAuctionList();

      expect(data.length).toBe(3);
    });

    test("return error", async () => {
      const fn = jest.fn();
      try {
        await api.getAuctionList("test");
      } catch (err) {
        console.log(err);
        fn();
      }
      expect(fn).toHaveBeenCalled();
    });
  });
});
