import dynamic from "next/dynamic";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";


const Section5 = dynamic(() => import("./components/Section5"), { ssr: false });

export default function page() {
    return (
        <section className="h-screen">
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </section>
    )
}
