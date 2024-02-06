import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import Press from "@/components/press/Press";
import TradButton from "@/components/tradButton/TradButton";
import { Lang } from "@/types/lang.type";


async function HomePage({ params: { lang } }: Lang) {

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <section className="relative">
      <TradButton lang={lang} />
      {/* PORTADA  */}
      <Portada />
      {/* POP-UPS */}
      <Popups dictionary={dictionary} />
      {/* CALENDAR  */}
      <CalendarFront dictionary={dictionary} />
      {/* ABOUT PABLO */}
      <About dictionary={dictionary} />
      {/* PARTNERS */}
      <Partners dictionary={dictionary} />
      {/* PRESS  */}
      <Press />
      {/* FOOTER */}
      <Footer />
    </section >
  )
}

export default HomePage;
