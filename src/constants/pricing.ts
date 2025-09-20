import type { PricingTier } from "@/types";

export const PRICING_TIERS: PricingTier[] = [
	{
		id: "tier-1",
		name: "Basic",
		level: "Basic",
		price: 29,
		currency: "USD",
		features: [
			"Mencatat barang masuk",
			"Mencatat barang keluar",
			"Mencatat hasil keuntungan",
			"Dashboard sederhana",
			"Support email",
		],
		ctaText: "Mulai Gratis",
	},
	{
		id: "tier-2",
		name: "Business",
		level: "Business",
		price: 79,
		currency: "USD",
		features: [
			"Mencatat barang masuk dan keluar",
			"Mencatat Keuntungan",
			"Analisa hasil penjualan dengan CHART",
			"Support 7x24 Jam",
			"Laporan detail",
			"Multi-user access",
		],
		isPopular: true,
		ctaText: "Pilih Business",
	},
	{
		id: "tier-3",
		name: "Entrepreneur",
		level: "Entrepreneur",
		price: 149,
		currency: "USD",
		features: [
			"Mencatat barang masuk dan keluar",
			"Mencatat Keuntungan",
			"Analisa hasil penjualan dengan CHART",
			"Support 7x24 Jam",
			"Export data ke Excel",
			"AI Prediksi penghasilan",
			"Custom integrations",
			"Priority support",
		],
		ctaText: "Pilih Entrepreneur",
	},
];
