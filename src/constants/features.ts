import type { Feature } from "@/types";
import {
	Package,
	DollarSign,
	TrendingUp,
	Bot,
	Download,
	Wrench,
} from "lucide-react";

export const FEATURES: Feature[] = [
	{
		id: "inventory-management",
		title: "Inventory Management",
		description: "Kelola stok barang masuk dan keluar dengan mudah dan akurat",
		icon: Package,
	},
	{
		id: "profit-tracking",
		title: "Profit Tracking",
		description:
			"Pantau keuntungan harian, mingguan, dan bulanan secara real-time",
		icon: DollarSign,
	},
	{
		id: "analytics",
		title: "Advanced Analytics",
		description: "Analisis mendalam dengan chart dan laporan yang informatif",
		icon: TrendingUp,
	},
	{
		id: "ai-prediction",
		title: "AI Prediction",
		description: "Prediksi penghasilan masa depan dengan teknologi AI",
		icon: Bot,
	},
	{
		id: "export-data",
		title: "Data Export",
		description: "Export data ke Excel untuk analisis lebih lanjut",
		icon: Download,
	},
	{
		id: "support",
		title: "24/7 Support",
		description:
			"Dukungan teknis 24 jam untuk memastikan bisnis berjalan lancar",
		icon: Wrench,
	},
];
