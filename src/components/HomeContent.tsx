import CalendarFront from "@/components/calendar/CalendarFront";
import Footer from "@/components/footer/Footer";
import Popups from "@/components/pop-ups/Popups";
import Portada from "@/components/portada/Portada";
import dynamic from "next/dynamic";

const GiraEnNum = dynamic(() => import("@/components/giraennumeros/GiraEnNum"), { ssr: true });
const About = dynamic(() => import("@/components/about/About"), { ssr: true });
const Classes = dynamic(() => import("@/components/classes/Classes"), { ssr: true });
const Partners = dynamic(() => import("@/components/partners/Partners"), { ssr: true });
const Instagram = dynamic(() => import("@/components/instagram/Instagram"), { ssr: false });
const Press = dynamic(() => import("@/components/press/Press"), { ssr: true });

interface HomeContentProps {
  lang: string;
  dictionary: any;
}

export default function HomeContent({ lang, dictionary }: HomeContentProps) {
  return (
    <section className="relative z-30">
      <Portada lang={lang} />
      <Popups dictionary={dictionary} lang={lang} />
      <GiraEnNum lang={lang} />
      <CalendarFront dictionary={dictionary} lang={lang} />
      <About dictionary={dictionary} lang={lang} />
      <Classes dictionary={dictionary} />
      <Partners dictionary={dictionary} lang={lang} />
      <Instagram />
      <Press dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </section>
  );
}
