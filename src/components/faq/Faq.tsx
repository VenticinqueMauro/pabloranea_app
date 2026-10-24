import { Plus } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

// Native <details>: keyboard accessible, no JS. The answers are always in the
// HTML, so search engines and AI crawlers read them even when collapsed.
export default function Faq({ dictionary }: { dictionary: Dictionary }) {
    const { title, items } = dictionary.faq;

    return (
        <section id="faq" className="max-w-7xl mx-auto px-3 lg:px-0 py-12 lg:py-20">
            <h2 className="text-5xl lg:text-8xl text-center font-bold text-shadow tracking-[-4px] lg:-tracking-[8px] mb-10 lg:mb-20" style={{ lineHeight: 0.9 }}>
                {title}
            </h2>
            <div className="border-t-4 border-black">
                {items.map(({ q, a }) => (
                    <details key={q} name="faq" className="group border-b border-black">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl lg:text-3xl font-bold [&::-webkit-details-marker]:hidden">
                            {q}
                            <Plus aria-hidden className="size-6 lg:size-8 shrink-0 transition-transform duration-300 group-open:rotate-45" />
                        </summary>
                        <p className="light pb-8 max-w-4xl text-base lg:text-lg text-gray-600" style={{ lineHeight: 1.4 }}>{a}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}
