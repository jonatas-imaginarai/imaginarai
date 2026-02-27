type TeamMember = {
  name: string
  role: string
  description: string
  image: string
}

const founder: TeamMember = {
  name: "Jonatas Freire",
  role: "Founder • AI Engineer",
  description: `
Sou desarrollador y especialista en sistemas inteligentes enfocados en crecimiento empresarial.
Mi trabajo combina ingeniería, automatización e inteligencia artificial aplicada para ayudar
a pequeñas y medianas empresas a escalar con claridad y estructura tecnológica sólida.

A lo largo de los años he trabajado construyendo aplicaciones web, sistemas de facturación
automatizada, soluciones de e-commerce y arquitecturas preparadas para integrar IA de forma real y práctica.

Mi enfoque no es solo técnico — es estratégico. Diseño tecnología que genera impacto medible.
  `,
  image: "/profile.jpg", // coloque sua imagem aqui
}

export function TeamSection() {
  return (
    <section className="w-full bg-white px-6 mb-36">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl text-stone-700 font-bold tracking-tight">
            Ingeniería Con Visión de Negócio
          </h2>
        </div>

        {/* Founder Card */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="w-full h-[420px] bg-zinc-100 rounded-2xl overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl text-stone-700 font-semibold mb-2">
              {founder.name}
            </h3>

            <p className="text-zinc-500 mb-8">
              {founder.role}
            </p>

            <div className="space-y-6 text-zinc-700 leading-relaxed">
              {founder.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}