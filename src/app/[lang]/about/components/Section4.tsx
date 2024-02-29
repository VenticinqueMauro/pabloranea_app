import { Image } from "@nextui-org/react";

export default function Section4() {
    return (
        <div className="bg-background text-foreground light px-3 lg:px-20">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
                <Image radius="none" className="object-contain " src="/aboutpablo/1.jpg" alt="test2" />
                <Image radius="none" className="object-cover " src="/aboutpablo/2.jpg" alt="test2" />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between py-20 gap-10">
                <h2 className="uppercase text-2xl font-bold w-full col-span-12 lg:col-span-6">EMBAJADOR DEL VINO ARGENTINO</h2>
                <div className="w-full space-y-10">
                    <h3 className="text-base lg:text-lg text-justify" style={{ lineHeight: 1.2 }}>
                        Reconocidas bodegas de Mendoza como <b>El Enemigo, Catena
                            Zapata, Susana Balbo, Trivento, Rutini, Nieto Senetiner,
                            Achaval Ferrer, AWI Wines</b> así como también <b>Colomé</b> de Salta,
                        <b>Otronia</b> de la Patagonia Argentina confían en <b>Ranea</b> como
                        comunicador y embajador para presentar sus más exclusivas
                        etiquetas en sus cenas nómades en el extranjero y de esta
                        manera, llegar a nuevos consumidores.
                    </h3>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10">
                <Image radius="none" className="object-cover " src="/aboutpablo/3.jpg" alt="test2" />
                <Image radius="none" className="object-cover " src="/aboutpablo/4.jpg" alt="test2" />
            </div>
            <div className="flex flex-col lg:flex-row py-10 lg:py-20 lg:justify-between gap-5 lg:gap-10 w-full">
                <div className="uppercase font-extrabold text-xl lg:text-2xl w-full" style={{ lineHeight: 1.2 }}>
                    <p>new york</p>
                    <p>san francisco</p>
                    <p>houston</p>
                    <p>denver</p>
                    <p>lima</p>
                    <p>canadá</p>
                    <p>hong kong</p>
                </div>
                <h2 className="text-base lg:text-lg  text-justify w-full">
                    A lo largo de estos años, Pablo Ranea ha sabido construir un nombre propio en la gastronomía no
                    sólo en Argentina sino también en el exterior. New York, San Francisco, Houston, y Denver en USA;
                    como tambien Perú, Canadá, y Hong Kong son algunas de las regiones donde plantó bandera
                    creando una comunidad foodie fiel de comensales aventureros que siempre están atentos a todas
                    las novedades sobre vinos argentinos y deleitar sus sentidos con sus fabulosos platos.
                </h2>
            </div>
        </div>
    )
}
