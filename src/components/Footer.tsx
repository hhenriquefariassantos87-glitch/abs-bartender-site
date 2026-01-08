import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/wkdrinks-logo.jpeg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = ["Início", "Serviços", "Pacotes", "Balcões", "Sobre", "Contato"];
  const services = ["Bartenders Profissionais", "Estrutura Completa", "Drinks Exclusivos"];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white p-0.5">
                <img src={logo} alt="Moustache Drinks" className="h-full w-full object-cover rounded-full" />
              </div>
              <span className="text-xl font-script text-white">Moustache Drinks</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transformando eventos em experiências inesquecíveis há mais de 10 anos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-accent hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-accent hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>(11) 98284-4587</li>
              <li>contato@moustachedrinks.com.br</li>
              <li>São Paulo, SP</li>
              <li className="text-sm">Seg-Sex: 9h-18h | Sáb: 9h-14h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Moustache Drinks. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
