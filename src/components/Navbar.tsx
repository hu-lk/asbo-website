"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 lg:px-10 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900">
          ASBO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/asbo-services">ASBO Services</Link>
          <Link href="/asbo-spares">ASBO Spares</Link>
          <span
            className="flex items-center gap-1 text-gray-400 cursor-not-allowed"
            title="Coming Soon"
          >
            ASBO Liquid
            <span className="ml-2 text-xs text-white bg-emerald-500 px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </span>
          <Link href="/about">About</Link>
          <Link href="/billing">Billing</Link>
        </nav>

        {/* Search & Cart */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-6 text-gray-800 font-medium">
                <Link href="/asbo-services">ASBO Services</Link>
                <Link href="/asbo-spares">ASBO Spares</Link>
                <span
                  className="text-gray-400 cursor-not-allowed flex items-center"
                  title="Coming Soon"
                >
                  ASBO Liquid
                  <span className="ml-2 text-xs text-white bg-emerald-500 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>
                <Link href="/about">About</Link>
                <Link href="/billing">Billing</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
