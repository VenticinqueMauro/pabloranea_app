import CalendarFront from "@/components/CalendarFront";

export default function page() {
  return (
    <section>
      {/* PORTADA  */}
      <div className="h-[770px] bg-gray-200 flex justify-center items-center text-5xl font-bold">PORTADA</div>
      {/* CALENDAR  */}
      <CalendarFront />
    </section>
  )
}
