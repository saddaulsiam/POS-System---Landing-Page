import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Navbar from "@/components/ui/Navbar";
import Pricing from "@/components/sections/Pricing";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Industries />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
