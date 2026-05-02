// Middleware redirects all traffic to /[locale]. This file is unreachable in practice.
import { redirect } from "next/navigation";
export default function RootPage() {
  redirect("/en");
}
