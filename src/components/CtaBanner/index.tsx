type ColorVariant = "sky" | "emerald" | "violet" | "orange"

type CtaProps = {
  colorCta?: string
  titleCta: string
  descriptionCta: string
  colorButtonCta: ColorVariant
}

const colorStyles: Record<ColorVariant, {
  title: string
  button: string
}> = {
  sky: {
    title: "text-sky-400",
    button:
      "bg-white text-stone-700 hover:bg-sky-100 hover:text-sky-500 hover:border-sky-600 active:bg-sky-50"
  },
  emerald: {
    title: "text-emerald-300",
    button:
      "bg-white text-stone-700 hover:bg-emerald-100 hover:text-emerald-500 hover:border-emerald-600 active:bg-emerald-50"
  },
  violet: {
    title: "text-violet-400",
    button:
      "bg-white text-stone-700 hover:bg-violet-100 hover:text-violet-500 hover:border-violet-600 active:bg-violet-50"
  },
  orange: {
    title: "text-orange-400",
    button:
      "bg-white text-stone-700 hover:bg-orange-100 hover:text-orange-500 hover:border-orange-600 active:bg-orange-50"
  }
}

export function CtaBanner({
  colorCta = "bg-zinc-900",
  titleCta,
  descriptionCta,
  colorButtonCta
}: CtaProps) {
  const styles = colorStyles[colorButtonCta]

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className={`p-10 rounded-3xl text-white shadow-2xl ${colorCta}`}>
          
          <h3 className={`text-3xl font-bold mb-4 ${styles.title}`}>
            {titleCta}
          </h3>

          <p className="mb-6 text-white/90">
            {descriptionCta}
          </p>

          <button
            className={`
              duration-200 ease-in-out
              px-6 py-2 rounded-xl font-semibold
              border
              cursor-pointer
              active:scale-[0.95]
              ${styles.button}
            `}
          >
            Agendar Consultoria
          </button>

        </div>
      </div>
    </section>
  )
}