"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Mail, Lock, Eye, EyeOff } from "lucide-react";
import type { LoginFormData } from "@/types";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev: LoginFormData) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate login process
		await new Promise((resolve) => setTimeout(resolve, 1500));

		alert("Login berhasil! (Demo mode)");
		setIsLoading(false);
		onClose();
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={handleOverlayClick}
		>
			<div className="relative w-full max-w-md mx-4">
				<Card className="shadow-2xl">
					<CardHeader className="relative">
						<CardTitle className="text-2xl font-bold text-center text-gray-900">
							Masuk ke Akun Anda
						</CardTitle>
						<CardDescription className="text-center text-gray-600">
							Akses dashboard ERPFlow Anda
						</CardDescription>
						<Button
							onClick={onClose}
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4"
						>
							<X className="w-5 h-5 text-gray-500" />
						</Button>
					</CardHeader>

					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									<Input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="pl-10"
										placeholder="Masukkan email Anda"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									<Input
										type={showPassword ? "text" : "password"}
										id="password"
										name="password"
										value={formData.password}
										onChange={handleInputChange}
										required
										className="pl-10 pr-12"
										placeholder="Masukkan password Anda"
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-0 top-0 h-full px-3"
									>
										{showPassword ? (
											<EyeOff className="w-5 h-5 text-gray-400" />
										) : (
											<Eye className="w-5 h-5 text-gray-400" />
										)}
									</Button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
									/>
									<Label
										htmlFor="remember-me"
										className="text-sm text-gray-600"
									>
										Ingat saya
									</Label>
								</div>
								<Button
									variant="link"
									size="sm"
									className="text-blue-600 hover:text-blue-700 p-0 h-auto"
								>
									Lupa password?
								</Button>
							</div>

							<Button
								type="submit"
								variant="default"
								size="lg"
								disabled={isLoading}
								className="w-full"
							>
								{isLoading ? "Memproses..." : "Masuk"}
							</Button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-sm text-gray-600">
								Belum punya akun?{" "}
								<Button
									variant="link"
									size="sm"
									className="text-blue-600 hover:text-blue-700 p-0 h-auto"
								>
									Daftar sekarang
								</Button>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default LoginModal;
