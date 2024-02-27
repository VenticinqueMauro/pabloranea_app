import dynamic from "next/dynamic";
import Link from "next/link";

const MarqueeContainer = dynamic(() => import("./MarqueeContainer"), { ssr: false });
const CardPress = dynamic(() => import("./CardPress"));

export default function Press({ dictionary, lang }: any) {

    const { badge, button } = dictionary.press;

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-24 lg:py-10 mb-10">
            {/* <div className="w-fit bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mx-auto lg:mb-5 text-xl">{badge}</div> */}
            <h2 className="text-6xl lg:text-8xl text-center font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10" style={{ lineHeight: 0.8 }}>{badge}</h2>
            <MarqueeContainer />
            <CardPress isPage={true} lang={lang} />
            <div className="flex justify-center lg:mt-10">
                <Link
                    className="inline-flex h-10 items-center justify-center border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href={`/${lang}/press`}
                >
                    {button}
                </Link>
            </div>
        </section>
    )
}
