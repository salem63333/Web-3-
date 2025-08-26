import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/mes",
    description: "Perfecto para pequeños negocios que inician su presencia digital",
    icon: Zap,
    popular: false,
    features: [
      "Sitio web básico (5 páginas)",
      "Diseño responsivo",
      "Optimización SEO básica",
      "Gestión de 2 redes sociales",
      "5 posts por semana",
      "Soporte por email",
      "Análisis mensual básico"
    ]
  },
  {
    name: "Professional",
    price: "$599",
    period: "/mes",
    description: "La solución completa para empresas en crecimiento",
    icon: Star,
    popular: true,
    features: [
      "Sitio web avanzado (10 páginas)",
      "E-commerce básico",
      "SEO avanzado + blog",
      "Gestión de 4 redes sociales",
      "15 posts por semana",
      "Campañas de Google Ads",
      "Email marketing (500 contactos)",
      "Soporte prioritario",
      "Análisis detallado semanal",
      "Consultoría estratégica mensual"
    ]
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "/mes",
    description: "Solución integral para empresas establecidas",
    icon: Crown,
    popular: false,
    features: [
      "Sitio web premium (ilimitado)",
      "E-commerce avanzado",
      "SEO premium + contenido",
      "Gestión completa de redes",
      "Contenido ilimitado",
      "Google, Meta y TikTok Ads",
      "Email marketing (2000 contactos)",
      "Automatización de marketing",
      "Branding completo",
      "Soporte 24/7",
      "Análisis en tiempo real",
      "Consultoría estratégica semanal"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Fondo con efecto nebulosa */}
      <div className="absolute inset-0 nebula-gradient opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Membresías
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos nuestros paquetes incluyen 
            soporte dedicado y resultados garantizados.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full glass-effect hover-lift transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/40 glow-effect scale-105' 
                  : 'border-primary/20 hover:border-primary/30'
              }`}>
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'bg-primary/30' : 'bg-primary/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary' : 'text-primary/80'
                    }`} />
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg hover-lift ${
                      plan.popular 
                        ? 'glow-effect' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Comenzar Ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas algo personalizado?</h3>
            <p className="text-muted-foreground mb-6">
              Creamos soluciones a medida para empresas con necesidades específicas. 
              Contáctanos para una consulta gratuita y cotización personalizada.
            </p>
            <Button variant="outline" size="lg" className="glass-effect hover-lift">
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

