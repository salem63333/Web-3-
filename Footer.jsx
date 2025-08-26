import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Desarrollo Web', href: '#services' },
      { name: 'Redes Sociales', href: '#services' },
      { name: 'Marketing Digital', href: '#services' },
      { name: 'Branding', href: '#services' },
      { name: 'Google Ads', href: '#services' },
      { name: 'TikTok Ads', href: '#services' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestro Proceso', href: '#process' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonios', href: '#testimonials' },
      { name: 'Blog', href: '#blog' },
      { name: 'Carreras', href: '#careers' }
    ],
    soporte: [
      { name: 'Centro de Ayuda', href: '#help' },
      { name: 'Documentación', href: '#docs' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Estado del Servicio', href: '#status' },
      { name: 'Términos de Servicio', href: '#terms' },
      { name: 'Política de Privacidad', href: '#privacy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-background border-t border-primary/20">
      {/* Fondo con gradiente espacial */}
      <div className="absolute inset-0 space-gradient opacity-30" />
      <div className="absolute inset-0 nebula-gradient opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-gradient">WebNovaForge</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Forjamos el futuro digital de tu negocio con soluciones innovadoras 
                que combinan creatividad, tecnología y estrategia para generar resultados excepcionales.
              </p>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@webnovaforge.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ciudad Digital, Latinoamérica</span>
              </div>
            </motion.div>
          </div>

          {/* Enlaces de servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4 text-primary">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces de empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4 text-primary">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces de soporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4 text-primary">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © {currentYear} WebNovaForge. Todos los derechos reservados.
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-effect border border-primary/20 hover:border-primary/40 flex items-center justify-center group transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-primary/10"
        >
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ para impulsar el futuro digital de tu negocio
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

