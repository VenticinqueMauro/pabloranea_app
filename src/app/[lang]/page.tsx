import HomeContent from "@/components/HomeContent";
import { Lang } from "@/types/lang.type";

export default async function HomePage({ params: { lang } }: Lang) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default);

  return <HomeContent lang={lang} dictionary={dictionary} />;
}
