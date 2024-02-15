import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Classes from "@/components/classes/Classes";
import Footer from "@/components/footer/Footer";
import GiraEnNum from "@/components/giraennumeros/GiraEnNum";
import { Instagram } from "@/components/instagram/Instagram";
import Partners from "@/components/partners/Partners";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import Press from "@/components/press/Press";
import TradButton from "@/components/tradButton/TradButton";
import { Lang } from "@/types/lang.type";


async function HomePage({ params: { lang } }: Lang) {

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <section className="relative z-30">
      <TradButton lang={lang} />
      {/* PORTADA  */}
      <Portada />
      {/* POP-UPS */}
      <Popups dictionary={dictionary} />
      {/* GIRA EN NUMEROS  */}
      <GiraEnNum />
      {/* CALENDAR  */}
      <CalendarFront dictionary={dictionary} lang={lang} />
      {/* ABOUT PABLO */}
      <About dictionary={dictionary} />
      {/* CLASSES  */}
      <Classes dictionary={dictionary} />
      {/* PARTNERS */}
      <Partners dictionary={dictionary} />
      {/* INSTAGRAM  */}
      <Instagram />
      {/* PRESS  */}
      <Press dictionary={dictionary} lang={lang} />
      {/* FOOTER */}
      <Footer />
    </section >
  )
}

export default HomePage;
