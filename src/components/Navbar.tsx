"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">ASBO</h1>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/spares">ASBO Spares</Link>
        <Link href="/liquid">ASBO Liquid</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
