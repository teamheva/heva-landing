import SubpagePicker from "@/components/SubpagePicker";
import { howItWorks } from "@/lib/pageContent";

export const metadata = {
  title: "Kuidas töötab",
  description: "Kirjelda vedu, kinnita hind, jälgi reaalajas. Heva ühendab sind kvalifitseeritud vedajaga minutitega.",
  alternates: { canonical: "https://heva.me/kuidas-tootab" },
};

export default function Page() {
  return <SubpagePicker bundle={howItWorks} />;
}
