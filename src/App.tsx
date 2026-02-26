import { NavBar } from '../src/components/NavBar'
import { HeroSection } from './components/HeroSection'
import { ServiceSection } from './components/ServiceSection'
import { PortfolioSection } from './components/PortfolioSection'
import { CtaBanner } from './components/CtaBanner'
import { HowItWorks } from './components/HowItWorks'
import { BlogSection } from './components/BlogSection'
import { TeamSection } from './components/TeamSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'


function App() {


  return (
    <>
      <div className='h-screen w-screen px-10 flex flex-col'>
        <NavBar />
        <HeroSection />
      </div>
      <ServiceSection />
      <PortfolioSection />
      <CtaBanner
        colorCta='bg-gradient-to-r from-zinc-800 to-mist-800'
        titleCta='Haz Crecer Tu Negocio Con Soluciones Digitales a Medida'
        descriptionCta='Implementamos Tecnología Para Que Puedas Enfocarte En Hacer Crecer Tu Negocio, Mientras Los Sistemas Trabajan Por Ti'
        colorButtonCta='orange'
      />
      <HowItWorks />
      <BlogSection />
      <TeamSection />
      <ContactSection />
      <CtaBanner
        colorCta='bg-gradient-to-r from-zinc-800 to-mist-800'
        titleCta='Haz Crecer Tu Negocio Con Soluciones Digitales a Medida'
        descriptionCta='Implementamos Tecnología Para Que Puedas Enfocarte En Hacer Crecer Tu Negocio, Mientras Los Sistemas Trabajan Por Ti'
        colorButtonCta='emerald'
      />
      <Footer />


    </>
  )
}

export default App
