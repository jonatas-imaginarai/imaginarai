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
            <ContactButtonComp imgIconContactPath={iconLinkedin} />
            <ContactButtonComp imgIconContactPath={iconInstagram} />
            <ContactButtonComp imgIconContactPath={iconWhatsapp} />
            <ContactButtonComp imgIconContactPath={iconEmail} />
            <hr className={styleLineContactButtonsHeroSection}/>
        </div>
    )
}