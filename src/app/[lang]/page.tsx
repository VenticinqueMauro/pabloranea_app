import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getDictionary, resolveLang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const lang = await resolveLang(params);
  return pageMetadata(lang, 'home', await getDictionary(lang));
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const lang = await resolveLang(params);
  const dictionary = await getDictionary(lang);

  return <HomeContent lang={lang} dictionary={dictionary} />;
}
