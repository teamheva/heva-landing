import SubpagePicker from "@/components/SubpagePicker";
import { blog } from "@/lib/pageContent";

export const metadata = {
  title: "Blogi",
  description: "Heva blogi - uudised, näpunäited ja lood Eesti kaubavedude maailmast.",
  alternates: { canonical: "https://heva.me/blogi" },
};

export default function Page() {
  return <SubpagePicker bundle={blog} />;
}
