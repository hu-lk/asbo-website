"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

const hero_page_image_path = "/assets/hero_page_image.jpg";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Premium Washing Machine Parts</h2>
            <p className={styles.subtitle}>
              Discover genuine ASBO spares for all major washing machine brands.
              Quality parts for reliable performance.
            </p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src={hero_page_image_path}
                alt="ASBO Spares"
                width={600}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
