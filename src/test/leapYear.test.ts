import { isLeapYear } from "../main/leapYear";

describe("isLeapYear", () => {
  it("returns false when given 0", () => {
    expect(isLeapYear(0)).toBe(false);
  });
  it("returns true when give 4", () => {
    expect(isLeapYear(4)).toBe(true);
  });
});
