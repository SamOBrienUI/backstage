import { describe, expect, test } from "@jest/globals";
import { formatDateTime } from "./formatDateTime";

describe("formatDateTime", () => {
  test("it should format valid dates", () => {
    expect(formatDateTime("0")).toBe("Saturday, January 1, 2000 at 12:00 AM");

    expect(formatDateTime("2024-12-11T00:57:21.810Z")).toBe(
      "Tuesday, December 10, 2024 at 4:57 PM"
    );
  });

  test("it should fall back to -- if the date is not valid", () => {
    // @ts-expect-error -- Test Case
    expect(formatDateTime(undefined)).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatDateTime(null)).toBe("--");
    expect(formatDateTime("ABC")).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatDateTime(0)).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatDateTime({})).toBe("--");
    // @ts-expect-error -- Test Case
    expect(formatDateTime([])).toBe("--");
  });
});
