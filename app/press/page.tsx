import SubpagePicker from "@/components/SubpagePicker";
import { press } from "@/lib/pageContent";

export const metadata = { title: "Press" };

export default function Page() {
  return <SubpagePicker bundle={press} />;
}
