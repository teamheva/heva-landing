import SubpagePicker from "@/components/SubpagePicker";
import { blog } from "@/lib/pageContent";

export const metadata = { title: "Blogi" };

export default function Page() {
  return <SubpagePicker bundle={blog} />;
}
