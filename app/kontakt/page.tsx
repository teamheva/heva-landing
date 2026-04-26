import SubpagePicker from "@/components/SubpagePicker";
import { contact } from "@/lib/pageContent";

export const metadata = { title: "Kontakt" };

export default function Page() {
  return <SubpagePicker bundle={contact} />;
}
