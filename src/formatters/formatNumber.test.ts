import { describe, expect, test } from "@jest/globals";
import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
  test("it should format valid numbers", () => {
    expect(formatNumber(1000)).toBe("1,000");
    expect(formatNumber(100)).toBe("100");
    expect(formatNumber(123456789)).toBe("123,456,789");
  });

  test("it should fall back to -- if the number is not valid", () => {
    // @ts-expect-error -- Test Case
    expect(formatNumber(undefined)).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatNumber(null)).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatNumber("ABC")).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatNumber("0")).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatNumber({})).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatNumber([])).toBe("--");
  });
});
