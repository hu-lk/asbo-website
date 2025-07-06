"use client";

import Image from "next/image";
import styles from "./styles/ASBOLiquidPreview.module.css";

const liquidImagePath = "/assets/liquid_image.jpg";

export default function ASBOLiquidPreview() {
  return (
    <section id="liquid" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContent}>
            <Image
              src={liquidImagePath}
              alt="ASBO Liquid"
              width={300}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.card}>
              <span className={styles.comingSoonBadge}>Coming Soon</span>
              <h2 className={styles.title}>ASBO Cloth Washing Liquid</h2>
              <p className={styles.subtitle}>
                Experience deep cleaning performance with our premium washing
                liquid. Specially formulated for all fabric types.
              </p>
              <div className={styles.features}>
                <p className={styles.featuresTitle}>Key Features:</p>
                <ul className={styles.featuresList}>
                  <li className={styles.featureItem}>
                    <span className={styles.featureDot}></span>
                    <span>Deep cleaning formula</span>
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureDot}></span>
                    <span>Gentle on fabrics</span>
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureDot}></span>
                    <span>Fresh scent technology</span>
                  </li>
                </ul>
              </div>
              <div className={styles.emailSection}>
                <p className={styles.emailText}>
                  Be the first to know when we launch:
                </p>
                <div className={styles.emailInputWrapper}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.emailInput}
                  />
                  <button className={styles.notifyButton}>Notify Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
