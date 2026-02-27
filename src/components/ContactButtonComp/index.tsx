type ContactButtonCompProps = {
    imgIconContactPath: string
}

const styleContactButton = 'transition duration-150 ease-in-out h-10 w-10 border border-2 rounded-full mt-4 cursor-pointer flex items-center justify-center hover:scale-[105%] hover:shadow-md hover:bg-cyan-100 active:scale-[95%] active:bg-cyan-50'
const styleIconContactButtonHeroSection = 'object-fill px-2 py-2'

export function ContactButtonComp ( {imgIconContactPath}:ContactButtonCompProps ) {
    return (
        <div>
            <button className={styleContactButton}>
                <img
                    src={imgIconContactPath}
                    alt="Contacto imaginar.ai"
                    className={styleIconContactButtonHeroSection}    
                />
            </button>
        </div>
    )
}