import Footer from "@/components/footer/Footer";
import CardPress from "@/components/press/CardPress";
import { Lang } from "@/types/lang.type";

export default async function page({ params: { lang } }: Lang) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    const { title } = dictionary.pages.press;

    return (
        <section className="max-w-7xl mx-auto px-3 lg:px-0">
            <h2 className="text-6xl lg:text-8xl font-bold text-shadow -tracking-[4px] lg:-tracking-[8px] mb-10 lg:mb-20 mt-10" style={{ lineHeight: 0.8 }}>{title}</h2>
            <CardPress isPage={false} lang={lang} />
            <Footer dictionary={dictionary} lang={lang} />
        </section>
    )
}
