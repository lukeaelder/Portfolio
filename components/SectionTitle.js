const SectionTitle = ({title}) => {
    return (
        <div className="mb-14 w-full relative grid place-items-center grid-flow-col place-content-center font-silka text-3xl py-6 gap-6 z-10">
            <div className="rounded relative">
                <div className="absolute w-full h-full bg-neutral-900 top-0 rounded will-change-transform" data-speed="1.2" data-lag="0.1"></div>
                <h3 className="section-title whitespace-nowrap font-[500] text-neutral-100 py-3 px-5 rounded bg-neutral-900 will-change-transform" data-speed="1.2">{title}</h3>
            </div>
        </div>
    )
}

export default SectionTitle;