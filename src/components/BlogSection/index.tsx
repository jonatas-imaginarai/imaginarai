import { ArrowUpRight } from "lucide-react"

type Post = {
  id: number
  category: string
  title: string
  description: string
  date: string
  author: string
}

const featuredPost: Post = {
  id: 1,
  category: "Arquitectura de Sistemas",
  title: "Cómo estructurar sistemas inteligentes para empresas en crecimiento",
  description:
    "Una guía práctica para diseñar infraestructura digital escalable, optimizar procesos y preparar tu empresa para crecer con tecnología.",
  date: "Octubre 24, 2023",
  author: "Jonatas Freire",
}

const posts: Post[] = [
  {
    id: 2,
    category: "Machine Learning",
    title: "Aplicando IA en procesos reales de negocio",
    description:
      "Casos concretos de automatización inteligente en empresas pequeñas y medianas.",
    date: "Oct 18",
    author: "Jonatas Freire",
  },
  {
    id: 3,
    category: "Engineering",
    title: "Cómo diseñar APIs robustas para automatización",
    description:
      "Buenas prácticas para crear integraciones confiables y escalables.",
    date: "Oct 12",
    author: "Jonatas Freire",
  },
  {
    id: 4,
    category: "UX & Strategy",
    title: "Tecnología simple para decisiones complejas",
    description:
      "Diseñando sistemas claros que acompañan el crecimiento empresarial.",
    date: "Oct 05",
    author: "Jonatas Freire",
  },
]

export function BlogSection() {
  return (
    <section className="w-full px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col text-center mb-16">

          <h2 className="text-4xl text-center md:text-5xl font-bold text-stone-700 tracking-tight w-3/5 self-center">
            Ideas sobre tecnología, sistemas e inteligencia aplicada
          </h2>
        </div>

        {/* Featured Post */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="w-full h-80 bg-zinc-100 rounded-2xl" />

          <div>
            <span className="text-sm text-zinc-500">
              {featuredPost.category} • {featuredPost.date}
            </span>

            <h3 className="text-3xl font-semibold mt-4 mb-4 text-stone-700 leading-tight">
              {featuredPost.title}
            </h3>

            <p className="text-zinc-600 mb-6 leading-relaxed">
              {featuredPost.description}
            </p>

            <button className="flex items-center text-stone-700 gap-2 text-sm font-bold hover:opacity-70 transition">
              Leer artículo <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-6 border-b border-zinc-200 pb-4 mb-12 text-sm text-zinc-500">
          <button className="hover:text-stone-700 font-medium hover:cursor-pointer">Todos</button>
          <button className="hover:text-stone-700 transition hover:cursor-pointer">Machine Learning</button>
          <button className="hover:text-stone-700 transition hover:cursor-pointer">Engineering</button>
          <button className="hover:text-stone-700 transition hover:cursor-pointer">UX & Strategy</button>
        </div>

        {/* Grid Posts */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="w-full h-48 bg-zinc-100 rounded-xl mb-6 transition group-hover:bg-zinc-200" />

              <span className="text-xs text-zinc-500">
                {post.category} • {post.date}
              </span>

              <h4 className="text-xl font-semibold text-stone-700 mt-3 mb-3 group-hover:opacity-80 transition">
                {post.title}
              </h4>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {post.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}