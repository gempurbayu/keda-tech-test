export function sumEvenNumbers(obj: any): number {
	let sum = 0;

	// Iterasi melalui semua properti objek
	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			const value = obj[key];

			// Jika value adalah number dan genap
			if (typeof value === "number" && value % 2 === 0) {
				sum += value;
			}
			// Jika value adalah objek, rekursi
			else if (
				typeof value === "object" &&
				value !== null &&
				!Array.isArray(value)
			) {
				sum += sumEvenNumbers(value);
			}
		}
	}

	return sum;
}
