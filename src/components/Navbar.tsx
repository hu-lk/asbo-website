"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#1B365D]">ASBO</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
          >
            ASBO Spares
          </a>
          <a
            href="#"
            className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300 flex items-center"
          >
            ASBO Liquid
            <span className="text-xs bg-[#4AC6B7] text-white px-2 py-1 rounded-full ml-2">
              Coming Soon
            </span>
          </a>
          <a
            href="#"
            className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Right Section: Search + Cart + Hamburger */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#4AC6B7] focus:border-transparent"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-[#1B365D] text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4AC6B7] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems}
              </span>
            )}
          </div>

          {/* Hamburger Button - only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#1B365D] focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
            >
              ASBO Spares
            </a>
            <a
              href="#"
              className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300 flex items-center"
            >
              ASBO Liquid
              <span className="text-xs bg-[#4AC6B7] text-white px-2 py-1 rounded-full ml-2">
                Coming Soon
              </span>
            </a>
            <a
              href="#"
              className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#1B365D] hover:text-[#4AC6B7] font-medium transition-colors duration-300"
            >
              Contact
            </a>

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#4AC6B7] focus:border-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
