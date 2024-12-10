import { describe, expect, test } from "@jest/globals";
import { calcSumOfSquares } from "./calcSumOfSquares";

describe("calcSumOfSquares", () => {
  test("should return 385 for n = 10", () => {
    expect(calcSumOfSquares(10)).toBe(385);
  });
});
