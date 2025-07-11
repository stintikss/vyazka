export const HeaderText = () => {
    return (
        <div
            style={{ fontFamily: 'Irish Grover, sans-serif' }}
            className="text-white flex flex-col gap-2 w-35"
        >
            <div
                className="text-3xl md:text-5xl w-30 md:w-40 flex flex-col"
                style={{ WebkitTextStroke: '2px black' }}
            >
                <h1 className="h-8 md:h-10">
                    BABY
                </h1>
                <h1 className="h-8 md:h-10">
                    KNIT
                </h1>
            </div>
            <div>
                <h2 className="border-b-2 border-[#FEF1F1] text-xl md:text-3xl">
                    CALC
                </h2>
            </div>
        </div>
    )
}