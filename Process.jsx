import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Target, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: "Consulta Inicial",
    description: "Analizamos tu negocio, objetivos y audiencia para crear una estrategia personalizada.",
    details: [
      "Auditoría digital completa",
      "Análisis de competencia",
      "Definición de objetivos",
      "Identificación de audiencia"
    ]
  },
  {
    icon: Target,
    title: "Estrategia Personalizada",
    description: "Desarrollamos un plan detallado con tácticas específicas para alcanzar tus metas.",
    details: [
      "Plan de marketing integral",
      "Calendario de contenidos",
      "Estrategia de branding",
      "Roadmap de desarrollo"
    ]
  },
  {
    icon: Rocket,
    title: "Desarrollo e Implementación",
    description: "Ejecutamos la estrategia con precisión, creando y lanzando todas las soluciones digitales.",
    details: [
      "Desarrollo web profesional",
      "Creación de contenido",
      "Configuración de campañas",
      "Implementación de herramientas"
    ]
  },
  {
    icon: TrendingUp,
    title: "Optimización Continua",
    description: "Monitoreamos, analizamos y optimizamos constantemente para maximizar los resultados.",
    details: [
      "Análisis de métricas",
      "A/B testing continuo",
      "Optimización de campañas",
      "Reportes detallados"
    ]
  }
];

const Process = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Fondo con imagen espacial */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro proceso probado garantiza resultados excepcionales. 
            Desde la consulta inicial hasta la optimización continua, te acompañamos en cada paso.
          </p>
        </motion.div>
        
        {/* Proceso en desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Número del paso */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary z-10">
                    {index + 1}
                  </div>
                  
                  <Card className="glass-effect hover-lift border-primary/20 hover:border-primary/40 transition-all duration-300 pt-12">
                    <CardContent className="text-center p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Proceso en móvil */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                {/* Número del paso */}
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                  {index + 1}
                </div>
                
                <Card className="flex-1 glass-effect hover-lift border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Flecha conectora */}
              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto glow-effect">
            <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu presencia digital.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-lift glow-effect"
            >
              Agendar Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

