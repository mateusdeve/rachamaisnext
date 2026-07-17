import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import HighlightBanner from "@/components/HighlightBanner";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <Hero />
      <HowItWorks />
      <Features />
      <HighlightBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
