import SubpagePicker from "@/components/SubpagePicker";
import { forCouriers } from "@/lib/pageContent";

export const metadata = {
  title: "Kulleritele",
  description: "Sõida Heva kullerina oma tingimustel. Iganädalased väljamaksed, läbipaistev komisjon, ei mingeid miinimumtunde.",
  alternates: { canonical: "https://heva.me/kulleritele" },
};

export default function Page() {
  return <SubpagePicker bundle={forCouriers} />;
}
