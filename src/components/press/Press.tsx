import dynamic from "next/dynamic";
import Link from "next/link";

const MarqueeContainer = dynamic(() => import("./MarqueeContainer"), { ssr: false });
const CardPress = dynamic(() => import("./CardPress"), { ssr: false });


export default function Press({ dictionary }: any) {

    const { badge, title, subtitle, button } = dictionary.press;

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-24 lg:py-10 mb-10">
            <MarqueeContainer />
            <div className="w-fit bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mx-auto">{badge}</div>

            <div className="flex gap-6 pt-10 mb-10">
                <div className="w-full">
                    <p className="text-4xl font-bold">Pablo Ranea: &apos;Ninguna capital del vino tiene la cocina de Mendoza&apos;</p>
                    <p className="text-gray-500">mdzonline.es</p>
                    <p className="text-sm">Enero, 2024</p>
                </div>
                <div className="w-full bg-gray-400 h-40">
                </div>
            </div>
            <div className="flex gap-6 pt-10 border-t-4 border-black">
                <div className="w-full">
                    <p className="text-4xl font-bold">Pablo Ranea: el chef que lleva la grastronomía mendocina a lugares emblemáticos del mundo</p>
                    <p className="text-gray-500">diariouno.com</p>
                    <p className="text-sm">Enero, 2024</p>
                </div>
                <div className="w-full bg-gray-400 h-40">
                </div>
            </div>
            {/* <div className="container grid gap-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block  bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{badge}</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 ">
                    <CardPress />
                    <CardPress />
                    <CardPress />
                </div>
                <div className="flex justify-center">
                    <Link
                        className="inline-flex h-10 items-center justify-center border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                        href="#"
                    >
                        {button}
                    </Link>
                </div>
            </div> */}
        </section>
    )
}
