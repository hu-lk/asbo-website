import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASBO",
  description: "Premium washing machine parts and liquid solutions",
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
