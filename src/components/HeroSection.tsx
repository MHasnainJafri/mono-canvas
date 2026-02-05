import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import portrait from "@/assets/haseeb-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-16 pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E14] via-[#0B0E14] to-[#0d1a2d] pointer-events-none" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-label text-primary">Agentic AI Engineer • Top Rated on Upwork</span>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-hero">
              Partner with{" "}
              <span className="gradient-text">Muhammad Haseeb</span>
            </h1>
            <p className="text-body max-w-lg">
              Ready to go from POC to production with agentic AI? Let's discuss your automation needs and create n8n workflows that deliver measurable ROI.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://wa.me/1234567890" className="btn-primary">
              <MessageCircle size={18} />
              Start WhatsApp Chat
            </a>
            <a href="#booking" className="btn-secondary">
              <Calendar size={18} />
              Book 1-1 Meeting
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs text-muted-foreground">
                  {i}
                </div>
              ))}
            </div>
            <div>
              <p className="text-foreground font-medium">200+ Projects</p>
              <p className="text-muted-foreground text-sm">Delivered successfully</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 rounded-full blur-2xl" />
            
            {/* Portrait container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-cyan-400/20">
              <img
                src={portrait}
                alt="Muhammad Haseeb - Agentic AI Engineer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-xl"
            >
              <span className="text-sm font-medium text-foreground">✨ Available for Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;