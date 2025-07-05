"use client";

import { FaMedal, FaCheckCircle, FaHeadset } from "react-icons/fa";
import styles from "./styles/WhyChooseASBO.module.css";

export default function WhyChooseASBO() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose ASBO</h2>
          <p className={styles.subtitle}>
            We&#39;re committed to providing the highest quality washing machine
            parts and products
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaMedal className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Quality Assurance</h3>
            <p className={styles.cardDescription}>
              All our products undergo rigorous testing to ensure they meet the
              highest standards of quality and durability.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCheckCircle className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Genuine Parts</h3>
            <p className={styles.cardDescription}>
              We only stock genuine parts that are compatible with all major
              washing machine brands for reliable performance.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaHeadset className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Expert Support</h3>
            <p className={styles.cardDescription}>
              Our team of experts is always available to help you find the right
              parts and provide installation guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
