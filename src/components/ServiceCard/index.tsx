import rightArrowIcon from '../../assets/icons/right-arrow-50.png'

type ServiceCardProps = {
    titleServiceCard: string,
    descriptionServiceCard: string
}

export function ServiceCard({ titleServiceCard,descriptionServiceCard }: ServiceCardProps) {
    return (
        <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl duration-200 ease-in-out hover:bg-sky-50 hover:border-1 hover:border-sky-800 relative">
            <h3 className="text-xl font-semibold mb-4">{titleServiceCard}</h3>
            <p className="text-slate-600">
                {descriptionServiceCard}
            </p>
        </div>
    )
}