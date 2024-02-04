import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import Press from "@/components/press/Press";

export default function page() {
  return (
    <section >
      {/* PORTADA  */}
      <Portada />
      {/* POP-UPS */}
      <Popups />
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
