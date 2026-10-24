import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { wineries } from "@/data/wineries";
import LazyVideo from "@/components/ui/LazyVideo";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { partnersJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";



export async function generateMetadata({ params }: PageProps<'/[lang]/partners'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    return pageMetadata(lang, 'partners', await getDictionary(lang));
}

export default async function page({ params }: PageProps<'/[lang]/partners'>) {

    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);


    return (
        <section className="h-screen max-w-7xl mx-auto px-3 lg:px-0">
            {/* One heading: the line break only applies below lg, as before. */}
            <h1 className="text-6xl lg:text-8xl font-bold text-shadow tracking-[-4px] lg:-tracking-[7px] mb-10 lg:mb-20 mt-10 leading-[0.9] lg:leading-[0.8]">
                {lang === 'es' ? "Los Vinos" : <><span className="lg:hidden">The Wine</span><span className="hidden lg:inline">TOUR’S WINE</span></>}
                <br className="lg:hidden" />{" "}
                {lang === 'es' ? "del Tour" : <><span className="lg:hidden">tour Selection</span><span className="hidden lg:inline">SELECTION</span></>}
            </h1>
            <div>
                {
                    wineries.map((bodega, i) => (
                        <div key={bodega.title} className={`${i === wineries.length - 1 ? "border-none" : "border-b-4 border-black"} flex flex-col lg:flex-row-reverse gap-6 pt-10 pb-10`}>
                            <div className="w-full space-y-2">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">{lang === 'es' ? bodega.title : bodega.titleEn}</p>
                                <p className="text-gray-500">{lang === 'es' ? bodega.description : bodega.descriptionEn}</p>
                            </div>
                            <div className="w-full min-h-full">
                                {/* Former GIFs, now ~95% lighter as muted looping MP4s. multiply hides the
                                    video's off-white background against the page. */}
                                <LazyVideo
                                    src={bodega.videoUrl}
                                    poster={bodega.videoUrl.replace('.mp4', '-poster.webp')}
                                    aria-label={lang === 'es' ? bodega.title : bodega.titleEn}
                                    width={720}
                                    height={480}
                                    className="w-[520px] max-w-full h-auto mix-blend-multiply"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer dictionary={dictionary} lang={lang} />
            <JsonLd data={partnersJsonLd(lang, dictionary, wineries.map((b) => (lang === 'es' ? b.title : b.titleEn)))} />
        </section>
    )
}
