import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hola@webnovaforge.com",
    description: "Respuesta en menos de 24 horas"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+1 (555) 123-4567",
    description: "Lun - Vie, 9:00 AM - 6:00 PM"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Ciudad Digital",
    description: "Servicios en toda Latinoamérica"
  },
  {
    icon: Clock,
    title: "Horario",
    value: "24/7 Soporte",
    description: "Siempre disponibles para ti"
  }
];

const Contact = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Fondo con gradiente espacial */}
      <div className="absolute inset-0 space-gradient opacity-50" />
      <div className="absolute inset-0 nebula-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para transformar tu presencia digital? Contáctanos y comencemos 
            a forjar el futuro de tu negocio juntos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Hablemos de tu proyecto</h3>
              <p className="text-muted-foreground mb-8">
                Estamos aquí para ayudarte a alcanzar tus objetivos digitales. 
                Contáctanos a través de cualquiera de estos medios.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover-lift border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-primary font-medium mb-1">{info.value}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* CTA adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold">Consulta Gratuita</h4>
                  <p className="text-sm text-muted-foreground">30 minutos de estrategia sin costo</p>
                </div>
              </div>
              <Button className="w-full hover-lift">
                Agendar Consulta Ahora
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-primary/20 glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                    <Input 
                      placeholder="Tu nombre"
                      className="glass-effect border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input 
                      placeholder="Nombre de tu empresa"
                      className="glass-effect border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    className="glass-effect border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Teléfono</label>
                  <Input 
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="glass-effect border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Servicios de interés</label>
                  <select className="w-full p-3 rounded-lg glass-effect border border-primary/20 focus:border-primary/40 bg-background text-foreground">
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="social">Redes Sociales</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="branding">Branding</option>
                    <option value="ads">Publicidad Digital</option>
                    <option value="all">Todos los servicios</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                    rows={4}
                    className="glass-effect border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <Button className="w-full py-6 text-lg hover-lift glow-effect group">
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

