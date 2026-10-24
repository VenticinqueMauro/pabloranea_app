import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<'/[lang]/privacy'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    return pageMetadata(lang, 'privacy', await getDictionary(lang));
}

export default async function page({ params }: PageProps<'/[lang]/privacy'>) {

    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);
    const { title, updated, sections } = dictionary.privacy;

    return (
        <section className="max-w-7xl mx-auto px-3 lg:px-0">
            <h1 className="text-6xl lg:text-8xl font-bold text-shadow tracking-[-4px] lg:-tracking-[8px] mb-6 mt-10" style={{ lineHeight: 0.9 }}>{title}</h1>
            <p className="text-sm text-gray-500 mb-10 lg:mb-16">{updated}</p>
            <div className="border-t-4 border-black">
                {sections.map(({ h, p }) => (
                    <div key={h} className="flex flex-col lg:flex-row gap-3 lg:gap-10 py-8 border-b border-black">
                        <h2 className="uppercase text-xl lg:text-2xl font-bold w-full lg:w-1/3">{h}</h2>
                        <p className="light text-base lg:text-lg w-full lg:w-2/3" style={{ lineHeight: 1.4 }}>{p}</p>
                    </div>
                ))}
            </div>
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
