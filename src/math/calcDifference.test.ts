import { describe, expect, test } from "@jest/globals";
import { calcDifference } from "./calcDifference";

describe("calcDifference", () => {
  test("5 - 2 === 3", () => {
    expect(calcDifference(5, 2)).toBe(3);
  });
});
