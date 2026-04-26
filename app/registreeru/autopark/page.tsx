import SubpagePicker from "@/components/SubpagePicker";
import { becomeFleet } from "@/lib/pageContent";

export const metadata = { title: "Liitu autopargiga" };

export default function Page() {
  return <SubpagePicker bundle={becomeFleet} />;
}
