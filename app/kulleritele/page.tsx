import SubpagePicker from "@/components/SubpagePicker";
import { forCouriers } from "@/lib/pageContent";

export const metadata = { title: "Kulleritele" };

export default function Page() {
  return <SubpagePicker bundle={forCouriers} />;
}
