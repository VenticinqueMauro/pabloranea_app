import { Image } from "@nextui-org/react";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

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
