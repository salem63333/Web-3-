import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, 
  Share2, 
  TrendingUp, 
  Palette, 
  Target, 
  Video,
  Code,
  Megaphone
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web Completo",
    description: "Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.",
    features: ["Diseño Responsivo", "Optimización SEO", "E-commerce", "CMS Personalizado"]
  },
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description: "Estrategias de contenido que construyen comunidades y generan engagement auténtico.",
    features: ["Creación de Contenido", "Community Management", "Análisis de Métricas", "Estrategia de Marca"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Campañas integrales que maximizan tu ROI y aceleran el crecimiento de tu negocio.",
    features: ["Email Marketing", "Marketing de Contenidos", "Automatización", "Analytics Avanzado"]
  },
  {
    icon: Palette,
    title: "Branding y Diseño",
    description: "Identidades visuales únicas que comunican los valores de tu marca de manera impactante.",
    features: ["Diseño de Logo", "Identidad Corporativa", "Material Gráfico", "Guías de Marca"]
  },
  {
    icon: Target,
    title: "Google Ads & Meta Ads",
    description: "Campañas publicitarias optimizadas que generan leads cualificados y ventas directas.",
    features: ["Investigación de Keywords", "Optimización de Campañas", "A/B Testing", "Reporting Detallado"]
  },
  {
    icon: Video,
    title: "TikTok Ads",
    description: "Publicidad creativa en TikTok que conecta con audiencias jóvenes y genera viralidad.",
    features: ["Contenido Viral", "Targeting Avanzado", "Creativos Optimizados", "Análisis de Tendencias"]
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones digitales completas para impulsar tu negocio hacia el éxito. 
            Desde la creación hasta la optimización, cubrimos todas tus necesidades digitales.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass-effect hover-lift border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect glow-effect">
            <Megaphone className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">¿Listo para transformar tu negocio?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

