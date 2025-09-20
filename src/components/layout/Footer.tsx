import type React from "react";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		product: [
			{ label: "Fitur", href: "#features" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "API", href: "#" },
			{ label: "Integrasi", href: "#" },
		],
		company: [
			{ label: "Tentang Kami", href: "#about" },
			{ label: "Blog", href: "#" },
			{ label: "Karir", href: "#" },
			{ label: "Partner", href: "#" },
		],
		support: [
			{ label: "Bantuan", href: "#" },
			{ label: "Dokumentasi", href: "#" },
			{ label: "Status", href: "#" },
			{ label: "Kontak", href: "#contact" },
		],
		legal: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Terms of Service", href: "#" },
			{ label: "Cookie Policy", href: "#" },
			{ label: "GDPR", href: "#" },
		],
	};

	const socialLinks = [
		{ icon: Facebook, href: "#", label: "Facebook" },
		{ icon: Twitter, href: "#", label: "Twitter" },
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Instagram, href: "#", label: "Instagram" },
	];

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<div className="mb-6">
							<h3 className="text-2xl font-bold gradient-text mb-4">ERPFlow</h3>
							<p className="text-gray-400 leading-relaxed mb-6">
								Solusi ERP modern untuk mengelola bisnis Anda dengan mudah.
								Kelola inventory, pantau keuntungan, dan kembangkan bisnis
								dengan teknologi terdepan.
							</p>
						</div>

						{/* Contact Info */}
						<div className="space-y-3">
							<div className="flex items-center text-gray-400">
								<Mail className="w-5 h-5 mr-3" />
								<span>info@erpflow.com</span>
							</div>
							<div className="flex items-center text-gray-400">
								<Phone className="w-5 h-5 mr-3" />
								<span>+62 21 1234 5678</span>
							</div>
							<div className="flex items-center text-gray-400">
								<MapPin className="w-5 h-5 mr-3" />
								<span>Jakarta, Indonesia</span>
							</div>
						</div>
					</div>

					{/* Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Produk</h4>
						<ul className="space-y-3">
							{footerLinks.product.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
						<ul className="space-y-3">
							{footerLinks.company.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Dukungan</h4>
						<ul className="space-y-3">
							{footerLinks.support.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© {currentYear} ERPFlow. All rights reserved.
						</div>

						{/* Social Links */}
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="text-gray-400 hover:text-white transition-colors"
									aria-label={social.label}
								>
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
