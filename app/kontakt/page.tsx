import SubpagePicker from "@/components/SubpagePicker";
import { contact } from "@/lib/pageContent";

export const metadata = {
  title: "Kontakt",
  description: "Võta Hevaga ühendust - info@heva.me, +372 510 0017. E-R 9-18.",
  alternates: { canonical: "https://heva.me/kontakt" },
};

export default function Page() {
  return <SubpagePicker bundle={contact} />;
}
