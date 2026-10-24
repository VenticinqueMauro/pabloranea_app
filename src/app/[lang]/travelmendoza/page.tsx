import type { Metadata } from "next";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<'/[lang]/travelmendoza'>): Promise<Metadata> {
    const lang = await resolveLang(params);
    const dictionary = await getDictionary(lang);
    // Private itinerary shared by link: an embedded PDF with no indexable content.
    return { ...pageMetadata(lang, 'travelmendoza', dictionary), robots: { index: false, follow: true } };
}

export default async function Page({ params }: PageProps<'/[lang]/travelmendoza'>) {
    const lang = await resolveLang(params);
    const { title } = (await getDictionary(lang)).meta.travelmendoza;

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src='https://drive.google.com/file/d/1WEWaPM-Faz0myiSOZhrrR-v9EmkheCHs/preview'
                title={title}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
}
