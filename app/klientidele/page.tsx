import SubpagePicker from "@/components/SubpagePicker";
import { forSenders } from "@/lib/pageContent";

export const metadata = { title: "Klientidele" };

export default function Page() {
  return <SubpagePicker bundle={forSenders} />;
}
