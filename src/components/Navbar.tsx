"use client";

import styles from "./Navbar.module.css";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="#" className={styles.logoText}>
              ASBO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>
              ASBO Spares
            </a>
            <a href="#" className={styles.navLink}>
              ASBO Liquid
              <span className={styles.comingSoonBadge}>Coming Soon</span>
            </a>
            <a href="#" className={styles.navLink}>
              About
            </a>
            <a href="#" className={styles.navLink}>
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
              />
              <Search className={styles.searchIcon} size={20} />
            </div>
            <a href="#" className={styles.cartIcon}>
              <ShoppingCart size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
