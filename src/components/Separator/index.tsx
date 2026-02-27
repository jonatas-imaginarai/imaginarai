

type separatorProps = {
    nameSeparator: string
}

const styleSeparator = 'w-full px-10 flex items-center justify-center mt-36 mb-36 text-center'
const styleCircleSeparator = 'flex font-semibold text-sm text-teal-200 h-40 w-40 items-center justify-center border rounded-full px-10 py-10 bg-zinc-700 shadow-md'
const styleLineSeparator = 'border w-[300px]'


export function Separator ( {nameSeparator}:separatorProps ) {
    return (
        <div className={styleSeparator}>
            <hr className={styleLineSeparator} />
            <p className={styleCircleSeparator}>{nameSeparator}</p>
            <hr className={styleLineSeparator} />
        </div>
    )
}