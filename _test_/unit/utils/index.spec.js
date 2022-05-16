import { sum } from "../../../src/utils/index.js";

test("sum", () => {
  const a = sum(1, 2);
  expect(a).toBe(3);
});
