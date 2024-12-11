import { describe, expect, test } from "@jest/globals";
import { calcSumOfSquares } from "./calcSumOfSquares";

describe("calcSumOfSquares", () => {
  test("should return 0 for n = 0", () => {
    expect(calcSumOfSquares(0)).toBe(0);
  });

  test("should return 385 for n = 10", () => {
    expect(calcSumOfSquares(10)).toBe(385);
  });
});
