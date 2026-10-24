import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import JsonLd from "@/components/seo/JsonLd";
import { stays } from "@/data/calendar";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { homeJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const lang = await resolveLang(params);
  return pageMetadata(lang, 'home', await getDictionary(lang));
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const lang = await resolveLang(params);
  const dictionary = await getDictionary(lang);

  const events = homeJsonLd(lang, dictionary, stays);

  return (
    <>
      <HomeContent lang={lang} dictionary={dictionary} />
      {events && <JsonLd data={events} />}
    </>
  );
}
