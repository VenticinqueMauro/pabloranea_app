import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { pressMap } from "@/components/press/CardPress";
import CardPressList from "@/components/press/CardPressList";
import JsonLd from "@/components/seo/JsonLd";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { pressJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<'/[lang]/press'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    return pageMetadata(lang, 'press', await getDictionary(lang));
}

export default async function page({ params }: PageProps<'/[lang]/press'>) {

    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);

    const { title } = dictionary.press.page;

    return (
        <section className="max-w-7xl mx-auto px-3 lg:px-0">
            <h1 className="text-6xl lg:text-8xl font-bold text-shadow tracking-[-4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10" style={{ lineHeight: 0.8 }}>{title}</h1>
            <CardPressList lang={lang} />
            <Footer dictionary={dictionary} lang={lang} />
            <JsonLd data={pressJsonLd(lang, dictionary, [...pressMap].sort((a, b) => b.date.getTime() - a.date.getTime()))} />
        </section>
    )
}
