import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Quiz } from "@/components/Quiz";
import { Events } from "@/components/Events";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryContext";

export default function Home() {
  return (
    <EnquiryProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Quiz />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
