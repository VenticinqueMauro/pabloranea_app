import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { popupJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

export async function generateMetadata({ params }: PageProps<'/[lang]/popup'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    return pageMetadata(lang, 'popup', await getDictionary(lang));
}

export default async function page({ params }: PageProps<'/[lang]/popup'>) {

    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);

    return (
        <section className="h-screen">
            <h1 className="sr-only">{dictionary.meta.popup.h1}</h1>
            <Section1 />
            <Section2 dictionary={dictionary} />
            <Section3 dictionary={dictionary} />
            <Section4 lang={lang} />
            <Section5 lang={lang} />
            <Footer dictionary={dictionary} lang={lang} />
            <JsonLd data={popupJsonLd(lang, dictionary)} />
        </section>
    )
}
