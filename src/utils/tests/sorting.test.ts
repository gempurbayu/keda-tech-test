import { describe, expect, it } from "vitest";
import { sortDescending } from "../sorting";

describe("sortDescending", () => {
	it("should sort array from largest to smallest", () => {
		const input = [1, 2, 4, 3, 5, 3, 2, 1];
		const expected = [5, 4, 3, 3, 2, 2, 1, 1];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle empty array", () => {
		const input: number[] = [];
		const expected: number[] = [];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle single element array", () => {
		const input = [42];
		const expected = [42];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle already sorted array", () => {
		const input = [5, 4, 3, 2, 1];
		const expected = [5, 4, 3, 2, 1];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle reverse sorted array", () => {
		const input = [1, 2, 3, 4, 5];
		const expected = [5, 4, 3, 2, 1];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle array with negative numbers", () => {
		const input = [-1, -3, -2, -5, -4];
		const expected = [-1, -2, -3, -4, -5];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should handle array with duplicates", () => {
		const input = [3, 3, 3, 1, 1, 2, 2];
		const expected = [3, 3, 3, 2, 2, 1, 1];
		const result = sortDescending(input);
		expect(result).toEqual(expected);
	});

	it("should not mutate original array", () => {
		const input = [1, 2, 4, 3, 5];
		const originalInput = [...input];
		sortDescending(input);
		expect(input).toEqual(originalInput);
	});
});
