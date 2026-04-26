import SubpagePicker from "@/components/SubpagePicker";
import { about } from "@/lib/pageContent";

export const metadata = {
  title: "Meist",
  description: "Heva muudab kaubaveod kiireks ja läbipaistvaks - nagu takso, aga kaubale. Eesti tehtud, Eestis kasvatatud.",
  alternates: { canonical: "https://heva.me/meist" },
};

export default function Page() {
  return <SubpagePicker bundle={about} />;
}
