import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Membresías', href: '#pricing' },
    { name: 'Proceso', href: '#process' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-gradient">WebNovaForge</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              className="hover-lift glow-effect"
              onClick={() => scrollToSection('#contact')}
            >
              Comenzar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-effect"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                className="w-full hover-lift"
                onClick={() => scrollToSection('#contact')}
              >
                Comenzar Proyecto
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

