import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Volunteering from "@/components/sections/Volunteering";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Skills />
        <Volunteering />
        {/*<SMBServices />*/}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
