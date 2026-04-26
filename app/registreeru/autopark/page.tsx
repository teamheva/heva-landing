import SubpagePicker from "@/components/SubpagePicker";
import { becomeFleet } from "@/lib/pageContent";

export const metadata = {
  title: "Liitu autopargiga",
  description: "Liida oma autopark Heva platvormiga - rohkem tellimusi, vähem haldust, läbipaistev arveldus.",
  alternates: { canonical: "https://heva.me/registreeru/autopark" },
};

export default function Page() {
  return <SubpagePicker bundle={becomeFleet} />;
}
