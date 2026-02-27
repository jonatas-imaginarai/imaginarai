import { ProductCardOne } from "../product-card-01"

const stylePortfolioSection = 'w-full flex flex-col px-10 mb-36'
const gridPortfolio = 'grid md:grid-cols-3 gap-8'

export function PortfolioSection() {
    return (
        <div className={stylePortfolioSection}>

            <div className={gridPortfolio}>
                <ProductCardOne
                    nameWork="Rudolf"
                    descriptionWork1 = '- E-Commerce de Productos Agroecológicos'
                    descriptionWork2 = '- Dashboard con Métricas en Tiempo Real'
                    descriptionWork3 = '- Gestión de Inventario con Alertas Automáticas'
                    descriptionWork4 = '- Integración de métodos de pago y gestión de envíos'
                    highWork="WebApp"
                    imageWork='https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226'
                    finishedWork = {false}
                />
                <ProductCardOne
                    nameWork="Dois Mundos"
                    descriptionWork1='- Desarrollo de Sistema Completo de Facturación Automatizada'
                    descriptionWork2='- Integración con Sistemas Internos y Bases de Datos'
                    descriptionWork3='- Extracción Automática de Información Desde Documentos'
                    descriptionWork4='- Detección de Inconsistencias y Alertas Automatizadas'
                    highWork="AI Automation"
                    imageWork='https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226'
                    finishedWork = {false}
                />
                <ProductCardOne
                    nameWork="La Fiesta de las Flores"
                    descriptionWork1 = '- E-Commerce de Roupas'
                    descriptionWork2 = '- Dashboard con Métricas en Tiempo Real'
                    descriptionWork3 = '- Gestión de Inventario y Recuperación automática de carritos abandonados'
                    descriptionWork4 = '- Integración de métodos de pago y gestión de envíos'
                    highWork="WebApp"
                    imageWork='https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226'
                    finishedWork = {false}
                />

            </div>

        </div>
    )
}