"use client";

import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import LoginModal from "@/components/modals/LoginModal";

export default function Home() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	const handleLoginClick = () => {
		setIsLoginModalOpen(true);
	};

	const handleGetStartedClick = () => {
		// Scroll to pricing section
		document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
	};

	const handleSelectPlan = (tierId: string) => {
		// Handle plan selection
		console.log("Selected plan:", tierId);
		// In a real app, this would redirect to checkout or show a form
		alert(
			`Anda memilih paket ${tierId}. Fitur ini akan mengarahkan ke halaman checkout.`,
		);
	};

	return (
		<div className="min-h-screen">
			<Navigation onLoginClick={handleLoginClick} />

			<main>
				<Hero
					onLoginClick={handleLoginClick}
					onGetStartedClick={handleGetStartedClick}
				/>
				<About />
				<Pricing onSelectPlan={handleSelectPlan} />
				<Contact />
			</main>

			<Footer />

			<LoginModal
				isOpen={isLoginModalOpen}
				onClose={() => setIsLoginModalOpen(false)}
			/>
		</div>
	);
}
