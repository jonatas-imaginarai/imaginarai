import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react"
import WhatsappIcon from '../../assets/icons/icons8-whatsapp-100.png'

export function ContactSection() {
  return (
    <section className="w-full bg-white mt-20 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP AREA */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">

          {/* LEFT SIDE */}
          <div id='contacto' className="scroll-mt-12">
            <h2 className="text-4xl text-stone-700 md:text-5xl font-bold tracking-tight mb-6">
              Hablemos sobre el crecimiento de tu empresa
            </h2>

            <p className="text-zinc-600 mb-10 leading-relaxed max-w-md">
              Si estás buscando optimizar procesos, implementar automatización o
              integrar inteligencia artificial en tu operación, podemos empezar
              con una conversación estratégica.
            </p>

            {/* BENEFITS */}
            <ul className="space-y-4 text-zinc-700 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-300" />
                Asesoramiento personalizado
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-300" />
                Respuesta rápida
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-teal-300" />
                Enfoque estratégico y técnico
              </li>
            </ul>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jonatas.imaginar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/jonatas-freire-giordano-3424bb3b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:jonatas@imaginarai.com"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              ><img src={WhatsappIcon} alt="Whatsapp Jonatas Freire Giordano" className='size-7' />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
            <form className="space-y-6">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full text-sm px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-sm px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition"
                />
              </div>

              <textarea
                placeholder="Cuéntame sobre tu proyecto"
                rows={5}
                className="w-full px-4 py-3 text-sm rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition"
              />

              <button
                type="submit"
                className="w-full bg-black text-sm text-teal-200 py-3 rounded-full font-medium hover:opacity-90 transition active:scale-95 cursor-pointer bg-zinc-700"
              >
                Enviar Mensaje
              </button>

            </form>
          </div>
        </div>

        {/* BOTTOM CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <a href='mailto:jonatas@imaginarai.com' target='_blank' rel="noopener noreferrer" className="border border-zinc-200 rounded-xl p-6 cursor-pointer hover:shadow-md hover:bg-teal-100 active:bg-teal-50 active:scale-[98%]">
            <Mail className="w-6 h-6 mb-4 text-stone-700" />
            <h4 className="font-semibold mb-2 text-stone-700">Email</h4>
            <p className="text-zinc-600 text-sm">
              jonatas@imaginarai.com
            </p>
          </a>

          <a href='https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa' target='_blank' rel="noopener noreferrer" className="border border-zinc-200 rounded-xl p-6 cursor-pointer hover:shadow-md hover:bg-teal-100 active:bg-teal-50 active:scale-[98%]">
            <Phone className="w-6 h-6 mb-4 text-stone-700" />
            <h4 className="font-semibold mb-2 text-stone-700">WhatsApp</h4>
            <p className="text-zinc-600 text-sm">
              +54 11 2557 1622
            </p>
          </a>

          <div className="border border-zinc-200 rounded-xl p-6 hover:shadow-md hover:bg-teal-100">
            <MapPin className="w-6 h-6 mb-4 text-stone-700" />
            <h4 className="font-semibold mb-2 text-stone-700">Ubicación</h4>
            <p className="text-zinc-600 text-sm">
              Buenos Aires, Argentina
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}