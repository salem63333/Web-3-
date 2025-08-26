import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import spaceImage1 from '../assets/1000822861.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo espacial dinámico */}
      <div 
        className="absolute inset-0 space-gradient"
        style={{
          backgroundImage: `url(${spaceImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 nebula-gradient" />
      
      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full pulse-glow"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full pulse-glow"
          animate={{
            y: [10, -10, 10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent rounded-full pulse-glow"
          animate={{
            x: [-5, 5, -5],
            y: [-5, 5, -5],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Innovación Digital</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight"
        >
          WebNovaForge
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Forjando el futuro digital con servicios completos de desarrollo web, 
          marketing digital y branding que impulsan tu negocio hacia el éxito.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="group px-8 py-6 text-lg hover-lift glow-effect"
          >
            Explorar Servicios
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg glass-effect hover-lift border-primary/30 hover:border-primary/60"
          >
            Ver Portfolio
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-sm text-muted-foreground"
        >
          <p>Scroll para descubrir más</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 mx-auto w-6 h-10 border border-primary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

