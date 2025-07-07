"use client";

import Image from "next/image";
import styles from "./styles/ASBOSparesProducts.module.css";
import { useState, useEffect } from "react";

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

const companies = [
  { name: "LG", logo: "/assets/lg_logo.png" },
  { name: "Samsung", logo: "/assets/samsung_logo.png" },
  { name: "IFB", logo: "/assets/IFB_logo.png" },
];

// Store manager info
const STORE_INFO = {
  location:
    "X Road, adjacent lane Indra-Nagendra theatre, Saroornagar, Sai Nagar, Saroor Nagar East, Kharmanghat, Hyderabad, Telangana",
  manager: "Santhosh",
  contact: "+91 9676626307",
};

export default function ASBOSparesProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(spareTypes);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

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

        <input
          id="searchInput"
          type="text"
          placeholder="Search spares..."
          className={styles.searchBox}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />

        <div className={styles.grid}>
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={styles.categoryCard}
              onClick={() => setSelectedProduct(product.name)}
            >
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

      {/* Modal for store info */}
      {selectedProduct && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{selectedProduct}</h3>
            <p>
              <strong>Store Manager:</strong> {STORE_INFO.manager}
            </p>
            <p>
              <strong>Contact:</strong> {STORE_INFO.contact}
            </p>
            <p>
              <strong>Location:</strong> {STORE_INFO.location}
            </p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
