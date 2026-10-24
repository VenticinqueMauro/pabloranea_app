import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { aboutJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export async function generateMetadata({ params }: PageProps<'/[lang]/about'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    return pageMetadata(lang, 'about', await getDictionary(lang));
}

export default async function page({ params }: PageProps<'/[lang]/about'>) {

    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);

    return (
        <section className="h-screen space-y-10">
            <h1 className="sr-only">{dictionary.meta.about.h1}</h1>
            <Section1 />
            <Section2 dictionary={dictionary} />
            <Section3 dictionary={dictionary} lang={lang} />
            <Section4 dictionary={dictionary} />
            <Footer dictionary={dictionary} lang={lang} />
            <JsonLd data={aboutJsonLd(lang, dictionary)} />
        </section>
    )
}
