import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/moustache-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("início")}>
            <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white p-1 transition-all">
              <img src={logo} alt="Moustache Drinks" className="h-full w-full object-cover rounded-full" />
            </div>
            <span className="text-2xl font-script text-white">Moustache Drinks</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Início", "Serviços", "Pacotes", "Balcões", "Sobre", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => window.open("https://wa.me/5511958053806", "_blank")}
            className="bg-[#25D366] hover:bg-[#1fb855] text-background gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
