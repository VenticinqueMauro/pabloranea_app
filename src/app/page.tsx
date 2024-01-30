import About from "@/components/about/About";
import CalendarFront from "@/components/calendar/CalendarFront";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";

export default function page() {
  return (
    <section>
      {/* PORTADA  */}
      <Portada />
      {/* CALENDAR  */}
      <CalendarFront />
      {/* POP-UPS */}
      <Popups />
      {/* ABOUT PABLO */}
      <About />
    </section >
  )
}
