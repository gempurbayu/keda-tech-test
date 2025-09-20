export function maxSubarraySum(arr: number[], k: number): number {
	// Validasi input
	if (arr.length === 0 || k <= 0 || k > arr.length) {
		return 0;
	}

	// Hitung jumlah subarray pertama
	let maxSum = 0;
	for (let i = 0; i < k; i++) {
		maxSum += arr[i];
	}

	// Sliding window: geser window dan cari jumlah maksimum
	let currentSum = maxSum;
	for (let i = k; i < arr.length; i++) {
		// Kurangi elemen yang keluar dari window dan tambahkan elemen yang masuk
		currentSum = currentSum - arr[i - k] + arr[i];

		// Update maxSum jika currentSum lebih besar
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
}
