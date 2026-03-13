import { Link } from 'react-router'


const navBarStyle = 'flex justify-between items-center py-4 relative text-sm'
const logoStyle = 'font-bold text-xl'
const aiLogo = 'text-sky-400'
const linksBar = 'flex gap-4 absolute left-1/2 -translate-x-1/2'
const aLink = 'duration-200 ease-in-out text-stone-700 hover:bg-sky-200 hover:shadow-md active:scale-[95%] active:bg-sky-100 px-4 py-2 rounded-2xl hover:text-stone-900'
const ctaButtonNavBar = 'duration-200 ease-in-out text-stone-700 rounded-full shadow-md px-8 py-2 hover:bg-emerald-200 cursor-pointer hover:shadow-lg active:scale-[95%] active:bg-emerald-100'

export function NavBar() {
    return (
        <>

            <div id='navigationbar' className={navBarStyle}>
                <Link to='/'><h1 className={logoStyle}><a href="">imaginar<span className={aiLogo}>.ai</span></a></h1></Link>
                <div className={linksBar}>
                    <a href="#servicios" className={aLink}>Servicios</a>
                    <a href="#portfolio" className={aLink}>Portfolio</a>
                    <a href="#blog" className={aLink}>Blog</a>
                    <a href="#aboutme" className={aLink}>About</a>
                    <a href="#contacto" className={aLink}>Contacto</a>
                </div>
                <a href="https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaButtonNavBar}>
                        Contáctame
                </a>
            </div>

        </>
    )
}