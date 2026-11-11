// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutOurRobot from "@/components/AboutOurRobot";
import Specifications from "@/components/Specifications";
import OurTeam from "@/components/OurTeam";
import FooterSections from "@/components/FooterSections";

export default function Home() {
  return (
    // Memanggil kelas latar belakang pendaran cahaya oranye figma terintegrasi
    <main className="min-h-screen bg-robot-sunburst overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <AboutOurRobot /> 
      <Specifications />
      <OurTeam />
      <FooterSections />
    </main>
  );
}
