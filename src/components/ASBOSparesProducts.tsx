"use client";

import Image from "next/image";
import styles from "./styles/ASBOSparesProducts.module.css";
import { useState, useEffect } from "react";

// Arrays for spare types and their images
const spareTypes = [
  { name: "Door lock", image: "/assets/stands.jpg" },
  { name: "Single Inlet valve", image: "/assets/stands.jpg" },
  { name: "Double Inlet valve", image: "/assets/stands.jpg" },
  { name: "3 way Inlet valve", image: "/assets/stands.jpg" },
  { name: "Sensor", image: "/assets/stands.jpg" },
  { name: "Drain motor", image: "/assets/stands.jpg" },
  { name: "Single drain pump", image: "/assets/stands.jpg" },
  { name: "Double drain pump", image: "/assets/stands.jpg" },
  { name: "Inlet pipe 1.5m", image: "/assets/stands.jpg" },
  { name: "Inlet pipe 2.3m", image: "/assets/stands.jpg" },
  { name: "Outlet pipe", image: "/assets/stands.jpg" },
  { name: "Door handle", image: "/assets/stands.jpg" },
  { name: "Dampers", image: "/assets/stands.jpg" },
  { name: "Suspension rods", image: "/assets/stands.jpg" },
  { name: "Gear box", image: "/assets/stands.jpg" },
  { name: "Triangle lg,samsung,ifb", image: "/assets/stands.jpg" },
];

// Arrays for companies and their logos
const companies = [
  { name: "LG", logo: "/assets/lg_logo.png" },
  { name: "Samsung", logo: "/assets/samsung_logo.png" },
  { name: "IFB", logo: "/assets/IFB_logo.png" },
];

export default function ASBOSparesProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(spareTypes);

  useEffect(() => {
    const input = document.getElementById("searchInput") as HTMLInputElement;
    if (input) {
      const handleInput = () => setSearchTerm(input.value.toLowerCase());
      input.addEventListener("input", handleInput);
      return () => input.removeEventListener("input", handleInput);
    }
  }, []);

  useEffect(() => {
    setFilteredProducts(
      spareTypes.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      )
    );
  }, [searchTerm]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ASBO Spares Products</h2>
          <p className={styles.subtitle}>
            Explore our wide range of genuine spare parts
          </p>
        </div>

        <div className={styles.grid}>
          {filteredProducts.map((product, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={`${product.name}`}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>{product.name}</h3>
                <p className={styles.categoryDescription}>
                  High-quality {product.name.toLowerCase()} for reliable
                  performance.
                </p>
                <div className={styles.companyLinks}>
                  <h3 className={styles.companyTitle}>Available companies:</h3>
                  {companies.map((company, idx) => (
                    <a href="#" key={idx} className={styles.companyLink}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={50}
                        height={50}
                        className={styles.companyLogo}
                      />
                      {company.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
