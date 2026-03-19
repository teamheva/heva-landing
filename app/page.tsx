import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ForSenders from "@/components/ForSenders";
import ForDrivers from "@/components/ForDrivers";
import AppDownload from "@/components/AppDownload";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ForSenders />
        <ForDrivers />
        <AppDownload />
        <Testimonials />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
