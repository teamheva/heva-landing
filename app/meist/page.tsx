import SubpagePicker from "@/components/SubpagePicker";
import { about } from "@/lib/pageContent";

export const metadata = { title: "Meist" };

export default function Page() {
  return <SubpagePicker bundle={about} />;
}
