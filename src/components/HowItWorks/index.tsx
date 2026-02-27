type Step = {
    title: string
    description: string
}

const steps: Step[] = [
    {
        title: "Diagnóstico y Estrategia",
        description:
            "Analizamos tu operación actual e identificamos oportunidades de optimización, automatización y crecimiento",
    },
    {
        title: "Diseño de la Solución",
        description:
            "Diseñamos un sistema digital a medida, alineado con los objetivos y la realidad de tu empresa",
    },
    {
        title: "Implementación",
        description:
            "Desarrollamos e integramos la tecnología necesaria, asegurando eficiencia, claridad y resultados",
    },
    {
        title: "Optimización",
        description:
            "Medimos resultados, ajustamos procesos y acompañamos la evolución de tu negocio",
    },
]

export function HowItWorks() {
    return (
        <section className="w-full bg-white px-10">
            <div className="max-w-6xl mx-auto text-center">
                {/* Badge */}

                {/* Title */}
                <h2 className="text-4xl font-bold font-bold tracking-tight mb-6 text-stone-700">
                    4 Pasos Para Realizar <br className="hidden md:block" />
                    Tu Proyecto
                </h2>

                {/* Subtitle */}
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-32">
                    De la idea a la ejecución, sin complejidad innecesaria
                </p>

                {/* Steps */}
                <div className="relative">
                    {/* Horizontal Line */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-zinc-200" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* Icon circle */}
                                <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-700 mb-6">
                                    <p className="text-teal-200 font-bold text-3xl">{index+1}</p>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3 text-stone-700">{step.title}</h3>

                                {/* Description */}
                                <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}