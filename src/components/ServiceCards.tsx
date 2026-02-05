import { motion } from "framer-motion";
import { Users, Settings, ChevronRight } from "lucide-react";

const ServiceCards = () => {
  return (
    <section id="services" className="relative px-6 md:px-16 lg:px-20 py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical">Services</span>
        <div className="divider-line-vertical h-16" />
      </motion.div>

      {/* Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="divider-line mb-16 origin-left max-w-7xl mx-auto lg:ml-24"
      />

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto lg:pl-16">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="service-card group"
          >
            {/* Icon */}
            <div className="mb-8">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Users size={24} className="text-foreground" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Why Better
                <br />
                Choose Us?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                We combine cutting-edge technology with human-centered design to deliver solutions that truly transform businesses.
              </p>
            </div>

            {/* Link */}
            <div className="mt-10 pt-6 border-t border-border/50">
              <a href="#about" className="card-link group/link">
                <span>About Us</span>
                <ChevronRight 
                  size={12} 
                  className="transition-transform duration-300 group-hover/link:translate-x-1" 
                />
              </a>
            </div>
          </motion.div>

          {/* Card 2 - Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="service-card group"
          >
            {/* Icon */}
            <div className="mb-8">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Settings size={24} className="text-foreground" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Our Services
                <br />
                to Help You
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                From AI-powered automation to bespoke digital experiences, we offer a comprehensive suite of services tailored to your needs.
              </p>
            </div>

            {/* Link */}
            <div className="mt-10 pt-6 border-t border-border/50">
              <a href="#services-detail" className="card-link group/link">
                <span>Our Services</span>
                <ChevronRight 
                  size={12} 
                  className="transition-transform duration-300 group-hover/link:translate-x-1" 
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">98%</span>
              <p className="text-stat-label mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">150+</span>
              <p className="text-stat-label mt-2">Team Members</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">35</span>
              <p className="text-stat-label mt-2">Countries Served</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">24/7</span>
              <p className="text-stat-label mt-2">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
