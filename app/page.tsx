import Hero from "@/components/Hero";
import PromoStrip from "@/components/PromoStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesGrid from "@/components/ServicesGrid";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
import BrandStrip from "@/components/BrandStrip";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoStrip />
      <WhyChooseUs />
      <ServicesIntro />
      <ServicesGrid />
      <WorkProcess />
      <Testimonials />
      <BrandStrip />
      <CtaBanner />
    </>
  );
}
