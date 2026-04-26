import SubpagePicker from "@/components/SubpagePicker";
import { careers } from "@/lib/pageContent";

export const metadata = {
  title: "Karjäär",
  description: "Liitu Heva tiimiga ja ehita Eesti kaubavedude tulevikku. Vaata avatud positsioone.",
  alternates: { canonical: "https://heva.me/karjaar" },
};

export default function Page() {
  return <SubpagePicker bundle={careers} />;
}
