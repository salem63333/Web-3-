import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="process">
          <Process />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
