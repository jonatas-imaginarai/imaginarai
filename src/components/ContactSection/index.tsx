import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP AREA */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
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
                <div className="w-5 h-5 rounded-full bg-zinc-200" />
                Asesoramiento personalizado
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-200" />
                Respuesta rápida
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-200" />
                Enfoque estratégico y técnico
              </li>
            </ul>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-black hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-black hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:seuemail@dominio.com"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-black hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-black hover:text-white transition"
              >
                <Github className="w-5 h-5" />
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
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              <textarea
                placeholder="Cuéntame sobre tu proyecto"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:opacity-90 transition active:scale-95"
              >
                Enviar mensaje
              </button>

            </form>
          </div>
        </div>

        {/* BOTTOM CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-zinc-200 rounded-xl p-6">
            <Mail className="w-6 h-6 mb-4" />
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-zinc-600 text-sm">
              hola@tuempresa.com
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <Phone className="w-6 h-6 mb-4" />
            <h4 className="font-semibold mb-2">Teléfono</h4>
            <p className="text-zinc-600 text-sm">
              +54 11 1234 5678
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <MapPin className="w-6 h-6 mb-4" />
            <h4 className="font-semibold mb-2">Ubicación</h4>
            <p className="text-zinc-600 text-sm">
              Buenos Aires, Argentina
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}