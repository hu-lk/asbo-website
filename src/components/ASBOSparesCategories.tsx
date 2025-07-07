"use client";

import Image from "next/image";
import styles from "./styles/ASBOSparesCategories.module.css";
import Link from "next/link";

const inlet_outlet_image = "/assets/inlet_outlet.jpg";
const shock_absorbers_image = "/assets/shock_absorbers.jpg";
const stabilizers_image = "/assets/stands.jpg";

export default function ASBOSparesCategories() {
  return (
    <section id="spares" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Browse ASBO Spares Categories</h2>
          <p className={styles.subtitle}>
            Find the exact washing machine parts you need from our extensive
            collection of genuine spares
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.categoryCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={shock_absorbers_image}
                alt="Shock Absorbers"
                width={400}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryTitle}>Shock Absorbers</h3>
              <p className={styles.categoryDescription}>
                High-quality shock absorbers to reduce vibration and noise
                during spin cycles.
              </p>
              <a href="/spares" className={styles.exploreLink}>
                Explore Products
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={inlet_outlet_image}
                alt="Inlet/Outlet Pipes"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryTitle}>Inlet/Outlet Pipes</h3>
              <p className={styles.categoryDescription}>
                Durable pipes and hoses for reliable water flow and drainage
                systems.
              </p>
              <a href="/spares" className={styles.exploreLink}>
                Explore Products
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={stabilizers_image}
                alt="Stands"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryTitle}>Stands</h3>
              <p className={styles.categoryDescription}>
                Precision-engineered stands to keep your washing machine
                balanced and secure.
              </p>
              <a href="/spares" className={styles.exploreLink}>
                Explore Products
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.viewAllButtonWrapper}>
          <Link href="/spares" className={styles.viewAllButton}>
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
