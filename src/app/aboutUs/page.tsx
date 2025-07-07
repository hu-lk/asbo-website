"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>About ASBO</h1>
          <p className={styles.description}>
            ASBO is a premier provider of high-quality washing machine parts and
            liquid solutions, dedicated to enhancing the performance and
            longevity of your appliances. Founded by visionary entrepreneurs
            Pabbathi Santhosh and Korra Akhil, ASBO combines innovative
            technology with a commitment to customer satisfaction. With a
            passion for excellence, our founders have built a company that
            sources genuine spare parts and develops premium cleaning products,
            ensuring reliability and efficiency for households worldwide. Our
            mission is to empower users with top-tier solutions, backed by
            expert support and a customer-centric approach.
          </p>
          <p className={styles.description}>
            Under the leadership of Pabbathi Santhosh and Korra Akhil, ASBO
            continues to grow, focusing on sustainable practices and
            cutting-edge innovations. We take pride in our journey from a small
            startup to a trusted name in the appliance care industry, always
            striving to meet the evolving needs of our customers.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
