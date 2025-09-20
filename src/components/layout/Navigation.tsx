"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
	onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLoginClick }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "#home" },
		{ label: "About", href: "#about" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Contact", href: "#contact" },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a href="#home" className="text-2xl font-bold gradient-text">
							ERPFlow
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Login Button */}
					<div className="hidden md:block">
						<Button onClick={onLoginClick} variant="default" size="default">
							Login
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMenu}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
							<div className="pt-4">
								<Button
									onClick={onLoginClick}
									variant="default"
									size="default"
									className="w-full"
								>
									Login
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
