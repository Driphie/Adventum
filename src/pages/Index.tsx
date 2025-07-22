import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanySection from "@/components/CompanySection";
import TeamCarousel from "@/components/TeamCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CompanySection />
      <TeamCarousel />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
