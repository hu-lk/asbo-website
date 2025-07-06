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
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.logoText}>ASBO</h3>
            <p className={styles.description}>
              Premium washing machine parts and liquid solutions for optimal
              performance.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaLinkedinIn className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  ASBO Spares
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  ASBO Liquid
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.sectionTitle}>Categories</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link}>
                  Shock Absorbers
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Inlet/Outlet Pipes
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Stabilizers
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Motors & Pumps
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Control Panels
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span className={styles.contactText}>
                  123 Business Street, City, Country
                </span>
              </li>
              <li className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span className={styles.contactText}>+1 234 567 890</span>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span className={styles.contactText}>info@asbo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2025 ASBO. All rights reserved.</p>
          <div className={styles.paymentIcons}>
            <FaCcVisa className={styles.paymentIcon} />
            <FaCcMastercard className={styles.paymentIcon} />
            <FaCcPaypal className={styles.paymentIcon} />
            <FaCcApplePay className={styles.paymentIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
}
