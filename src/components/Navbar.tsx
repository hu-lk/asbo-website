"use client";

import styles from "./styles/Navbar.module.css";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isSparesPage = pathname === "/spares";

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

          {/* Right side icons and search */}
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
        </div>
      </div>
    </header>
  );
}
