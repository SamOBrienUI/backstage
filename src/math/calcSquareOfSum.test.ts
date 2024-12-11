import { describe, expect, test } from "@jest/globals";
import { calcSquareOfSum } from "./calcSquareOfSum";

describe("calcSquareOfSum", () => {
  test("should return 0 for n = 0", () => {
    expect(calcSquareOfSum(0)).toBe(0);
  });

  test("should return 385 for n = 10", () => {
    expect(calcSquareOfSum(10)).toBe(3025);
  });
});
