import dynamic from "next/dynamic";
import Link from "next/link";

const MarqueeContainer = dynamic(() => import("./MarqueeContainer"), { ssr: false });
const CardPress = dynamic(() => import("./CardPress"));

export default function Press({ dictionary }: any) {

    const { badge, button } = dictionary.press;

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-24 lg:py-10 mb-10">
            <MarqueeContainer />
            <div className="w-fit bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mx-auto lg:mb-5">{badge}</div>
            <CardPress />
            <div className="flex justify-center lg:mt-10">
                <Link
                    className="inline-flex h-10 items-center justify-center border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#"
                >
                    {button}
                </Link>
            </div>
        </section>
    )
}
