import ComingSoonSection from "@/components/ComingSoonSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SparesPreviewSection from "@/components/SparesPreviewSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ComingSoonSection />
      <SparesPreviewSection />
      <WhyChooseSection />
      <Footer />
    </>
  );
}
