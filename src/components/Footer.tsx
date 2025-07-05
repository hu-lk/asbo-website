"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">ASBO</h3>
            <p className="mb-6 text-gray-300">
              Premium washing machine parts and liquid solutions for optimal
              performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  ASBO Spares
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  ASBO Liquid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Shock Absorbers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Inlet/Outlet Pipes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Stabilizers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Motors & Pumps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4AC6B7] transition-colors duration-300"
                >
                  Control Panels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#4AC6B7]" />
                <span className="text-gray-300">
                  123 Business Street, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#4AC6B7]" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#4AC6B7]" />
                <span className="text-gray-300">info@asbo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 ASBO. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <FaCcVisa className="text-2xl text-gray-400" />
            <FaCcMastercard className="text-2xl text-gray-400" />
            <FaCcPaypal className="text-2xl text-gray-400" />
            <FaCcApplePay className="text-2xl text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
