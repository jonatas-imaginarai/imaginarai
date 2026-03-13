import { useState } from "react";
import LinkedinIcon from '../../assets/icons/icons8-linkedin.svg'
import EmailIcon from '../../assets/icons/icons8-email-50.webp'
import InstagramIcon from '../../assets/icons/icons8-instagram-50.webp'
import WhatsappIcon from '../../assets/icons/icons8-whatsapp-100.png'
import { Link } from 'react-router'

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const services = [
    "AI Automation",
    "Desarrollo de Software",
    "Soluciones Personalizadas de IA",
    "Agentes de IA"
  ];

  const company = [
    {
      id: 1,
      name: "About Us",
      hrefFooter: '#aboutme'
    },
    {
      id: 2,
      name: "Portfolio",
      hrefFooter: '#portfolio'
    },
    {
      id: 3,
      name: "Blog",
      hrefFooter: '#blog'
    },
/*     "About Us",
    "Nuestro Equipo",
    "Portfolio",
    "Blog" */
  ];

  return (
    <footer className="bg-zinc-700 border-t border-neutral-200 mt-16">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-lg font-bold tracking-tight text-emerald-300">
                imaginar<span className="text-emerald-300">.ai</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-mist-300 leading-relaxed mb-6 max-w-[240px]">
              Automatizamos Tareas y Procesos Para Que Tu Negocio Crezca.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/jonatas-freire-giordano-3424bb3b2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-cyan-200 hover:text-white transition-all duration-200 active:bg-cyan-50 active:scale-[95%]"
              >
                <img src={LinkedinIcon} alt="Linkedin Jonatas Freire Giordano" className="object-fill w-6 h-6"/>
              </a>
              <a
                href="https://www.instagram.com/jonatas.imaginar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-cyan-200 hover:text-white transition-all duration-200 active:bg-cyan-50 active:scale-[95%]"
              >
                <img src={InstagramIcon} alt="Instagram Jonatas Freire Giordano" className="object-fill w-6 h-6"/>
              </a>
              <a
                href="mailto:jonatas@imaginarai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-cyan-200 hover:text-white transition-all duration-200 active:bg-cyan-50 active:scale-[95%]"
              >
                <img src={EmailIcon} alt="Email Jonatas Freire Giordano" className="object-fill w-6 h-6"/>
              </a>
              <a
                href='https://wa.me/5491125571622?text=Hola%20Quiero%20Agendar%20Una%20Reunión%20Para%20Buscar%20Soluciones%20Para%20Mi%20Empresa'
                aria-label="Whatsapp"
                className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-cyan-200 hover:text-white transition-all duration-200 active:bg-cyan-50 active:scale-[95%]"
              >
                <img src={WhatsappIcon} alt="Whatsapp Jonatas Freire Giordano" className="object-fill w-6 h-6"/>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="text-sm text-mist-300 hover:text-cyan-400 transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.hrefFooter}
                    className="text-sm text-mist-300 hover:text-cyan-400 transition-colors duration-150"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-mist-300 leading-relaxed mb-4">
              Recibe Los Últimos Insights Sobre IA y Novedades De La Agencia Directamente En Tu Correo
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex items-center bg-white border border-neutral-200 rounded-xl overflow-hidden focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10 transition-all duration-200">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-400"
                />
                <button
                  type="submit"
                  aria-label="Inscrever"
                  className="m-1 w-9 h-9 bg-zinc-700 hover:bg-neutral-700 text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:translate-x-0.5 flex-shrink-0 cursor-pointer"
                >
                  {submitted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {submitted && (
                <p className="text-xs text-emerald-600 font-medium">
                  ✓ Inscrito com sucesso!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 pt-7 flex flex-col sm:flex-row items-center sm:items-center justify-center gap-4">
          <p className="text-xs text-neutral-400">
            © Powered By <Link to='/' className='hover:text-cyan-400 transition-colors duration-150' >imaginar.ai</Link> 
          </p>
        </div>

      </div>
    </footer>
  );
};