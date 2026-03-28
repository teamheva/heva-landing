import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ForSenders from "@/components/ForSenders";
import ForDrivers from "@/components/ForDrivers";
import AppDownload from "@/components/AppDownload";

export default function Home() {
  return (
    <main>
      <div className="page-light-sections">
        <Hero />
        <HowItWorks />
        <Features />
        <ForSenders />
      </div>
      <ForDrivers />
      <AppDownload />
    </main>
  );
}
