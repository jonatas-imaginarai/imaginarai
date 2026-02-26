
const navBarStyle = 'flex justify-between items-center py-4 relative'
const logoStyle = 'font-bold text-xl'
const aiLogo = 'text-sky-400'
const linksBar = 'flex gap-8 absolute left-1/2 -translate-x-1/2'
const aLink = 'duration-200 ease-in-out text-stone-700 hover:bg-sky-200 hover:shadow-md active:scale-[95%] active:bg-sky-100 px-4 py-2 rounded-2xl hover:text-stone-900'
const ctaButtonNavBar = 'duration-200 ease-in-out text-stone-700 rounded-full shadow-md px-8 py-2 hover:bg-emerald-200 cursor-pointer hover:shadow-lg active:scale-[95%] active:bg-emerald-100'

export function NavBar() {
    return (
        <>

            <div className={navBarStyle}>
                <h1 className={logoStyle}><a href="">imaginar<span className={aiLogo}>.ai</span></a></h1>
                <div className={linksBar}>
                    <a href="" className={aLink}>Servicios</a>
                    <a href="" className={aLink}>Portfolio</a>
                    <a href="" className={aLink}>About Me</a>
                    <a href="" className={aLink}>Contacto</a>
                </div>
                <button className={ctaButtonNavBar}>Contáctame</button>
            </div>
            
        </>
    )
}