import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Counters from "@/components/Counters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Menu />
      <Events />
      <Differentials />
      <Gallery />
      <About />
      <Packages />
      <Counters />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
