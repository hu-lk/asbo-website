import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASBO - Washing Machine Spare Parts & Liquid Solutions",
  description:
    "Discover high-quality washing machine spare parts and liquid solutions at ASBO. Shop genuine repair parts for LG, Samsung, IFB, and more, with expert support.",
  keywords:
    "washing machine spare parts, washing machine repair parts, appliance spare parts online, washing machine liquid solutions, genuine washing machine parts, LG washing machine parts, Samsung washing machine parts, IFB washing machine parts",
  openGraph: {
    title: "ASBO - Premium Washing Machine Solutions",
    description:
      "Explore ASBO for top-quality washing machine spare parts and liquid solutions. Trusted by customers worldwide.",
    url: "https://asbo-website-6lov.vercel.app/",
    siteName: "ASBO",
    images: [
      {
        url: "https://asbo-website-6lov.vercel.app/assets/logo.jpg", // Replace with actual logo path
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASBO - Washing Machine Spare Parts & Liquid Solutions",
    description:
      "Shop genuine washing machine parts and liquid solutions at ASBO. Expert support for LG, Samsung, IFB, and more!",
    images: ["https://asbo-website-6lov.vercel.app/assets/logo.jpg"], // Replace with actual logo path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
