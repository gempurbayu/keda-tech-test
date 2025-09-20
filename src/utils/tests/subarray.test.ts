import { describe, expect, it } from "vitest";
import { maxSubarraySum } from "../subarray";

describe("maxSubarraySum", () => {
	it("should find maximum sum of subarray with length 2", () => {
		const input = [100, 200, 300, 400];
		const k = 2;
		const expected = 700; // 300 + 400
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should find maximum sum of subarray with length 4", () => {
		const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
		const k = 4;
		const expected = 39; // 4 + 2 + 10 + 23
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should find maximum sum of subarray with negative numbers", () => {
		const input = [-3, 4, 0, -2, 6, -1];
		const k = 2;
		const expected = 5; // 6 + -1
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle empty array", () => {
		const input: number[] = [];
		const k = 2;
		const expected = 0;
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle k greater than array length", () => {
		const input = [1, 2, 3];
		const k = 5;
		const expected = 0;
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle k equal to array length", () => {
		const input = [1, 2, 3, 4];
		const k = 4;
		const expected = 10; // 1 + 2 + 3 + 4
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle k equal to 1", () => {
		const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
		const k = 1;
		const expected = 23; // maximum single element
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle all negative numbers", () => {
		const input = [-1, -2, -3, -4, -5];
		const k = 2;
		const expected = -3; // -1 + -2
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle k equal to 0", () => {
		const input = [1, 2, 3, 4];
		const k = 0;
		const expected = 0;
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});

	it("should handle single element array", () => {
		const input = [42];
		const k = 1;
		const expected = 42;
		const result = maxSubarraySum(input, k);
		expect(result).toBe(expected);
	});
});
