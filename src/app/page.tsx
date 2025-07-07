import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ASBOLiquidPreview from "@/components/ASBOLiquidPreview";
import ASBOSparesCategories from "@/components/ASBOSparesCategories";
import WhyChooseASBO from "@/components/WhyChooseASBO";
import Footer from "@/components/Footer";

// Metadata export for server-side rendering
export const metadata: Metadata = {
  title: "ASBO Home - Washing Machine Parts & Solutions",
  description:
    "Welcome to ASBO, your one-stop shop for washing machine spare parts and liquid solutions. Explore categories like shock absorbers, inlet pipes, and more.",
  keywords:
    "washing machine parts, washing machine solutions, shock absorbers, inlet pipes, appliance repair parts, ASBO home",
};

export default function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="liquid">
        <ASBOLiquidPreview />
      </div>
      <div id="spares">
        <ASBOSparesCategories />
      </div>
      <div id="about">
        <WhyChooseASBO />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
