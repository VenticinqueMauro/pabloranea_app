
export default function About() {
    return (
        <section className="h-screen flex flex-col justify-center scroll-reveal mt-10 bg-black text-white lg:pt-20">
            <h2 className="text-9xl font-bold text-center -tracking-[16px] letterScroll">QUIÉN ES PABLO</h2>
            <div className="px-6 lg:px-0 text-justify pt-10 pb-5 lg:py-10 max-w-7xl mx-auto">
                <p className="font-bold text-xl lg:text-2xl h-full">
                    <span>
                        A lo largo de estos años, Pablo Ranea ha sabido construir un nombre propio en la gastronomía no sólo en Argentina sino también en el exterior. New York, San Francisco, Houston, y Denver en USA; como tambien Perú, Canadá, y Hong Kong son algunas de las regiones donde supo plantar bandera creando una comunidad foodie fiel de comensales aventureros que siempre están atentos a todas las novedades sobre vinos argentinos y deleitar sus sentidos con sus fabulosos platos.
                    </span>
                </p>
            </div>
            <div className="h-full bg-gray-200 flex justify-center items-center text-5xl font-bold fade">IMAGEN</div>
        </section>
    )
}
