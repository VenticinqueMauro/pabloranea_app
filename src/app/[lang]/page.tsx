import Portada from "@/components/portada/Portada";
import Popups from "@/components/pop-ups/Popups";
import Footer from "@/components/footer/Footer";
import TradButton from "@/components/tradButton/TradButton";
import { Lang } from "@/types/lang.type";
import dynamic from "next/dynamic";
import CalendarFront from "@/components/calendar/CalendarFront";

const GiraEnNum = dynamic(() => import("@/components/giraennumeros/GiraEnNum"));
const About = dynamic(() => import("@/components/about/About"));
const Classes = dynamic(() => import("@/components/classes/Classes"));
const Partners = dynamic(() => import("@/components/partners/Partners"));
const Instagram = dynamic(() => import("@/components/instagram/Instagram"), { ssr: false });
const Press = dynamic(() => import("@/components/press/Press"));

async function HomePage({ params: { lang } }: Lang) {

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <section className="relative z-30">
      <TradButton lang={lang} />
      <Portada />
      <Popups dictionary={dictionary} lang={lang} />
      <GiraEnNum />
      <CalendarFront dictionary={dictionary} lang={lang} />
      <About dictionary={dictionary} lang={lang} />
      <Classes dictionary={dictionary} />
      <Partners dictionary={dictionary} lang={lang} />
      <Instagram />
      <Press dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </section >
  )
}

export default HomePage;
