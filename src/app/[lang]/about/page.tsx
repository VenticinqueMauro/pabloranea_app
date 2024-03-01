import Footer from "@/components/footer/Footer";
import { Lang } from "@/types/lang.type";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    return (
        <section className="h-screen space-y-10">
            <Section1 />
            <Section2 />
            <Section3 lang={lang} />
            <Section4 />
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
