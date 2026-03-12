import { NavBar } from '../../components/NavBar'
import { HeroSection } from '../../components/HeroSection'
import { ServiceSection } from '../../components/ServiceSection'
import { PortfolioSection } from '../../components/PortfolioSection'
import { CtaBanner } from '../../components/CtaBanner'
import { HowItWorks } from '../../components/HowItWorks'
import { BlogSection } from '../../components/BlogSection'
import { ContactSection } from '../../components/ContactSection'
import { Footer } from '../../components/Footer'
import { Separator } from '../../components/Separator'
import { TeamSectionV2 } from '../../components/TeamSectionV2'

export const Home = () => {
    return (
        <>
            <div className='h-screen w-screen px-10 flex flex-col h-screen'>
                <NavBar />
                <HeroSection />
            </div>
            <Separator nameSeparator='Servicios' />
            <ServiceSection />
            <Separator nameSeparator='Portfolio' />
            <PortfolioSection />
            <CtaBanner
                colorCta='bg-gradient-to-r from-zinc-800 to-zinc-700'
                titleCta='Haz Crecer Tu Negocio Con Soluciones de IA a Medida'
                descriptionCta='Implementamos Tecnología Para Que Puedas Enfocarte En Hacer Crecer Tu Negocio, Mientras Los Sistemas Trabajan Por Ti'
                colorButtonCta='emerald'
            />
            <Separator nameSeparator='Cómo Funciona?' />
            <HowItWorks />
            <Separator nameSeparator='Blog' />
            <BlogSection />
            <Separator nameSeparator='Team' />
            <TeamSectionV2 />
            <CtaBanner
                colorCta='bg-gradient-to-r from-zinc-800 to-zinc-700'
                titleCta='Haz Crecer Tu Negocio Con Soluciones Digitales a Medida'
                descriptionCta='Implementamos Tecnología Para Que Puedas Enfocarte En Hacer Crecer Tu Negocio, Mientras Los Sistemas Trabajan Por Ti'
                colorButtonCta='violet'
            />
            <ContactSection />
            <Footer />
        </>
    )
}