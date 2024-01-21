import { redirect } from "next/navigation";

export default async function DashboardHome() {

    return redirect('/dashboard/stays');
}
