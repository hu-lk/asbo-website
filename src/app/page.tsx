"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ASBOLiquidPreview from "@/components/ASBOLiquidPreview";
import ASBOSparesCategories from "@/components/ASBOSparesCategories";
import WhyChooseASBO from "@/components/WhyChooseASBO";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ASBOLiquidPreview />
      <ASBOSparesCategories />
      <WhyChooseASBO />
      <Footer />
    </>
  );
}
