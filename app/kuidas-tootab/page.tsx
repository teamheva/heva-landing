import SubpagePicker from "@/components/SubpagePicker";
import { howItWorks } from "@/lib/pageContent";

export const metadata = { title: "Kuidas töötab" };

export default function Page() {
  return <SubpagePicker bundle={howItWorks} />;
}
