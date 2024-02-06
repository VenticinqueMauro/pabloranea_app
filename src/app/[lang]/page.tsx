import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import Press from "@/components/press/Press";
import Link from "next/link";

type Props = {
  params: {
    lang: 'es' | 'en'
  }
}

async function HomePage({ params: { lang } }: Props) {

  const dictionary = await import(`@/app/dictionaries/${lang}`).then(m => m.default)

  return (
    <section className="relative">
      <Link
        href={`/${lang === 'es' ? 'en' : 'es'}`}
        className='absolute -top-32 right-20 px-2 text-sm py-1 z-50 border-black border'
      >{lang === 'es' ? 'EN' : 'ES'}</Link>
      {/* PORTADA  */}
      <Portada />
      {/* POP-UPS */}
      <Popups dictionary={dictionary} />
      {/* CALENDAR  */}
      <CalendarFront />
      {/* ABOUT PABLO */}
      <About />
      {/* PARTNERS */}
      <Partners />
      {/* PRESS  */}
      <Press />
      {/* FOOTER */}
      <Footer />
    </section >
  )
}

export default HomePage;
