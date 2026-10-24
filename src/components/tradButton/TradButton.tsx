import Link from "next/link";
import { switchLocalePath, type Locale } from "@/lib/locales";

type Props = {
    lang: Locale;
    pathname: string;
};

// Shows the current language; clicking switches to the same page in the other one.
export default function TradButton({ lang, pathname }: Props) {
    const newLang = lang === "es" ? "en" : "es";

    return (
        <Link
            href={switchLocalePath(pathname, newLang)}
            hrefLang={newLang}
            aria-label={newLang === "es" ? "Ver en español" : "View in English"}
            className="hidden lg:block absolute top-5 right-24 px-2 text-xs py-1 border-black border light z-50"
        >
            {lang === "es" ? "ES" : "EN"}
        </Link>
    );
}
