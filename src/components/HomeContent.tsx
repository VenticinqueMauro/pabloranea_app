import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Classes from "@/components/classes/Classes";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import GiraEnNum from "@/components/giraennumeros/GiraEnNum";
import Instagram from "@/components/instagram/Instagram";
import Partners from "@/components/partners/Partners";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import Press from "@/components/press/Press";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";

interface HomeContentProps {
  lang: Locale;
  dictionary: Dictionary;
}

export default function HomeContent({ lang, dictionary }: HomeContentProps) {
  return (
    <section className="relative z-30">
      <h1 className="sr-only">{dictionary.meta.home.h1}</h1>
      <Portada lang={lang} />
      <Popups dictionary={dictionary} lang={lang} />
      <GiraEnNum lang={lang} />
      <CalendarFront dictionary={dictionary} lang={lang} />
      <About dictionary={dictionary} lang={lang} />
      <Classes dictionary={dictionary} />
      <Partners dictionary={dictionary} lang={lang} />
      <Instagram lang={lang} />
      <Press dictionary={dictionary} lang={lang} />
      <Faq dictionary={dictionary} />
      <Footer dictionary={dictionary} lang={lang} />
    </section>
  );
}
