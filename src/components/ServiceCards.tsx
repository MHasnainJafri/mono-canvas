import { motion } from "framer-motion";
import { Bot, Globe, MessageSquare, Smartphone, ChevronRight, Code } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Autonomous AI Agents that will do the jobs automatically without human involvement. (Sales Agent, Social Media Agent, Development Agent, Customer Service Agents and more)",
  },
  {
    icon: Globe,
    title: "AI Website/Apps",
    description: "Custom AI SAAS Website or Apps solutions tailored with your needs. AI Productivity Tools, Assistant Apps, AI Integrations, Chatbots and more",
  },
  {
    icon: MessageSquare,
    title: "Custom AI Bots",
    description: "AI Bots like chatbot handling customers queries, Voice bot for cold calling or responding customer calls, and Video bots etc",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "React native mobile app using react native, js and expo and it will provide a slick, smooth, and responsive user interface",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Create custom mobile apps delivering immersive user experiences. Building responsive, user-friendly websites",
  },
  {
    icon: Code,
    title: "Full Stack Web Development",
    description: "Custom Website Development for Every Business with Strong front-end, back-end Technologies",
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
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

      <div className="max-w-7xl mx-auto lg:pl-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            <span className="border-b-2 border-foreground pb-1">
              Our AI & Software Development Specialties
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6">
            We specialize in Autonomous AI Agents, Generative AI Solutions, AI Integrations for Web & Mobile, 
            AI SaaS Development, and Custom AI Bots (Chat, Voice, Video) to transform B2B operations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <service.icon size={24} className="text-foreground" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-10 pt-6 border-t border-border/50">
                <a href="#portfolio" className="card-link group/link">
                  <span>View Projects</span>
                  <ChevronRight 
                    size={12} 
                    className="transition-transform duration-300 group-hover/link:translate-x-1" 
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">5+</span>
              <p className="text-stat-label mt-2">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">15+</span>
              <p className="text-stat-label mt-2">Projects Delivered</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">150K</span>
              <p className="text-stat-label mt-2">Daily Active Users</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">99.9%</span>
              <p className="text-stat-label mt-2">API Uptime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
