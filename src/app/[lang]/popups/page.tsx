import dynamic from "next/dynamic";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import { Lang } from "@/types/lang.type";
import Footer from "@/components/footer/Footer";


const Section5 = dynamic(() => import("./components/Section5"), { ssr: false });

export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    return (
        <section className="h-screen">
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
