import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AwardAccordion from "@/components/home/AwardAccordion";
import NumberedBlocks from "@/components/home/NumberedBlocks";
import ImagePair from "@/components/home/ImagePair";
import RevenueSection from "@/components/home/RevenueSection";
import PortfolioStrip from "@/components/home/PortfolioStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AwardAccordion />
      <NumberedBlocks />
      <ImagePair />
      <RevenueSection />
      <PortfolioStrip />
    </>
  );
}
