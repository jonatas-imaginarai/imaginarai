import { ServiceCard } from "../ServiceCard"

const TitleProductHigh = 'IA para Clínicas Médicas'
const descriptionTitleProdHigh = 'Automatización Inteligente Para Optimizar Agenda, Atención y Gestión Interna.'

export function ServiceSection() {
    return (
        <section className="w-full">
            <div className="flex justify-center flex-col max-w-5xl mx-auto px-6">

                <div className="p-10 rounded-3xl bg-gradient-to-r from-zinc-800 to-zinc-700 text-white shadow-2xl">

                    <h3 className="text-3xl font-bold mb-4 text-sky-400">
                        {TitleProductHigh}
                    </h3>

                    <p className="mb-6 text-white">
                        {descriptionTitleProdHigh}
                    </p>

                    <button className="duration-200 ease-in-out bg-white text-stone-700 px-6 py-2 rounded-xl font-semibold hover:bg-sky-100 cursor-pointer active:scale-[95%] active:bg-sky-50 hover:text-sky-400 border-1 hover:border-sky-600">
                        Ver Producto
                    </button>

                </div>

            </div>

            <section className="w-full pt-12 bg-white">
                <div className="max-w-7xl mx-auto px-10">

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <ServiceCard
                            titleServiceCard = 'Desarrollo de Web Apps'
                            descriptionServiceCard = 'Creamos Aplicaciones Web Modernas, Rápidas y Escalables.'
                        />

                        {/* Card 2 */}
                        <ServiceCard
                            titleServiceCard = 'Automatización con IA'
                            descriptionServiceCard = 'Convertimos Procesos Manuales en Sistemas Inteligentes que Operan 24/7.'
                        />

                        {/* Card 3 */}
                        <ServiceCard
                            titleServiceCard = 'Soluciones de IA a Medida'
                            descriptionServiceCard = 'Sistemas de IA Diseñados Específicamente para Resolver los Problemas de Tu Negocio.'
                        />
                    </div>

                </div>
            </section>
        </section>
    )
}