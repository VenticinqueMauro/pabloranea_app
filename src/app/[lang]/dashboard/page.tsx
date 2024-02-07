import { Lang } from "@/types/lang.type";
import { redirect } from "next/navigation";

export default async function DashboardHome({ params: { lang } }: Lang) {

    return redirect(`/${lang}/dashboard/stays`);
}
