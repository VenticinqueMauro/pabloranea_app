
export default function Section5() {
    return (
        <div className="bg-background text-foreground dark px-20 pt-16 pb-20 min-h-screen">
            <div className="flex items-center gap-10">
                <div className="relative w-full flex flex-col justify-between items-start h-screen">
                    <div className="relative">
                        <h2 className="text-[250px] font-medium">40</h2>
                        <h3 className="uppercase absolute bottom-8 text-xl left-10">ciudades recorridas</h3>
                    </div>
                    <div className="grid grid-cols-2 max-w-md">
                        <div className="col-span-2 flex items-center gap-5 min-w-full">
                            <p className="text-7xl text-white w-[50%] text-end">4</p>
                            <p className="uppercase w-[50%] text-start">paises</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-5 min-w-full">
                            <p className="text-7xl text-white w-full text-end">1500</p>
                            <p className="uppercase w-full text-start">comensales</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-5 min-w-full">
                            <p className="text-7xl text-white w-full text-end">50</p>
                            <p className="uppercase w-full text-start">litros de chimichurri</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-5 min-w-full">
                            <p className="text-7xl text-white w-full text-end">180</p>
                            <p className="uppercase w-full text-start">kilos de dulce de leche</p>
                        </div>
                        <div className="col-span-2 flex items-center gap-5 min-w-full">
                            <p className="text-7xl text-white w-full text-end">1400</p>
                            <p className="uppercase w-full text-start">botellas de vino</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between min-h-full gap-40">
                    <div className="bg-gray-400 h-[700px] w-full block"></div>
                    <div className="flex items-center gap-5 justify-start w-fit">
                        <p className="text-7xl text-white">60</p>
                        <p className="uppercase max-w-sm">60 pop up dinners al año con 16 a 25 comensales promedio por encuentro.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
