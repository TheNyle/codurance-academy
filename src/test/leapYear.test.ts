import { isLeapYear } from "../main/leapYear";

describe("isLeapYear", () => {
  it("returns false when given 0", () => {
    expect(isLeapYear(0)).toBe(false);
  });
});
