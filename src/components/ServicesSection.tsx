import { motion } from "framer-motion";
import { Zap, Brain, MessageSquare, User, Quote } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "n8n AI Agent Workflows & Business Automation",
    description: "End-to-end workflow automation with intelligent AI agents that handle complex business processes.",
  },
  {
    icon: Brain,
    title: "Agentic AI & RAG Systems",
    description: "Custom retrieval-augmented generation systems that give your AI real knowledge and context.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Voice Agents",
    description: "Natural voice and chat interfaces that transform how customers interact with your business.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative px-6 md:px-12 lg:px-16 py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d12] to-[#0B0E14] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label text-primary mb-4 block">What I Offer</span>
          <h2 className="text-section-title">
            Agentic AI & n8n{" "}
            <span className="gradient-text">Automation Services</span>
          </h2>
        </motion.div>

        {/* Experience Card + Services Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Experience Card - Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 experience-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-foreground font-display">18</span>
                <span className="text-2xl md:text-3xl font-light text-muted-foreground">Year</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building enterprise-grade automation solutions and AI systems for startups and Fortune 500 companies alike.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <Quote size={20} className="text-primary/50 mb-3" />
              <p className="text-sm text-muted-foreground italic mb-4">
                "Haseeb transformed our operations with his n8n expertise. Our team saves 40+ hours weekly on manual tasks."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <User size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid - Right */}
          <div className="lg:col-span-7 grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="service-card group cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="icon-box-lg shrink-0">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;