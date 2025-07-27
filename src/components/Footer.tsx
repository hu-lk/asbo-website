import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-6 px-4 sm:px-10 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h3 className="font-bold text-xl mb-2">ASBO</h3>
          <p className="text-sm text-gray-300">
            Premium washing machine parts and liquid solutions for optimal
            performance.
          </p>
          <div className="flex gap-3 mt-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/asbo-spares">ASBO Spares</Link>
            </li>
            <li>
              <Link href="/asbo-liquid">ASBO Liquid</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Shock Absorbers</li>
            <li>Inlet/Outlet Pipes</li>
            <li>Stabilizers</li>
            <li>Motors & Pumps</li>
            <li>Control Panels</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                X road, adjacent lane Indra-Nagendra theatre, Saroornagar, Sai
                Nagar, Saroor Nagar East, Kharmanghat Hyderabad, Telangana
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91 9676626307</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@asbo.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-blue-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 ASBO. All rights reserved.</p>
        <div className="flex gap-4 text-xl mt-4 md:mt-0">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcApplePay />
        </div>
      </div>
    </footer>
  );
}
