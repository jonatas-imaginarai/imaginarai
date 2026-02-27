import { ContactButtonsHeroSection } from "../ContactButtonsHeroSection"
import icon1 from '../../assets/icons/i-30.png'

const styleHeroSection = 'flex flex-col min-h-[80%] gap-6 items-center justify-center text-center mt-2 border w-[100%] rounded-sm px-10 py-12 bg-gradient-to-b from-white to-blue-50'
const titleHero = 'font-bold text-3xl w-1/2'
const subTitleHero = 'w-1/2 text-stone-700'
const ctaHeroSection = 'duration-200 ease-in-out text-stone-700 rounded-full bg-sky-300 px-10 py-2 shadow-lg font-bold cursor-pointer hover:bg-sky-200 active:scale-[95%] active:bg-sky-100 active:shadow-xl text-sm'

export function HeroSection () {
    return (
        <div className={styleHeroSection}>
            <h2 className={titleHero}>Diseñamos Soluciones De Inteligencia Artificial a Medida Para Tu Negocio</h2>
            <h3 className={subTitleHero}>Sistemas Inteligentes Para Hacer Crecer Tu Empresa</h3>
            <button className={ctaHeroSection}>Agendar Reunión</button>
            <ContactButtonsHeroSection />

        </div>
    )
}