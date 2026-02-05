import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 md:px-16 pt-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="text-vertical">Product designer</span>
      </motion.div>

      {/* Year - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-8 bottom-12 hidden lg:block"
      >
        <span className="text-vertical">2024</span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 lg:pl-12">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-12"
          >
            <div className="flex flex-col gap-1">
              <span className="text-stat-number">+200</span>
              <span className="text-stat-label">Project completed</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-stat-number">+50</span>
              <span className="text-stat-label">Startup raised</span>
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-hero">Hello</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              — It's D.Nova a design wizard
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <a href="#about" className="scroll-indicator group">
              <span>Scroll down</span>
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg lg:max-w-none lg:w-[120%] lg:-mr-16">
            <img
              src={portrait}
              alt="D.Nova - Product Designer"
              className="w-full h-auto object-cover grayscale"
            />
            {/* Subtle gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
