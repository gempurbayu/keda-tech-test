import { describe, expect, it } from "vitest";
import { sumEvenNumbers } from "../nestedSum";

describe("sumEvenNumbers", () => {
	it("should sum all even numbers in nested object (test case 1)", () => {
		const input = {
			outer: 2,
			obj: {
				inner: 2,
				otherObj: {
					superInner: 2,
					notANumber: true,
					alsoNotANumber: "yup",
				},
			},
		};
		const expected = 6; // 2 + 2 + 2
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should sum all even numbers in nested object (test case 2)", () => {
		const input = {
			a: 2,
			b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
			c: { c: { c: 2 }, cc: "ball", ccc: 5 },
			d: 1,
			e: { e: { e: 4 }, ee: "car" },
		};
		const expected = 12; // 2 + 2 + 2 + 2 + 4
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle empty object", () => {
		const input = {};
		const expected = 0;
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle object with no even numbers", () => {
		const input = {
			a: 1,
			b: 3,
			c: { d: 5, e: 7 },
		};
		const expected = 0;
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle object with only even numbers", () => {
		const input = {
			a: 2,
			b: 4,
			c: { d: 6, e: 8 },
		};
		const expected = 20; // 2 + 4 + 6 + 8
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle deeply nested object", () => {
		const input = {
			level1: {
				level2: {
					level3: {
						level4: {
							even: 2,
							odd: 3,
							even2: 4,
						},
					},
				},
			},
		};
		const expected = 6; // 2 + 4
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle object with mixed data types", () => {
		const input = {
			number: 2,
			string: "hello",
			boolean: true,
			null: null,
			undefined: undefined,
			array: [1, 2, 3], // arrays should be ignored
			nested: {
				even: 4,
				odd: 5,
			},
		};
		const expected = 6; // 2 + 4
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle object with zero (even number)", () => {
		const input = {
			a: 0,
			b: 2,
			c: { d: 4 },
		};
		const expected = 6; // 0 + 2 + 4
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});

	it("should handle object with negative even numbers", () => {
		const input = {
			a: -2,
			b: -4,
			c: { d: 6 },
		};
		const expected = 0; // -2 + -4 + 6 = 0
		const result = sumEvenNumbers(input);
		expect(result).toBe(expected);
	});
});
