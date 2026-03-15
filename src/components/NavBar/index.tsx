import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"


const navBarStyle = 'flex justify-between items-center py-4 relative text-sm scroll-mt-12'
const logoStyle = 'font-bold text-xl'
const aiLogo = 'text-sky-400'
const linksBar = 'hidden md:flex flex gap-4 absolute left-1/2 -translate-x-1/2'
const aLink = 'duration-200 ease-in-out text-stone-700 hover:bg-sky-200 hover:shadow-md active:scale-[95%] active:bg-sky-100 px-4 py-2 rounded-2xl hover:text-stone-900'
const ctaButtonNavBar = 'hidden md:flex duration-200 ease-in-out text-stone-700 rounded-full shadow-md px-8 py-2 hover:bg-emerald-200 cursor-pointer hover:shadow-lg active:scale-[95%] active:bg-emerald-100'

export function NavBar() {

    const [open, setOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }

        setOpen(false) // fecha o menu
    }

    return (
        <>

            <header id='navigationbar' className={navBarStyle}>
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

                <div className='md:hidden'>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>

                        <SheetContent side="right">
                            <nav className="flex flex-col gap-6 mt-10 items-center text-center py-16">

                                <div className='flex flex-col gap-4 absolute'>
                                    <a href="#servicios" className={aLink}>Servicios</a>
                                    <a href="#portfolio" className={aLink}>Portfolio</a>
                                    <a href="#blog" className={aLink}>Blog</a>
                                    <a href="#aboutme" className={aLink}>About</a>
                                    <a href="#contacto" className={aLink}>Contacto</a>
                                </div>
                                <a href="https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='mt-80 duration-200 ease-in-out text-stone-700 rounded-full shadow-md px-8 py-2 bg-emerald-200 cursor-pointer hover:shadow-lg active:scale-[95%] active:bg-emerald-100'>
                                    Contáctame
                                </a>

                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>


            </header >

        </>
    )
}