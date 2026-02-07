import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 sm:pt-40">
        <AboutSection />
        <TechStackSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
