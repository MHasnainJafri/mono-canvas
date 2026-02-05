import { motion } from "framer-motion";
import { Mail, Phone, Youtube, Linkedin, MessageCircle } from "lucide-react";

const services = [
  "AI Voice Agent",
  "AI Chatbots",
  "Custom AI Applications",
  "n8n Workflow Automation",
  "RAG Systems",
  "Business Process Automation",
];

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "AI Hub", href: "#ai-hub" },
  { name: "Offers", href: "#offers" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative px-6 md:px-12 lg:px-16 pt-20 pb-8 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16"
        >
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">MH</span>
              </div>
              <span className="text-foreground font-semibold text-lg">MrHaseeb</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Agentic AI Engineer
              <br />
              Top Rated on Upwork
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <MessageCircle size={18} className="text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin size={18} className="text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Youtube size={18} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@mrhaseeb.com" className="flex items-center gap-3 footer-link">
                  <Mail size={16} className="text-primary" />
                  hello@mrhaseeb.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 footer-link">
                  <Phone size={16} className="text-primary" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-6 w-full justify-center text-sm">
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider-gradient mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 MrHaseeb.com – Your Partner in AI-Driven Business Innovation</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;