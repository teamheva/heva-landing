import SubpagePicker from "@/components/SubpagePicker";
import { press } from "@/lib/pageContent";

export const metadata = {
  title: "Press",
  description: "Heva pressimaterjalid, logo, brändi juhend ja meediakontakt.",
  alternates: { canonical: "https://heva.me/press" },
};

export default function Page() {
  return <SubpagePicker bundle={press} />;
}
