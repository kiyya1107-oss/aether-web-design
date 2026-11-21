import Hero from "@/components/Hero";
import AboutOurRobot from "@/components/AboutOurRobot";
import Specifications from "@/components/Specifications";
import OurTeam from "@/components/OurTeam";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSections from "@/components/FooterSections";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#110502]">
      <Hero />
      <AboutOurRobot />
      <Specifications />
      <OurTeam />
      <SponsorsSection />
      <FooterSections />
    </main>
  );
}
