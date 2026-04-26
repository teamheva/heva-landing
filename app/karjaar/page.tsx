import SubpagePicker from "@/components/SubpagePicker";
import { careers } from "@/lib/pageContent";

export const metadata = { title: "Karjäär" };

export default function Page() {
  return <SubpagePicker bundle={careers} />;
}
