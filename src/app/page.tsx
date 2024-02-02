import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
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
      {/* PRESS  */}
      <Press />
    </section >
  )
}
