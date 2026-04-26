import SubpagePicker from "@/components/SubpagePicker";
import { forSenders } from "@/lib/pageContent";

export const metadata = {
  title: "Klientidele",
  description: "Telli vedu Hevaga - näe hinda enne tellimist, jälgi reaalajas, kõik ühes platvormis. Ilma helistamata ja ilma ootamata.",
  alternates: { canonical: "https://heva.me/klientidele" },
};

export default function Page() {
  return <SubpagePicker bundle={forSenders} />;
}
