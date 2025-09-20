export function sortDescending(arr: number[]): number[] {
	// Membuat copy array untuk menghindari mutasi array asli
	const result = [...arr];
	const n = result.length;

	// Bubble Sort algorithm
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			// Jika elemen saat ini lebih kecil dari elemen berikutnya, tukar posisi
			if (result[j] < result[j + 1]) {
				// Swap elements
				const temp = result[j];
				result[j] = result[j + 1];
				result[j + 1] = temp;
			}
		}
	}

	return result;
}
