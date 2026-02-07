import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServiceCards from "@/components/ServiceCards";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ClientsSection />
      <ServiceCards />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
