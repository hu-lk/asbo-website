"use client";

import styles from "./styles/Navbar.module.css";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isSparesPage = pathname === "/spares";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoText}>
              ASBO
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <div className={styles.dropdown}>
              <a href="#services" className={styles.navLink}>
                ASBO Services
              </a>
              <div className={styles.dropdownContent}>
                <a
                  href="#washing-machine-service"
                  className={styles.dropdownItem}
                >
                  Washing Machine Service
                </a>
                <a href="#dishwasher-service" className={styles.dropdownItem}>
                  Dishwasher Service
                </a>
                <a
                  href="#microwave-oven-service"
                  className={styles.dropdownItem}
                >
                  Microwave Oven Service
                </a>
              </div>
            </div>
            {!isSparesPage && (
              <>
                <a href="/spares" className={styles.navLink}>
                  ASBO Spares
                </a>
                <a href="#liquid" className={styles.navLink}>
                  ASBO Liquid
                  <span className={styles.comingSoonBadge}>Coming Soon</span>
                </a>
              </>
            )}
            <a href="/about" className={styles.navLink}>
              About
            </a>
            <a href="#footer" className={styles.navLink}>
              Contact
            </a>
          </nav>

          {/* Desktop Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search products..."
                className={styles.searchInput}
                id="searchInput"
              />
              <Search className={styles.searchIcon} size={20} />
            </div>
            <a href="#cart" className={styles.cartIcon}>
              <ShoppingCart size={24} />
            </a>
          </div>

          {/* Mobile Modal */}
          {isMobileMenuOpen && (
            <div className={`${styles.mobileModal} ${styles.active}`}>
              <button
                className={styles.closeButton}
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <nav className={styles.navMobile}>
                <div className={styles.dropdown}>
                  <a href="#services" className={styles.navLink}>
                    ASBO Services
                  </a>
                  <div className={styles.dropdownContent}>
                    <a
                      href="#washing-machine-service"
                      className={styles.dropdownItem}
                    >
                      Washing Machine Service
                    </a>
                    <a
                      href="#dishwasher-service"
                      className={styles.dropdownItem}
                    >
                      Dishwasher Service
                    </a>
                    <a
                      href="#microwave-oven-service"
                      className={styles.dropdownItem}
                    >
                      Microwave Oven Service
                    </a>
                  </div>
                </div>
                {!isSparesPage && (
                  <>
                    <a href="/spares" className={styles.navLink}>
                      ASBO Spares
                    </a>
                    <a href="#liquid" className={styles.navLink}>
                      ASBO Liquid
                      <span className={styles.comingSoonBadge}>
                        Coming Soon
                      </span>
                    </a>
                  </>
                )}
                <a href="/about" className={styles.navLink}>
                  About
                </a>
                <a href="#footer" className={styles.navLink}>
                  Contact
                </a>
              </nav>
              <div className={styles.rightSectionMobile}>
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={styles.searchInput}
                    id="searchInput"
                  />
                  <Search className={styles.searchIcon} size={20} />
                </div>
                <a href="#cart" className={styles.cartIcon}>
                  <ShoppingCart size={24} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
