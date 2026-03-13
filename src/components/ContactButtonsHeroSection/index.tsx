import { ContactButtonComp } from "../ContactButtonComp"
import iconLinkedin from '../../assets/icons/icons8-linkedin.svg'
import iconInstagram from '../../assets/icons/icons8-instagram-50.webp'
import iconWhatsapp from '../../assets/icons/icons8-whatsapp-100.png'
import iconEmail from '../../assets/icons/icons8-email-50.webp'

const styleContactButtonsHeroSection = 'flex items-center justify-center gap-2'
const styleLineContactButtonsHeroSection = 'border w-32 text-center'

export function ContactButtonsHeroSection () {
    return (
        <div className={styleContactButtonsHeroSection}>
            <hr className={styleLineContactButtonsHeroSection}/>
            <ContactButtonComp hrefLink='https://www.linkedin.com/in/jonatas-freire-giordano-3424bb3b2/' imgIconContactPath={iconLinkedin} />
            <ContactButtonComp hrefLink='https://www.instagram.com/jonatas.imaginar.ai/' imgIconContactPath={iconInstagram} />
            <ContactButtonComp hrefLink='https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa' imgIconContactPath={iconWhatsapp} />
            <ContactButtonComp hrefLink='https://mail.google.com/mail/?view=cm&fs=1&to=jonatas@imaginarai.com&su=Consulta%20sobre%20automatización%20con%20IA&body=Hola%20quiero%20saber%20cómo%20podrían%20ayudar%20a%20mi%20empresa' imgIconContactPath={iconEmail} />
            <hr className={styleLineContactButtonsHeroSection}/>
        </div>
    )
}