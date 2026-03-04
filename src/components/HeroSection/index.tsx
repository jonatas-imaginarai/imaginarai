import { ContactButtonsHeroSection } from "../ContactButtonsHeroSection"
import DancingLetters from "../dancing-letters"
import { AuroraText } from "../ui/aurora-text"
import { FlickeringGrid } from "../ui/flickering-grid"

const styleHeroSection = 'bg-background relative flex flex-col min-h-[80%] gap-6 items-center justify-center text-center mt-2 border w-[100%] rounded-sm px-10 py-12 bg-gradient-to-b from-white to-blue-50'
const titleHero = 'font-bold text-stone-700 text-xl w-[80%]'
/* const subTitleHero = 'w-1/2 text-stone-700' */
const ctaHeroSection = 'duration-200 ease-in-out text-stone-700 rounded-full bg-sky-300 px-10 py-2 shadow-lg font-bold cursor-pointer hover:bg-sky-200 active:scale-[95%] active:bg-sky-100 active:shadow-xl text-sm'

export function HeroSection() {
    return (
        <div className={styleHeroSection}>
            <FlickeringGrid
                className="absolute pointer-events-none w-full inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
                squareSize={4}
                gridGap={6}
                color="#80ccff"
                maxOpacity={0.3}
                flickerChance={0.1}
                height={800}
            />
            <DancingLetters
                text='imaginar.ai'
            />
            <h2 className={titleHero}>Soluciones de <AuroraText>Inteligencia Artificial</AuroraText> a Medida Para Tu Negocio</h2>
            {/* <h3 className={subTitleHero}>Sistemas Inteligentes Para Hacer Crecer Tu Empresa</h3> */}
            <button className={ctaHeroSection}>Agendar Reunión</button>
            <ContactButtonsHeroSection />

        </div>
    )
}