import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/home/Services";
import AwardAccordion from "@/components/home/AwardAccordion";
import NumberedBlocks from "@/components/home/NumberedBlocks";
import ImagePair from "@/components/home/ImagePair";
import RevenueSection from "@/components/home/RevenueSection";
import PortfolioStrip from "@/components/home/PortfolioStrip";

const TICKER = [
  "Branding",
  "Logo Design",
  "Web Design",
  "UX / UI",
  "eCommerce",
  "Art Direction",
  "Strategy",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={TICKER} className="bd-b py-3" />
      <Services />
      <AwardAccordion />
      <NumberedBlocks />
      <ImagePair />
      <RevenueSection />
      <PortfolioStrip />
    </>
  );
}
