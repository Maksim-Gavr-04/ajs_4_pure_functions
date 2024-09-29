import { test, expect } from "@jest/globals";
import showHealthStatus from "../healthStatus";

test("Testing `showHealthStatus` function with an empty value", () => {
  const result = showHealthStatus();
	expect(result).toBe(null);
});

test.each([
  [95, "healthy"],
  [45, "wounded"],
  [5, "critical"],
  [0, undefined],
])("Testing `showHealthStatus` function with a health level %d", (health, expected) => {
  const result = showHealthStatus({ name: "Лучник", health });
  expect(result).toBe(expected);
});