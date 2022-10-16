import service from "../../src/service";

describe("Api test", () => {
  describe("getSettleDetail", () => {
    test("return 3 auction items", async () => {
      const data = await service.getSettleDetail();

      expect(data.bills.length).toBe(3);
    });

    test("return error", async () => {
      const fn = jest.fn();
      try {
        await service.getSettleDetail("test");
      } catch (err) {
        console.log(err);
        fn();
      }
      expect(fn).toHaveBeenCalled();
    });
  });
});
