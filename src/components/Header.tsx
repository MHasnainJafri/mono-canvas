import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = ["About Me", "Portfolio", "Services", "Blog"];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/80 backdrop-blur-sm"
    >
      {/* Logo */}
      <div className="flex items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-nav">
            {item}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a href="#contact" className="btn-cta group">
        <span>Book A Call</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.header>
  );
};

export default Header;
