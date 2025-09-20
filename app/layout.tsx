import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ERPFlow - Modern Business Management Solution",
  description: "Streamline your business operations with our comprehensive ERP system. Track inventory, manage profits, and grow your business with our tiered solutions.",
  keywords: "ERP, business management, inventory tracking, profit analysis, startup tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}