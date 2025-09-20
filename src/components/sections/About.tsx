import type React from "react";
import { FEATURES } from "@/constants/features";
import type { Feature } from "@/types";
import {
	BarChart3,
	Users,
	Shield,
	Zap,
	Package,
	DollarSign,
	TrendingUp,
	Bot,
	Download,
	Wrench,
} from "lucide-react";

const About: React.FC = () => {
	const stats = [
		{ label: "Pengusaha Terbantu", value: "1000+", icon: Users },
		{ label: "Data Diproses", value: "1M+", icon: BarChart3 },
		{ label: "Keamanan Data", value: "99.9%", icon: Shield },
		{ label: "Waktu Response", value: "<1s", icon: Zap },
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Mengapa Memilih <span className="gradient-text">ERPFlow</span>?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Kami memahami tantangan yang dihadapi pengusaha dalam mengelola
						bisnis. ERPFlow hadir dengan solusi lengkap yang mudah digunakan dan
						dapat diandalkan.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
								<stat.icon className="w-8 h-8 text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">
								{stat.value}
							</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{FEATURES.map((feature: Feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.id} className="group flex">
								<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col w-full">
									<div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
										<IconComponent className="w-6 h-6 text-blue-600" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{feature.title}
									</h3>
									<p className="text-gray-600 leading-relaxed flex-grow">
										{feature.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Mission Statement */}
				<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
					<div className="max-w-4xl mx-auto text-center">
						<h3 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h3>
						<p className="text-lg text-gray-700 leading-relaxed mb-8">
							Kami berkomitmen untuk memberdayakan pengusaha dengan teknologi
							ERP yang mudah digunakan, aman, dan dapat diandalkan. Setiap fitur
							yang kami kembangkan dirancang untuk memudahkan operasional bisnis
							dan meningkatkan efisiensi.
						</p>
						<div className="grid md:grid-cols-3 gap-6 text-center">
							<div>
								<div className="text-2xl font-bold text-blue-600 mb-2">
									Mudah
								</div>
								<div className="text-gray-600">
									Interface yang intuitif dan mudah dipelajari
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold text-purple-600 mb-2">
									Aman
								</div>
								<div className="text-gray-600">
									Data bisnis Anda terlindungi dengan enkripsi terbaik
								</div>
							</div>
							<div>
								<div className="text-2xl font-bold text-green-600 mb-2">
									Terpercaya
								</div>
								<div className="text-gray-600">
									Uptime 99.9% dengan support 24/7
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
