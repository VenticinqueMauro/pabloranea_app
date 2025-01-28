import Link from "next/link";

type Props = {
    lang: string; // Cambiado a un tipo más específico
};

export default function TradButton({ lang }: Props) {
    const newLang = lang === "es" ? "en" : "es";

    return (
        <Link
            href={`/${newLang}`}
            className="hidden lg:block absolute top-5 right-24 px-2 text-xs py-1 border-black border light z-50"
        >
            {lang === "es" ? "ES" : "EN"}
        </Link>
    );
}
