import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";
import Testimonials from "@/components/pages/testimonials";
import Services from "@/components/pages/services";
import CaseStudy from "@/components/pages/casestudy";

export default function Home() {
  return (
    <>
      <Hero />
      {/* This div gives the rest of the page a solid background,
            creating the parallax effect as it scrolls over the fixed Vanta canvas. */}
      <div className="relative z-100 bg-background">
        <AboutMe />
        <History />
        <Projects />
        <CaseStudy/>
        <Testimonials/>
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
