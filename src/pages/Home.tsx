import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <ScrollProgress />
      <BackToTop />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <Services />
      <Marquee />
      <Process />
      <Stats />
      <Timeline />
      <Testimonials />
      <Marquee />
      <Contact />
      <Footer />
    </main>
  );
}
