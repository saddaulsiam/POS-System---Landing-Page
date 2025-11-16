import Benefits from "@/components/sections/Benefits";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

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
      <ContactForm />
      <Footer />
    </main>
  );
}
