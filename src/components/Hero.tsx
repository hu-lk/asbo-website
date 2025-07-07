"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles/Hero.module.css";

const hero_page_image_path = "/assets/hero_page_image.jpg";

export default function Hero() {
  const router = useRouter();

  const handleBrowseClick = () => {
    router.push("/spares");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
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
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Genuine Spare Parts for Every Appliance
            </h2>
            <p className={styles.subtitle}>
              Explore our wide selection of original spare parts for washing
              machines, dishwashers, microwaves, and refrigerators.
              Quality-tested components for long-lasting performance.
            </p>
            <button className={styles.shopButton} onClick={handleBrowseClick}>
              Browse Spare Parts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
