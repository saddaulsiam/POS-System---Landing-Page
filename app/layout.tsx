import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart POS System - Complete Point of Sale Solution for Your Business",
  description:
    "Modern, easy-to-use POS system for retail stores, restaurants, and service businesses. Inventory management, sales tracking, employee management, and more.",
  keywords:
    "POS system, point of sale, retail software, inventory management, sales tracking, restaurant POS, store management",
  authors: [{ name: "Your Company Name" }],
  openGraph: {
    title: "Smart POS System - Complete Point of Sale Solution",
    description: "Modern, easy-to-use POS system for retail stores, restaurants, and service businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
